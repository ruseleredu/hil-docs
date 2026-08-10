import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://ruseleredu.github.io/hil-docs/docs/typhoontest_html/index.html"
          >
            🧪 Test
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://ruseleredu.github.io/hil-docs/docs/api/index.html"
          >
            🔌 APIs
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://ruseleredu.github.io/hil-docs/docs/tml_doc/index.html"
          >
            🏗️ TML
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://ruseleredu.github.io/hil-docs/docs/help/t-an001/concepts/application_notes_introduction.html"
          >
            📝 Notes
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://ruseleredu.github.io/hil-docs/docs/help/t-ug002/topics/software_manual_introduction.html"
          >
            🖥 Software
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://ruseleredu.github.io/hil-docs/docs/help/t-ug001/abstract/hardware_manual_introduction.html"
          >
            🛠️ Hardware
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hardware-in-the-Loop simulation with HIL402 Device.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
