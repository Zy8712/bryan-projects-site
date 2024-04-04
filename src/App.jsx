import { Router, Route } from 'wouter';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import Completed from "./pages/Completed";
import In_Progress from "./pages/In_Progress";
import Upcoming from "./pages/Upcoming";
import Footer from './components/Footer';

import "./App.css"
import JumpToTopButton from './components/JumpToTopButton';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/featured" component={Featured} />
        <Route path="/completed" component={Completed} />
        <Route path="/in-progress" component={In_Progress} />
        <Route path="/upcoming" component={Upcoming} />
        <JumpToTopButton />
        <Footer />
      </Router>
    </>
  )
}

export default App;
