import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

const Home: React.FC = () => {
  const [data, setData] = useState<AxiosResponse>(null)
  const url = "http://localhost/api/select_all_students.php"
  const [students, setStudents] = useState<Array<Student>>([])

  const nim = useRef<HTMLIonInputElement>(null)
  const nama = useRef<HTMLIonInputElement>(null)
  const prodi = useRef<HTMLIonInputElement>(null)

  const [selectedFile, setSelectedFile] = useState<File>()
  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target!.files![0])
  }

  const insertHandler = () => {
    const formData = new FormData()
    const inNim = nim.current?.value as string
    const inNama = nama.current?.value as string
    const inProdi = prodi.current?.value as string

    formData.append('nim', inNim)
    formData.append('nama', inNama)
    formData.append('prodi', inProdi)
    formData.append('foto', selectedFile as File)

    // fetch(url, {
    //   method: 'post',
    //   body: formData
    // }).then(response => response.text()).then((data) =>{
    //   setData(data)
    //   console.log(data)
    // })

    axios.post(url, formData).then(res => {
      console.log(res)
    })
  }

useEffect(() => {
  // fetch(url)
  // .then(response => response.json())
  // .then((data) => {
  //   setData(data)
  //   console.log(data)
  //   setStudents(data.students)
  // })

  axios.get(url).then((response) => {
    setData(response)
    console.log(data)
  }) 
}, [])

useEffect(()=> {
  console.log(data)
  setStudents(data?.data.students)
}, [data])

  const getAllDataHandler = () => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      setData(data)
      console.log(data)
    })
  }

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

        {/* <IonButton onClick={getAllDataHandler}>
          Get All Data
        </IonButton> */}

        {/* <IonList>
          {students.map(student => (
            <IonItem key={student.nim}>
              <IonAvatar slot="start">
                <img src={"http://localhost/api/" + (student.foto ? student.foto : 'uploads/man.jpg')} alt="gambar" />
              </IonAvatar>
              <IonLabel>
                {student.nim}
                {student.nama}
                {student.prodi}
              </IonLabel>
            </IonItem>
          ))}
        </IonList> */}

        <IonItem>
          <IonLabel position="floating">
            NIM
          </IonLabel>
          <IonInput ref={nim}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            Nama
          </IonLabel>
          <IonInput ref={nama}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">
            Email
          </IonLabel>
          <IonInput ref={prodi}></IonInput>
        </IonItem>

        <IonItem>
          <IonInput type="file" onChange={fileChangeHandler}></IonInput>
        </IonItem>

        <IonButton onClick={insertHandler}>Simpan</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
