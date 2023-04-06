import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {PillBox} from './_pills'


export default function Home() {
  return (
    <>
      <div className={styles.topBar}>
        Top Bar Here
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.pillBox}>
          <PillBox title="WELCOME TO CROWTOWN FAMILY!" containerType="InfoBox" />
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MEET DEB SHES DOPE!" containerType="InfoBox"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MADE WITH LOVE AND CARE AND SKILL AND STUFF!" containerType="InfoBox"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="THESE ITEMS ARE DELUXE!" containerType="TopItems"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="OUR MYSPACE IS FLY!" containerType="Social"/>
        </div>
      </div>
    </>
  )
}
