import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { TagRange } from "../../../structures/TagRange";

export const test_misc_isClone_TagRange = _test_misc_isClone<TagRange>(
    TagRange,
)((input) =>
    ((input: any): typia.Primitive<TagRange> | null => {
        const is = (input: any): input is TagRange => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Number.isFinite(input.greater) &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Number.isFinite(input.greater_equal) &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Number.isFinite(input.less) &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Number.isFinite(input.less_equal) &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                10 <= input.equal &&
                10 >= input.equal;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const clone = (input: TagRange): typia.Primitive<TagRange> => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                10 <= input.equal &&
                10 >= input.equal;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co1(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                value: Array.isArray(input.value)
                    ? $cp0(input.value)
                    : (input.value as any),
            });
            const $co1 = (input: any): any => ({
                greater: input.greater as any,
                greater_equal: input.greater_equal as any,
                less: input.less as any,
                less_equal: input.less_equal as any,
                greater_less: input.greater_less as any,
                greater_equal_less: input.greater_equal_less as any,
                greater_less_equal: input.greater_less_equal as any,
                greater_equal_less_equal: input.greater_equal_less_equal as any,
                equal: input.equal as any,
            });
            return "object" === typeof input && null !== input
                ? $co0(input)
                : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);