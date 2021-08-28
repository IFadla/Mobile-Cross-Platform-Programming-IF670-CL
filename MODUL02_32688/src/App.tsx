import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterOutlet, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { useRef, useState } from 'react';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

const App: React.FC = () => {
  const heightInputRef = useRef<HTMLIonInputElement>(null)
  const weightInputRef = useRef<HTMLIonInputElement>(null)
  let [calculatedBMI, setCalculatedBMI] = useState<number>();
  let [typeBMI, setTypeBMI] = useState<string>();

  const calculateBMI = () => {
    const enteredWeight = weightInputRef.current!.value
    const enteredHeight = heightInputRef.current!.value

    if (!enteredWeight || !enteredHeight) {
      return
    }

    const bmi = +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100))
    const bmiResult = Number(bmi.toFixed(2))

    // Print kriteria BMI
    if (bmiResult < 18.5) {
      setTypeBMI("Kurus")
    } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
      setTypeBMI("Normal")
    } else if (bmiResult >= 25 && bmiResult <= 29.9) {
      setTypeBMI("Gemuk")
    } else if (bmiResult >= 30) {
      setTypeBMI("Obesitas")
    } else {
      setTypeBMI("Undefined")
    }

    // console.log(bmi)
    setCalculatedBMI(bmiResult);
  }

  const resetInputs = () => {
    weightInputRef.current!.value = ''
    heightInputRef.current!.value = ''
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="hallo-hehe">
          <IonCard>
            <IonGrid>
              {/* Input Component */}
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Tinggi Badan (cm)</IonLabel>
                    <IonInput ref={heightInputRef}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Berat Badan (Kg)</IonLabel>
                    <IonInput ref={weightInputRef}></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>

              {/* Button Component */}
              <IonRow>
                <IonCol className="ion-text-left">
                  <IonButton onClick={calculateBMI}>
                    <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                    Calculate
                  </IonButton>
                </IonCol>

                <IonCol className="ion-text-right">
                  <IonButton onClick={resetInputs}>
                    <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                    Reset
                  </IonButton>
                </IonCol>
              </IonRow>

              {calculatedBMI && (
                <IonRow>
                  <IonCol>
                    <IonCard>
                      <IonCardContent className="ion-text-center">
                        <h2>{calculatedBMI}</h2>
                        <h1>{typeBMI}</h1>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              )}
            </IonGrid>
          </IonCard>
        </div>
      </IonContent>
    </IonApp>
  )
};

export default App;
