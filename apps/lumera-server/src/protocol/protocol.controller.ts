import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProtocolService } from "./protocol.service";
import { ProtocolControllerBase } from "./base/protocol.controller.base";

@swagger.ApiTags("protocols")
@common.Controller("protocols")
export class ProtocolController extends ProtocolControllerBase {
  constructor(protected readonly service: ProtocolService) {
    super(service);
  }
}
