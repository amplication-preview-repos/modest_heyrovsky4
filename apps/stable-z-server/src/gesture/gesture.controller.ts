import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GestureService } from "./gesture.service";
import { GestureControllerBase } from "./base/gesture.controller.base";

@swagger.ApiTags("gestures")
@common.Controller("gestures")
export class GestureController extends GestureControllerBase {
  constructor(protected readonly service: GestureService) {
    super(service);
  }
}
