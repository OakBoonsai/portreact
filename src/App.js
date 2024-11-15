import './App.css';
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import { Route,Routes } from 'react-router-dom';
import Resume from './routes/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
