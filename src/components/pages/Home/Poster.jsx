import React from "react";
import styled from "styled-components";

const Container = styled.article`
    width: 100%;
    height: max-content;

    #poster-item {
        width: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: calc(768em / 16)) and (min-height: calc(640em / 16)) {
        height: 100vh;
    }
`;

/**
 *
 * @param {{info: [{type: String, url: String}]}} props
 *
 */
const Poster = ({ info }) => {
	return (
		<Container>
			<img id="poster-item" src="http://placekitten.com/1000/1000" alt="" />
		</Container>
	);
};

export default Poster;