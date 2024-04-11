import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_functional_equalsParametersAsync_ObjectHttpConstant =
  _test_functional_equalsParametersAsync("ObjectHttpConstant")(
    ObjectHttpConstant,
  )(
    (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      async (input: ObjectHttpConstant): Promise<ObjectHttpConstant | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpConstant => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              false === input.boolean &&
              (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
              (2 === input.number || 98 === input.number) &&
              ("ninety-seven" === input.string ||
                "something" === input.string ||
                "three" === input.string) &&
              "string" === typeof input.template &&
              RegExp(/^abcd_(.*)/).test(input.template) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["boolean", "bigint", "number", "string", "template"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );