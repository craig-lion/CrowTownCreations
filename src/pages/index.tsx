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
      <div className={styles.pillBoxBottomContainer}><Container/></div>
    </div>
  );
};

const PillBoxTitle: React.FC<PillBoxProps> = ({title, container: Container}) => {
  return(
    <div>
      <div className={styles.pillBoxTopTitle}>{title}</div>
      <div className={styles.pillBoxBottomContainer}><Container/></div>
    </div>
  );
};

const PillBoxBottomContainer: React.FC<{}> = () => {
  return (
    <div className={styles.pillBoxBottomContainer}>
      <div className={styles.infoBoxPhoto}><InfoBoxPhoto /></div>
      <div className={styles.infoBoxText}><InfoBoxText /></div>
    </div>
  );
};
const InfoBoxPhoto: React.FC<{}> = () => {
  return (
      <div>InfoBoxPhotoComponent</div>
  );
};

const InfoBoxText: React.FC<{}> = () => {
  return (
    <div>
      <div>InfoBoxTextComponent</div>
    </div>
  );
};

export default function Home() {
  return (
    <>
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
