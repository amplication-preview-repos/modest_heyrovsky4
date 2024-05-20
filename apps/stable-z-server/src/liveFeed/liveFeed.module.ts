import { Module } from "@nestjs/common";
import { LiveFeedModuleBase } from "./base/liveFeed.module.base";
import { LiveFeedService } from "./liveFeed.service";
import { LiveFeedController } from "./liveFeed.controller";
import { LiveFeedResolver } from "./liveFeed.resolver";

@Module({
  imports: [LiveFeedModuleBase],
  controllers: [LiveFeedController],
  providers: [LiveFeedService, LiveFeedResolver],
  exports: [LiveFeedService],
})
export class LiveFeedModule {}
