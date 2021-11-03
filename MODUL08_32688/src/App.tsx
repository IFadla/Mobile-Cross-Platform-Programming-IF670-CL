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
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calendar,
  personCircle,
  map,
  informationCircle,
  add,
} from "ionicons/icons";

// Import pages component
import Tabs from "./components/Tabs";
import BadMemories from "./pages/BadMemories";
import GoodMemories from "./pages/GoodMemories";
import NewMemory from "./pages/NewMemory";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import MemoriesContextProvider from "./data/MemoriesContextProvider";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <MemoriesContextProvider>
        <IonRouterOutlet>
          <Route path="/tabs" component={Tabs} />
          {/* <Route path="/good-memories" component={GoodMemories} />
        <Route path="/bad-memories" component={BadMemories} />
        <Route path="/new-memory" component={NewMemory} /> */}
          {/* <Route path="/settings" component={Settings} /> */}
          <Redirect exact from="/" to="/tabs" />
        </IonRouterOutlet>
      </MemoriesContextProvider>
    </IonReactRouter>
    {isPlatform("android") && (
      <IonFab
        vertical="bottom"
        horizontal="end"
        slot="fixed"
        style={{ marginBottom: "calc(57px + 1rem)" }}
      >
        <IonFabButton routerLink="/tabs/new-memory">
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    )}
  </IonApp>
);

export default App;
