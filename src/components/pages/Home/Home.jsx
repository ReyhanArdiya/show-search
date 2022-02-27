import Poster from "./Poster";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.section``;

const Home = () => {
	const [ info, setInfo ] = useState([]);

	/* CMT The original goal of this function was to get trending shows, but I can't
     seem to find an API for it that doesn't require authenciation so Imma fake it */
	const getTrendingShows = async () => {
		const shows = [ "the cuphead show", "euphoria", "what we do in the shadows", "WandaVision" ];
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

	useEffect(() => getTrendingShows(), []);

	return (
		<Container id="page-home">
			<Poster
				overlayOpacity={0.7}
				switchDuration={5000}
				fadeDuration={1000}
				info={info}
			/>
		</Container>
	);
};

export default Home;