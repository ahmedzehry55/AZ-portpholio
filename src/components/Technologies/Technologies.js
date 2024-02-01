import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Tech } from '../../constants/constants';
const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Design To Back-end 
    </SectionText>
    <List>
      {Tech.map(({icon , title, text1,text2,text4,text3, i}) => (
        <ListItem key ={i}>
        <picture >
          {icon}
        </picture>
        <ListContainer>
          <ListTitle>{title}</ListTitle>
          <ListParagraph>
            {text1} <br /> {text2} <br /> {text3} <br /> {text4}
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      ))}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
