import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LiveFeedService } from "./liveFeed.service";
import { LiveFeedControllerBase } from "./base/liveFeed.controller.base";

@swagger.ApiTags("liveFeeds")
@common.Controller("liveFeeds")
export class LiveFeedController extends LiveFeedControllerBase {
  constructor(protected readonly service: LiveFeedService) {
    super(service);
  }
}
