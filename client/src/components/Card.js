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

export default function ProjectCard() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

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
						src="https://i.pravatar.cc/230"
						aria-label="recipe"
					></Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title="Project Name"
				subheader="Time Period"
			/>
			<CardContent>
				<Typography variant="body2" color="#0938b6">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the
					mussels, if you like.
				</Typography>
			</CardContent>
			<Row>
				<Chip
					label="AI"
					style={{ margin: "5px" }}
					size="small"
					variant="outlined"
				/>
				<Chip
					label="DL"
					style={{ margin: "5px" }}
					size="small"
					variant="outlined"
				/>
				<Chip
					label="Web Development"
					style={{ margin: "5px" }}
					size="small"
					variant="outlined"
				/>
				<Chip
					label="Robotics"
					style={{ margin: "5px" }}
					size="small"
					variant="outlined"
				/>
			</Row>
			<CardActions disableSpacing>
				<IconButton>
					<PersonIcon />
				</IconButton>
				<Typography variant="body2" color="text.secondary">
					User name
				</Typography>
			</CardActions>
		</Card>
	);
}

const Row = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	margin: 10px;
`;
