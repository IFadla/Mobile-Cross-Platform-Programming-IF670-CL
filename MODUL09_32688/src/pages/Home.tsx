import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import { Geolocation } from "@capacitor/geolocation";
import { LoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const Home: React.FC = () => {
  const [lat, setLat] = useState<number>(-6.257377926995551)
  const [lng, setLng] = useState<number>(186.61829861017398)

  const MY_API_MAPS = 'AIzaSyBE3o_fFDwmZ7zp16xSzOg8Egd3FIXQ4P0'

  const getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({enableHighAccuracy: true})

    console.log("Current Position : ", coordinates)
    console.log("Lat : ", coordinates.coords.latitude)
    console.log("Lng : ", coordinates.coords.longitude)

    setLat(coordinates.coords.latitude)
    setLng(coordinates.coords.longitude)
  }

  const trackPosition = async () => {
    const data = await Geolocation.watchPosition({
      enableHighAccuracy: true,
      timeout: 1000
    }, (position, err) => {
      if(position) {
        console.log(position)
      }
    })
  }

  const containerStyle = {
    width: '100%',
    height: '100%'
  }

  // const selectPos (e: google.maps.MapMouseEvent) => {
  //   if(e.latLng?.lat()) {
  //     setLat(e.latLng.lat())
  //   }

  //   if(e.latLng?.lng()) {
  //     setLat(e.latLng.lng())
  //   }
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}

        <IonButton onClick={getCurrentPosition}>Current Position</IonButton>
        <IonButton onClick={trackPosition}>Track Position</IonButton>

        <LoadScript googleMapsApiKey={MY_API_MAPS}>
          <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: lat, lng: lng}}
          zoom={18}>
          <></>
          
          <Marker position={{lat: lat, lng: lng}}></Marker>
          <InfoWindow position={{lat: lat, lng: lng}}>
            <div>
              <h1>Kampus Paling Keren.</h1>
            </div>
          </InfoWindow>
          </GoogleMap>
        </LoadScript>
      </IonContent>
    </IonPage>
  );
};

export default Home;
