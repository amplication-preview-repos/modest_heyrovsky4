import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEVICE_TITLE_FIELD } from "./DeviceTitle";

export const DeviceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DeviceType" source="deviceType" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Connection"
          target="deviceId"
          label="Connections"
        >
          <Datagrid rowClick="show">
            <TextField label="ConnectionType" source="connectionType" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Device"
              source="device.id"
              reference="Device"
            >
              <TextField source={DEVICE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
