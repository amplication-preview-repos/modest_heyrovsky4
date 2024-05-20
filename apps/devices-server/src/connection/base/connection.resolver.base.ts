/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Connection } from "./Connection";
import { ConnectionCountArgs } from "./ConnectionCountArgs";
import { ConnectionFindManyArgs } from "./ConnectionFindManyArgs";
import { ConnectionFindUniqueArgs } from "./ConnectionFindUniqueArgs";
import { CreateConnectionArgs } from "./CreateConnectionArgs";
import { UpdateConnectionArgs } from "./UpdateConnectionArgs";
import { DeleteConnectionArgs } from "./DeleteConnectionArgs";
import { Device } from "../../device/base/Device";
import { ConnectionService } from "../connection.service";
@graphql.Resolver(() => Connection)
export class ConnectionResolverBase {
  constructor(protected readonly service: ConnectionService) {}

  async _connectionsMeta(
    @graphql.Args() args: ConnectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Connection])
  async connections(
    @graphql.Args() args: ConnectionFindManyArgs
  ): Promise<Connection[]> {
    return this.service.connections(args);
  }

  @graphql.Query(() => Connection, { nullable: true })
  async connection(
    @graphql.Args() args: ConnectionFindUniqueArgs
  ): Promise<Connection | null> {
    const result = await this.service.connection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Connection)
  async createConnection(
    @graphql.Args() args: CreateConnectionArgs
  ): Promise<Connection> {
    return await this.service.createConnection({
      ...args,
      data: {
        ...args.data,

        device: args.data.device
          ? {
              connect: args.data.device,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Connection)
  async updateConnection(
    @graphql.Args() args: UpdateConnectionArgs
  ): Promise<Connection | null> {
    try {
      return await this.service.updateConnection({
        ...args,
        data: {
          ...args.data,

          device: args.data.device
            ? {
                connect: args.data.device,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Connection)
  async deleteConnection(
    @graphql.Args() args: DeleteConnectionArgs
  ): Promise<Connection | null> {
    try {
      return await this.service.deleteConnection(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Device, {
    nullable: true,
    name: "device",
  })
  async getDevice(
    @graphql.Parent() parent: Connection
  ): Promise<Device | null> {
    const result = await this.service.getDevice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
