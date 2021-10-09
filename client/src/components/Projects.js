import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./Card";

export default function Projects() {
	const [projects, setProjects] = useState([
		{ _id: "1" },
		{ _id: "2" },
		{ _id: "2" },
		{ _id: "2" },
		{ _id: "2" },
		{ _id: "2" },
		{ _id: "2" },
		{ _id: "2" },
		{ _id: "2" },
	]);

	const getProjects = () => {
		return projects.map((p) => {
			console.log(p);
			return <ProjectCard />;
		});
	};
	return (
		<Container>
			<Title>Latest projects</Title>
			<ProjectsContainer>{getProjects()}</ProjectsContainer>
		</Container>
	);
}

const Title = styled.h2`
	font-size: 2rem;
	color: #0938b6;
	margin: 0;
	text-align: left;
	width: 80vw;
	margin-top: 2rem;
`;

const Container = styled.div`
	display: flex;
	width: 100vw;
	flex-direction: column;
	align-items: center;
	background-color: #c3e6ff;
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 80vw;
`;
