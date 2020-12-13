import React, { useState } from 'react';
import { IonIcon, IonItemDivider, IonLabel, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, cloudOutline, rainy, cloudy, sunny, thunderstorm, snow, rose, location, thermometer, navigate, compass, water, body} from 'ionicons/icons';
import './Tab2.css';
import { useApi } from '../api';

const icons: any = {
  Clouds: cloudy,
  Clear: sunny,
  Rain: rainy,
  Snow: snow,
  Thunderstorm: thunderstorm,
  Drizzle: rose,
}
const pismenka: any = {
  Clouds: "Clouds",
  Clear: "Clear",
  Rain: "Rain",
  Snow: "Snow",
  Thunderstorm: "Thunderstorm",
  Drizzle: "Drizzle",
  Sunny: "Sunny",
  Mist: "Mist",
  Fog: "Fog",
  Haze: "Haze",
}

  const today = new Date().getDate();
  const today2 = new Date().getMonth();

  interface ContainerProps {
    text: string;
    setText: (text: string) => void;
  }
  
const Tab2: React.FC<ContainerProps> = ({text}) => {
  const {isLoaded, error, items} = useApi(text)

  if (error) {
    return <div>Error: {error?.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
   
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">  <IonIcon color="primary" icon={rainy} /> <IonIcon color="warning" icon={sunny} />  Predpoveď na týždeň  <IonIcon color="warning" icon={sunny} />   <IonIcon color="primary" icon={rainy} /> </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Predpoveď na týždeň</IonTitle>
          </IonToolbar>
        </IonHeader>
        <br></br>
      {items?.daily?.map((forecast: any) => (<div key={forecast.dt}>
          
            <IonItemDivider className={forecast?.weather && pismenka[forecast.weather[0].main]} >
            <h6 className="ion-text-center">
            <IonIcon icon={forecast?.weather && icons[forecast.weather[0].main]}/>{'  '}
              {(new Date(forecast.dt*1000)).toDateString()}
             : {forecast.temp.day}°C,   
             {forecast.weather[0].description}
             , <IonIcon icon={forecast?.weather && icons[forecast.weather[0].main]}/>
             </h6>
             </IonItemDivider>
       
          <br/>
          </div>
      ))}    
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
