import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_clone_ObjectPropertyNullable =
    _test_misc_clone<ObjectPropertyNullable>(ObjectPropertyNullable)(
        typia.misc.createClone<ObjectPropertyNullable>(),
    );