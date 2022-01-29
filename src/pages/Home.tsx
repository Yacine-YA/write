import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const firebaseConfig = {
  apiKey: "AIzaSyBH3eIEagsW0ECPE0mtA9Oh12pnmtLoovA",
  authDomain: "write-e4f94.firebaseapp.com",
  projectId: "write-e4f94",
  storageBucket: "write-e4f94.appspot.com",
  messagingSenderId: "735922413205",
  appId: "1:735922413205:web:01cfd62f1ccb7a9c06059c",
  measurementId: "G-H5B131J514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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

        

          <IonButton  expand="block" onClick={() => setFirebase()} ></IonButton>
          
      </IonContent>
      <IonFooter>

        
  
      </IonFooter>
    </IonPage>
  );
};

export default Home;
