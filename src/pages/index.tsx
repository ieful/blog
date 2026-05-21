import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const contentSections = [
  {
    title: '知识碎片',
    description: '沉淀前端、网络、算法、工程问题和排障笔记。',
    to: '/docs/',
  },
  {
    title: '技术博客',
    description: '记录 Chrome 扩展、Git、HAR、AI 应用等更完整的主题文章。',
    to: '/blog',
  },
  {
    title: 'Claw 日报',
    description: '持续整理 AI 简报、OpenClaw 实践和 Agent 相关观察。',
    to: '/dailyclaw',
  },
  {
    title: '阅读笔记',
    description: '同步书籍阅读、架构思考和长期学习材料。',
    to: '/docs/Read/笔记/notes',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">技术笔记、博客文章与 AI 日报的个人知识库</p>
        <div className={styles.heroActions}>
          <Link className="button button--secondary button--lg" to="/docs/">
            浏览知识碎片
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/dailyclaw">
            查看 Claw 日报
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="xiaoyu.work 个人知识库，包含技术笔记、博客文章、阅读记录和 AI 日报。">
      <HomepageHeader />
      <main className={styles.main}>
        <section className="container">
          <div className={styles.sectionHeader}>
            <h2>内容入口</h2>
            <p>按写作形态组织：短笔记、长文章、日报和阅读记录。</p>
          </div>
          <div className={styles.sectionGrid}>
            {contentSections.map((section) => (
              <Link className={styles.sectionCard} key={section.title} to={section.to}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
