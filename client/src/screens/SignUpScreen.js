import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Illustration from "../assets/LoginIllustration.png";
import { useDispatch } from "react-redux";
import * as authActions from "../store/action/Auth";
import OtpInput from "react-otp-input";
import styled from "styled-components";
function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Project Deck
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function SignUpScreen(props) {
	const dispatch = useDispatch();
	const [isSent, setIsSent] = React.useState(false);
	const [phoneNumber, setPhoneNumber] = React.useState();
	const [otp, setOtp] = React.useState(0);
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await dispatch(authActions.signIn(phoneNumber));

			setIsSent(true);
		} catch (error) {
			console.log(error);
			alert("Something went wrong");
		}
	};

	const login = async () => {
		try {
			await dispatch(authActions.authenticatePhoneNumber(otp, phoneNumber));
			props.history.push("/home");
		} catch (error) {
			console.log(error);
			alert("Something went wrong");
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<CssBaseline />
				<StyledGrid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundRepeat: "no-repeat",
						backgroundColor: (t) =>
							t.palette.mode === "light"
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				/>
				<Grid
					style={{ backgroundColor: "#Fdfcfa" }}
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						{!isSent ? (
							<Box
								component="form"
								noValidate
								onSubmit={handleSubmit}
								sx={{ mt: 1 }}
							>
								<TextField
									margin="normal"
									required
									fullWidth
									onChange={(event) => setPhoneNumber(event.target.value)}
									label="Phone Number"
									value={phoneNumber}
									autoComplete="phone number"
									autoFocus
								/>

								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Send OTP
								</Button>
								{/* <Grid container>
									<Grid item>
										<Link href="#" variant="body2">
											{"Don't have an account? Sign Up"}
										</Link>
									</Grid>
								</Grid> */}
								<Copyright sx={{ mt: 5 }} />
							</Box>
						) : (
							<Box
								component="form"
								noValidate
								onSubmit={handleSubmit}
								sx={{ mt: 1 }}
							>
								<OtpInput
									containerStyle={{ margin: "30px auto 10px" }}
									inputStyle={{
										width: "30px",
										height: "40px",
										border: "1px #AFB9D4 solid",
										margin: "0 10px",
									}}
									focusStyle={{
										outline: "none",
										border: "1px #AFB9D4 solid",
									}}
									value={otp}
									onChange={(otp) => setOtp(otp)}
									numInputs={6}
								/>
								<Button
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									onClick={login}
								>
									Log In
								</Button>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

const StyledGrid = styled(Grid)`
	background-image: url(${Illustration});
	background-size: 500px 500px;
	background-color: #c3e6ff;
`;
