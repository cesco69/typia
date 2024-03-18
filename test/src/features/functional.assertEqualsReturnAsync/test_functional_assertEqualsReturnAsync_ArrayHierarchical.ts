import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ArrayHierarchical =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )((p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
    typia.functional.assertEqualsReturn(p),
  );