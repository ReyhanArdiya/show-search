import styled from "styled-components";

const Container = styled.header`
    color: white;
`;

const Intro = ({ title, subtitle }) => {
	return (
		<Container className="intro">
			<h1>{ title }</h1>
			<h2>{ subtitle }</h2>
		</Container>
	);
};

export default Intro;