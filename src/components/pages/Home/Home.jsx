import Intro from "./Intro";
import Poster from "./Poster";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.section`
	position: relative;

	#home-header {
		height: 100%;
		align-items: center;
		display: flex;
		justify-content: center;
		position: relative;
	}

	#home-header .intro {
		position: absolute;
		z-index: 5;
	}
`;

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
		<Container id="page-home">
			<header id="home-header">
				<Intro
					title="SHOW SEARCH"
					subtitle="Search for the shows you like!"
				/>
				<Poster
					overlayOpacity={0.7}
					switchDuration={5000}
					fadeDuration={1000}
					info={info}
				/>
			</header>
		</Container>
	);
};

export default Home;