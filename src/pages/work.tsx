import React, { useState } from 'react'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import workStyles from '../styles/work.module.css'

const works = [
  {
    title: 'Tsukue.dev',
    description: 'Tsukueの個人サイト',
    image: 'https://tsukue.dev/images/ogp-image.png',
    url: 'https://tsukue.dev',
  },
  {
    title: 'みんなのテレワーク',
    description: 'テレワークをより快適に過ごすためのアイデアを共有するサービス',
    image: 'https://wfh.room-make.app/images/ogp-image.png',
    url: 'https://wfh.room-make.app/',
  },
  {
    title: 'Room Make',
    description:
      'お部屋づくりの悩みを解決する素敵な記事に出会えるソーシャルメディア',
    image: 'https://interior.in.net/images/common/ogp.png',
    url: 'https://interior.in.net/',
  },
]

const Work = ({ work }) => (
  <a className={workStyles.box} href={work.url} target="_blank" rel="noopener">
    <img src={work.image} alt={work.title} className={workStyles.ogp} />
    <div className={workStyles.contents}>
      <div className={workStyles.contentsTitle}>{work.title}</div>
      <div className={workStyles.contentsDescription}>
        <p>{work.description}</p>
      </div>
    </div>
  </a>
)

export default () => {
  return (
    <>
      <Header titlePre="Work" />
      <div className={sharedStyles.layout}>
        <h1>My Work</h1>
        <br />
        <div className={workStyles.wrapper}>
          {works.map((work, index) => (
            <Work key={`work-list-${index}`} work={work} />
          ))}
        </div>
      </div>
    </>
  )
}
