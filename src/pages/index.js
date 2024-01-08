import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Укртвізалізниця">
      <HomepageHeader />
      <main>
        <div className='text--center margin--lg'>
          <h2>Вітаємо вас з прибуттям в c. Блакитне!</h2>
          <p>Тут зібрана деяка корисна інформація про Bluesky та українську спільноту в ньому.</p>
          <p><Link className={clsx('button button--lg button--primary')} href='./docs/'>Перейти</Link></p>
          
          <h2>Нема кого читати?</h2>
          <p>Загляньте у стрічку "🇺🇦 Всі" і підпишіться на тих хто вам цікаві</p>
          <p><Link className={clsx('button button--lg button--primary')} href='https://bsky.app/profile/did:plc:dvgliotey33vix3wlltybgkd/feed/all' target="_blank">🇺🇦 Всі</Link></p>
        </div>
      </main>
    </Layout>
  );
}
