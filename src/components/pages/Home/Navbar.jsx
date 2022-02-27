import styled from "styled-components";

const Container = styled.nav`
    align-items: center;
    color: white;
    display: flex;
    fill: white;
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
        width: 1.5em;
        height: 1.5em;
    }

    #navbar-links {
        font-family: inherit;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        gap: 1em;
    }

    @media screen and (min-width: calc(768em / 16)) {
        font-size: 1.5em;
    }

    @media screen and (min-width: calc(1440em / 16)) {
        font-size: 2em;
    }
`;

const Navbar = ({ children: links, icon }) => {
	return (
		<Container id="navbar-home">
			<div id="navbar-icon">{icon}</div>
			<div id="navbar-links">{links}</div>
		</Container>
	);
};

export default Navbar;