import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Projects from "../components/Projects";
import AddIcon from "@mui/icons-material/Add";
import projectPic from "../assets/Projectpic.png";

import Button from "@mui/material/Button";
export default function LandingScreen() {
	return (
		<Container>
			<NavBar />
			<SubContainer>
				<BigText>5000 projects posted here</BigText>
				<SmallText>Your time to learn</SmallText>
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
					<SmallText style={{ color: "#000" }}>Share your project</SmallText>
					<Button
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
		</Container>
	);
}

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
