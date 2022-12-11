import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_SetAlias = _test_validateStringify(
    "SetAlias",
    SetAlias.generate,
    (input) => TSON.validateStringify(input),
    SetAlias.SPOILERS,
);