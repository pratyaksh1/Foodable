import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoPic from "../assets/huge.png";

export default function NavBar() {
	return (
		<Container>
			<Logo src={LogoPic} to="/home" />
			<SubContainer>
				<StyledLink to="#">Categories</StyledLink>
				<StyledLink to="#">About Us</StyledLink>
				<StyledLink to="#">Contact</StyledLink>
				<StyledLink to="#">My Account</StyledLink>
				<StyledLink to="/sign-up">Create Account</StyledLink>
			</SubContainer>
		</Container>
	);
}

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
`;

const Container = styled.div`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 10vh;
	padding: 3rem;
	box-sizing: border-box;
`;

const Logo = styled.img`
	width: 6rem;
`;

const SubContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40vw;
`;
