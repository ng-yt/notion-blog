import React, { useState } from 'react'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="About" />
    <div className={sharedStyles.layout}>
      <h1>About</h1>

      <div className="explanation">
        <h2>Tsukue</h2>
        <p>
          建築学科卒
          <br />
          東京のベンチャー企業で新規事業のマーケティング・サポートを担当
          <br />
          名古屋でエンジニア
          <br />
        </p>

        <h2>Career</h2>
        <p>Android （8ヶ月） iOS （6ヶ月） Laravel/Vue.js （8ヶ月）</p>

        <h2>Skill</h2>
        <p>
          Docker（Wordpress/Laravel/pythonのコンテナ構築）
          <br />
          JenkinsやDeployerを使ったCI/CD環境の構築
          <br />
          UIデザイン（Android/iOS/web）
          <br />
          WEBサイトやPRページ作成のディレクション
          <br />
          マーケティング（アプリのプッシュ通知やSEO対策など）
          <br />
        </p>
      </div>
    </div>
  </>
)
