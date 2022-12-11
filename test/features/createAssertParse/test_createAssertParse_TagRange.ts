import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TagRange = _test_assertParse(
    "TagRange",
    TagRange.generate,
    TSON.createAssertParse<TagRange>(),
    TagRange.SPOILERS,
);