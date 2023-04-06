import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

interface PillBoxProps {
  title: string;
  container: React.FC<{}>;
}

const PillBox: React.FC<PillBoxProps> = ({title, container: Container}) => {
  return(
    <div>
      <div className={styles.pillBoxTopTitle}>{title}</div>
      <div className={styles.pillBoxBottomContainer}>
        Butt Stuff Here
        <Container/>
      </div>
    </div>
  );
};

const PillBoxBottomContainer: React.FC<{}> = () => {
  return (
    <div className={styles.pillBoxBottomContainer}>
      <div>InfoBoxComponent1</div>
      <div>InfoBoxComponent2</div>
    </div>
  );
};
const InfoBox: React.FC<{}> = () => {
  return (
    <div>
      <div>InfoBoxComponent1</div>
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
          <PillBox title="WELCOME TO CROWTOWN FAMILY!" container={PillBoxBottomContainer} />
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MEET DEB SHES DOPE!" container={PillBoxBottomContainer}/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="MADE WITH LOVE AND CARE AND SKILL AND STUFF!" container={PillBoxBottomContainer}/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="THESE ITEMS ARE DELUXE!" container={PillBoxBottomContainer}/>
        </div>
        <div className={styles.pillBox}>
          <PillBox title="OUR MYSPACE IS FLY!" container={PillBoxBottomContainer}/>
        </div>
      </div>
    </>
  )
}
