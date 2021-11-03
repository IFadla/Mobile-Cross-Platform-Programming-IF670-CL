import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  isPlatform,
  IonButtons,
  IonButton,
  IonContent,
  IonItem,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add } from "ionicons/icons";
import MemoriesContext from "../data/memories-context";

const GoodMemories: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);
  const goodMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === "good"
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Good Memories</IonTitle>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton routerLink="/tabs/new-memory">
                <IonIcon icon={add} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {goodMemories.length === 0 && (
            <IonRow>
              <IonCol>
                <h2>Good Memories</h2>
              </IonCol>
            </IonRow>
          )}
          {goodMemories.map((memory) => (
            <IonRow key={memory.id}>
              <IonCol>
                <img src={memory.base64Url} alt={memory.title} />
                <IonCardHeader>
                  <IonCardTitle>{memory.title}</IonCardTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default GoodMemories;
