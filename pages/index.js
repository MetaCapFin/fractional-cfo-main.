import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer, { SubHeader } from '../components/Footer'; // Updated import statement
import GifPlaceholder from '../components/GifPlaceholder';
import CatchphraseContainer from '../components/CatchphraseContainer';
import SideBySideContainer from '../components/SideBySideContainer';
import MissionContainer from '../components/MissionContainer';
import StatisticsContainer from '../components/StatisticsContainer';
import FractionalCFOContainer from '../components/FractionalCFOContainer';
import NewContainer from '../components/NewContainer';
import KeyValuesContainer from '../components/KeyValuesContainer';
import AdditionalContainer from '../components/AdditionalContainer';

const Home = () => (
  <div>
    <Head>
      <title>Landing Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <main>
      <SubHeader />
      <GifPlaceholder />
      <CatchphraseContainer />
      <SideBySideContainer />
      <MissionContainer />
      <StatisticsContainer />
      <a href="#schedule-meeting" className="schedule-button">SCHEDULE A MEETING</a>
      <FractionalCFOContainer />
      <NewContainer />
      <KeyValuesContainer />
      <AdditionalContainer />
    </main>
    <Footer />
  </div>
);

export default Home;
