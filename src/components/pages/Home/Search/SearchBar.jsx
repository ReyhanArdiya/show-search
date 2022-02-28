import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 2em;
    border-radius: 1em;

    .searchbar-input {
        border-radius: inherit;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        font: 400 1em "Poppins";
        height: 100%;
        max-width: 80%;
        outline: none;
        border: none;
        padding: 0 0.5em;
    }

    .searchbar-icon {
        cursor: pointer;
        border-radius: inherit;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        flex-grow: 1;
        height: 100%;
        background: #D1D1D1;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    /* searchbar icon overlay on hover/active */
    .searchbar-icon {
        cursor: pointer;
        position: relative;
        /* add styles from here */

    }

    .searchbar-icon::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        background-color: black;
        transition: opacity 0.25s linear;
    }

    .searchbar-icon:hover::before {
        opacity: 0.2;
    }

    .searchbar-icon:active::before {
        opacity: 0.4;
        transition: opacity 0.05s linear;
    }
`;

const SearchIcon =
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
	</svg>;

const SearchBar = () => {
	return (
		<Container className="searchbar">
			<input
				type="text"
				className="searchbar-input"
			/>
			<div className="searchbar-icon">
				{SearchIcon}
			</div>
		</Container>
	);
};

export default SearchBar;