import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

// Import css
import './BMIResults.css';

const BMIResults: React.FC<{ onCalculated: number; onBodyType: string; }> = (
  props
) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard id="result" className={
            props.onBodyType === "Normal"
              ? "ion-card-success"
              : props.onBodyType === "Gemuk" || props.onBodyType === "Kurus"
              ? "ion-card-warning"
              : "ion-card-danger"
          }>
          <IonCardContent className="ion-text-center">
            <h2>{props.onCalculated}</h2>
            <h1>{props.onBodyType}</h1>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResults;
