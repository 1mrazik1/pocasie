import React, { useState } from 'react';
import { IonIcon, IonItemDivider, IonLabel, IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonDatetime } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { star, cloudOutline, rainy, cloudy, sunny, thunderstorm, snow, rose, location, thermometer, navigate, compass, water, body} from 'ionicons/icons';
import './Tab2.css';

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
  const [number, setNumber] = useState<number>();
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any>([]);
  React.useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=49.07&lon=19.31&exclude=daily&appid=1285213a1b770d1df95522fc1bb6ff1b&units=metric&lang=sk`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [text])

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
