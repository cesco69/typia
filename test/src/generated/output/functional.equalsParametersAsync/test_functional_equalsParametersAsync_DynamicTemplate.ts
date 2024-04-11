import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_functional_equalsParametersAsync_DynamicTemplate =
  _test_functional_equalsParametersAsync("DynamicTemplate")(DynamicTemplate)(
    (p: (input: DynamicTemplate) => Promise<DynamicTemplate>) =>
      async (input: DynamicTemplate): Promise<DynamicTemplate | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is DynamicTemplate => {
            const $join = (typia.functional.equalsParameters as any).join;
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                    key,
                  )
                )
                  return "number" === typeof value && Number.isFinite(value);
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return "boolean" === typeof value;
                return false;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );