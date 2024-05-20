import * as graphql from "@nestjs/graphql";
import { StreamResolverBase } from "./base/stream.resolver.base";
import { Stream } from "./base/Stream";
import { StreamService } from "./stream.service";

@graphql.Resolver(() => Stream)
export class StreamResolver extends StreamResolverBase {
  constructor(protected readonly service: StreamService) {
    super(service);
  }
}
