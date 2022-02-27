import styled from "styled-components";
import { useEffect, useState } from "react";

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
 * @param {{info: string[], switchDuration: number}} props
 *
 */
const Poster = ({ info, switchDuration }) => {
	const [ whichSrc, setWhichSrc ] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setWhichSrc(
				prevSrc => prevSrc !== info.length - 1 ? prevSrc + 1 : 0
			);
		}, switchDuration);
	}, [ info.length, switchDuration ]);

	return (
		<Container>
			<img id="poster-item" src={info[whichSrc]} alt="" />
		</Container>
	);
};

export default Poster;