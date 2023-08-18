import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_json_validateStringify_AtomicClass =
    _test_json_validateStringify<AtomicClass>(AtomicClass)(
        typia.json.createValidateStringify<AtomicClass>(),
    );