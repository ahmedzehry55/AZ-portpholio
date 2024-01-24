import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import AboutMe from '../components/AboutMe/AboutMe'
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import GProjects from '../components/GProjects/Projects';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <GProjects/>
      <Technologies />
      <AboutMe />
    </Layout>
  );
};

export default Home;
