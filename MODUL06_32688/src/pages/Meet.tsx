import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonButton, IonIcon, IonItemSliding, IonItemOptions, IonItemOption, IonAvatar, IonChip, IonGrid, IonRow, IonCol } from "@ionic/react";
import { ban, trash, create, chevronForward } from "ionicons/icons";
import React, { useRef } from "react";

export const FRIENDS_DATA = [
	{ id: 'f1', name: 'Jhon Thor', image: 'https://randomuser.me/api/portraits/thumb/men/77.jpg' },
	{ id: 'f2', name: 'Jhon Ness', image: 'https://randomuser.me/api/portraits/thumb/men/78.jpg' },
	{ id: 'f3', name: 'Jhon Doe', image: 'https://randomuser.me/api/portraits/thumb/men/79.jpg' }
]

const Meet: React.FC = () => {
	const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
	
	const callFriendHandler = () => {
		console.log('calling...')
	}

	const blockFriendHandler = () => {
		slidingOptionsRef.current?.closeOpened()
		console.log('blocking...')
	}

	const deleteFriendHandler = () => {
		slidingOptionsRef.current?.closeOpened()
		console.log('deleting...')
	}

	const editingFriendHandler = () => {
		slidingOptionsRef.current?.closeOpened()
		console.log('editing...')
	}

	return (
		<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>Meet</IonTitle>
			</IonToolbar>
		</IonHeader>

    <IonContent>
			<IonList>
				{FRIENDS_DATA.map(friend => (
					<IonItemSliding key={friend.id} ref={slidingOptionsRef}>
						<IonItemOptions side="start">
							<IonItemOption color="danger" onClick={blockFriendHandler}>
								<IonIcon icon={ban} slot="icon-only" />
							</IonItemOption>

							<IonItemOption color="warning" onClick={deleteFriendHandler}>
								<IonIcon icon={trash} slot="icon-only" />
							</IonItemOption>
						</IonItemOptions>

						<IonItemOptions side="end">
							<IonItemOption color="warning" onClick={editingFriendHandler}>
								<IonIcon icon={create} slot="icon-only" />
							</IonItemOption>
						</IonItemOptions>

						<IonItem lines="full" button onClick={callFriendHandler}>
							<IonAvatar slot="start">
								<img src={friend.image} />
							</IonAvatar>
							<IonLabel>{friend.name}</IonLabel>
							<IonIcon icon={chevronForward} slot="end" />
						</IonItem>
					</IonItemSliding>
				))}
			</IonList>
    </IonContent>
  </IonPage>
	)
}

export default Meet;
