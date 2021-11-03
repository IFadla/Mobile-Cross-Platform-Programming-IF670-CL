import { IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/react';
import { happySharp, sadSharp  } from "ionicons/icons";
import { Redirect, Route } from 'react-router-dom';

import BadMemories from '../pages/BadMemories'
import GoodMemories from '../pages/GoodMemories'
import NewMemory from '../pages/NewMemory'

const Tabs: React.FC = () => {
	return (
		<IonTabs>
			<IonRouterOutlet id="main">
				<Redirect exact path="/tabs" to="/tabs/good-memories" />
				<Route exact path="/tabs/good-memories" component={GoodMemories} />
				<Route exact path="/tabs/bad-memories" component={BadMemories} />
				<Route exact path="/tabs/new-memory" component={NewMemory} />
			</IonRouterOutlet>

			<IonTabBar slot="bottom">
				<IonTabButton tab="mail" href="/tabs/good-memories">
					<IonIcon icon={happySharp} />
					<IonLabel>Good Memories</IonLabel>
				</IonTabButton>
				<IonTabButton tab="meet" href="/tabs/bad-memories">
					<IonIcon icon={sadSharp} />
					<IonLabel>Bad Memories</IonLabel>
				</IonTabButton>
			</IonTabBar>
	</IonTabs>
	)
}

export default Tabs;
