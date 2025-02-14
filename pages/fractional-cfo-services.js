import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';
import MissionContainer from '../components/MissionContainer';
import FractionalCFOContainer from '../components/FractionalCFOContainer';

const FractionalCFO = () => (
  <div>
    <Head>
      <title>Fractional CFO Services</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Header />
    <main>
      <SubHeader />
      <MissionContainer />
      <a href="#schedule-meeting" className="schedule-button">SCHEDULE A MEETING</a>
      <FractionalCFOContainer />
      <Link href="/">
        <a className="back-button">Back to Main Page</a>
      </Link>
    </main>
    <Footer />
  </div>
);

export default FractionalCFO;
