import React, { useState } from 'react'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

const contacts = [
  {
    title: 'Tsukue.dev',
    description: 'Tsukueの個人サイト',
    image: 'images/ogp-image.png',
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

const Work = props => <div></div>

export default () => {
  return (
    <>
      <Header titlePre="Work" />
      <div className={sharedStyles.layout}>
        <h1>Work</h1>
      </div>
    </>
  )
}
