import React from 'react';

import { Section,  SectionTitle , SectionText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Ahmed Zehry Portfolio
        </SectionTitle>
        <SectionText>
          I can help you by build a modern website to be cool and go viral 
        </SectionText>
        <Button onClick = { () => window.location = "#about"} >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;