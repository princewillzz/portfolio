import React from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import * as profileAnimation from "./p1.json";



export const Loader = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: profileAnimation.default,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<LoaderWrapper>
			<Lottie 
        options={defaultOptions} 
        height={300} 
        width={300} 
      />
      {/* <iframe 
        src="https://embed.lottiefiles.com/animation/8020">
      </iframe> */}

      <div className="animationCreator">
        <a 
          href="https://lottiefiles.com/vigneshmv" 
          target="_blank" 
          rel="noopener noreferrer">
            Loader@vigneshmv
        </a>
      </div>

		</LoaderWrapper>
	);
};

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

  .animationCreator {
    position: absolute;
    bottom: 5px;
    right: 10px;

  }
  .animationCreator a {
    color: lightblue;
  }
`;
