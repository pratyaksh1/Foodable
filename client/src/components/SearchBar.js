import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchBar() {
	return (
		<Paper
			component="form"
			sx={{
				marginTop: "2rem",
				p: "2px 4px",
				display: "flex",
				alignItems: "center",
				width: "40vw",
				borderRadius: "0.7rem",
			}}
		>
			<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for projects" />
			<IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
				<SearchIcon />
			</IconButton>
			{/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
		</Paper>
	);
}
