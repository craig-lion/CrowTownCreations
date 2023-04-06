import { FunctionComponent } from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { render } from 'react-dom';


/* Interfaces */

interface PillBoxProps { 
    title: string;
    containerType: "InfoBox" | "TopItems" | "Social";
}

interface PillBoxTitleProps {
    title: string;
}

interface InfoBoxContainerProps {
    title: string;
    text: string;
    photo: string;
  }

  interface PillBoxBottomProps {
    containerType: "InfoBox" | "TopItems" | "Social";
  }

  interface InfoBoxTextProps {
    title: string;
    text: string;
  }

  interface InfoBoxPhotoProps {
    photo: string;
  }

  interface ImageObj  {
    photo: string;
    name: string;
    description: string;
    price: string;
  }
  
  interface TopItemsContainerProps {
    items: ImageObj[];
  }

/* Components */

const PillBoxTitle: React.FC<PillBoxTitleProps> = ({title}) => {
  return(
      <div className={styles.pillBoxTopTitle}>{title}</div>
  );
};

  const InfoBoxText: React.FC<InfoBoxTextProps> = () => {
    return (
      <div>
        <div className={styles.infoBoxText}>InfoBoxTextComponentNowDifferentALsoPhoto</div>
      </div>
    );
  };

    const InfoBoxPhoto: React.FC<InfoBoxPhotoProps> = ({photo}) => {
    return (
        <div className={styles.infoBoxPhoto}>
            <Image src={photo} alt="meaningful alt text" width={500} height={500} />
        </div>
    );
  };

const InfoBoxContainer: React.FC<InfoBoxContainerProps> = ({title, text, photo}) => {
    return(
        <div className={styles.pillBoxBottomContainerInfo}>
            <InfoBoxText  title={title} text={text} />
            <InfoBoxPhoto photo={photo}/>
        </div>
    );
}

const TopItemsContainer: React.FC<TopItemsContainerProps> = ({items}) => {
    return(
        <div className={styles.pillBoxTopTitle}>Top Items Here Son</div>
    )
}

const containerPicker = (container: "InfoBox" | "TopItems" | "Social") => {
    if (container === "InfoBox") {
    return (
          <InfoBoxContainer title="A Dope Story" text="Lorem Ipsum Im Da ShizSon" photo="https://media.giphy.com/media/g7GKcSzwQfugw/giphy.gif?cid=ecf05e47q6a3uk7nnt6b4oso30u0ym2id60wrhyx3thfzam6&rid=giphy.gif&ct=g"/>
      );
    }
    if (container === "TopItems") {
        const itemProps: ImageObj[] = [{
            photo: "https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif?cid=ecf05e47q6a3uk7nnt6b4oso30u0ym2id60wrhyx3thfzam6&rid=giphy.gif&ct=g",
            name:"StickRoll",
            description:"Never Gonna Stick You Up, Never Gonna Stick You Down",
            price:"$99.99",
        }]
        return(
            <TopItemsContainer items={itemProps} />
        )
    }
    if (container === "Social"){
        return(
            <div>My Myspace Is Flyy</div>
        )
    }
}

  const PillBoxBottomContainer: React.FC<PillBoxBottomProps> = ({containerType}) => {
    const container = containerPicker(containerType)
    return (
    <div className={styles.pillBoxBottomContainer}>
        {container}
    </div>
    );
  };

export const PillBox: React.FC<PillBoxProps> = ({title, containerType}) => {
return(
    <div className={styles.pillBox}>
    <PillBoxTitle title={title} />
    <PillBoxBottomContainer containerType={containerType} />
    </div>
);
};
