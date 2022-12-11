import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonUnion = _test_validate(
    "ToJsonUnion",
    ToJsonUnion.generate,
    TSON.createValidate<ToJsonUnion>(),
);