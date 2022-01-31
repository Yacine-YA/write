import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import {
  IonContent,
  IonHeader,
  IonFooter,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonText,
  IonTextarea,
  IonButton

} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  function setFirebase() {

  }

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>

          <IonTitle>Write</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
  

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">

              
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTextarea id ="page" name="page" rows={37} placeholder="Ici...">

          
        </IonTextarea>

        

          <IonButton  expand="block"  > Save</IonButton>
          
      </IonContent>
      <IonFooter>

        
  
      </IonFooter>
    </IonPage>
  );
};

export default Home;
