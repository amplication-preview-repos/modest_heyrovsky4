import * as React from "react";
import { Edit, SimpleForm, EditProps, BooleanInput } from "react-admin";

export const CameraSettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="AutoFocus" source="autoFocus" />
        <BooleanInput label="Stabilization" source="stabilization" />
      </SimpleForm>
    </Edit>
  );
};
