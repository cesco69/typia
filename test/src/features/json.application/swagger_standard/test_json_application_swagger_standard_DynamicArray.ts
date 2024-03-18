import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_DynamicArray =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "DynamicArray",
  })(typia.json.application<[DynamicArray], "swagger", false>());