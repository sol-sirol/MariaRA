import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp";
import "./index.css";

// import "framework7/framework7-bundle.min.css";
import "../node_modules/framework7/framework7-bundle.min.css";

import Framework7 from "framework7/lite-bundle";

// Import F7-React Plugin
import Framework7React from "framework7-react";

// Init F7-React Plugin
Framework7.use(Framework7React);

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
