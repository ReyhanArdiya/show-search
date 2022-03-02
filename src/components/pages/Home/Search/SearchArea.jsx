import SearchContext from "../../../../context/search-context";
import styled from "styled-components";

const Container = styled.section`
	background: ${({ background }) => background};
	min-height: 500px;
	height: 80vmax;
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

	@media screen and (min-width: calc(768em / 16)) {
		grid-template-columns: 1fr 1fr 1fr 1fr;

		> * {
			grid-area: span 1/ span 1 !important;
		}
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

const SearchArea = ({ background }) => {
	return (
		<SearchContext.Consumer>
			{({ searchResults }) => {
				return (
					<Container
						id="search-area"
						background={background}
					>
						<SearchResults id="search-results">
							{specifyBigImages(
								searchResults.map(({ img }) => ({ src : img })),
								4,
								2
							)}
						</SearchResults>
					</Container>
				);
			}}
		</SearchContext.Consumer>
	);
};

export default SearchArea;