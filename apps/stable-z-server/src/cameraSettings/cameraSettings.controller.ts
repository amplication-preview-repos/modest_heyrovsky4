import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CameraSettingsService } from "./cameraSettings.service";
import { CameraSettingsControllerBase } from "./base/cameraSettings.controller.base";

@swagger.ApiTags("cameraSettings")
@common.Controller("cameraSettings")
export class CameraSettingsController extends CameraSettingsControllerBase {
  constructor(protected readonly service: CameraSettingsService) {
    super(service);
  }
}
