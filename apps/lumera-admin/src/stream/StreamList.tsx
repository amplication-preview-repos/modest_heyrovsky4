import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROTOCOL_TITLE_FIELD } from "../protocol/ProtocolTitle";

export const StreamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Streams"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
