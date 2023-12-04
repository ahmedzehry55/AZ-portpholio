import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';



const Timeline = () => (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      I'm an enthusiastic and detail-oriented Frontend developer can help you to build a modern and responsive wep application .
      </SectionText>
      <Button onClick = { () => window.location = "https://rb.gy/sfa1hn"} >Contact</Button>
      <SectionDivider />
    </Section>
  );


export default Timeline;
