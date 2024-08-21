import "./App.css";
import Header from "./Component/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import SignUpScreen from "./screens/SignUpScreen";
import Myblogs from '../src/Component/Myblogs'
import { useState } from "react";

function App() {
const isLoggedIn = !!localStorage.getItem('token')
  return (
    <Router>
      <Header/>
      {isLoggedIn ? (
        <>
        <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/myblogs" element={<Myblogs />} />
        </Routes>
        </>
      ): (
        <>
         <Routes>
          <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<AuthScreen />} />
          </Routes> 
        </>
      )}
       
       
    </Router>
  );
}

export default App;


// import "./App.css";
// import Header from "./Component/header";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import HomeScreen from "./screens/HomeScreen";
// import AuthScreen from "./screens/AuthScreen";
// import SignUpScreen from "./screens/SignUpScreen";
// import { useState } from "react";

// function App() {
//   const [user, setUser] = useState(null);
//   return (
//     <Router>
//       <Header user={user} setUser={setUser} />
//       <main className="py-3"></main>
//         <Container>
//           <Routes>
//             <Route path="/" element={<HomeScreen user={user} />} />
//             <Route path="/signin" element={<AuthScreen setUser={setUser} />} />
//             <Route path="/signup" element={<SignUpScreen />} />

//           </Routes>
//         </Container>
//       </main>
//     </Router>
//   );
// }

// export default App;


