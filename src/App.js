
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import DashBoard from './components/DashBoard/DashBoard';
import ManageServices from './components/DashBoard/ManageServices/ManageServices';
import ToDo from './components/DashBoard/Upload/ToDo';
function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<DashBoard />} >
          <Route index path='/overview' element={
            <ManageServices></ManageServices>
          }></Route>
          <Route path='/upload/to-do' element={
            <ToDo></ToDo>
          }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
