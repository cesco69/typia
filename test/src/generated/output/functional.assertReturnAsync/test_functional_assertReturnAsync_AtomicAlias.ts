import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_functional_assertReturnAsync_AtomicAlias =
  _test_functional_assertReturnAsync(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      async (input: AtomicAlias): Promise<AtomicAlias> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
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
              const $guard = (typia.functional.assertReturn as any).guard;
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
                  (("number" === typeof input[1] &&
                    Number.isFinite(input[1])) ||
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
        })(await p(input));
      },
  );