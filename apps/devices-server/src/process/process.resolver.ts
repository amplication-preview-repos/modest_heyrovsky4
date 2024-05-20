import * as graphql from "@nestjs/graphql";
import { ProcessResolverBase } from "./base/process.resolver.base";
import { Process } from "./base/Process";
import { ProcessService } from "./process.service";

@graphql.Resolver(() => Process)
export class ProcessResolver extends ProcessResolverBase {
  constructor(protected readonly service: ProcessService) {
    super(service);
  }
}
