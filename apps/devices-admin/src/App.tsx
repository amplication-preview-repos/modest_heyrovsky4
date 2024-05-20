import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessList } from "./process/ProcessList";
import { ProcessCreate } from "./process/ProcessCreate";
import { ProcessEdit } from "./process/ProcessEdit";
import { ProcessShow } from "./process/ProcessShow";
import { ConnectionList } from "./connection/ConnectionList";
import { ConnectionCreate } from "./connection/ConnectionCreate";
import { ConnectionEdit } from "./connection/ConnectionEdit";
import { ConnectionShow } from "./connection/ConnectionShow";
import { DeviceList } from "./device/DeviceList";
import { DeviceCreate } from "./device/DeviceCreate";
import { DeviceEdit } from "./device/DeviceEdit";
import { DeviceShow } from "./device/DeviceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"Devices"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Process"
          list={ProcessList}
          edit={ProcessEdit}
          create={ProcessCreate}
          show={ProcessShow}
        />
        <Resource
          name="Connection"
          list={ConnectionList}
          edit={ConnectionEdit}
          create={ConnectionCreate}
          show={ConnectionShow}
        />
        <Resource
          name="Device"
          list={DeviceList}
          edit={DeviceEdit}
          create={DeviceCreate}
          show={DeviceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
