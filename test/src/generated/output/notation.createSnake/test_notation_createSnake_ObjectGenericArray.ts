import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_notation_createValidateSnake_ObjectGenericArray =
  _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )<typia.SnakeCase<ObjectGenericArray>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ObjectGenericArray>> => {
      const validate = (input: any): typia.IValidation<ObjectGenericArray> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectGenericArray => {
          const $io0 = (input: any): boolean =>
            "object" === typeof input.pagination &&
            null !== input.pagination &&
            "number" === typeof (input.pagination as any).page &&
            Number.isFinite((input.pagination as any).page) &&
            "number" === typeof (input.pagination as any).limit &&
            Number.isFinite((input.pagination as any).limit) &&
            "number" === typeof (input.pagination as any).total_count &&
            Number.isFinite((input.pagination as any).total_count) &&
            "number" === typeof (input.pagination as any).total_pages &&
            Number.isFinite((input.pagination as any).total_pages) &&
            Array.isArray(input.data) &&
            input.data.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
            );
          const $io2 = (input: any): boolean =>
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectGenericArray => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.pagination &&
                  null !== input.pagination) ||
                  $report(_exceptionable, {
                    path: _path + ".pagination",
                    expected: "ObjectGenericArray.IPagination",
                    value: input.pagination,
                  })) &&
                  $vo1(
                    input.pagination,
                    _path + ".pagination",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".pagination",
                    expected: "ObjectGenericArray.IPagination",
                    value: input.pagination,
                  }),
                ((Array.isArray(input.data) ||
                  $report(_exceptionable, {
                    path: _path + ".data",
                    expected: "Array<ObjectGenericArray.IPerson>",
                    value: input.data,
                  })) &&
                  input.data
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".data[" + _index1 + "]",
                            expected: "ObjectGenericArray.IPerson",
                            value: elem,
                          })) &&
                          $vo2(
                            elem,
                            _path + ".data[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".data[" + _index1 + "]",
                          expected: "ObjectGenericArray.IPerson",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".data",
                    expected: "Array<ObjectGenericArray.IPerson>",
                    value: input.data,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.page &&
                  Number.isFinite(input.page)) ||
                  $report(_exceptionable, {
                    path: _path + ".page",
                    expected: "number",
                    value: input.page,
                  }),
                ("number" === typeof input.limit &&
                  Number.isFinite(input.limit)) ||
                  $report(_exceptionable, {
                    path: _path + ".limit",
                    expected: "number",
                    value: input.limit,
                  }),
                ("number" === typeof input.total_count &&
                  Number.isFinite(input.total_count)) ||
                  $report(_exceptionable, {
                    path: _path + ".total_count",
                    expected: "number",
                    value: input.total_count,
                  }),
                ("number" === typeof input.total_pages &&
                  Number.isFinite(input.total_pages)) ||
                  $report(_exceptionable, {
                    path: _path + ".total_pages",
                    expected: "number",
                    value: input.total_pages,
                  }),
              ].every((flag: boolean) => flag);
            const $vo2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                ("number" === typeof input.age && Number.isFinite(input.age)) ||
                  $report(_exceptionable, {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectGenericArray",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectGenericArray",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const general = (
        input: ObjectGenericArray,
      ): typia.SnakeCase<ObjectGenericArray> => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.page &&
          "number" === typeof input.limit &&
          "number" === typeof input.total_count &&
          "number" === typeof input.total_pages;
        const $io2 = (input: any): boolean =>
          "string" === typeof input.name && "number" === typeof input.age;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co2(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          pagination:
            "object" === typeof input.pagination && null !== input.pagination
              ? $co1(input.pagination)
              : (input.pagination as any),
          data: Array.isArray(input.data)
            ? $cp0(input.data)
            : (input.data as any),
        });
        const $co1 = (input: any): any => ({
          page: input.page as any,
          limit: input.limit as any,
          total_count: input.total_count as any,
          total_pages: input.total_pages as any,
        });
        const $co2 = (input: any): any => ({
          name: input.name as any,
          age: input.age as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<ObjectGenericArray> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ObjectGenericArray> => {
        const $io0 = (input: any): boolean =>
          "object" === typeof input.pagination &&
          null !== input.pagination &&
          "number" === typeof (input.pagination as any).page &&
          Number.isFinite((input.pagination as any).page) &&
          "number" === typeof (input.pagination as any).limit &&
          Number.isFinite((input.pagination as any).limit) &&
          "number" === typeof (input.pagination as any).total_count &&
          Number.isFinite((input.pagination as any).total_count) &&
          "number" === typeof (input.pagination as any).total_pages &&
          Number.isFinite((input.pagination as any).total_pages) &&
          Array.isArray(input.data) &&
          input.data.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          );
        const $io2 = (input: any): boolean =>
          "string" === typeof input.name &&
          "number" === typeof input.age &&
          Number.isFinite(input.age);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectGenericArray> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.pagination &&
              null !== input.pagination) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".pagination",
                  expected: "ObjectGenericArray.IPagination",
                  value: input.pagination,
                },
                errorFactory,
              )) &&
              $ao1(
                input.pagination,
                _path + ".pagination",
                true && _exceptionable,
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".pagination",
                  expected: "ObjectGenericArray.IPagination",
                  value: input.pagination,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.data) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".data",
                  expected: "Array<ObjectGenericArray.IPerson>",
                  value: input.data,
                },
                errorFactory,
              )) &&
              input.data.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".data[" + _index1 + "]",
                        expected: "ObjectGenericArray.IPerson",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao2(
                      elem,
                      _path + ".data[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".data[" + _index1 + "]",
                      expected: "ObjectGenericArray.IPerson",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".data",
                  expected: "Array<ObjectGenericArray.IPerson>",
                  value: input.data,
                },
                errorFactory,
              ));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.page && Number.isFinite(input.page)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".page",
                  expected: "number",
                  value: input.page,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.limit &&
              Number.isFinite(input.limit)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".limit",
                  expected: "number",
                  value: input.limit,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.total_count &&
              Number.isFinite(input.total_count)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".total_count",
                  expected: "number",
                  value: input.total_count,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.total_pages &&
              Number.isFinite(input.total_pages)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".total_pages",
                  expected: "number",
                  value: input.total_pages,
                },
                errorFactory,
              ));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.age && Number.isFinite(input.age)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".age",
                  expected: "number",
                  value: input.age,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectGenericArray",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectGenericArray",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });