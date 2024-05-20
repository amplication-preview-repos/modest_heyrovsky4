import * as graphql from "@nestjs/graphql";
import { ProtocolResolverBase } from "./base/protocol.resolver.base";
import { Protocol } from "./base/Protocol";
import { ProtocolService } from "./protocol.service";

@graphql.Resolver(() => Protocol)
export class ProtocolResolver extends ProtocolResolverBase {
  constructor(protected readonly service: ProtocolService) {
    super(service);
  }
}
