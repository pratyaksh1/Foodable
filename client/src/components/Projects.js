import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "./Card";
import { useSelector } from "react-redux";

export default function Projects() {
	const projects = useSelector((state) => state.Project);
	const [allProjects, setAllProjects] = useState(projects.projects);

	const getProjects = () => {
		return allProjects?.map((p) => {
			return (
				<ProjectCard
					key={p._id}
					_id={p._id}
					name={p.name}
					description={p.description}
					timePeriod={p.timePeriod}
					category={p.category}
					mentor={p.mentor}
				/>
			);
		});
	};
	return (
		<Container>
			<Title>Recent projects</Title>
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
