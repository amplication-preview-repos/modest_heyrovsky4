/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LiveFeedService } from "../liveFeed.service";
import { LiveFeedCreateInput } from "./LiveFeedCreateInput";
import { LiveFeed } from "./LiveFeed";
import { LiveFeedFindManyArgs } from "./LiveFeedFindManyArgs";
import { LiveFeedWhereUniqueInput } from "./LiveFeedWhereUniqueInput";
import { LiveFeedUpdateInput } from "./LiveFeedUpdateInput";

export class LiveFeedControllerBase {
  constructor(protected readonly service: LiveFeedService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LiveFeed })
  async createLiveFeed(
    @common.Body() data: LiveFeedCreateInput
  ): Promise<LiveFeed> {
    return await this.service.createLiveFeed({
      data: data,
      select: {
        active: true,
        createdAt: true,
        id: true,
        resolution: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LiveFeed] })
  @ApiNestedQuery(LiveFeedFindManyArgs)
  async liveFeeds(@common.Req() request: Request): Promise<LiveFeed[]> {
    const args = plainToClass(LiveFeedFindManyArgs, request.query);
    return this.service.liveFeeds({
      ...args,
      select: {
        active: true,
        createdAt: true,
        id: true,
        resolution: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LiveFeed })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async liveFeed(
    @common.Param() params: LiveFeedWhereUniqueInput
  ): Promise<LiveFeed | null> {
    const result = await this.service.liveFeed({
      where: params,
      select: {
        active: true,
        createdAt: true,
        id: true,
        resolution: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: LiveFeed })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLiveFeed(
    @common.Param() params: LiveFeedWhereUniqueInput,
    @common.Body() data: LiveFeedUpdateInput
  ): Promise<LiveFeed | null> {
    try {
      return await this.service.updateLiveFeed({
        where: params,
        data: data,
        select: {
          active: true,
          createdAt: true,
          id: true,
          resolution: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: LiveFeed })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLiveFeed(
    @common.Param() params: LiveFeedWhereUniqueInput
  ): Promise<LiveFeed | null> {
    try {
      return await this.service.deleteLiveFeed({
        where: params,
        select: {
          active: true,
          createdAt: true,
          id: true,
          resolution: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
