import React from 'react';
import Layout from '@theme/Layout';

import styles from './demo.module.css';

/**
 * Demo 画廊数据结构
 * 新增演示时只需在 demos 数组里追加一条记录：
 * {
 *   title: '项目名称',
 *   description: '一句话介绍这个演示在做什么',
 *   video: '/demo/xxx.mp4',        // 视频放在 static/demo/ 下，支持 .mp4 / .mov
 *   poster: '/demo/xxx.jpg',       // 可选，封面图（可用 ffmpeg 从视频抽帧生成）
 *   date: '2026-08',               // 可选，录制/完成时间
 *   tags: ['React', 'Chrome 扩展'], // 可选，技术栈标签
 * }
 */
type DemoItem = {
  title: string;
  description: string;
  video: string;
  poster?: string;
  date?: string;
  tags?: string[];
};

const demos: DemoItem[] = [
  {
    title: '基础表单 · AI 一键填写',
    description:
      'AI 助手自动识别网页表单、匹配待填数据并逐项填写：识别 → 匹配 → 填写三步完成，匹配结果带置信度预览，确认后一键录入。',
    video: '/demo/basic-form.mp4',
    poster: '/demo/basic-form.jpg',
    date: '2026-07',
    tags: ['AI Agent', '表单自动化'],
  },
  {
    title: '新建缺陷 · 全自动填写模式',
    description:
      'AI 按源文档逐项自动填写缺陷单，右侧实时显示填写进度，每填一项即时校验并给出「填写并验证通过」反馈，全程零干预。',
    video: '/demo/auto-fill.mp4',
    poster: '/demo/auto-fill.jpg',
    date: '2026-08',
    tags: ['AI Agent', '表单自动化', '全自动'],
  },
  {
    title: '新建缺陷 · 稳妥填写模式',
    description:
      'AI 先理解字段语义并生成 23 项匹配预览，逐条标注置信度，低置信字段由人工确认后再写入——多一道核对，填得更稳。',
    video: '/demo/steady-fill.mp4',
    poster: '/demo/steady-fill.jpg',
    date: '2026-08',
    tags: ['AI Agent', '表单自动化', '人工确认'],
  },
  {
    title: '功能演示 2026-08-19',
    description: '项目演示录屏（2026-08-19）。',
    video: '/demo/screen-20260819.mp4',
    poster: '/demo/screen-20260819.jpg',
    date: '2026-08',
    tags: ['演示'],
  },
  {
    title: '功能演示 2026-07-07',
    description: '项目演示录屏（2026-07-07）。',
    video: '/demo/screen-20260707.mp4',
    poster: '/demo/screen-20260707.jpg',
    date: '2026-07',
    tags: ['演示'],
  },
  // 等待更多视频素材……
];

function getVideoMime(video: string): string {
  if (video.endsWith('.mov')) return 'video/quicktime';
  if (video.endsWith('.webm')) return 'video/webm';
  return 'video/mp4';
}

function DemoCard({demo}: {demo: DemoItem}) {
  return (
    <article className={styles.demoCard}>
      <div className={styles.videoWrapper}>
        <video
          controls
          preload="metadata"
          playsInline
          poster={demo.poster}
          className={styles.video}>
          <source src={demo.video} type={getVideoMime(demo.video)} />
          您的浏览器不支持视频播放，请升级浏览器后重试。
        </video>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitleRow}>
          <h3 className={styles.cardTitle}>{demo.title}</h3>
          {demo.date && <span className={styles.cardDate}>{demo.date}</span>}
        </div>
        <p className={styles.cardDesc}>{demo.description}</p>
        {demo.tags && demo.tags.length > 0 && (
          <div className={styles.tagRow}>
            {demo.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Demo(): React.JSX.Element {
  return (
    <Layout
      title="Demo"
      description="过往项目的演示录屏：产品交互、功能亮点与实现效果的直观呈现。">
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className={styles.pageTitle}>Demo 演示</h1>
          <p className={styles.pageSubtitle}>
            过往项目的演示录屏 —— 比文字更直观地呈现交互细节与最终效果。
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <section className="container">
          {demos.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>🎬</div>
              <h2>演示视频整理中</h2>
              <p>精彩马上就来，敬请期待～</p>
            </div>
          ) : (
            <div className={styles.demoGrid}>
              {demos.map((demo) => (
                <DemoCard key={demo.title} demo={demo} />
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
