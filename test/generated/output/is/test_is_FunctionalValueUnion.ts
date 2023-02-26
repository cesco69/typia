import typia from "../../../../src";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_FunctionalValueUnion = _test_is(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) =>
        ((input: any): input is FunctionalValueUnion => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        undefined !== elem &&
                        (null === elem ||
                            "function" === typeof elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem))),
                )
            );
        })(input),
    FunctionalValueUnion.SPOILERS,
);