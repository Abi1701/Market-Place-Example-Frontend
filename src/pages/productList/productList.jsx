import * as React from "react";
import styled from "./productList.module.scss";
import Header from "../../components/header/header";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	TextField,
	Slider,
	Box,
	Stack,
	Link,
	Typography,
	Breadcrumbs,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import CardContent from "../../components/cardContent/cardContent";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export default function ProductList() {
	const [minNum, setMinNum] = React.useState(0);
	const [maxNum, setMaxNum] = React.useState(1000);
	const minmin = 0;
	const maxmax = 5000000;
	const [priceRangeValue, setPriceRangeValue] = React.useState([0, 5000000]);

	const handlePriceRangeChange = (event, newValue) => {
		setMinNum(newValue[0]);
		setMaxNum(newValue[1]);
		setPriceRangeValue(newValue);
	};

	const breadcrumbs = [
		<Link
			underline="hover"
			key="1"
			color="inherit"
			href="/"
			onClick={handleClick}>
			Home
		</Link>,
		<Link
			underline="hover"
			key="2"
			color="inherit"
			href="/material-ui/getting-started/installation/"
			onClick={handleClick}>
			Product
		</Link>,
		<Typography key="3" color="red">
			Roasted Bean
		</Typography>,
	];

	return (
		<>
			<div className={styled.productListPage}>
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
				<div className={styled.productListContainer}>
					<aside className={styled.asideMenu}>
						<h1 className={styled.asideTittle}>
							Urutkan Berdasarkan <ArrowDropUp />
						</h1>
						<Box sx={{ width: "280px", ml: "5rem" }}>
							<Typography>Harga</Typography>
							<Slider
								getAriaLabel={() => "Price range"}
								value={priceRangeValue}
								onChange={handlePriceRangeChange}
								valueLabelDisplay="auto"
								min={minmin}
								max={maxmax}
								sx={{ color: "red" }}
							/>
							<Stack
								direction="row"
								justifyContent="space-evenly"
								alignItems="center">
								<TextField disabled value="Rp." sx={{ width: "50px" }} />
								<TextField
									label="min"
									type="number"
									variant="outlined"
									InputLabelProps={{ shrink: true }}
									sx={{ width: "90px" }}
									value={minNum}
									onChange={(e) => {
										setMinNum(Number(e.target.value));
										setPriceRangeValue([
											Number(e.target.value),
											priceRangeValue[1],
										]);
									}}
								/>
								<Typography>-</Typography>
								<TextField disabled value="Rp." sx={{ width: "50px" }} />
								<TextField
									label="max"
									type="number"
									variant="outlined"
									InputLabelProps={{ shrink: true }}
									sx={{ width: "90px" }}
									value={maxNum}
									onChange={(e) => {
										setMaxNum(Number(e.target.value));
										setPriceRangeValue([
											priceRangeValue[0],
											Number(e.target.value),
										]);
									}}
								/>
							</Stack>
						</Box>
						<div className={styled.accordionPlace}>
							<Accordion
								sx={{
									width: "300px",
								}}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{
										background: "rgba(245, 245, 245, 0.75)",
									}}>
									<Typography>Origin</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className={styled.accordionMenu}>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Aceh</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Semarang</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Bandung</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Jawa</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Amerika Selatan</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Lain-Lain</span>
											</label>
										</div>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								sx={{
									width: "300px",
								}}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{
										background: "rgba(245, 245, 245, 0.75)",
									}}>
									<Typography>Species</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className={styled.accordionMenu}>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Arabika</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Robusta</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Blend</span>
											</label>
										</div>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								sx={{
									width: "300px",
								}}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{
										background: "rgba(245, 245, 245, 0.75)",
									}}>
									<Typography>Roast Level</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className={styled.accordionMenu}>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Light Roast</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Medium Roast</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Dark Roast</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Light to Medium Roast</span>
											</label>
										</div>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								sx={{
									width: "300px",
								}}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{
										background: "rgba(245, 245, 245, 0.75)",
									}}>
									<Typography>Tasted</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className={styled.accordionMenu}>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Sweet</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Floral</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Fruity</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Nutty</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Cocoa</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Spices</span>
											</label>
										</div>
									</Typography>
								</AccordionDetails>
							</Accordion>
							<Accordion
								sx={{
									width: "300px",
								}}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content"
									id="panel1a-header"
									sx={{
										background: "rgba(245, 245, 245, 0.75)",
									}}>
									<Typography>Processing</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className={styled.accordionMenu}>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Honey White</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Natural</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Honey Gold</span>
											</label>
											<label class="container">
												<input type="checkbox" />
												<span class="checkmark">Honey Yellow</span>
											</label>
										</div>
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</aside>
					<div className={styled.rightContent}>
						<div className={styled.rightContentHeader}>
							<div className={styled.quantity}>
								<label for="display">Menampilkan</label>
								<select
									className={styled.quantitySelect}
									id="quantity"
									name="quantity">
									<option value="6">6</option>
									<option value="12">12</option>
									<option value="18">18</option>
									<option value="24">24</option>
								</select>
								<label for="jumlah barang"> dari 132</label>
							</div>
							<div className={styled.sort}>
								<label for="sort">Urutkan</label>
								<select
									className={styled.sortSelect}
									id="sort menu"
									name="sort menu">
									<option value="Nama Product">Nama Product</option>
									<option value="Rating Product">Rating Product</option>
									<option value="Harga Product">Harga Product</option>
								</select>
							</div>
						</div>
						<div className={styled.cardContainer}>
							<CardContent />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
