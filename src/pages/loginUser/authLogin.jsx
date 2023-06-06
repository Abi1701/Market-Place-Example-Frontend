import React, { useState } from "react";
import styled from "./authLogin.module.scss";
import Border from "../../assets/border.svg";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

export default function AuthLogin() {
	const [passwordShown, setPasswordShown] = useState(false);
	const [value, setValue] = React.useState({
		email: "",
		password: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};

	const handleLogin = async () => {
		try {
			const { data } = await axios.post("/user/login", {
				email: value.email,
				password: value.password,
			});
			localStorage.setItem("_q", data.accessToken);
			window.location.assign("/apps/productlist");
		} catch (error) {
			toast.error("login error");
		}
	};
	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};
	return (
		<div className={styled.loginPage}>
			<div className={styled.formContainer}>
				<div className={styled.formAction}>
					<h1 className={styled.formTittle}>Masuk</h1>
					<input
						className={styled.inputPlace}
						type="text"
						placeholder="Email"
						onChange={handleChange("email")}
					/>
					<div className={styled.passwordField}>
						<input
							type={passwordShown ? "text" : "password"}
							placeholder="Password"
							className={styled.inputPlace2}
							onChange={handleChange("password")}
						/>
						<button className={styled.showPassword} onClick={togglePassword}>
							Show
						</button>
					</div>

					<a className={styled.forgotPassword} href="/">
						Lupa Password?
					</a>
					<button
						onClick={handleLogin}
						className={styled.buttonSubmit}
						type="submit">
						Masuk
					</button>
					<img className={styled.border} src={Border} alt="border" />
					<h3 className={styled.registerUser}>
						Belum punya akun?
						<a className={styled.registerButton} href="/auth/register">
							Daftar Sekarang
						</a>
					</h3>
				</div>
			</div>
		</div>
	);
}
