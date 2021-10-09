import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Projects from "../components/Projects";
import AddIcon from "@mui/icons-material/Add";
import projectPic from "../assets/Projectpic.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Autocomplete, Modal, TextField } from "@mui/material";
import * as authActions from "../store/action/Auth";
import * as projectActions from "../store/action/Project";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
export default function LandingScreen() {
	const auth = useSelector((state) => state.Auth);
	const [openDetailsModal, setOpenDetailsModal] = useState(false);
	const [openProjectModal, setOpenProjectModal] = useState(false);
	const [firstName, setFirstNname] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailId, setEmailId] = useState("");
	const [yearOfStudy, setYearofStudy] = useState("");
	const [collegeName, setCollegeName] = useState("");
	const [isLoading,setIsLoading]=useState(false)

	//PROJECT
	const [projectName, setProjectName] = useState("");
	const [category, setCategory] = useState("");
	const [timePeriod, setTimePeriod] = useState("");
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.isAuth && !auth.firstName) {
			setOpenDetailsModal(true);
		}
	}, [auth, setOpenDetailsModal]);

	const onSubmitSignUpDetails = async () => {
		try {
			await dispatch(
				authActions.signupDetails(
					emailId,
					firstName,
					lastName,
					collegeName,
					yearOfStudy,
					auth.token
				)
			);
			setOpenDetailsModal(false);
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	const onSubmitProjectDetails = async () => {
		try {
			
			setIsLoading(true)
			await dispatch(
				projectActions.addProject(
					projectName,
					category,
					timePeriod,
					description,
					auth.token
				)
			);
			setIsLoading(false)
			setOpenProjectModal(false);
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};

	const getProjects = useCallback(async () => {
		try {
			setIsLoading(true)
			await dispatch(projectActions.getAllProjects());
			setIsLoading(false)
		} catch (error) {
			console.log(error);
			alert("Something went wrong");
		}
	}, []);

	useEffect(() => {
		getProjects();
	}, []);

	if(isLoading){
		return <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}} >
		<CircularProgress color="primary" />
	</div>
	}

	return (
		<Container>
			<NavBar />
			<SubContainer>
				<BigText>Amongst thousands of projects</BigText>
				<SmallText>Expand your horizon</SmallText>
				<SearchBar />
			</SubContainer>
			<SubContainer
				style={{
					height: "70vh",
					backgroundColor: "#fff",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<div>
					<SmallText style={{ color: "#000" }}>Begin your journey <br/> of being a mentor</SmallText>
					<Button
						onClick={() => setOpenProjectModal(true)}
						style={{ marginTop: "2rem" }}
						startIcon={<AddIcon />}
						variant="outlined"
						size="large"
					>
						Add project
					</Button>
				</div>
				<div>
					<img src={projectPic} height="400px" />
				</div>
			</SubContainer>
			<Projects />
			<Modal
				open={openDetailsModal}
				onClose={() => {
					if (firstName && lastName && emailId && collegeName && yearOfStudy)
						setOpenDetailsModal(false);
				}}
			>
				<ModalContainer>
					<StyledTextField
						value={firstName}
						onChange={(event) => setFirstNname(event.target.value)}
						label="First name"
						variant="standard"
					/>
					<StyledTextField
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
						label="Last name"
						variant="standard"
					/>
					<StyledTextField
						value={emailId}
						onChange={(event) => setEmailId(event.target.value)}
						label="Email ID"
						variant="standard"
					/>
					<StyledTextField
						value={collegeName}
						onChange={(event) => setCollegeName(event.target.value)}
						label="College Name"
						variant="standard"
					/>
					<Autocomplete
						options={countries}
						onChange={(event, newValue) => {
							console.log(newValue);
							setYearofStudy(newValue.label);
						}}
						inputValue={yearOfStudy}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								{option.label}
							</Box>
						)}
						renderInput={(params) => (
							<StyledTextField
								style={{ marginRight: "20px" }}
								{...params}
								label="Year of Study"
								variant="standard"
							/>
						)}
					/>

					<Button
						fullWidth
						variant="contained"
						onClick={() => onSubmitSignUpDetails()}
					>
						Send
					</Button>
				</ModalContainer>
			</Modal>
			<Modal
				open={openProjectModal}
				onClose={() => {
					setOpenProjectModal(false);
				}}
			>
				<ModalContainer>
					<StyledTextField
						value={projectName}
						onChange={(event) => setProjectName(event.target.value)}
						label="Project name"
						variant="standard"
					/>
					<Autocomplete
						options={categories}
						onChange={(event, newValue) => {
							setCategory(newValue.label);
						}}
						inputValue={category}
						autoHighlight
						getOptionLabel={(option) => option.label}
						renderOption={(props, option) => (
							<Box
								component="li"
								sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								{option.label}
							</Box>
						)}
						renderInput={(params) => (
							<StyledTextField
								style={{ marginRight: "20px" }}
								{...params}
								label="Category"
								variant="standard"
							/>
						)}
					/>
					<StyledTextField
						value={timePeriod}
						onChange={(event) => setTimePeriod(event.target.value)}
						label="Time Period (in months)"
						variant="standard"
					/>
					<StyledTextField
						id="filled-multiline-static"
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						label="Description,skills"
						variant="standard"
						multiline
						rows={4}
					/>
					<Button
						fullWidth
						variant="contained"
						onClick={() => onSubmitProjectDetails()}
					>
						Add
					</Button>
				</ModalContainer>
			</Modal>
		</Container>
	);
}

const StyledTextField = styled(TextField)`
	margin: 10px;
`;

const ModalContainer = styled.div`
	height: 80vh;
	width: 40vw;
	background-color: #fff;
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	/* vertical-align: middle; */
`;

const Container = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubContainer = styled.div`
	background-color: #c3e6ff;
	height: 70vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const BigText = styled.h3`
	color: #0938b6;
	font-size: 3.5rem;
	text-align: center;
	margin: 0;
`;

const SmallText = styled.h5`
	color: #fff;
	margin: 0;
	font-size: 2rem;
`;

const countries = [
	{ label: "First Year" },
	{ label: "Second Year" },
	{ label: "Third Year" },
	{ label: "Fourth Year" },
	{ label: "Fifth Year" },
];

const categories = [
	{ label: "Machine Learning" },
	{ label: "Artificial Intelligence" },
	{ label: "Deep learning" },
	{ label: "Web development" },
	{ label: "Python" },
	{ label: "C++" },
	{ label: "App devlopment" },
	{ label: "Data visualization" },
	// { label: "" },
];
