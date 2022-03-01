import styled from "styled-components";

const Container = styled.section`
	background: ${({ background }) => background};
    height: 200px;
	position: relative;
	z-index: 2;
`;

const SearchArea = ({ background, children }) => {
	return (
		<Container
			id="search-area"
			background={background}
		>
			{/* { children } */}
		</Container>
	);
};

export default SearchArea;