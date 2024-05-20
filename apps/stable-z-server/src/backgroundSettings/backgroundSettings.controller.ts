import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BackgroundSettingsService } from "./backgroundSettings.service";
import { BackgroundSettingsControllerBase } from "./base/backgroundSettings.controller.base";

@swagger.ApiTags("backgroundSettings")
@common.Controller("backgroundSettings")
export class BackgroundSettingsController extends BackgroundSettingsControllerBase {
  constructor(protected readonly service: BackgroundSettingsService) {
    super(service);
  }
}
