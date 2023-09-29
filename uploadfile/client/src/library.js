import { HashRouter, Routes, Route } from 'react-router-dom';
import AdminSignin from './adminsignin';
import UserSignin from './usersignin';
import Home from './home';
import AdminAddBook from './addbook';
import AdminHome from './adminhome';
import GetBooks from './getbook';
import UserHome from './userhome';
import Lendingbook from './lendingbook';


export default function Library() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AdminSignUp" element={<AdminSignin />} />
          <Route path="/UserSignUp" element={<UserSignin />} />
          <Route path="/AdminAddBook" element={<AdminAddBook />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/GetBooks" element={<GetBooks />} />
          <Route path="/UserHome" element={<UserHome />} />
          <Route path="/lendingbook" element={<Lendingbook />} />

        </Routes>
      </HashRouter>
    </>
  );
}
