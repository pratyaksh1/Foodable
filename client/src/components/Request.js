import React from "react";
import styled from "styled-components";
import Link from "react-router-dom";
import { Button, Paper } from "@mui/material";
import { useSelector } from "react-redux";

export default function Request({ mentee, mentor }) {
	const user = useSelector((state) => state.Auth);
	return (
		<Req>
			<BigText style={{ textAlign: "left" }}>
				{mentee.mentee.firstName} {mentee.mentee.lastName}
			</BigText>

			<BigText style={{ textAlign: "left" }}>{/* {mentee.mentee.} */}</BigText>

			<SmallText>{mentee.description}</SmallText>
			<Button
				style={{ marginLeft: 0, marginRight: "auto", alignSelf: "flex-start" }}
				href={`mailto:${mentee.mentee.emailId}?body=My custom mail body`}
			>
				Contact him
			</Button>
		</Req>
	);
}

const Row = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Req = styled(Paper)`
	/* background-color: #c3e6ff; */
	color: #000;
	width: 80%;
	padding: 10px;
	box-sizing: border-box;
	margin: 20px 0;
`;

const BigText = styled.p`
	color: #0938b6;
	font-size: 1.5rem;
`;

const SmallText = styled.p`
	text-align: left;
`;


