import styled from "styled-components";

const Container = styled.nav`
    position: absolute;
    top: 0;
    z-index: 10;
    color: white;
    fill: white;
    width: 100%;
    padding: 0.75em 0;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    font: 400 1em "Archivo Black", sans-serif;

    > *:nth-of-type(1) {
        flex-grow: 0.4;
    }

    #navbar-links {
        font-family: inherit;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
        gap: 0.5em;
        flex-grow: 1;
    }
`;

const Navbar = ({ children: links, icon }) => {
	return (
		<Container id="navbar-home">
			{icon}
			<div id="navbar-links">{links}</div>
		</Container>
	);
};

export default Navbar;