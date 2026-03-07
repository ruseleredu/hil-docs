import type { ReactNode, ComponentType, ComponentProps } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // UPDATE: Allow string for imported image paths (.png, .webp)
  Svg: ComponentType<ComponentProps<'svg'>> | string;
  description: ReactNode;
  className?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TMDSCNCD28379D',
    Svg: require('@site/static/img/tmdscncd28379d-angled.png').default,
    className: styles.hilImage,
    description: <>F28379D development kit for C2000™ Delfino MCU controlCARD™.</>,
  },
  {
    title: 'HIL DSP 180 Interface',
    Svg: require('@site/static/img/hil_dsp_180_interface_01.png').default,
    className: styles.hilImage,
    description: <>An interface board which allows for connecting Texas Instruments Control Card boards to Typhoon HIL simulators.</>,
  },
  {
    title: 'HIL402 Device',
    Svg: require('@site/static/img/HIL402_Side_Transparent.webp').default,
    className: styles.hilImage,
    description: <>Typhoon HIL simulator devices are dedicated hardware devices that enable you to perform real-time testing.</>,
  },
];

// UPDATE: Explicitly type the function props using FeatureItem
function Feature({ Svg, title, description, className }: FeatureItem) {
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
        <Heading as="h3">{title}</Heading>
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
