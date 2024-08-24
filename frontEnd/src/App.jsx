
import Signup from './components/Signup';
import Course from './pages/Course';
import Home from './pages/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/UserContextProvider';


function App() {
  const [authuser,setauth]=useAuth()

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authuser?<Course />:<Navigate to="/Signup"/>} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>


    </>
  );
}

export default App;
