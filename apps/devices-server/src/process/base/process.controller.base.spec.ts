import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProcessController } from "../process.controller";
import { ProcessService } from "../process.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  associatedDevice: "exampleAssociatedDevice",
  createdAt: new Date(),
  id: "exampleId",
  linkedDevice: "exampleLinkedDevice",
  name: "exampleName",
  pid: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  associatedDevice: "exampleAssociatedDevice",
  createdAt: new Date(),
  id: "exampleId",
  linkedDevice: "exampleLinkedDevice",
  name: "exampleName",
  pid: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    associatedDevice: "exampleAssociatedDevice",
    createdAt: new Date(),
    id: "exampleId",
    linkedDevice: "exampleLinkedDevice",
    name: "exampleName",
    pid: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  associatedDevice: "exampleAssociatedDevice",
  createdAt: new Date(),
  id: "exampleId",
  linkedDevice: "exampleLinkedDevice",
  name: "exampleName",
  pid: 42,
  updatedAt: new Date(),
};

const service = {
  createProcess() {
    return CREATE_RESULT;
  },
  processes: () => FIND_MANY_RESULT,
  process: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Process", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProcessService,
          useValue: service,
        },
      ],
      controllers: [ProcessController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /processes", async () => {
    await request(app.getHttpServer())
      .post("/processes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /processes", async () => {
    await request(app.getHttpServer())
      .get("/processes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /processes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/processes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /processes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/processes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /processes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/processes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/processes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
