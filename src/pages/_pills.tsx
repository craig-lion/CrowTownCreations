import { FunctionComponent } from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { render } from 'react-dom';


/* Interfaces */

interface PillBoxProps { 
    title: string;
    containerType: "InfoBox" | "TopItems" | "Social";
    infoBoxContainerProps?: InfoBoxContainerProps;
    topItemsContainerProps?: TopItemsContainerProps;
}

interface PillBoxTitleProps {
    title: string;
}

interface InfoBoxContainerProps {
    title: string;
    text: string;
    photo: string;
    orientation: "portriat" | "landscape";
    direction: "left" | "right";
  }

  interface PillBoxBottomProps {
    containerType: "InfoBox" | "TopItems" | "Social";
    infoBoxContainerProps?: InfoBoxContainerProps;
    topItemsContainerProps?: TopItemsContainerProps;
  }

  interface InfoBoxTextProps {
    title: string;
    text: string;
  }

  interface InfoBoxPhotoProps {
    photo: string;
    orientation: "portriat" | "landscape";
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
      <h1 className={styles.pillBoxTopTitle}>{title}</h1>
  );
};

  const InfoBoxText: React.FC<InfoBoxTextProps> = ({title, text}) => {
    return (
      <div className={styles.infoBoxTextBox}>
        <h1 className={styles.infoBoxText}>{title}</h1>
        <p className={styles.infoBoxText}>{text}</p>
      </div>
    );
  };

    const InfoBoxPhoto: React.FC<InfoBoxPhotoProps> = ({photo, orientation}) => {
        let width: number = 500;
        let height: number = 500;
        if (orientation === "landscape") {
            width=500;
            height=400;
        }
        if (orientation === "portriat") {
            width=325;
            height=400;
        }
    return (
        <div className={styles.infoBoxPhotoContainer}>
            <Image className={styles.infoBoxPhoto} src={photo} alt="meaningful alt text" width={width} height={height} />
        </div>
    );
  };

const InfoBoxContainer: React.FC<InfoBoxContainerProps> = ({title, text, photo, orientation, direction}) => {
    return(
        <div className={styles.pillBoxBottomContainerInfo}>
            <InfoBoxText  title={title} text={text} />
            <InfoBoxPhoto photo={photo} orientation={orientation}/>
        </div>
    );
}

const TopItemsContainer: React.FC<TopItemsContainerProps> = ({items}) => {
    return(
        <div className={styles.pillBoxTopTitle}>Top Items Here Son</div>
    )
}

  const PillBoxBottomContainer: React.FC<PillBoxBottomProps> = ({containerType, infoBoxContainerProps, topItemsContainerProps}) => {
    const container = containerPicker(containerType, infoBoxContainerProps, topItemsContainerProps)
    return (
    <div className={styles.pillBoxBottomContainer}>
        {container}
    </div>
    );
  };

export const PillBox: React.FC<PillBoxProps> = ({title, containerType, infoBoxContainerProps, topItemsContainerProps}) => {
return(
    <div className={styles.pillBox}>
    <PillBoxTitle title={title} />
    <PillBoxBottomContainer containerType={containerType} infoBoxContainerProps={infoBoxContainerProps} topItemsContainerProps={topItemsContainerProps} />
    </div>
);
};

/* Helper Functions */

const containerPicker = (container: "InfoBox" | "TopItems" | "Social", infoBoxContainerProps?: InfoBoxContainerProps, topItemsContainerProps?: TopItemsContainerProps) => {
    if (container === "InfoBox" && infoBoxContainerProps ) {
    return (
          <InfoBoxContainer {...infoBoxContainerProps} />
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