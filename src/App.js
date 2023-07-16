import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Seal from "./Seal";
import State from "./State";
import City from "./City";
import Ames from "./images/Ames.jpg";
import CedarFalls from "./images/CedarFalls.jpg";
import DesMoines from "./images/DesMoines.png";
import IowaCity from "./images/IowaCity.png";

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
        <Route
          path="/DesMoines"
          element={
            <City
              name="Des Moines"
              image={
                <img
                  className="cityImage"
                  src={DesMoines}
                  alt="Picture of Iowa State Capital"
                  title="https://en.wikipedia.org/wiki/Iowa_State_Capitol#/media/File:Capitol_building,_Des_Moines,_Iowa.jpg"
                ></img>
              }
              population="214,133"
              yearInc="1851"
              region="Central"
              classif="Urban"
              income="3"
              blurb={
                <div>
                  <p>
                    Des Moines (/dəˈmɔɪn/ (listen)) is the capital and the most
                    populous city in the U.S. state of Iowa. It is also the
                    county seat of Polk County. A small part of the city extends
                    into Warren County. It was incorporated on September 22,
                    1851, as Fort Des Moines, which was shortened to "Des
                    Moines" in 1857. It is located on, and named after, the Des
                    Moines River, which likely was adapted from the early French
                    name, Rivière des Moines, meaning "River of the Monks". The
                    city's population was 214,133 as of the 2020 census. The
                    six-county metropolitan area is ranked 83rd in terms of
                    population in the United States with 699,292 residents
                    according to the 2019 estimate by the United States Census
                    Bureau, and is the largest metropolitan area fully located
                    within the state.
                  </p>
                  <p>
                    Des Moines is a major center of the US insurance industry
                    and has a sizable financial services and publishing business
                    base. The city was credited as the "number one spot for U.S.
                    insurance companies" in a Business Wire article and named
                    the third-largest "insurance capital" of the world. The city
                    is the headquarters for the Principal Financial Group, Ruan
                    Transportation, TMC Transportation, EMC Insurance Companies,
                    and Wellmark Blue Cross Blue Shield. Other major
                    corporations such as Wells Fargo, Cognizant, Voya Financial,
                    Nationwide Mutual Insurance Company, ACE Limited, Marsh,
                    Monsanto, and Corteva have large operations in or near the
                    metropolitan area. In recent years, Microsoft,
                    Hewlett-Packard, and Facebook have built data-processing and
                    logistical facilities in the Des Moines area.
                  </p>
                  <p>
                    Des Moines is an important city in U.S. presidential
                    politics; as the state's capital, it is the site of the
                    first caucuses of the presidential primary cycle. Many
                    presidential candidates set up campaign headquarters in Des
                    Moines. A 2007 article in The New York Times said, "If you
                    have any desire to witness presidential candidates in the
                    most close-up and intimate of settings, there is arguably no
                    better place to go than Des Moines."
                  </p>
                  <a
                    className="contentLink"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Des_Moines,_Iowa"
                  >
                    (Copied from Wikipedia)
                  </a>
                </div>
              }
            />
          }
        ></Route>
        <Route
          path="/IowaCity"
          element={
            <City
              name="Iowa City"
              image={
                <img
                  className="cityImage"
                  src={IowaCity}
                  alt="Picture of U of Iowa Campus"
                  title="https://www.britannica.com/topic/University-of-Iowa"
                ></img>
              }
              population="74,828"
              yearInc="1839"
              region="Eastern"
              classif="Suburban"
              income="7"
              blurb={
                <div>
                  <p>
                    Iowa City, officially the City of Iowa City, is a city in
                    Johnson County, Iowa, United States. It is the home of the
                    University of Iowa and county seat of Johnson County, at the
                    center of the Iowa City Metropolitan Statistical Area. At
                    the time of the 2020 census the population was 74,828,
                    making it the state's fifth-largest city. The metropolitan
                    area, which encompasses Johnson and Washington counties, has
                    a population of over 171,000. The Iowa City Metropolitan
                    Statistical Area (MSA) is also a part of a Combined
                    Statistical Area (CSA) with the Cedar Rapids MSA. This CSA
                    plus two additional counties are known as the Iowa
                    City-Cedar Rapids region which collectively has a population
                    of nearly 500,000.
                  </p>
                  <p>
                    Iowa City was the second capital of the Iowa Territory and
                    the first capital city of the State of Iowa. The Old Capitol
                    building is a National Historic Landmark in the center of
                    the University of Iowa campus. The University of Iowa Art
                    Museum and Plum Grove, the home of the first governor of
                    Iowa, are also tourist attractions. In 2008, Forbes magazine
                    named Iowa City the second-best small metropolitan area for
                    doing business in the United States.
                  </p>
                  <a
                    className="contentLink"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Iowa_City,_Iowa"
                  >
                    (Copied from Wikipedia)
                  </a>
                </div>
              }
            />
          }
        ></Route>
        <Route
          path="/Ames"
          element={
            <City
              name="Ames"
              image={
                <img
                  className="cityImage"
                  src={Ames}
                  alt="Picture of Iowa State University Campus"
                  title="https://www.facebook.com/humansciences/photos/a.284910935124/10165463487000125/?type=3"
                ></img>
              }
              population="66,427"
              yearInc="1864"
              region="Central"
              classif="Suburban"
              income="18"
              blurb={
                <div>
                  <p>
                    Ames (/eɪmz/) is a city in Story County, Iowa, United
                    States, located approximately 30 miles (48 km) north of Des
                    Moines in central Iowa. It is best known as the home of Iowa
                    State University (ISU), with leading agriculture, design,
                    engineering, and veterinary medicine colleges. A United
                    States Department of Energy national laboratory, Ames
                    Laboratory, is located on the ISU campus.
                  </p>
                  <p>
                    According to the 2020 census, Ames had a population of
                    66,427, making it the state's ninth largest city. Iowa State
                    University was home to 27,854 students as of spring 2023,
                    which make up approximately one half of the city's
                    population.
                  </p>
                  <p>
                    Ames also hosts United States Department of Agriculture
                    (USDA) sites: the largest federal animal disease center in
                    the United States, the USDA Agricultural Research Service's
                    National Animal Disease Center (NADC), as well as one of two
                    national USDA sites for the Animal and Plant Health
                    Inspection Service (APHIS), which comprises the National
                    Veterinary Services Laboratory and the Center for Veterinary
                    Biologics. Ames also hosts the headquarters for the Iowa
                    Department of Transportation.{" "}
                  </p>
                  <a
                    className="contentLink"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Ames,_Iowa"
                  >
                    (Copied from Wikipedia)
                  </a>
                </div>
              }
            />
          }
        ></Route>
        <Route
          path="/CedarFalls"
          element={
            <City
              name="Cedar Falls"
              image={
                <img
                  className="cityImage"
                  src={CedarFalls}
                  alt="Picture of U of Northern Iowa Campus"
                  title="https://events.uni.edu/"
                ></img>
              }
              population="40,713"
              yearInc="1845"
              region="Northeast"
              classif="Rural"
              income="50"
              blurb={
                <div>
                  <p>
                    Cedar Falls is a city in Black Hawk County, Iowa, United
                    States. As of the 2020 census, the city population was
                    40,713. Cedar Falls is home to the University of Northern
                    Iowa, a public university.
                  </p>
                  <p>
                    Cedar Falls along with neighboring city Waterloo, Iowa are
                    the two principal municipalities within the Waterloo-Cedar
                    Falls Metropolitan Statistical Area. This area is known
                    locally as the "Cedar Valley," due to the Cedar River that
                    traverses the vicinity.
                  </p>
                  <a
                    className="contentLink"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Cedar_Falls,_Iowa"
                  >
                    (Copied from Wikipedia)
                  </a>
                </div>
              }
            />
          }
        ></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
