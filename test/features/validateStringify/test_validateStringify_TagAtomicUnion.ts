import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagAtomicUnion = _test_validateStringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => TSON.validateStringify(input),
    TagAtomicUnion.SPOILERS,
);