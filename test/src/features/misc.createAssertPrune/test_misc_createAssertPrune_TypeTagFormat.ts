import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagFormat = _test_misc_assertPrune(
  TypeGuardError,
)("TypeTagFormat")<TypeTagFormat>(TypeTagFormat)(
  typia.misc.createAssertPrune<TypeTagFormat>(),
);