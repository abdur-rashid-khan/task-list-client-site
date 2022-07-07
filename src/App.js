
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';
import AddTask from './components/DashBoard/Upload/AddTask';
import Overview from './components/DashBoard/Overview/Overview';
import Incomplete from './components/DashBoard/Incomplete/Incomplete';
import Completed from './components/DashBoard/Completed/Completed';
import ManageTask from './components/DashBoard/ManageTask/ManageTask';
import Calendar from './components/DashBoard/Calendar/Calendar';
import RequireAuth from './components/Auth/RequireAuth';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/CreateAccout/NewAccount';
import Update from './components/DashBoard/Update/Update';
function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<DashBoard />} >
          <Route index element={
            <RequireAuth><Overview></Overview></RequireAuth>

          }></Route>
          <Route path='add-tasks' element={
            <RequireAuth><AddTask></AddTask></RequireAuth>
          }></Route>
          <Route path='incomplete-tasks' element={
            <RequireAuth><Incomplete></Incomplete></RequireAuth>

          }></Route>
          <Route path='completed-tasks' element={
            <RequireAuth><Completed></Completed></RequireAuth>

          }></Route>
          <Route path='manage-tasks' element={
            <RequireAuth><ManageTask></ManageTask></RequireAuth>
          }></Route>
          <Route path='calender' element={
            <RequireAuth><Calendar></Calendar></RequireAuth>
          }></Route>
          <Route path='/update/:id' element={
            <RequireAuth><Update></Update></RequireAuth>
          }></Route>
        </Route>
        <Route path='/login' element={
          <Login></Login>
        }></Route>
        <Route path='/signup' element={
          <SignUp></SignUp>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
