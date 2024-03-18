import typia from "typia";
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_surplus_TypeTagRange =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "TypeTagRange",
  })(typia.json.application<[TypeTagRange], "swagger", true>());