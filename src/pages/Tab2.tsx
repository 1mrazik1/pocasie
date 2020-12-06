import React, { useState } from 'react';
import { IonIcon, IonItemDivider, IonLabel, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, cloudOutline, rainy, cloudy, sunny, thunderstorm, snow, rose, location, thermometer, navigate, compass, water, body} from 'ionicons/icons';
import './Tab2.css';
import { useApi } from '../api';

  const pismenka: any = {
    Clouds: cloudy,
    Clear: sunny,
    Rain: rainy,
    Snow: snow,
    Thunderstorm: thunderstorm,
    Drizzle: rose,
    Sunny: sunny,
    Mist: cloudy,
    Fog: cloudy,
    Haze: cloudy,
  }

  const today = new Date().getDate();
  const today2 = new Date().getMonth();
const Tab2: React.FC = () => {
  const [text, setText] = useState<string>('Ružomberok');
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
          <IonTitle>Predpoveď na týždeň</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <pre>
          {JSON.stringify(items, null, 2)}
        </pre>
        {items?.daily?.map((forecast: any) => (<div>
          <span>
            {(new Date(forecast.dt*1000)).toDateString()}
            {forecast.temp.day}
            {forecast.weather[0].description}
          </span>
          <br/>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Predpoveď na týždeň</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Predpoveď na týždeň</IonTitle>
          </IonToolbar>
        </IonHeader>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+1}.{today2} <br></br>
      <IonIcon icon={items?.daily && pismenka[items.daily[0].weather[0].main]} />
      </IonLabel>
    </IonItemDivider>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+2}.{today2}
      </IonLabel>
    </IonItemDivider>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+3}.{today2}
      </IonLabel>
    </IonItemDivider>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+4}.{today2}
      </IonLabel>
    </IonItemDivider>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+5}.{today2}
      </IonLabel>
    </IonItemDivider>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+6}.{today2}
      </IonLabel>
    </IonItemDivider>
    <IonItemDivider color="secondary">
      <IonLabel>
      {today+7}.{today2}
      </IonLabel>
    </IonItemDivider>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
