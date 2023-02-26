import typia from "../../../../src";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArraySimple = _test_isStringify(
    "ArraySimple",
    ArraySimple.generate,
    (input) =>
        ((input: ArraySimple): string | null => {
            const is = (input: any): input is ArraySimple => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.email &&
                    Array.isArray(input.hobbies) &&
                    input.hobbies.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank &&
                    Number.isFinite(input.rank);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const stringify = (input: ArraySimple): string => {
                const $string = (typia.isStringify as any).string;
                const $number = (typia.isStringify as any).number;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "string" === typeof input.body &&
                    "number" === typeof input.rank;
                const $so0 = (input: any): any =>
                    `{"name":${$string(input.name)},"email":${$string(
                        input.email,
                    )},"hobbies":${`[${input.hobbies
                        .map(
                            (elem: any) =>
                                `{"name":${$string(elem.name)},"body":${$string(
                                    elem.body,
                                )},"rank":${$number(elem.rank)}}`,
                        )
                        .join(",")}]`}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArraySimple.SPOILERS,
);