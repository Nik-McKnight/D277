import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Seal from "./Seal";
import State from "./State";
import City from "./City";

function App() {
  return (
    <div className="App">
      <header>
        <Seal />
        <h1>Iowa</h1>
      </header>
      <nav>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/DesMoines">
          Des Moines
        </Link>
        <Link className="navLink" to="/IowaCity">
          Iowa City
        </Link>
        <Link className="navLink" to="/Ames">
          Ames
        </Link>
        <Link className="navLink" to="/CedarFalls">
          Cedar Falls
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<State />}></Route>
        <Route path="/DesMoines" element={<City name="Des Moines" />}></Route>
        <Route path="/IowaCity" element={<City name="Iowa City" />}></Route>
        <Route path="/Ames" element={<City name="Ames" />}></Route>
        <Route path="/CedarFalls" element={<City name="Cedar Falls" />}></Route>
      </Routes>
      <footer></footer>
      {/* <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/update" element={<Update />}></Route>
        <Route path="/reboot" element={<Reboot />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/termsOfService" element={<ToS />}></Route>
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
