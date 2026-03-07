import type { ReactNode, ComponentType, ComponentProps } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link'; // Import this at the top

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: ReactNode;
  className?: string;
  link?: string; // Add this optional property
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TMDSCNCD28379D',
    link: 'https://www.ti.com/tool/TMDSCNCD28379D', // Internal path or url
    Svg: require('@site/static/img/tmdscncd28379d-angled.png').default,
    className: styles.hilImage,
    description: <>F28379D development kit for C2000™ Delfino MCU controlCARD™.</>,
  },
  {
    title: 'HIL DSP 180 Interface',
    link: 'https://www.typhoon-hil.com/products/hil-interfaces/hil-ti-interface-cards/hil-ti-dsp-180-interface/', // Internal path or url
    Svg: require('@site/static/img/hil_dsp_180_interface_01.png').default,
    className: styles.hilImage,
    description: <>An interface board which allows for connecting Texas Instruments Control Card boards to Typhoon HIL simulators.</>,
  },
  {
    title: 'HIL402 Device',
    link: 'https://www.typhoon-hil.com/documentation/typhoon-hil-software-manual/concepts/HIL402_device_configurations.html', // Internal path or url
    Svg: require('@site/static/img/HIL402_Side_Transparent.webp').default,
    className: styles.hilImage,
    description: <>Typhoon HIL simulator devices are dedicated hardware devices that enable you to perform real-time testing.</>,
  },
];

// UPDATE: Explicitly type the function props using FeatureItem
function Feature({ Svg, title, description, className, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Svg === 'string' ? (
          <img
            src={Svg}
            // Uses your custom hilImage style, falls back to default if not provided
            className={className ?? styles.featureSvg}
            alt={title}
          />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        {/* If link exists, wrap the title. Otherwise, just show the title. */}
        {link ? (
          <Link to={link}>
            <Heading as="h3">{title}</Heading>
          </Link>
        ) : (
          <Heading as="h3">{title}</Heading>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
