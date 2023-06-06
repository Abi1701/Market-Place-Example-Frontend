import React from "react";
import { Outlet } from "react-router-dom";

export default function layoutOther(params) {
	return (
		<div>
			<Outlet />
		</div>
	);
}
