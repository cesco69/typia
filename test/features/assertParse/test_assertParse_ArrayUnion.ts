import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayUnion = _test_assertParse(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => TSON.assertParse<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);