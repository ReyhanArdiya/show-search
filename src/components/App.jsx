import Home from "./pages/Home/Home";
import styled from "styled-components";

const Container = styled.main`
	overflow: hidden;
`;

const App = () => {
	return (
		<Container id="App">
			<Home />
		</Container>
	);
};

export default App;
