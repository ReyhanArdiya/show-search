import styled from "styled-components";

const Container = styled.section`
	background: ${({ background }) => background};
	height: 350px;
	overflow-y: auto;
	position: relative;
	z-index: 2;

	::-webkit-scrollbar {
		display: none;
	}
`;

const SearchResults = styled.section`
	display: grid;
	gap: 0.5em;
	grid-auto-rows: min-content;
	grid-template-columns: 1fr 1fr 1fr;
	height: max-content;
	margin: 0 auto 1em auto;
	width: 85%;

	> * {
		max-width: 100%;
	}
`;

/**
 * When given a string array of img sources, make the first img big by grid-area
 * span inline style and every img after that on `stepOne` and `stepTwo`.
 *
 * @param {string[]} srcArr
 *
 * @param {number} stepOne
 *
 * @param {number} stepTwo
 *
 * @example
 * Make img 0, 4, 6, 10, 12... big
 * ```js
 *	specifyBigImages(srcArr, 4, 2);
 * ```
 *
 */
const specifyBigImages = (srcArr, stepOne, stepTwo) => {
	let makeBig = 0;
	let step = 0;

	return srcArr.map(({ src }, i) => {
		let gridArea;

		if (i === makeBig) {
			gridArea = "span 2/ span 2";
			step = step === stepTwo || !step ? stepOne : stepTwo;
			makeBig += step;
		}

		return (
			<img
				src={src}
				alt=""
				key={i}
				style={{ gridArea }}
			/>
		);
	});
};

const SearchArea = ({ background, searchResults }) => {
	searchResults &&= specifyBigImages(searchResults, 4, 2);

	return (
		<Container
			id="search-area"
			background={background}
		>
			<SearchResults id="search-results">
				{searchResults}
			</SearchResults>
		</Container>
	);
};

export default SearchArea;