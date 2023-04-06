import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

interface PillBoxProps {
  title: string;
}
<div></div>
const PillBox: React.FC<PillBoxProps> = ({title}) => {
  return(
    <div>
      <div className={styles.pillBoxTopTitle}>{title}</div>
      <div className={styles.pillBoxBottomContainer}>Butt Stuff Here</div>
    </div>
  );
};

const PillBoxBottomContainer: React.FC = () => {
  return (
    <div>
      <div>InfoBoxComponent1</div>
      <div>InfoBoxComponent2</div>
    </div>
  );
};
const InfoBox: React.FC = () => {
  return (
    <div>
      <div>InfoBoxComponent1</div>
      <div>InfoBoxComponent2</div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div className={styles.topBar}>
        PillTestHere
      </div>
      <div className={styles.topBar}>
        Top Bar Here
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.pillBox}>
          <PillBox title="WELCOME TO CROWTOWN FAMILY!"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MEET DEB SHES DOPE!"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MADE WITH LOVE AND CARE AND SKILL AND STUFF!"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="THESE ITEMS ARE DELUXE!"/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="OUR MYSPACE IS FLY!"/>
        </div>
      </div>
    </>
  )
}
