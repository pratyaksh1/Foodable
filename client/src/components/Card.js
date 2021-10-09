import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import { Button, Modal, TextField, Box } from "@mui/material";

export default function ProjectCard({
	name,
	description,
	timePeriod,
	mentor,
	category,
}) {
	const [seed, setSeed] = React.useState("");
	const [openApplyModal, setOpenApplyModal] = React.useState(false);
	React.useEffect(() => {
		setSeed(Math.floor(Math.random() * 5000));
	}, []);
	const [applyDescription, setApplyDescription] = React.useState("");
	return (
		<Card
			sx={{
				margin: "2rem 0",
				maxWidth: "20rem",
				maxHeight: "25rem",
				color: "#0938b6",
			}}
		>
			<CardHeader
				avatar={
					<Avatar
						sx={{ bgcolor: red[500] }}
						src={`https://i.pravatar.cc/${seed}`}
						aria-label="recipe"
					></Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={name}
				subheader={timePeriod}
			/>
			<CardContent>
				<Typography variant="body2" color="#0938b6">
					{description}
				</Typography>
			</CardContent>
			<Chip
				label={category}
				style={{ margin: "5px" }}
				size="small"
				variant="outlined"
			/>

			<CardActions disableSpacing>
				<IconButton>
					<PersonIcon />
				</IconButton>
				<Typography variant="body2" color="text.secondary">
					{mentor?.firstName}
				</Typography>
				<Button
					variant="contained"
					onClick={() => setOpenApplyModal(true)}
					size="small"
				>
					Apply now
				</Button>
			</CardActions>

			<Modal
				open={openApplyModal}
				onClose={() => {
					setOpenApplyModal(false);
				}}
			>
				<ModalContainer>
					<StyledTextField
						id="filled-multiline-static"
						value={applyDescription}
						onChange={(event) => setApplyDescription(event.target.value)}
						label="Description,skills"
						variant="standard"
						multiline
						rows={4}
					/>
					<Button fullWidth variant="contained" onClick={() => {}}>
						Add
					</Button>
				</ModalContainer>
			</Modal>
		</Card>
	);
}

const Row = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
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

const StyledTextField = styled(TextField)`
	margin: 10px;
`;
