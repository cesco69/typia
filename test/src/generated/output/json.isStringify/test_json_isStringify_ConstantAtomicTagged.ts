import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_json_isStringify_ConstantAtomicTagged =
  _test_json_isStringify("ConstantAtomicTagged")<ConstantAtomicTagged>(
    ConstantAtomicTagged,
  )((input) =>
    ((input: ConstantAtomicTagged): string | null => {
      const is = (input: any): input is ConstantAtomicTagged => {
        const $io0 = (input: any): boolean =>
          ("latest" === input.id ||
            ("string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ))) &&
          (-1 === input.age ||
            ("number" === typeof input.age &&
              Math.floor(input.age) === input.age &&
              0 <= input.age &&
              input.age <= 4294967295 &&
              input.age <= 100));
        return "object" === typeof input && null !== input && $io0(input);
      };
      const stringify = (input: ConstantAtomicTagged): string => {
        const $string = (typia.json.isStringify as any).string;
        const $throws = (typia.json.isStringify as any).throws;
        const $number = (typia.json.isStringify as any).number;
        const $so0 = (input: any): any =>
          `{"id":${(() => {
            if ("string" === typeof input.id) return $string(input.id);
            if ("string" === typeof input.id) return '"' + input.id + '"';
            if (
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              )
            )
              return $string(input.id);
            $throws({
              expected: '("latest" | (string & Format<"uuid">))',
              value: input.id,
            });
          })()},"age":${(() => {
            if ("number" === typeof input.age) return $number(input.age);
            if (
              "number" === typeof input.age &&
              Math.floor(input.age) === input.age &&
              0 <= input.age &&
              input.age <= 4294967295 &&
              input.age <= 100
            )
              return $number(input.age);
            $throws({
              expected: '((number & Type<"uint32"> & Maximum<100>) | -1)',
              value: input.age,
            });
          })()}}`;
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    })(input),
  );