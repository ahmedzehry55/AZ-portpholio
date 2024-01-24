import React from 'react';
import Image from 'next/image'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Gprojects } from '../../constants/constants';

const GProjects = () => (
  <Section nopadding id="projects">
    <SectionDivider main />
    <SectionTitle main>Graphic Projects</SectionTitle>
    <GridContainer>
      {Gprojects.map(({image, i }) => (
          <BlogCard key={i}>
            <Image width={250}  height={250} src={image} />
          </BlogCard>
        ))}
    </GridContainer>
  </Section>
);

export default GProjects;