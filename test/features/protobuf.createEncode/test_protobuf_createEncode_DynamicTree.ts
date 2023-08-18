import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_protobuf_encode_DynamicTree =
    _test_protobuf_encode<DynamicTree>(DynamicTree)({
        encode: typia.protobuf.createEncode<DynamicTree>(),
        message: typia.protobuf.message<DynamicTree>(),
    });