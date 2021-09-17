import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

const BMIResults: React.FC<{ onCalculated: number; onBodyType: string }> = (
  props
) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h4>{props.onCalculated}</h4>
            <h4>{props.onBodyType}</h4>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BMIResults;
