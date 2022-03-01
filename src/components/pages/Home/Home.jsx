import Intro from "./Intro";
import Poster from "./Poster";
import SearchArea from "./Search/SearchArea";
import SearchBar from "./Search/SearchBar";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Header = styled.header`
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
	position: relative;

	#home-intro {
		position: absolute;
		z-index: 5;
		align-items: center;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		row-gap: 1em;
	}
`;

// TODO change this to useContext later
const SearchAreaBackground = "rgba(78,78,78,1)";

const Home = () => {
	const [ info, setInfo ] = useState([]);

	/* CMT The original goal of this function was to get trending shows, but I can't
     seem to find an API for it that doesn't require authentication, so Imma fake it for now*/
	const getTrendingShows = async (...shows) => {
		const trending = [];

		for (let i = 0; i < shows.length; i++) {
			try {
				const res = await axios.get(
					"https://api.tvmaze.com/singlesearch/shows",
					{ params : { q : shows[i] } }
				);

				trending.push(res.data.image.original);
			} catch (err) {
				console.error(err);
			}
		}

		setInfo(trending);
	};

	useEffect(() => getTrendingShows("the cuphead show", "euphoria", "what we do in the shadows", "WandaVision"), []);

	return (
		<>
			<Header id="home-header">
				<div id="home-intro">
					<Intro
						title="SHOW SEARCH"
						subtitle="Search for the shows you like!"
					/>
					<SearchBar />
				</div>
				<Poster
					overlayOpacity={0.7}
					switchDuration={5000}
					fadeDuration={1000}
					info={info}
					bottomGradient={SearchAreaBackground}
				/>
			</Header>
			<SearchArea background={SearchAreaBackground}>
				<SearchBar />
			</SearchArea>
		</>
	);
};

export default Home;