import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LiveFeedServiceBase } from "./base/liveFeed.service.base";

@Injectable()
export class LiveFeedService extends LiveFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
