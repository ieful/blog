import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {urls} from '../bgImgs';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [bgImg, setBgImg] = useState('');

  useEffect(() => {
      let randomIndex = Math.floor(Math.random() * urls.length);
      setBgImg(urls[randomIndex]);
  }, [])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <img src={bgImg} alt=""/>
        <div style={{
            position: 'absolute',
            fontSize: '30px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%)',
            color: 'transparent',
            backgroundClip: 'text',
            fontStyle: 'italic',
            backgroundImage: 'linear-gradient(-20deg,#b721ff 0%, #21d4fd 100%)',
            cursor: 'pointer',
        }}>人生是一场勇敢的冒险</div>
    </Layout>
  );
}
