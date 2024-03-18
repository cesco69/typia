import typia from "typia";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ConstantAtomicSimple =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicSimple",
  })(typia.json.application<[ConstantAtomicSimple], "ajv", true>());