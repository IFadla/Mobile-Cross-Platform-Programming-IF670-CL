import React from "react";
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
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add } from "ionicons/icons";

const BadMemories: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bad Memories</IonTitle>
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
        <p>ini adalah Bad memories</p>
      </IonContent>
    </IonPage>
  );
};

export default BadMemories;
