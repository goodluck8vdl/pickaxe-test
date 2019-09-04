import React, {} from "react";
import nav from "./i/nav.png";
import navOpen from "./i/navOpen.png";
import Dropdown from "./components/Dropdown";


function App() {

  return (
    <div className="App">
      <div className='MenuBar' > 
        <Dropdown/>  
      </div>

      <hr />
      <h1>Pickaxe</h1>

      <p>Your goal is to create a drop down menu component</p>
      <h3>Requirements</h3>
      <ul>
        <li>
          The dropdown should open/close when the avatar or user name is
          clicked.
        </li>
        <li>
          The dropdown should close when clicked outside of the menu or anywhere
          on the page.
        </li>
        <li>Please use react hooks.</li>
        <li>
          The layout of the page should resemble the following design (there is
          no need to re-create the components on the left hand side)
        </li>
        <li>The dropdown should mimic the design as much as possible</li>
        <li>
          Feel free to use any styling convention as long as the styles are
          encapsulated and won't affect other components. CSS modules,
          styled-components are just two possible examples.
        </li>
        <li>Bonus points write tests using Cypress</li>
      </ul>
      <h4>Top Nav - Dropdown closed</h4>
      <img src={nav} alt="nav" width="800" />
      <br />
      <hr />
      <br />
      <h4>Top Nav - Dropdown Open</h4>
      <img src={navOpen} alt="navOPen" width="300" />
    </div>
  );
}

export default App;
