import typia from "typia";

import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_protobuf_assertDecodeCustom_TemplateAtomic =
  _test_protobuf_assertDecode(CustomGuardError)(
    "TemplateAtomic",
  )<TemplateAtomic>(TemplateAtomic)({
    decode: (input) =>
      typia.protobuf.assertDecode<TemplateAtomic>(
        input,
        (p) => new CustomGuardError(p),
      ),
    encode: typia.protobuf.createEncode<TemplateAtomic>(),
  });