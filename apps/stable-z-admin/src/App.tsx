import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BackgroundSettingsList } from "./backgroundSettings/BackgroundSettingsList";
import { BackgroundSettingsCreate } from "./backgroundSettings/BackgroundSettingsCreate";
import { BackgroundSettingsEdit } from "./backgroundSettings/BackgroundSettingsEdit";
import { BackgroundSettingsShow } from "./backgroundSettings/BackgroundSettingsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { GestureList } from "./gesture/GestureList";
import { GestureCreate } from "./gesture/GestureCreate";
import { GestureEdit } from "./gesture/GestureEdit";
import { GestureShow } from "./gesture/GestureShow";
import { LiveFeedList } from "./liveFeed/LiveFeedList";
import { LiveFeedCreate } from "./liveFeed/LiveFeedCreate";
import { LiveFeedEdit } from "./liveFeed/LiveFeedEdit";
import { LiveFeedShow } from "./liveFeed/LiveFeedShow";
import { CameraSettingsList } from "./cameraSettings/CameraSettingsList";
import { CameraSettingsCreate } from "./cameraSettings/CameraSettingsCreate";
import { CameraSettingsEdit } from "./cameraSettings/CameraSettingsEdit";
import { CameraSettingsShow } from "./cameraSettings/CameraSettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Stable-Z"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="BackgroundSettings"
          list={BackgroundSettingsList}
          edit={BackgroundSettingsEdit}
          create={BackgroundSettingsCreate}
          show={BackgroundSettingsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Gesture"
          list={GestureList}
          edit={GestureEdit}
          create={GestureCreate}
          show={GestureShow}
        />
        <Resource
          name="LiveFeed"
          list={LiveFeedList}
          edit={LiveFeedEdit}
          create={LiveFeedCreate}
          show={LiveFeedShow}
        />
        <Resource
          name="CameraSettings"
          list={CameraSettingsList}
          edit={CameraSettingsEdit}
          create={CameraSettingsCreate}
          show={CameraSettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
