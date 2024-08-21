import React from "react"
import { assects } from "../assets/assect"

const Navbar = () => {
	return (
		<div style={{ borderBottom: "1px solid #000" }}>
			<img
				src={assects.logo}
				alt="logo"
				style={{ padding: "4px 15px" }}
			/>
		</div>
	)
}

export default Navbar
