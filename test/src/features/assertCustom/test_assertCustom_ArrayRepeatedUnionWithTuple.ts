import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayRepeatedUnionWithTuple = _test_assert(
  CustomGuardError,
)("ArrayRepeatedUnionWithTuple")<ArrayRepeatedUnionWithTuple>(
  ArrayRepeatedUnionWithTuple,
)((input) =>
  typia.assert<ArrayRepeatedUnionWithTuple>(
    input,
    (p) => new CustomGuardError(p),
  ),
);