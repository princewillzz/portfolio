import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { AppColors } from "../assets/AppColors";

export default function Navbar({ sectionBackgroundColor }: any) {
	// const [prevScrollpos, setPrevScrollpos] = useState(0);
	const prevScrollpos = useRef(0);
	const [visible, setVisible] = useState(true);
	const [makeOpacity, setMakeOpacity] = useState(false);

	const handleScroll = useCallback(() => {
		const currentScrollPos = window.pageYOffset;
		const visible = prevScrollpos.current > currentScrollPos;

		// console.log(prevScrollpos, currentScrollPos, visible);

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

	// console.log(visible);

	return (
		<NavbarContainer textHoverColor={AppColors.navbarHoverTextColor}>
			<nav
				style={{
					backgroundColor: sectionBackgroundColor
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
						<a href="#Experience">
							Experience
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
		</NavbarContainer>
	);
}

interface NavbarProps {
	textHoverColor: string
}
const NavbarContainer = styled.div<NavbarProps>`

	.navbar {
		// background-color: red !important;
		height: 9vh;

		display: flex;
		justify-content: space-between;
		/* justify-content: center; */
		align-items: center;
		color: #fff;
		/* padding-inline: 5rem; */

		flex-flow: row nowrap;
		position: fixed;
		width: 100%;
		z-index: 999;
		margin: 0 auto;
		padding: 0;

		top: 0;
		transition: top 0.6s;
	}

	.navbar__opacity {
		opacity: 0.6;
	}

	.navbar--hidden {
		top: -100px;
	}

	.logo-title {
		margin-left: 5rem;
	}
	.nav-links {
		margin-right: 5rem;
		display: flex;
		gap: 3rem;
		/* justify-content: center;
		align-items: center; */
	}

	.nav-link a {
		color: #fff;
		background-color: transparent;
		text-decoration: none;
		display: block;
		position: relative;
		padding: 0.2em 0;

		font-size: 16px;
	}

	.nav-link a:hover {
		color: ${props => props.textHoverColor};
	}

	/* Fade in */
	.nav-link a::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.1em;
		background-color: hotpink;
		opacity: 0;
		transition: opacity 300ms, transform 300ms;
	}

	.nav-link a:hover::after,
	.nav-link a:focus::after {
		opacity: 1;
		transform: translate3d(0, 0.2em, 0);
	}

`