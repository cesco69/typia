import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_assertStringify_AtomicAlias = _test_json_assertStringify(
  TypeGuardError,
)("AtomicAlias")<AtomicAlias>(AtomicAlias)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): string => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): AtomicAlias => {
      const __is = (input: any): input is AtomicAlias => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          "string" === typeof input[2]
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is AtomicAlias => {
          const $guard = (typia.json.assertStringify as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "AtomicAlias",
                  value: input,
                },
                errorFactory,
              )) &&
              (input.length === 3 ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "[boolean, number, string]",
                    value: input,
                  },
                  errorFactory,
                )) &&
              ("boolean" === typeof input[0] ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "boolean",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input[1] && Number.isFinite(input[1])) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "number",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input[2] ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "string",
                    value: input[2],
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "AtomicAlias",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: AtomicAlias): string => {
      const $number = (typia.json.assertStringify as any).number;
      const $string = (typia.json.assertStringify as any).string;
      return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    };
    return stringify(assert(input, errorFactory));
  })(input),
);