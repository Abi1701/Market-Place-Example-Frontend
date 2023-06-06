import React from "react";
import styled from "./header.module.scss";
import Search from "../../assets/search.svg";
import Heart from "../../assets/heart.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";
import UserIcon from "../../assets/user.svg";
import { ArrowDropDown } from "@mui/icons-material";

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<div className={styled.searchField}>
						<div>
							<input
								type="text"
								name="Search"
								id="Search"
								className={styled.searchInput}
							/>
						</div>
						<button className={styled.searchButton}>
							<img src={Search} alt="search" />
						</button>
					</div>
					<li>
						<a href="/">
							<img src={Heart} alt="heart" />
						</a>
					</li>
					<li>
						<a href="/">
							<img src={ShoppingBag} alt="shopping bag" />
						</a>
					</li>
					<li>
						<a href="/">
							<img src={UserIcon} alt="user" />
							<ArrowDropDown />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
