import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProtocolList } from "./protocol/ProtocolList";
import { ProtocolCreate } from "./protocol/ProtocolCreate";
import { ProtocolEdit } from "./protocol/ProtocolEdit";
import { ProtocolShow } from "./protocol/ProtocolShow";
import { StreamList } from "./stream/StreamList";
import { StreamCreate } from "./stream/StreamCreate";
import { StreamEdit } from "./stream/StreamEdit";
import { StreamShow } from "./stream/StreamShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ConnectionList } from "./connection/ConnectionList";
import { ConnectionCreate } from "./connection/ConnectionCreate";
import { ConnectionEdit } from "./connection/ConnectionEdit";
import { ConnectionShow } from "./connection/ConnectionShow";
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
        title={"Lumera"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Protocol"
          list={ProtocolList}
          edit={ProtocolEdit}
          create={ProtocolCreate}
          show={ProtocolShow}
        />
        <Resource
          name="Stream"
          list={StreamList}
          edit={StreamEdit}
          create={StreamCreate}
          show={StreamShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Connection"
          list={ConnectionList}
          edit={ConnectionEdit}
          create={ConnectionCreate}
          show={ConnectionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
