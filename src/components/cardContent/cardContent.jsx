import * as React from "react";
import styled from "./cardContent.module.scss";
import ProductPict from "../../assets/image 61.png";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import Heart from "../../assets/heart.svg";
import ShoppingBag from "../../assets/shopping-bag.svg";

export default function CardContent() {
	const [value, setValue] = React.useState(5);
	return (
		<div className={styled.cardContainer}>
			<div className={styled.cardContent}>
				<img src={ProductPict} alt="product" />
				<div className={styled.hoverItem}>
					<img src={Heart} alt="heart" />
					<img src={ShoppingBag} alt="shopingbag" />
				</div>
				<h3 className={styled.cardTittle}>Card Tittle</h3>
				<h4 className={styled.cardBrand}>Brand Coffee</h4>
				<div className={styled.ratingSection}>
					<Rating name="disabled" value={value} disabled />
					<Typography>(7)</Typography>
				</div>
				<h4 className={styled.cardPrice}>Rp 480.000</h4>
			</div>
		</div>
	);
}
