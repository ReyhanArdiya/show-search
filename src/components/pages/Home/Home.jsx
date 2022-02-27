import Poster from "./Poster";
import styled from "styled-components";

const Container = styled.section``;

const Home = ({ propsDestruct }) => {
	return (
		<Container id="page-home">
			{/* DBG */}
			<Poster switchDuration={2000} fadeDuration={1000} info={[ "http://placekitten.com/200/300", "http://placekitten.com/400/600", "http://placekitten.com/200/300", "http://placekitten.com/400/600" ]}/>

		</Container>
	);
};

export default Home;