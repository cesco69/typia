import typia from "typia";
import { ObjectUndefined } from "../../../../structures/ObjectUndefined";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_swagger_standard_ObjectUndefined =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "ObjectUndefined",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUndefined",
      },
    ],
    components: {
      schemas: {
        ObjectUndefined: {
          type: "array",
          items: {
            $ref: "#/components/schemas/ObjectUndefined.ILecture",
          },
        },
        "ObjectUndefined.ILecture": {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            professor: {
              oneOf: [
                {
                  type: "string",
                },
                {
                  type: "number",
                },
              ],
            },
            classroom: {
              $ref: "#/components/schemas/ObjectUndefined.IClassroom",
            },
            grade: {
              type: "number",
            },
            unknown: {},
          },
          nullable: false,
          required: ["name", "unknown"],
        },
        "ObjectUndefined.IClassroom": {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
          },
          nullable: false,
          required: ["id", "name"],
        },
      },
    },
    purpose: "swagger",
    surplus: false,
  });