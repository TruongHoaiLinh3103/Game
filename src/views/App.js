import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/app.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import NotPage from '../components/NotPage';
import Register from '../components/Register';
import Sliederlab from '../layouts/Sliederlab';
import { useEffect, useRef, useState } from 'react';
import ChangePass from '../components/ChangePass';
import Footer from '../components/Footer';
import Home from "../components/Home";
import Sport from "../components/Sport";
import Play from '../components/Play';
import Song from '../components/Song';
import { KALIMBA } from '../story/KALIMBA';

function App() {
  const [number, setNumber] = useState(sessionStorage.getItem("accessToken") ? 2 : 0);
  const audioElem = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [active, setActive] = useState(0)
  const [music, setMusic] = useState([]);
  const onPlaying  = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    // Tìm Max
    let s = duration%60;
    let m = Math.floor((duration/60)%60);
    // Tìm Min
    let si = ct%60;
    let mi = Math.floor((ct/60)%60);

    const maxDuration = `${(Math.floor(m) ? (Math.floor(m) < 10 ? `${"0" + Math.floor(m)}` : Math.floor(m)) : "00")}:${Math.floor(s) ? (Math.floor(s) < 10 ? `${"0" + Math.floor(s)}` : Math.floor(s)) : "00"}`;
    const minDuration = `${(Math.floor(mi) ? (Math.floor(mi) < 10 ? `${"0" + Math.floor(mi)}` : Math.floor(mi)) : "00")}:${Math.floor(si) ? (Math.floor(si) < 10 ? `${"0" + Math.floor(si)}` : Math.floor(si)) : "00"}`;
    setMusic({...music, "progress": ct / duration * 100, length: duration, "max": maxDuration, "min": minDuration})
  }
  const selectMusic = (Children) => {
    setMusic(Children)
  }

  const checkNumberRES = (Children) => {
    setNumber(Children)
  }

  useEffect(() => {
    if(isPlaying){
      audioElem.current.play();
    }else{
      audioElem.current.pause();
    }
  }, [isPlaying])
  return (
    <div className='App'>
      <Router>
        {number === 0 && 
          <Login checkNumber={checkNumberRES}/>
        }
        {number === 1 && 
          <Register checkNumber={checkNumberRES}/>
        }
        {number === 2 &&
          <>
            <Navbar checkNumber={checkNumberRES}/>
            <Routes>
              <Route path="/" element={<Sliederlab />} />
              <Route path="/sport" element={<Home />} exact/>
              <Route path="/sport/cordage" element={<Sport />} />
              <Route path="/sport/kungfu" element={<Sport />} />
              <Route path="/play" element={<Play />} exact/>
              <Route path="/song" element={<Song data={KALIMBA} 
              isPlaying={isPlaying} setIsPlaying={setIsPlaying} 
              selectMusic={selectMusic} 
              MusicTitle={music}
              setMusicTitle={setMusic}
              audioElem={audioElem}
              setActive={setActive}
              active={active}
              />} exact/>
              <Route path="*" element={<NotPage />}/>
            </Routes>
            <Footer/>
          </>
        }
        {number === 3 && 
          <ChangePass checkNumber={checkNumberRES}/>
        }
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {music && <audio onTimeUpdate={onPlaying}
      src={music.audio}
      loop = {active === 2 ? true : false}
      autoPlay
      controls
      style={{display: "none"}}
      ref={audioElem}
      />}
    </div>
  );
}

export default App;
