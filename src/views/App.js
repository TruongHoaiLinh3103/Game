import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/app.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar';
import Game from '../components/Game';
import Update from '../components/Update';
import Login from '../components/Login';
import NotPage from '../components/NotPage';
import Id from '../components/Id';
import Register from '../components/Register';
import Sliederlab from '../layouts/Sliederlab';
import {useState } from 'react';
import Profile from '../components/Profile';
import ChangePass from '../components/ChangePass';

function App() {
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
              <Route path="/genshin" element={<Game />} />
              <Route path="/aov" element={<Game />} />
              <Route path="/product/:id" element={<Id />} />
              <Route path="/update" element={<Update />}/>
              <Route path="/profile" element={<Profile />}/>
              <Route path="*" element={<NotPage />}/>
            </Routes>
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
    </div>
  );
}

export default App;
