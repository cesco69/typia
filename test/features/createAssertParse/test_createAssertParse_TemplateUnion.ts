import TSON from "../../../src";
import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TemplateUnion = _test_assertParse(
    "TemplateUnion",
    TemplateUnion.generate,
    TSON.createAssertParse<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);