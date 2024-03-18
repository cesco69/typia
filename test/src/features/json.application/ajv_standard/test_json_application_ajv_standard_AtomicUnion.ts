import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_AtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "AtomicUnion",
  })(typia.json.application<[AtomicUnion], "ajv", false>());