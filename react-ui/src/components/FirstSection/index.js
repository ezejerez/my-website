import React from 'react';
import {
  FirstSectionContainer,
  FirstSectionBg,
  VideoBg,
  FirstSectionContent,
  FirstSectionH1,
  FirstSectionH2,
  FirstSectionP1,
} from './FirstSectionElements';
import backgroundVideo from '../../videos/video.mp4';

const FirstSection = () => {
  return (
    <FirstSectionContainer>
      <FirstSectionBg>
        <VideoBg autoPlay loop muted src={backgroundVideo} type='video/mp4' />
      </FirstSectionBg>
      <FirstSectionContent>
        <FirstSectionP1>Hi, my name is</FirstSectionP1>
        <FirstSectionH1>EZEQUIEL JEREZ</FirstSectionH1>
        <FirstSectionH2>{'<Welcome to my portfolio/>'}</FirstSectionH2>
      </FirstSectionContent>
    </FirstSectionContainer>
  );
};

export default FirstSection;
