// import React, { useState } from "react";
// import Button from "./components/Button";
// import AddUser from "./components/AddUser";
// import DisplayUser from "./components/DisplayUser";

// const App = () => {
//   const [allUsers, setallUsers] = useState([]);

//   // const handleChange=(event)=>{
//   //   console.log(event.target.value);
//   //   setfirstName(event.target.value)
//   // }

//   const submitUser = (user) => {
//     // let user={
//     //   firstName, lastName, email, password
//     // }

//     // let food = ["rice", "beans", "ekuru"]
//     // let newFood = [...food, "plantain"]
//     let newUsers = [...allUsers, user];

//     setallUsers(newUsers);

//     let convProd = JSON.stringify(newUsers)

//     localStorage.setItem('products', convProd )
//   };

//   const deleteUser = (index) => {
//     let newUsers = [...allUsers];

//     newUsers.splice(index, 1);

//     setallUsers(newUsers);
//   };

//   const editUser = (index, user) => {
//     let newUsers = [...allUsers];

//     newUsers.splice(index, 1, user);

//     setallUsers(newUsers);
//   };

//   const shoutMe = () => {
//     alert("shouting...");
//   };

//   return (
//     <div>
//       <AddUser submitUser={submitUser} />

//       <DisplayUser
//         allUsers={allUsers}
//         deleteUser={deleteUser}
//         editUser={editUser}
//       />

//       <Button title="Stop" color="btn-danger" func={shoutMe} />
//       <Button title="Click" color="btn-warning" />
//       <Button title="Continue" color="btn-success" />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Effect from "./pages/Effect";
import FetchProd from "./pages/FetchProd";
import Formikk from "./pages/Formikk";
import AddStudent from "./pages/AddStudent";
import Login from "./pages/Login";
import Register from "./pages/register";
import AuthGuard from "./auth/AuthGuard";
import Cookies from "universal-cookie";

const App = () => {
  const cookies = new Cookies()
  const isAuth= cookies.get("token")
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AuthGuard isAuth={isAuth}/>}>
          <Route index element={<Home />} />
          <Route path="/sp-contact" element={<Contact />} />
          <Route path="/addStudent" element={<AddStudent />} />

          {/* programmatic redirection */}
          <Route path="/contact" element={<Navigate to={"/sp-contact"} />} />

          {/* dynamic routing */}
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/effect" element={<Effect />} />
          <Route path="/fetch" element={<FetchProd />} />
          <Route path="/formikk" element={<Formikk />} />
        </Route>

        {/* wild card routing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
