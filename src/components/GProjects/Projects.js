import React from 'react';
import Image from 'next/image'
import { BlogCard,  GridContainer} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Gprojects } from '../../constants/constants';

const GProjects = () => (
  <Section nopadding id="gprojects">
    <SectionDivider main />
    <SectionTitle main>Graphic Design</SectionTitle>
    <GridContainer>
      {Gprojects.map(({image, i }) => (
          <BlogCard  key={i}>
            <Image height={300} width={400} src={image} />
          </BlogCard>
        ))}
    </GridContainer>
  </Section>
);

export default GProjects;