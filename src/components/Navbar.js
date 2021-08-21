import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { AppColors } from "../assets/AppColors";

import "../assets/css/Navbar.css";

export default function Navbar() {
	// const [prevScrollpos, setPrevScrollpos] = useState(0);
	const prevScrollpos = useRef(0);
	const [visible, setVisible] = useState(true);
	const [makeOpacity, setMakeOpacity] = useState(false);

	const handleScroll = useCallback(() => {
		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos.current > currentScrollPos;

		console.log(prevScrollpos, currentScrollPos, visible);

		prevScrollpos.current = currentScrollPos;
		// setPrevScrollpos(currentScrollPos);
		if (currentScrollPos > 20) {
			setMakeOpacity(true);
		} else {
			setMakeOpacity(false);
		}
		setVisible(visible);
	}, []);

	useLayoutEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	console.log(visible);

	return (
		<>
			<nav
				style={{
					backgroundColor: AppColors.backgroundBlue,
				}}
				className={`navbar ${!visible && "navbar--hidden"} ${
					makeOpacity && "navbar__opacity"
				}`}
			>
				<section className="logo-title">
					<h1>"H</h1>
				</section>
				<section className="nav-links">
					<div className="nav-link">
						<a className="link" href="#About">
							About
						</a>
					</div>
					<div className="nav-link">
						<a href="#Projects">Projects</a>
					</div>
					<div className="nav-link">
						<a href="#ContactMe">Contact Me</a>
					</div>
				</section>
			</nav>
		</>
	);
}
