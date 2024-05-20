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

import { PROTOCOL_TITLE_FIELD } from "./ProtocolTitle";

export const ProtocolShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Version" source="version" />
        <ReferenceManyField
          reference="Stream"
          target="protocolId"
          label="Streams"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="CreatedBy" source="createdBy" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Protocol"
              source="protocol.id"
              reference="Protocol"
            >
              <TextField source={PROTOCOL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="StreamURL" source="streamUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
