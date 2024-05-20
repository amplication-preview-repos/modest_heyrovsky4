import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessService } from "./process.service";
import { ProcessControllerBase } from "./base/process.controller.base";

@swagger.ApiTags("processes")
@common.Controller("processes")
export class ProcessController extends ProcessControllerBase {
  constructor(protected readonly service: ProcessService) {
    super(service);
  }
}
