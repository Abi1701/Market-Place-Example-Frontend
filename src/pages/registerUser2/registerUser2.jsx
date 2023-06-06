import * as React from "react";
import styled from "./registerUser2.module.scss";
import Border from "../../assets/border.svg";
import Union from "../../assets/Union.svg";
import axios from "../../utils/axios";

export default function AuthRegister2() {
	const [passwordShown, setPasswordShown] = React.useState(false);
	const [value, setValue] = React.useState({
		phone_number: "",
		password: "",
		confirm_password: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleRegister = async () => {
		try {
			await axios.post("/user/register", {
				phone_number: value.phone_number,
				password: value.password,
				confirm_password: value.confirm_password,
			});
			window.location.assign("/auth/login");
			console.log("terdaftar");
		} catch (error) {}
	};

	const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};
	return (
		<div className={styled.registerPage}>
			<div className={styled.registerContainer}>
				<div className={styled.registerForm}>
					<a href="/" className={styled.formTittle}>
						<img src={Union} alt="" /> Kembali
					</a>
					<input
						className={styled.inputPlace}
						type="text"
						placeholder="Nomor Telfon"
						onChange={handleChange("phone_number")}
					/>
					<div className={styled.passwordField}>
						<input
							className={styled.inputPlace2}
							type={passwordShown ? "text" : "password"}
							placeholder="Password"
							onChange={handleChange("password")}
						/>
						<button className={styled.showPassword} onClick={togglePassword}>
							Show
						</button>
					</div>
					<div className={styled.passwordField}>
						<input
							className={styled.inputPlace2}
							type={passwordShown ? "text" : "password"}
							placeholder="Confirm Password"
							onChange={handleChange("confirm_password")}
						/>
						<button className={styled.showPassword} onClick={togglePassword}>
							Show
						</button>
					</div>

					<button
						onClick={handleRegister}
						className={styled.submitButton}
						type="submit">
						Selanjutnya
					</button>
					<img className={styled.border} src={Border} alt="border" />
					<h1 className={styled.loginIdentity}>
						Sudah punya akun?
						<a className={styled.toLogin} href="/">
							Masuk
						</a>
					</h1>
				</div>
			</div>
		</div>
	);
}
