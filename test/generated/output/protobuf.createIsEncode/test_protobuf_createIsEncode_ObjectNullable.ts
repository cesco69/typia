import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_protobuf_isEncode_ObjectNullable =
    _test_protobuf_isEncode<ObjectNullable>(ObjectNullable)({
        isEncode: (input: ObjectNullable): Uint8Array | null => {
            const is = (input: any): input is ObjectNullable => {
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    );
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io2(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io3(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io2 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io3 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io3(input);
                        else if ("manufacturer" === input.type)
                            return $io2(input);
                        else return false;
                    })();
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: ObjectNullable): Uint8Array => {
                const $throws = (typia.protobuf.createIsEncode as any).throws;
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
                                writer.uint32(10);
                                writer.fork();
                                $peo1(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo1 = (input: any): any => {
                        // property "name";
                        writer.uint32(10);
                        writer.string(input.name);
                        // property "manufacturer";
                        writer.uint32(18);
                        writer.fork();
                        $peo2(input.manufacturer);
                        writer.ldelim();
                        // property "brand";
                        if (null != input.brand) {
                            writer.uint32(26);
                            writer.fork();
                            $peo3(input.brand);
                            writer.ldelim();
                        }
                        // property "similar";
                        if (null != input.similar) {
                            if ("brand" === input.similar.type)
                                return (() => {
                                    writer.uint32(34);
                                    writer.fork();
                                    $peo3(input.similar);
                                    writer.ldelim();
                                })();
                            else if ("manufacturer" === input.similar.type)
                                return (() => {
                                    writer.uint32(34);
                                    writer.fork();
                                    $peo2(input.similar);
                                    writer.ldelim();
                                })();
                            else
                                $throws({
                                    expected:
                                        "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                                    value: input.similar,
                                });
                        }
                    };
                    const $peo2 = (input: any): any => {
                        // property "type";
                        writer.uint32(10);
                        writer.string(input.type);
                        // property "name";
                        writer.uint32(18);
                        writer.string(input.name);
                    };
                    const $peo3 = (input: any): any => {
                        // property "type";
                        writer.uint32(10);
                        writer.string(input.type);
                        // property "name";
                        writer.uint32(18);
                        writer.string(input.name);
                    };
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "object" === typeof input.manufacturer &&
                        null !== input.manufacturer &&
                        $io2(input.manufacturer) &&
                        (null === input.brand ||
                            ("object" === typeof input.brand &&
                                null !== input.brand &&
                                $io3(input.brand))) &&
                        (null === input.similar ||
                            ("object" === typeof input.similar &&
                                null !== input.similar &&
                                $iu0(input.similar)));
                    const $io2 = (input: any): boolean =>
                        "manufacturer" === input.type &&
                        "string" === typeof input.name;
                    const $io3 = (input: any): boolean =>
                        "brand" === input.type &&
                        "string" === typeof input.name;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ("brand" === input.type) return $io3(input);
                            else if ("manufacturer" === input.type)
                                return $io2(input);
                            else return false;
                        })();
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return is(input) ? encode(input) : null;
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectNullable {\n    repeated ObjectNullable.IProduct value = 1;\n    message IProduct {\n        required string name = 1;\n        required ObjectNullable.IManufacturer manufacturer = 2;\n        optional ObjectNullable.IBrand brand = 3;\n        oneof similar {\n            ObjectNullable.IBrand v4 = 4;\n            ObjectNullable.IManufacturer v5 = 5;\n        }\n    }\n\n    message IManufacturer {\n        required string type = 1;\n        required string name = 2;\n    }\n\n    message IBrand {\n        required string type = 1;\n        required string name = 2;\n    }\n}',
    });