import * as React from "react";
import styled from "./authRegister.module.scss";
import Border from "../../assets/border.svg";
import axios from "../../utils/axios";

export default function AuthRegister1() {
	const [value, setValue] = React.useState({
		first_name: "",
		last_name: "",
		email: "",
	});
	const handleChange = (name) => (e) => {
		setValue({ ...value, [name]: e.target.value });
	};
	const handleRegister = async () => {
		try {
			await axios.post("/user/register", {
				first_name: value.first_name,
				last_name: value.last_name,
				email: value.email,
			});
			window.location.assign("/auth/register-cont");
			console.log("terdaftar");
		} catch (error) {}
	};
	return (
		<div className={styled.registerPage}>
			<div className={styled.registerContainer}>
				<div className={styled.registerForm}>
					<h1 className={styled.formTittle}>Daftar Sekarang</h1>
					<input
						className={styled.inputPlace}
						type="text"
						placeholder="Nama Depan"
						onChange={handleChange("first_name")}
					/>
					<input
						className={styled.inputPlace}
						type="text"
						placeholder="Nama Belakang"
						onChange={handleChange("last_name")}
					/>
					<input
						className={styled.inputPlace}
						type="text"
						placeholder="Email"
						onChange={handleChange("email")}
					/>
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
