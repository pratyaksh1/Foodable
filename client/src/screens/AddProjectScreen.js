import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AddProjectScreen() {
	return (
		<div>
			<TextField id="standard-basic" label="Project name" variant="standard" />
			<TextField
				id="filled-multiline-static"
				label="Multiline"
				multiline
				rows={4}
				defaultValue="Default Value"
				variant="filled"
			/>
		</div>
	);
}
