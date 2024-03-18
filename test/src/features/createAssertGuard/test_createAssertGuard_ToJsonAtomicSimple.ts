import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ToJsonAtomicSimple = _test_assertGuard(
  TypeGuardError,
)("ToJsonAtomicSimple")<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
  typia.createAssertGuard<ToJsonAtomicSimple>(),
);