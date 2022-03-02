import SearchContext from "../../../../context/search-context";
import styled from "styled-components";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

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
	justify-items: center;
	align-items: center;
	height: max-content;
	margin: 0 auto 1em auto;
	width: 85%;

	> * {
		max-width: 100%;
	}

	@media screen and (min-width: calc(768em / 16)) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		max-width: 850px;

		> * {
			grid-area: span 1/ span 1 !important;
		}
	}
`;

const ShowImage = styled.img`
	border-radius: 0.25em;
	box-shadow: 0px 0.2em 0.315em 0px #000000a1;

	@keyframes scaleImage {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}

	transform-origin: center;
	animation: scaleImage 0.3s 1 ease-out forwards;
`;

/**
 * When given a string array of img sources, make the first img big by grid-area
 * span inline style and every img after that on `stepOne` and `stepTwo`.
 *
 * @param {string[]} srcArr
 *
 * @param {number} spanSize
 *
 * @param {number} stepOne
 *
 * @param {number} stepTwo
 *
 * @example
 * Make img 0, 4, 6, 10, 12... big
 * ```js
 *	createSizedImages(srcArr, 4, 2);
 * ```
 *
 */
const createSizedImages = (srcArr, spanSize, stepOne, stepTwo) => {
	let makeBig = 0;
	let step = 0;

	return srcArr.map(({ src }, i) => {
		let gridArea;

		if (i === makeBig) {
			gridArea = `span ${spanSize}/ span ${spanSize}`;
			step = step === stepTwo || !step ? stepOne : stepTwo;
			makeBig += step;
		}

		return (
			<ShowImage
				src={src}
				alt=""
				key={uuidv4()}
				style={{ gridArea }}
				loading="lazy"
			/>
		);
	});
};

// TODO add clickable link and alt/title here and in the func above
const buildImages = searchResults => {
	const images = searchResults.map(({ img }) => ({ src : img }))
		                        .filter(({ src }) => typeof src === "string");

	return createSizedImages(images, 1, 4, 2);
};

const SearchArea = ({ background }) => {
	const { searchResults } = useContext(SearchContext);

	return (
		<Container
			id="search-area"
			background={background}
		>
			<SearchResults id="search-results">
				{buildImages(searchResults)}
			</SearchResults>
		</Container>
	);
};

export default SearchArea;