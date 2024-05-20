import * as graphql from "@nestjs/graphql";
import { GestureResolverBase } from "./base/gesture.resolver.base";
import { Gesture } from "./base/Gesture";
import { GestureService } from "./gesture.service";

@graphql.Resolver(() => Gesture)
export class GestureResolver extends GestureResolverBase {
  constructor(protected readonly service: GestureService) {
    super(service);
  }
}
