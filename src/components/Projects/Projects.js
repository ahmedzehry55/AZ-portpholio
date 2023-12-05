import React from 'react';
import Image from 'next/image'
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider main />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({image, title,description , i , visit , source, tags }) => (
          <BlogCard key={i}>
          <Image width={250}  height={250} src='/babaabdorest.PNG' />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => {
                  return <Tag key={i}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>website</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
    </GridContainer>
  </Section>
);

export default Projects;