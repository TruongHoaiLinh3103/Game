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
import {useEffect, useLayoutEffect, useRef, useState } from 'react';
import ChangePass from '../components/ChangePass';
import Footer from '../components/Footer';
import Home from "../components/Home";
import Sport from "../components/Sport";
import Play from '../components/Play';
import Song from '../components/Song';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState(sessionStorage.getItem("accessToken") ? 2 : 0);

  const audioElem = useRef();
  const [data, setData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [music, setMusic] = useState([]);
  const onPlaying  = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
  }
  const selectMusic = (Children) => {
    setMusic(Children)
  }

  const checkNumberRES = (Children) => {
    setNumber(Children)
  }
  useLayoutEffect(() => {
    axios.get("https://fake-api-music.vercel.app/music").then((res) => {
        res && setData(res.data)
    })
  })
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
              <Route path="/song" element={<Song data={data} isPlaying={isPlaying} setIsPlaying={setIsPlaying} onTimeUpdate={onPlaying} selectMusic={selectMusic} MusicTitle={music}/>} exact/>
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
      autoPlay
      controls
      style={{display: "none"}}
      ref={audioElem}
      />}
    </div>
  );
}

export default App;
