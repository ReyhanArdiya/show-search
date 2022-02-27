import Home from "./pages/Home/Home";
import styled from "styled-components";

const Container = styled.main`
	overflow: hidden;
	font-size: 1em;
	min-width: 320px;
	min-height: 320px;
`;

const App = () => {
	return (
		<Container id="App">
			<Home />
		</Container>
	);
};

export default App;
