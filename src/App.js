import styled from "./App.module.scss";
import React, { useState, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/header/header";
import routes from "./routes/indexRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const location = useLocation();
	const [isAuth, setIsAuth] = useState(false);
	const header = ["/", "/auth/register", "/auth/register-cont", "/auth/login"];
	useEffect(() => {
		const token = localStorage.getItem("_q");
		if (token) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, []);
	const routing = useRoutes(routes(isAuth));
	return (
		<div className={styled.App}>
			{!header.includes(location.pathname) && <Header />}
			<ToastContainer />
			{routing}
		</div>
	);
}

export default App;
