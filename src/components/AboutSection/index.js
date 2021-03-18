import React from 'react';
import {
  AboutSectionContainer,
  AboutSectionContent,
  AboutSectionTitle,
  AboutSectionP1,
  AboutSectionP2,
} from './AboutElements';

const AboutSection = () => {
  return (
    <div id='about'>
      <AboutSectionContainer>
        <AboutSectionContent>
          <AboutSectionTitle>About me:</AboutSectionTitle>
          <AboutSectionP1>
            Hello! I'm Ezequiel, a software developer from Buenos Aires,
            Argentina.
          </AboutSectionP1>
          <AboutSectionP2>
            I enjoy learning new stuff and I have 2 years of experience using
            tecnologies as: HTML, CSS, JavaScript and React JS.
          </AboutSectionP2>
        </AboutSectionContent>
      </AboutSectionContainer>
    </div>
  );
};

export default AboutSection;
