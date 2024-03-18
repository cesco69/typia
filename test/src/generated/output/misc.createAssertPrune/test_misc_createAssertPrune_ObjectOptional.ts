import typia from "typia";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { TypeGuardError } from "typia";
export const test_misc_createAssertPrune_ObjectOptional =
  _test_misc_assertPrune(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectOptional => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectOptional => {
        const __is = (input: any): input is ObjectOptional => {
          const $io0 = (input: any): boolean =>
            (undefined === input.id || "string" === typeof input.id) &&
            (undefined === input.name || "string" === typeof input.name) &&
            (undefined === input.email || "string" === typeof input.email) &&
            (undefined === input.sequence ||
              ("number" === typeof input.sequence &&
                Number.isFinite(input.sequence)));
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectOptional => {
            const $guard = (typia.misc.createAssertPrune as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.id ||
                "string" === typeof input.id ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "(string | undefined)",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (undefined === input.name ||
                "string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "(string | undefined)",
                    value: input.name,
                  },
                  errorFactory,
                )) &&
              (undefined === input.email ||
                "string" === typeof input.email ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".email",
                    expected: "(string | undefined)",
                    value: input.email,
                  },
                  errorFactory,
                )) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".sequence",
                    expected: "(number | undefined)",
                    value: input.sequence,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectOptional",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectOptional",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: ObjectOptional): void => {
        const $po0 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "name" === key ||
              "email" === key ||
              "sequence" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    },
  );