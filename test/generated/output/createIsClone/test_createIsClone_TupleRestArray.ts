import typia from "../../../../src";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TupleRestArray = _test_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input: any): typia.Primitive<TupleRestArray> | null => {
        const is = (input: any): input is TupleRestArray => {
            return (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                Array.isArray(input.slice(2)) &&
                input
                    .slice(2)
                    .every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            elem.every((elem: any) => "string" === typeof elem),
                    )
            );
        };
        const clone = (
            input: TupleRestArray,
        ): typia.Primitive<TupleRestArray> => {
            return Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Array.isArray(input.slice(2)) &&
                input
                    .slice(2)
                    .every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            elem.every((elem: any) => "string" === typeof elem),
                    )
                ? ([
                      input[0] as any,
                      input[1] as any,
                      ...(Array.isArray(input.slice(2))
                          ? input
                                .slice(2)
                                .map((elem: any) =>
                                    Array.isArray(elem)
                                        ? elem.map((elem: any) => elem as any)
                                        : (elem as any),
                                )
                          : (input.slice(2) as any)),
                  ] as any)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    },
    TupleRestArray.SPOILERS,
);