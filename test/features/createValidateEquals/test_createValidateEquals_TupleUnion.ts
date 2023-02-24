import typia from "typia";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TupleUnion = _test_validateEquals(
    "TupleUnion",
    TupleUnion.generate,
    typia.createValidateEquals<TupleUnion>(),
);