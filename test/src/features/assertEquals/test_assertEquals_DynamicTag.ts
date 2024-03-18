import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_assertEquals_DynamicTag = _test_assertEquals(TypeGuardError)(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) => typia.assertEquals<DynamicTag>(input));