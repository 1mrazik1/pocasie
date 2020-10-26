import React, { useState } from 'react';
import { IonButton, IonContent, IonIcon, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { star, cloudOutline, rainy, cloudy, sunny, thunderstorm, snow, rose } from 'ionicons/icons';

const icons: any = {
  Clouds: cloudy,
  Clear: sunny,
  Rain: rainy,
  Snow: snow,
  Thunderstorm: thunderstorm,
  Drizzle: rose,
}
const Tab1: React.FC = () => {
  const [text, setText] = useState<string>('Ružomberok');
  const [number, setNumber] = useState<number>();
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any>([]);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  React.useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=1285213a1b770d1df95522fc1bb6ff1b&units=metric&lang=sk`)
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
          <IonTitle className="ion-text-center"><IonIcon color="medium" icon={thunderstorm} />   <IonIcon color="primary" icon={rainy} />  <IonIcon color="warning" icon={sunny} />   Mraz Weather   <IonIcon color="warning" icon={sunny} />   <IonIcon color="primary" icon={rainy} />   <IonIcon color="medium" icon={thunderstorm} /> </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mraz Weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
            <IonLabel position="floating" className="ion-text-center">Zadaj názov mesta</IonLabel>
            <IonInput className="ion-text-center" value={text} onIonInput={(e: any) => setText(e.target?.value)}></IonInput>
          </IonItem>         
          <IonButton expand="full">Hľadaj</IonButton>
          <br></br>
          <br></br>
          <h2 className="ion-text-justify">
            {items.name}, {items.sys?.country}
          </h2>
          <h2 className="ion-text-justify">
          Aktuálne: <IonIcon icon={items?.weather && icons[items.weather[0].main]} />  {items.main?.temp} °C
          </h2>
          <h2 className="ion-text-justify">
          Smer vetra:  {items.wind?.deg}°
          </h2>
          <h2 className="ion-text-justify">
          Rýchlosť vetra:  {items.wind?.speed} m/s
          </h2>
          <h2 className="ion-text-justify">
          Vlhkosť vzduchu:  {items.main?.humidity} %
          </h2>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;
