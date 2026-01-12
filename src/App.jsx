// import './App.css'
// import NewRegistation from './components/NewRegistation'
// import OldRegistation from './components/OldRegistation'
// import Header from './layouts/Header'
// import About from './pages/About'
// import Home from './pages/Home'

// function App() {


//   return (
//   <>
//   <Header/>
//   <Home/>
//   <About/>
//   <OldRegistation/>
//   <NewRegistation/>
//   </>
//   )
// }

// export default App


import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NewRegistation from "./components/NewRegistation";
import OldRegistation from "./components/OldRegistation";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register/new" element={<NewRegistation />} />
        <Route path="/register/old" element={<OldRegistation />} />
      </Routes>
    </>
  );
}

export default App;

