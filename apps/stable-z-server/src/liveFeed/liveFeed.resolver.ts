import * as graphql from "@nestjs/graphql";
import { LiveFeedResolverBase } from "./base/liveFeed.resolver.base";
import { LiveFeed } from "./base/LiveFeed";
import { LiveFeedService } from "./liveFeed.service";

@graphql.Resolver(() => LiveFeed)
export class LiveFeedResolver extends LiveFeedResolverBase {
  constructor(protected readonly service: LiveFeedService) {
    super(service);
  }
}
