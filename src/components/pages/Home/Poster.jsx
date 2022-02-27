import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const Container = styled.article`
    width: 100%;
    background-color: black;
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 320px;

    #poster-item {
        width: 100%;
        object-fit: cover;
        transition: opacity ${({ fadeDuration }) => fadeDuration}ms ease-in;
    }

    @media screen and (min-width: calc(768em / 16)) and (min-height: calc(640em / 16)) {
        height: 100vh;
    }
`;

/**
 *
 * @param {{info: string[], switchDuration: number, fadeDuration: number}} props
 *
 */
const Poster = ({ info, switchDuration, fadeDuration }) => {
	const [ whichSrc, setWhichSrc ] = useState(0);
	const imgRef = useRef();
	const isInfoValid = info && info.length;

	const switchImage = () => {
		if (isInfoValid) {
			// Gives the fade-in transition on start
			imgRef.current.style.opacity = 1;

			setTimeout(async () => {
			// Fade out the image first
				await new Promise(resolve => {
					imgRef.current.style.opacity = 0;
					setTimeout(resolve, fadeDuration);
				});

				// Render a new image after prev image is dark
				setWhichSrc(
					prevSrc => prevSrc !== info.length - 1 ? prevSrc + 1 : 0
				);
			}, switchDuration);
		}
	};

	useEffect(
		switchImage,
		[ fadeDuration, info?.length, isInfoValid, switchDuration, whichSrc ]
	);

	return (
		<Container fadeDuration={fadeDuration}>
			{isInfoValid ? <img ref={imgRef} id="poster-item" src={info[whichSrc]} alt="" /> : <div id="poster-item"></div>}
		</Container>
	);
};

export default Poster;