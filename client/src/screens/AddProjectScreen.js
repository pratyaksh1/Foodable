import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
export default function AddProjectScreen() {
	return (
		<div>
			{/* <ModalContainer>
				<StyledTextField label="Project name" variant="standard" />
				<StyledTextField label="Category" variant="standard" />
				<StyledTextField label="Time Period" variant="standard" />
				<StyledTextField
					id="filled-multiline-static"
					label="Description,skills"
					variant="standard"
					multiline
					rows={4}
				/>
				
			</ModalContainer> */}
		</div>
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
