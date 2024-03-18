import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ConstantAtomicAbsorbed =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "ConstantAtomicAbsorbed",
  )(ConstantAtomicAbsorbed)(
    (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) =>
      typia.functional.assertEqualsFunction(p),
  );