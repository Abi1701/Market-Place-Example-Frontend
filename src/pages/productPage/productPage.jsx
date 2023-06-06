import * as React from "react";
import styled from "./productPage.module.scss";
import Header from "../../components/header/header";
import CardContent from "../../components/cardContent/cardContent";
import BorderRed from "../../assets/Rectangle.png";
import { ArrowDropDown, FavoriteBorder } from "@mui/icons-material";
import {
	Stack,
	Link,
	Typography,
	Breadcrumbs,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Cup1 from "../../assets/Cup.png";
import Cup2 from "../../assets/Cup2.png";
import Cup3 from "../../assets/Cup3.png";
import Cup4 from "../../assets/Cup4.png";
import Rating from "@mui/material/Rating";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function ProductPage() {
	const [value, setValue] = React.useState(5);
	const [counter, setCounter] = React.useState(1);
	const breadcrumbs = [
		<Link
			underline="hover"
			key="1"
			color="inherit"
			href="/"
			onClick={handleClick}>
			Home
		</Link>,

		<Typography key="3" color="red">
			HARIO CAFE PRESS SLIM GREY 240ML
		</Typography>,
	];

	const incrementCounter = () => setCounter(counter + 1);
	let decrementCounter = () => setCounter(counter - 1);
	if (counter <= 0) {
		decrementCounter = () => setCounter(1);
	}
	return (
		<div className={styled.productPage}>
			<Header />
			<div className={styled.purchaseSection}>
				<button className={styled.purchaseButton}>
					Belanja
					<ArrowDropDown />
				</button>
			</div>
			<div className={styled.breadCrumbs}>
				<Stack spacing={2}>
					<Breadcrumbs separator=">>" aria-label="breadcrumb">
						{breadcrumbs}
					</Breadcrumbs>
				</Stack>
			</div>
			<div className={styled.contentContainer}>
				<section className={styled.mainContent}>
					<div className={styled.imageContainer}>
						<img className={styled.imgProduct} src={Cup1} alt="cup 1" />
						<div className={styled.imgContainerProduct}>
							<img className={styled.imgProduct} src={Cup2} alt="cup 2" />
							<img className={styled.imgProduct} src={Cup3} alt="cup 3" />
							<img className={styled.imgProduct} src={Cup4} alt="cup 4" />
						</div>
					</div>
					<div className={styled.productContainer}>
						<h1 className={styled.productTittle}>
							HARIO CAFE PRESS SLIM GREY 240ML
						</h1>
						<h3 className={styled.brandTittle}>UbruKopi</h3>
						<div className={styled.ratingSection}>
							<Rating name="disabled" value={value} disabled />
							<Typography>(7)</Typography>
						</div>
						<h3 className={styled.priceTittle}>Rp 480.000</h3>
						<div className={styled.buttonSection}>
							<div className={styled.quantityIncrease}>
								<button
									className={styled.quantityInput}
									onClick={decrementCounter}>
									-
								</button>
								<input
									className={styled.quantityInput}
									type="text"
									placeholder={counter}
									disabled
								/>
								<button
									className={styled.quantityInput}
									onClick={incrementCounter}>
									+
								</button>
							</div>
							<button className={styled.cartButton}>Tambah ke keranjang</button>
							<button className={styled.likeButton}>
								<FavoriteBorder sx={{ color: "red" }} />
							</button>
						</div>
						<p className={styled.productParagraf}>
							French Press dari Hario berbahan dasar kaca berwarna abu-abu di
							desain dengan bentuk yang ramping dan menarik. sangat cocok untuk
							membuat 1-2 gelas kopi.
						</p>
					</div>
				</section>
				<section className={styled.primaryContent}>
					<div className={styled.accordionContainer}>
						<div className={styled.accordionContent}>
							<Accordion>
								<AccordionSummary
									aria-controls="panel1a-content"
									id="panel1a-header">
									<Typography>Deskripsi</Typography>
								</AccordionSummary>
								<AccordionDetails
									sx={{ width: "100%", background: "transparent" }}>
									<p className={styled.accordionParagraf}>
										French Press dari Hario berbahan dasar kaca berwarna abu-abu
										di desain dengan bentuk yang ramping dan menarik. sangat
										cocok untuk membuat 1-2 gelas kopi. French Press merupakan
										salah satu teknik seduh manual yang simple, cukup untuk
										menyeduh air dan steep selama empat menit sebelum kamu
										menekan knob agar ampas bisa turun ke dasar.
									</p>
									<div className={styled.productDetail}>
										<h3>Spesifikasi:</h3>
										<p>
											Dimensi : 11x16,5x8cm <br /> Berat :350gr <br /> Kapasitas
											: (240ml) <br />
											Warna : Abu-abu / Grey <br /> Brand : Hario{" "}
										</p>
									</div>
								</AccordionDetails>
							</Accordion>
						</div>
						<div className={styled.accordionContent}>
							<Accordion>
								<AccordionSummary
									aria-controls="panel1a-content"
									id="panel1a-header">
									<Typography>Informasi</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse malesuada lacus ex, sit amet blandit leo
										lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</div>
				</section>
				<section className={styled.recomendedContent}>
					<h1 className={styled.recomendedTittle}>REKOMENDASI UNTUK ANDA</h1>
					<img src={BorderRed} alt="red" />
					<div className={styled.recomendedCard}>
						<CardContent />
					</div>
				</section>
			</div>
		</div>
	);
}
