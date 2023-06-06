import React from "react";
import { Navigate } from "react-router-dom";
import ProductList from "../pages/productList/productList";
import ProductPage from "../pages/productPage/productPage";
import Register1 from "../pages/registerUser/authRegister";
import Register2 from "../pages/registerUser2/registerUser2";
import Login from "../pages/loginUser/authLogin";
import LayoutOther from "../pages/layout/layoutOther";
import Layout from "../pages/layout/layout";

const Router = (loggedIn) => {
	return [
		{
			path: "apps",
			element: loggedIn ? <Layout /> : <Navigate to="/apps/productlist" />,
			children: [
				{ path: "productlist", element: <ProductList /> },
				{ path: "productpage", element: <ProductPage /> },
			],
		},
		{
			path: "/auth",
			element: !loggedIn ? <LayoutOther /> : <Navigate to="/" />,
			children: [
				{ path: "login", element: <Login /> },
				{ path: "register-cont", element: <Register2 /> },
				{ path: "register", element: <Register1 /> },
			],
		},
		{
			path: "/",
			element: <Login />,
		},
	];
};

export default Router;
