import React from "react";
import landscape from "./images/Landscape.jpg";

export default function State() {
  return (
    <div className="Page">
      <h2>Information about Iowa</h2>
      <img
        id="landscape"
        src={landscape}
        alt="An Iowa Landscape"
        title="https://rogersphotography.com/"
      ></img>
      <div className="Content">
        <section className="stateContent">
          <h3>History</h3>
          <p>
            Native Americans in the United States resided in what is now Iowa
            for thousands of years. The written history of Iowa begins with the
            proto-historic accounts of Native Americans by explorers such as
            Marquette and Joliet in the 1680s. Until the early 19th century Iowa
            was occupied exclusively by Native Americans and a few European
            traders, with loose political control by France and Spain.
          </p>
          <p>
            Iowa became part of the United States of America after the Louisiana
            Purchase in 1803, but uncontested U.S. control over what is now Iowa
            occurred only after the War of 1812 and after a series of treaties
            eliminated Indian claims on the state. Beginning in the 1830s
            Euro-American settlements appeared in the Iowa Territory, U.S.
            statehood was acquired in 1846, and by 1860 almost the entire state
            was settled and farmed by Euro-Americans. Subsistence frontier
            farming was replaced by commodity farming after the construction of
            railroad networks in the 1850s and 1860s. Iowa contributed many
            soldiers who fought in the American Civil War. Afterwards they
            returned to help transform Iowa into an agricultural powerhouse,
            supplying food to the rest of the nation.
          </p>
          <p>
            The industrialization of agriculture and the emergence of
            centralized commodities markets in the late 19th and 20th centuries
            led to a shift towards larger farms and the decline of the small
            family farm; this was exacerbated during the Great Depression.
            Industrial production became a larger part of the economy during
            World War II and the postwar economic boom. In the 1970s and 1980s a
            series of economic shocks, including the oil crisis, the 1980s farm
            crisis, and the Early 1980s recession led to the collapse of
            commodities prices, a decline in rural and state population, and
            rural flight. Iowa's economy rebounded in the 1990s, emerging as a
            modern mixed economy dominated by industry, commerce, and finance,
            in which agriculture is a comparatively small component.
          </p>
          <a
            className="contentLink"
            target="_blank"
            href="https://en.wikipedia.org/wiki/History_of_Iowa"
          >
            (Copied from Wikipedia)
          </a>
        </section>
        <aside className="stateAside">
          <h3>Trivia</h3>
          <div className="trivia">
            <h4>Largest Cities</h4>
            <table>
              <tr>
                <th>Rank</th>
                <th>City</th>
                <th>Population</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Des Moines</td>
                <td>214,133</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Cedar Rapids</td>
                <td>137,710</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Davenport</td>
                <td>101,724</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Sioux City</td>
                <td>85,791</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Iowa City</td>
                <td>74,828</td>
              </tr>
            </table>
            <a
              target="_blank"
              className="triviaLink"
              href="https://en.wikipedia.org/wiki/List_of_cities_in_Iowa"
            >
              Link to More
            </a>
          </div>
          <div className="trivia">
            <h4>Largest Universities</h4>
            <ol>
              <li>Iowa State University</li>
              <li>University of Iowa</li>
              <li>Des Moines Area Community College</li>
              <li>Kirkwood Community College</li>
              <li>University of Northern Iowa</li>
            </ol>
            <a
              target="_blank"
              className="triviaLink"
              href="https://en.wikipedia.org/wiki/List_of_colleges_and_universities_in_Iowa"
            >
              Link to More
            </a>
          </div>{" "}
          <div className="trivia">
            <h4>Notable Landmarks</h4>
            <ul>
              <li>Amana Colonies</li>
              <li>Blood Run Site</li>
              <li>Davis Oriole Earthlodge Site</li>
              <li>Grenville M. Dodge House</li>
              <li>Dubuque County Jail</li>
            </ul>
            <a
              target="_blank"
              className="triviaLink"
              href="https://en.wikipedia.org/wiki/List_of_National_Historic_Landmarks_in_Iowa"
            >
              Link to More
            </a>
          </div>
        </aside>
        <form>
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname" value="Enter first name" />
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" value="Enter last name" />
          <label for="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value="Enter email address"
          />
          <label for="confirm">Confirm Email:</label>
          <input
            type="text"
            id="confirm"
            name="confirm"
            value="Confirm email address"
          />
          {/* {email === confirm ? "Emails match" : "Emails do not match"} */}
          <label for="question">Question:</label>
          <input
            type="textarea"
            id="question"
            name="question"
            value="Ask your question"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
