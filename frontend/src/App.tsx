import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import HeroPage from './pages/Heropage';
import Home from './pages/Home';
import Job from './pages/Job';
import JobIndividual from './pages/jobIndividual';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/job" element={<Job />} />
        <Route path="/job/:id" element={<JobIndividual/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
