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
import {useState } from 'react';
import ChangePass from '../components/ChangePass';
import Footer from '../components/Footer';
import Home from "../components/Home";
import Sport from "../components/Sport";
import Play from '../components/Play';
import Song from '../components/Song';
import LayoffMusic from '../components/LayoffMusic';
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';

function App() {
  const Loading = useSelector((state) => state.music.Loading);
  const [number, setNumber] = useState(sessionStorage.getItem("accessToken") ? 2 : 0);
  const checkNumberRES = (Children) => {
    setNumber(Children)
  }
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
              <Route path="/song" element={<Song />} exact/>
              <Route path="/song/:id" element={<LayoffMusic />}/>
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
      {Loading && <ReactAudioPlayer
      src={Loading.audio}
      autoPlay
      controls
      style={{display: "none"}}
      />}
    </div>
  );
}

export default App;
