import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import IconButton from "@mui/material/IconButton";
import * as projectActions from "../store/action/Project";
import Request from "../components/Request";
import { CircularProgress } from "@mui/material";
import {Paper } from "@mui/material";

export default function ProfileScreen() {
	const user = useSelector((state) => state.Auth);
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const [project, setProject] = useState({});

	useEffect(() => {
		showProfile();
	}, []);

	const showProfile = async () => {
		try {
			setIsLoading(true);
			const response = await dispatch(projectActions.showProfile(user.token));
			console.log(response);
			setProject(response.project);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			alert("Something went wrong");
		}
	};
	console.log(project);

	const getAllApplications = () => {
		return project?.apply?.map((p) => {
			console.log(p);
			return <Request mentee={p} />;
		});
	};

	if (isLoading)
		return (
			<div
				style={{
					height: "100vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CircularProgress />
			</div>
		);

	return (
		<>
			<NavBar />
			<Container>
				<ProfileContainer>
					<BigText>Profile Details</BigText>
					<Text>
						{" "}
						<IconButton>
							<PersonIcon />
						</IconButton>
						{user.firstName} {user.lastName}
					</Text>
					<Text>
						<IconButton>
							<ContactPhoneIcon />
						</IconButton>
						{user.phoneNumber}
					</Text>
					<Text>
						<IconButton>
							<EmailIcon />
						</IconButton>
						{user.emailId}
					</Text>
					<Text>
						<IconButton>
							<CalendarTodayIcon />
						</IconButton>
						{user.yearOfStudy}
					</Text>
					<Text>
						<IconButton>
							<SchoolIcon />
						</IconButton>
						{user.collegeName}
					</Text>
				</ProfileContainer>
				<RequestContainer>
					<BigText>Review collaboration request</BigText>
					{getAllApplications()}</RequestContainer>
			</Container>
		</>
	);
}

const BigText = styled.p`
	color: #0938b6;
	font-size: 2rem;
	font-weight: bold;
	text-align: left;
`;

const Text = styled.p`
	color: #000;
	font-size: 1rem;
	text-align: left;
`;

const Container = styled.div`
	position: absolute;
	width: 100vw;
	display: flex;
	background-color: #c3e6ff;
	flex-direction: row;
	align-items: center;
`;

const ProfileContainer = styled(Paper)`
	height: 100vh;
	width: 30vw;
	background-color: #c3e6ff;
	color: #0938b6;
	padding-left: 40px;
	display: flex;
	// margin-left: 30px;
	flex-direction: column;
`;

const RequestContainer = styled.div`
	height: 100vh;
	width: 70vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
