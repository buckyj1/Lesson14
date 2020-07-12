import React from 'react';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Education from './contents/Education';
import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import Skills from './contents/Skills';
function App() {
return (
<Router>
<div className="App">
<Navbar />
{/* Route for Home.js contents */}
<Route exact path="/">
  <Home />
</Route>
{/* Route for About.js contents */}
<Route path="/about">
<About />
</Route>
{/* Route for Education.js contents */}
<Route path="/education">
<Education />
</Route>
{/* Route for Skills.js contents */}
<Route path="/skills">
<Skills />
</Route>
{/* Route for Contact.js contents */}
<Route path="/contact">
<Contact />
</Route>
</div>
</Router>
)
}
export default App;