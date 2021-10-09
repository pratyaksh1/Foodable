import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoPic from "../assets/huge.png";
import { useHistory } from "react-router";

export default function NavBar() {
	 const history = useHistory()
	return (
		<Container>
			<Logo src={LogoPic} onClick={()=>history.push("/home" )}/>
			<SubContainer>
				<StyledLink to="#">About Us</StyledLink>
				<StyledLink to="#">Contact</StyledLink>
				<StyledLink to="profile">My Account</StyledLink>
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
	z-index: 1;
`;

const Logo = styled.img`
	cursor: pointer;
	width: 4rem;
`;

const SubContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40vw;
`;
