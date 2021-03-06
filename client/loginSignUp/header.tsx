import React from "react";

/**Header Function in TypeScript
 * Typescript: R
 * React.FC = Functional Component of React.
 */
const Header: React.FC = () => {
  return (
    // Bootstrap Navbar
    <div>
      <div>
			  <img id="computer_img" src="http://localhost:8080/client/assets/computer.png" alt=""/>
		  </div>
      <div className="nav-bar-div">
        <span id="gitConnected">gitConnected.</span>
      </div>
			<div id="taglineContainer">
				<p id="tagline">1-on-1 Networking for Tech Professionals</p>
			</div>
    </div>
  );
};
export default Header;
