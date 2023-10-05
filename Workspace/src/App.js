import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login';
import StudyCase from './studyCase';
import HomePage from './mainPage';
import StudyDetail from './studyDetail';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studyCase" element={<StudyCase />} />
        <Route path="/studyCase/*" element={<StudyDetail />} />
        <Route></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
