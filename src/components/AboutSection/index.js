import React from 'react';
import {
  AboutSectionContainer,
  AboutSectionContent,
  AboutSectionTitle,
  AboutSectionP1,
  AboutSectionP2,
  AboutSectionP3,
} from './AboutElements';

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <AboutSectionContent>
        <AboutSectionTitle>About me:</AboutSectionTitle>
        <AboutSectionP1>
          Hello! I'm Ezequiel, a software developer from Buenos Aires,
          Argentina.
        </AboutSectionP1>
        <AboutSectionP2>
          I enjoy learning new stuff and i'm currently searching for my first IT
          job.
        </AboutSectionP2>
        <AboutSectionP3>
          I have 2 years of experience using tecnologies as: HTML, CSS,
          JavaScript and React JS.
        </AboutSectionP3>
      </AboutSectionContent>
    </AboutSectionContainer>
  );
};

export default AboutSection;
