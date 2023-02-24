import typia from "typia";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectOptional = _test_clone(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createClone<ObjectOptional>(),
);