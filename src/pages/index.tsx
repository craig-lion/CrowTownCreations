import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {PillBox} from './_pills'


interface InfoBoxContainerProps {
  title: string;
  text: string;
  photo: string;
  orientation: "portriat" | "landscape"
  direction: "left" | "right";
}

const infoBoxContainerPropsCrowTown: InfoBoxContainerProps = {
  title:"A Dope Story - crowtown",
  text:"Lorem Ipsum Im Da ShizSon - crowtown with photo and other stuff",
  photo:"https://crowtownphotos.s3.us-west-1.amazonaws.com/IMG_4829.jpeg",
  orientation: "landscape",
  direction:'left'
}
const infoBoxContainerPropsMeetDeb: InfoBoxContainerProps = {
  title:"A Dope Story - meet Deb",
  text:"Lorem Ipsum Im Da ShizSon",
  photo:"https://crowtownphotos.s3.us-west-1.amazonaws.com/DebPortriat.jpeg",
  orientation: "portriat",
  direction:'left'
}

const infoBoxContainerPropsCareAndSkill: InfoBoxContainerProps = {
  title:"A Dope Story - CARE AND SKILL",
  text:"Lorem Ipsum Im Da ShizSon",
  photo:"https://crowtownphotos.s3.us-west-1.amazonaws.com/CrowTownHouse.jpeg",
  orientation: "landscape",
  direction:'left'
}

export default function Home() {
  return (
    <>
      <h1 className={styles.topBar}>
        CrowTown Creations
      </h1>
      <div className={styles.mainContainer}>
        <div className={styles.pillBox}>
          <PillBox title="WELCOME TO CROWTOWN FAMILY!" containerType="InfoBox" infoBoxContainerProps={infoBoxContainerPropsCrowTown} />
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MEET DEB SHES DOPE!" containerType="InfoBox" infoBoxContainerProps={infoBoxContainerPropsMeetDeb}/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MADE WITH LOVE AND CARE AND SKILL AND STUFF!" containerType="InfoBox" infoBoxContainerProps={infoBoxContainerPropsCareAndSkill}/>
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
