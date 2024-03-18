import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_FunctionalProperty =
  _test_functional_assertFunction(CustomGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => FunctionalProperty) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );