import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link,useNavigate } from "react-router-dom";
import "../static/map.css";

const Home = () => {
return (
	<div className="dropdown">
		<div className="picture">

        <img className="photo" src="./images/india2.jpg" alt="" style={{width:"80%"}}/>
		</div>
		<div className="dd">

	    <h1>States</h1>
	    <br/>
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Jammu and Kashmir</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Himachal Pradesh</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Punjab</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Haryana</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Uttarkhand</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Rajasthan</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Uttar Pradesh</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Bihar</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Sikkim</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Arunachal Pradesh</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Assam</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Nagaland</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Meghalaya</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Manipur</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Tripura</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Mizoram</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Gujurat</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Madhya Pradesh</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Chattisgarh</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Jharkhand</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">West Bengal</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Maharashtra</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Orissa</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Goa</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Karnataka</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Andhra Pradesh</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/punjab">Telanagana</Link>
		</li>
        <li>
		{/* Endpoint to route to Home component */}
		<Link to="/JnK">Tamil Nadu</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/hp">Kerala</Link>
		</li>
	</ul>
		</div>
	</div>
);
};

export default Home;
