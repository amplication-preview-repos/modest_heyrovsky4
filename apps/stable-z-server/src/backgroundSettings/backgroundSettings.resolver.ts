import * as graphql from "@nestjs/graphql";
import { BackgroundSettingsResolverBase } from "./base/backgroundSettings.resolver.base";
import { BackgroundSettings } from "./base/BackgroundSettings";
import { BackgroundSettingsService } from "./backgroundSettings.service";

@graphql.Resolver(() => BackgroundSettings)
export class BackgroundSettingsResolver extends BackgroundSettingsResolverBase {
  constructor(protected readonly service: BackgroundSettingsService) {
    super(service);
  }
}
