import { Routes, Route } from 'react-router-dom';
import MainPage from './components/main-page/MainPaig';
import './App.scss'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App;