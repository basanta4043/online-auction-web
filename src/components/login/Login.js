import React, { useState } from "react";
import logo from "../../media/logo.png";
import {
	Row,
	FormGroup,
	FormControl,
	Button,
	HelpBlock,
} from "react-bootstrap";
import "./Login.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(email, password);
	}

	return (
		<>
			<h2>Login Page</h2>
			<br />
			<div class="login">
				<form id="login" method="get" action="login.php">
					<div className="logoContainer">
						<img className="logo" src={logo} height="100rem" width="40%"></img>
					</div>
					<label>
						<b>User Type</b>
					</label>
					<select name="Utype" id="Utype">
						<option value="ADMIN">Admin</option>
						<option value="BUYER">Buyer</option>
						<option value="SELLER">Seller</option>
					</select>
					<br />
					<br />
					<label>
						<b>User Name</b>
					</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						name="Uname"
						id="Uname"
						placeholder="Username"
					/>
					<br />
					<br />
					<label>
						<b>Password</b>
					</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="Password"
						name="Pass"
						id="Pass"
						placeholder="Password"
					/>
					<br />
					<br />

					<input type="checkbox" id="check" />
					<span>Remember me</span>
					<br />
					<br />
					<div className="submit">
						<input
							type="button"
							name="log"
							id="log"
							value="Log In Here"
							onClick={handleSubmit}
						/>
					</div>

					<br />
					<div className="forgotPassword">
						<a href="#">Forgot Password</a>
					</div>
				</form>
			</div>
		</>
	);
}
