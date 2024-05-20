import * as graphql from "@nestjs/graphql";
import { CameraSettingsResolverBase } from "./base/cameraSettings.resolver.base";
import { CameraSettings } from "./base/CameraSettings";
import { CameraSettingsService } from "./cameraSettings.service";

@graphql.Resolver(() => CameraSettings)
export class CameraSettingsResolver extends CameraSettingsResolverBase {
  constructor(protected readonly service: CameraSettingsService) {
    super(service);
  }
}
