import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectGenericAlias =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericAlias",
  )<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
    typia.json.assertStringify<ObjectGenericAlias>(input),
  );