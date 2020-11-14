import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonCol, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {at} from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Kontakt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" >Kontakt</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCol>
        <IonTitle className="ion-text-justify">Bc. Dušan Mráz</IonTitle>
        <IonTitle className="ion-text-justify">1dusan.mraz1@gmail.com</IonTitle>
        <IonTitle className="ion-text-justify">Katolícka Univerzita v Ružomberku</IonTitle>
        <IonTitle className="ion-text-justify">Hrabovská cesta 1A</IonTitle>
        <IonTitle className="ion-text-justify">034 01</IonTitle>
        </IonCol>
        <IonImg src="assets/map.png" class="ion-align-self-end"></IonImg>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
