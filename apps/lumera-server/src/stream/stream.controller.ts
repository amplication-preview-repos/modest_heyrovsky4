import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StreamService } from "./stream.service";
import { StreamControllerBase } from "./base/stream.controller.base";

@swagger.ApiTags("streams")
@common.Controller("streams")
export class StreamController extends StreamControllerBase {
  constructor(protected readonly service: StreamService) {
    super(service);
  }
}
