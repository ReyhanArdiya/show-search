import styled from "styled-components";
import { useState } from "react";

const Container = styled.nav`
    align-items: center;
    display: flex;
    font: 400 1em "Archivo Black", sans-serif;
    justify-content: space-between;
    padding: 0.75em;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;

    #navbar-icon {
        height: 1.5em;
        flex-grow: 0.2;
        align-items: center;
        display: flex;
        justify-content: flex-start;
    }

    #navbar-icon > *:first-child {
        cursor: pointer;
        width: 1.5em;
        height: 1.5em;
        fill: white;
    }

    #navbar-links {
        color: #ffffff7a;
        font-family: inherit;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        gap: 1em;
    }

    #navbar-links > * {
        cursor: pointer;
        transition: color 0.15s ease-in;
    }

    #navbar-links > *:nth-child(${({ activeLink }) => activeLink}),
    #navbar-links > *:hover {
        color: white;
        border-bottom: 0.25em solid white;
    }

    @media screen and (min-width: calc(768em / 16)) {
        font-size: 1.5em;
    }

    @media screen and (min-width: calc(1440em / 16)) {
        font-size: 2em;
    }
`;

const Navbar = ({ links, icon }) => {
	const [ activeLink, setActiveLink ] = useState(1);

	links = links.map(
		(link, i) => <p data-which={i + 1} key={i + 1}>{link}</p>
	);

	const changeActiveLink = ({ target }) => {
		if (target.id !== "navbar-links") {
			setActiveLink(target.dataset.which);
		}
	};

	return (
		<Container activeLink={activeLink} id="navbar-home">
			<div id="navbar-icon">{icon}</div>
			<div onClick={changeActiveLink} id="navbar-links">{links}</div>
		</Container>
	);
};

export default Navbar;