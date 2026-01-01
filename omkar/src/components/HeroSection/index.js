import React, { useState, useEffect } from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/HeroImage.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    let timer;

    const switchPhase = () => {
      if (phase === 1) {
        setPhase(2);
        timer = setTimeout(switchPhase, 23000); // Phase 2 duration = 23s
      } else {
        setPhase(1);
        timer = setTimeout(switchPhase, 23000); // Phase 1 duration = 23s
      }
    };

    timer = setTimeout(switchPhase, 23000); // initial Phase 1 duration
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Trust Me,</Title>

            <TextLoop>
              {phase === 1 ? (
                <>
                  I am a{" "}
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                        typeSpeed: 80, // default is ~50, increase for faster typing
                        deleteSpeed: 50, // default is ~50, adjust as needed
                        // delay: 500,
                      }}
                    />
                  </Span>
                </>
              ) : (
                <>
                  I can{" "}
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.newroles,
                        autoStart: true,
                        loop: true,
                        typeSpeed: 100, // default is ~50, increase for faster typing
                        deleteSpeed: 70, // default is ~50, adjust as needed
                        // delay: 500,
                      }}
                    />
                  </Span>
                </>
              )}
            </TextLoop>

            <SubTitle style={{ whiteSpace: "pre-line" }}>
              {Bio.description}
            </SubTitle>

            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
