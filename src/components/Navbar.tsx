import { MenuFoldOutlined } from "@ant-design/icons";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from 'styled-components';
import { AppColors } from "../assets/AppColors";

const navlinksData = [
	{
		href: "About",
		linkContent: "About"
	},
	{
		href: "Experience",
		linkContent: "Experience"
	},
	{
		href: "Projects",
		linkContent: "Projects"
	},
	// {
	// 	href: "Statistics",
	// 	linkContent: "Statistics"
	// },
	{
		href: "ContactMe",
		linkContent: "Contact Me"
	},
]

export default function Navbar({ sectionBackgroundColor }: any) {
	// const [prevScrollpos, setPrevScrollpos] = useState(0);
	const prevScrollpos = useRef(0);
	const [visible, setVisible] = useState(true);
	const [makeOpacity, setMakeOpacity] = useState(false);
	const [isNavbarDrawerOpen, setIsNavbarDrawerOpen] = useState<boolean>(false);


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

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const _renderNavlinkItems = () => navlinksData.map((_navlinkData, _index) => (
		<div className="nav-link" key={_index}>
			<a href={`#${_navlinkData.href}`} onClick={() => handleChangeIsNavbarDrawerOpen(false)}>
				{_navlinkData.linkContent}
			</a>
		</div>
	))

	const handleChangeIsNavbarDrawerOpen = (_isNavbarDrawerOpen: boolean) => {
		setIsNavbarDrawerOpen(_isNavbarDrawerOpen)
	}

	return (
		<NavbarContainer 
			textHoverColor={AppColors.navbarHoverTextColor}
		>
			<nav
				style={{
					backgroundColor: sectionBackgroundColor
				}}
				className={`navbar ${!visible? "navbar--hidden": ''} ${makeOpacity? "navbar__opacity": ''}`}
			>
				<section className="logo-title">
						<a href="/">
							<img src={"/logo.png"} height={70} width={70} alt="HT"/>
						</a>
				</section>

				<section className={`navbar-collapse-container`}>

					<div className={`navbar-collapse-btn ${isNavbarDrawerOpen? 'rotated-menu-drawer-btn': ''}`}>
						<MenuFoldOutlined 
							onClick={() => handleChangeIsNavbarDrawerOpen(!isNavbarDrawerOpen)}
							style={{ fontSize: 28 }} 
						/>
					</div>
					
					<section className={`nav-links ${isNavbarDrawerOpen? 'open-sidebar': ''}`}>
						{_renderNavlinkItems()}
					</section>

				</section>

			</nav>
		</NavbarContainer>
	);
}

interface NavbarProps {
	textHoverColor: string
}
const NavbarContainer = styled.div<NavbarProps>`

	// navbar links
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


	.navbar {
		height: 70px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		color: #fff;

		flex-flow: row nowrap;
		position: fixed;
		width: 100%;

		padding: 0;
		margin: 0 auto;
		top: 0;
		z-index: 9;       
		transition: top 0.6s;

	}

	.navbar__opacity {
		opacity: 0.6;
	}

	.navbar--hidden {
		top: -100px;
	}




	/* Large Screen */
	@media only screen and (min-width: 800px) {
			
		.logo-title {
			margin-left: 5rem;
			opacity: 1 !important;
		}
		
		.nav-links {
			margin-right: 5rem;
		
			display: flex;
			gap: 3rem;
		}


		.navbar-collapse-btn {
			display: none;
		}
	}


	/* Small Screen */
	@media only screen and (max-width: 800px) {
		.logo-title {
			margin-left: 1.5rem;
		}
		
		.navbar-collapse-container {
			margin-right: 1.5rem;
		}
		.navbar-collapse-btn {
			z-index: 10 !important;
			position: relative;
		}
		.navbar-collapse-btn {
			transform: rotate(90);
		}

		.navbar-collapse-btn .anticon {
			transition: 600ms;
		}
		.rotated-menu-drawer-btn .anticon {
			transform: rotate(-180deg);
		}


		.nav-links {
			height: 100%; /* 100% Full-height */
			width: 0; /* 0 width - change this with JavaScript */
			position: fixed; /* Stay in place */
			z-index: 1; /* Stay on top */
			top: 0; /* Stay at the top */
			right: 0;
			background-color: #2a3774; 
			overflow-x: hidden; /* Disable horizontal scroll */
			padding-top: 60px; /* Place content 60px from the top */
			transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */

			/* text-align: center; */
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

		}
		
		.open-sidebar {
			width: min(80%, 500px);

			opacity: 0.9;
		}

		.nav-link:first-child {
			margin-top: 1rem;
		}
		.nav-link a {
			font-size: 32px !important;
			/* color: rgb(228, 110, 0) !important; */
			/* color: hotpink !important; */
		}
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