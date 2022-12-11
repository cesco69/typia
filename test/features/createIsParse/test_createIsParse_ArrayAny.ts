import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ArrayAny = _test_isParse(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createIsParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);