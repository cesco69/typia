import typia from "typia";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";
import { _test_json_application } from "../../../../internal/_test_json_application";
export const test_json_application_ajv_standard_ObjectPropertyNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectPropertyNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectPropertyNullable",
      },
    ],
    components: {
      schemas: {
        ObjectPropertyNullable: {
          $id: "#/components/schemas/ObjectPropertyNullable",
          type: "array",
          items: [
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
              },
              "x-typia-rest": false,
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          ],
          minItems: 4,
          maxItems: 4,
        },
        "ObjectPropertyNullable.IPointerboolean": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointerboolean",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointernumber": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointernumber",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointerstring": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointerstring",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember": {
          $id: "#/components/schemas/ObjectPropertyNullable.IPointerObjectPropertyNullable.IMember",
          type: "object",
          properties: {
            value: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectPropertyNullable.IMember",
                },
              ],
            },
          },
          required: ["value"],
        },
        "ObjectPropertyNullable.IMember": {
          $id: "#/components/schemas/ObjectPropertyNullable.IMember",
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
            },
            grade: {
              type: "number",
            },
            serial: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "number",
                },
              ],
            },
            activated: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "boolean",
                },
              ],
            },
          },
          required: ["id", "name", "activated"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });