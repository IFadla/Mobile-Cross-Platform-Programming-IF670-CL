import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Home.css";
import "../theme/style.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
              <IonCard>
                <div className="bio">
                  <div className="bio__list bio__list--name">
                    <div className="bio__head">
                      <p>Nama</p>
                      <p>:</p>
                    </div>

                    <p>Fadla Ichsan</p>
                  </div>

                  <div className="bio__list bio__list--nim">
                    <div className="bio__head">
                      <p>Nim</p>
                      <p>:</p>
                    </div>

                    <p>00000032688</p>
                  </div>
                </div>
                <IonButton expand="block" routerLink="/bmi">
                  BMI Calculator
                </IonButton>
                <div className="h-05"></div>
                <IonButton expand="block" routerLink="/bmr">
                  BMR Calculator
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
