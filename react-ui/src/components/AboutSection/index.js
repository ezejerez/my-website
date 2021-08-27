import React from 'react';
import {
  AboutSectionContainer,
  AboutSectionContent,
  AboutSectionTitle,
  AboutSectionP1,
  AboutSectionP2,
  AboutSectionList,
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
            tecnologies as:
          </AboutSectionP2>
          <AboutSectionList>
            <div>
              <ul>
                <li>React JS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </AboutSectionList>
        </AboutSectionContent>
      </AboutSectionContainer>
    </div>
  );
};

export default AboutSection;
