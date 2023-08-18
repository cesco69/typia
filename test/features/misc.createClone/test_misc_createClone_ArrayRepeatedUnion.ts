import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_misc_clone_ArrayRepeatedUnion =
    _test_misc_clone<ArrayRepeatedUnion>(ArrayRepeatedUnion)(
        typia.misc.createClone<ArrayRepeatedUnion>(),
    );