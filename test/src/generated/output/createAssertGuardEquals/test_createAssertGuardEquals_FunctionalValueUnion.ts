import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
import { TypeGuardError } from "typia";
export const test_createAssertGuardEquals_FunctionalValueUnion =
  _test_assertGuardEquals(TypeGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is FunctionalValueUnion => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalValueUnion => {
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              undefined !== elem &&
              (null === elem ||
                "function" === typeof elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem))),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalValueUnion => {
          const $guard = (typia.createAssertGuardEquals as any).guard;
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "FunctionalValueUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  (undefined !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "(null | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (null === elem ||
                    "function" === typeof elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "(null | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalValueUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    },
  );