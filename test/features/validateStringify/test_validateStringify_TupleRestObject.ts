import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TupleRestObject = _test_validateStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => TSON.validateStringify(input),
    TupleRestObject.SPOILERS,
);