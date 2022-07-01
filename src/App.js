
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';
import AddTask from './components/DashBoard/Upload/AddTask';
import Overview from './components/DashBoard/Overview/Overview';
import Incomplete from './components/DashBoard/Incomplete/Incomplete';
import Completed from './components/DashBoard/Completed/Completed';
import ManageTask from './components/DashBoard/ManageTask/ManageTask';
import Calendar from './components/DashBoard/Calendar/Calendar';
function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<DashBoard />} >
          <Route index  element={
            <Overview></Overview>
          }></Route>
          <Route path='add-tasks' element={
            <AddTask></AddTask>
          }></Route>
          <Route path='incomplete-tasks' element={
            <Incomplete></Incomplete>
          }></Route>
          <Route path='completed-tasks' element={
            <Completed></Completed>
          }></Route>
          <Route path='manage-tasks' element={
            <ManageTask></ManageTask>
          }></Route>
          <Route path='calender' element={
            <Calendar></Calendar>
          }></Route> 
        </Route>
      </Routes>
    </>
  );
}

export default App;
