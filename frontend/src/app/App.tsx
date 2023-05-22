import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "../style/global.css";

const App: React.FC<any> = ({ children }) => {
	return (
		<>
			<Navbar />

			<div className="flex flex-wrap justify-center items-start h-screen">
				{children}
				<Outlet />
			</div>
		</>
	);
};

export default App;
