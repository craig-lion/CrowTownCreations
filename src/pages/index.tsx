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
  title:"Crowtown - A Classic Story",
  text:"Crows Landing is a small unincorporated community located in California's Stanislaus County that offers a peaceful and rural lifestyle. With its small-town charm and proximity to larger cities such as Modesto and San Jose, Crows Landing offers a unique blend of convenience and a relaxed pace of life. The community is surrounded by vast agricultural lands, making it an ideal place for those who love nature and open spaces. Additionally, the town hosts annual events such as the Crows Landing Air Show, which draws thousands of visitors each year.",
  photo:"https://crowtownphotos.s3.us-west-1.amazonaws.com/IMG_4829.jpeg",
  orientation: "landscape",
  direction:'right'
}
const infoBoxContainerPropsMeetDeb: InfoBoxContainerProps = {
  title:"Our fantastic creator",
  text:"Deb is a hardworking and much-loved mother who grew up in the beautiful city of Crows Landing, California. Her love for the environment and her passion for fashion led her to create unique pieces of clothing made entirely from recycled materials. Deb's talent and dedication to her craft have made her an inspiration in the community, and her clothing line has become incredibly popular. She is a true testament to the beauty and creativity that can come from small town living, and her commitment to sustainability is a reflection of the values that are deeply rooted in the people of Crows Landing.",
  photo:"https://crowtownphotos.s3.us-west-1.amazonaws.com/DebPortriat.jpeg",
  orientation: "portriat",
  direction:'left'
}

const infoBoxContainerPropsCareAndSkill: InfoBoxContainerProps = {
  title:"Crafted from Experience",
  text:"Deb's passion for creating clothes from recycled material goes beyond just making stylish and eco-friendly clothing. Each item she makes is crafted with love and care, making them truly special and one-of-a-kind. She takes great pride in her work and ensures that each piece is of the highest quality. Her attention to detail and dedication to her craft are evident in every stitch, and her customers know that they are receiving something truly unique and made with love. It's no wonder that her clothing has gained a loyal following among those who appreciate sustainable fashion and want to support a hard-working and talented artist like Deb.",
  photo:"https://crowtownphotos.s3.us-west-1.amazonaws.com/CrowTownHouse.jpeg",
  orientation: "landscape",
  direction:'right'
}
const TopBar: React.FC<{}> = () => {
  return(
    <h1 className={styles.topBar}>
      CrowTown Creations
    </h1>
  )
}

export default function Home() {
  return (
    <>
      
      <div className={styles.mainContainer}>
        <TopBar />
        <PillBox title="Welcome to Crows Landing" containerType="InfoBox" infoBoxContainerProps={infoBoxContainerPropsCrowTown} />
        <PillBox title="Meet Deb!" containerType="InfoBox" infoBoxContainerProps={infoBoxContainerPropsMeetDeb}/>
        <PillBox title="Made with Love and Care" containerType="InfoBox" infoBoxContainerProps={infoBoxContainerPropsCareAndSkill}/>
        <PillBox title="THESE ITEMS ARE DELUXE!" containerType="TopItems"/>
        <PillBox title="OUR MYSPACE IS FLY!" containerType="Social"/>
      </div>
    </>
  )
}
