import Poster from "./Poster";
import styled from "styled-components";

const Container = styled.section``;

const Home = ({ propsDestruct }) => {
	return (
		<Container id="page-home">
			<Poster switchDuration={5000} info={[ "http://placekitten.com/200/300", "http://placekitten.com/500/300" ]}>
			</Poster>
		</Container>
	);
};

export default Home;