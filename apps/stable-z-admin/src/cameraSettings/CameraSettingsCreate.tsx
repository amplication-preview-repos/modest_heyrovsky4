import * as React from "react";
import { Create, SimpleForm, CreateProps, BooleanInput } from "react-admin";

export const CameraSettingsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="AutoFocus" source="autoFocus" />
        <BooleanInput label="Stabilization" source="stabilization" />
      </SimpleForm>
    </Create>
  );
};
