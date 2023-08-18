import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_assertEncode_ObjectPrimitive =
    _test_protobuf_assertEncode<ObjectPrimitive>(ObjectPrimitive)({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ObjectPrimitive => {
                    const __is = (input: any): input is ObjectPrimitive => {
                        const $io0 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            ("txt" === input.extension ||
                                "md" === input.extension ||
                                "html" === input.extension) &&
                            "string" === typeof input.title &&
                            "string" === typeof input.body &&
                            Array.isArray(input.files) &&
                            input.files.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            ) &&
                            "boolean" === typeof input.secret &&
                            "string" === typeof input.created_at;
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.extension &&
                            "string" === typeof input.url &&
                            "string" === typeof input.created_at;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectPrimitive => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
                            const $ao0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ("string" === typeof input.id ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    })) &&
                                ("txt" === input.extension ||
                                    "md" === input.extension ||
                                    "html" === input.extension ||
                                    $guard(_exceptionable, {
                                        path: _path + ".extension",
                                        expected: '("html" | "md" | "txt")',
                                        value: input.extension,
                                    })) &&
                                ("string" === typeof input.title ||
                                    $guard(_exceptionable, {
                                        path: _path + ".title",
                                        expected: "string",
                                        value: input.title,
                                    })) &&
                                ("string" === typeof input.body ||
                                    $guard(_exceptionable, {
                                        path: _path + ".body",
                                        expected: "string",
                                        value: input.body,
                                    })) &&
                                (((Array.isArray(input.files) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files",
                                        expected:
                                            "Array<ObjectPrimitive.IFile>",
                                        value: input.files,
                                    })) &&
                                    input.files.every(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".files[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ObjectPrimitive.IFile",
                                                    value: elem,
                                                })) &&
                                                $ao1(
                                                    elem,
                                                    _path +
                                                        ".files[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".files[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "ObjectPrimitive.IFile",
                                                value: elem,
                                            }),
                                    )) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".files",
                                        expected:
                                            "Array<ObjectPrimitive.IFile>",
                                        value: input.files,
                                    })) &&
                                ("boolean" === typeof input.secret ||
                                    $guard(_exceptionable, {
                                        path: _path + ".secret",
                                        expected: "boolean",
                                        value: input.secret,
                                    })) &&
                                ("string" === typeof input.created_at ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected: "string",
                                        value: input.created_at,
                                    }));
                            const $ao1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                ("string" === typeof input.id ||
                                    $guard(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "string",
                                        value: input.id,
                                    })) &&
                                ("string" === typeof input.name ||
                                    $guard(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    })) &&
                                ("string" === typeof input.extension ||
                                    $guard(_exceptionable, {
                                        path: _path + ".extension",
                                        expected: "string",
                                        value: input.extension,
                                    })) &&
                                ("string" === typeof input.url ||
                                    $guard(_exceptionable, {
                                        path: _path + ".url",
                                        expected: "string",
                                        value: input.url,
                                    })) &&
                                ("string" === typeof input.created_at ||
                                    $guard(_exceptionable, {
                                        path: _path + ".created_at",
                                        expected: "string",
                                        value: input.created_at,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ObjectPrimitive.IArticle",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ObjectPrimitive.IArticle",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: ObjectPrimitive): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "id";
                            writer.uint32(10);
                            writer.string(input.id);
                            // property "extension";
                            writer.uint32(18);
                            writer.string(input.extension);
                            // property "title";
                            writer.uint32(26);
                            writer.string(input.title);
                            // property "body";
                            writer.uint32(34);
                            writer.string(input.body);
                            // property "files";
                            if (0 !== input.files.length) {
                                for (const elem of input.files) {
                                    writer.uint32(42);
                                    writer.fork();
                                    $peo1(elem);
                                    writer.ldelim();
                                }
                            }
                            // property "secret";
                            writer.uint32(48);
                            writer.bool(input.secret);
                            // property "created_at";
                            writer.uint32(58);
                            writer.string(input.created_at);
                        };
                        const $peo1 = (input: any): any => {
                            // property "id";
                            writer.uint32(10);
                            writer.string(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "extension";
                            writer.uint32(26);
                            writer.string(input.extension);
                            // property "url";
                            writer.uint32(34);
                            writer.string(input.url);
                            // property "created_at";
                            writer.uint32(42);
                            writer.string(input.created_at);
                        };
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.extension &&
                            "string" === typeof input.url &&
                            "string" === typeof input.created_at;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ObjectPrimitive {\n    message IArticle {\n        required string id = 1;\n        required string extension = 2;\n        required string title = 3;\n        required string body = 4;\n        repeated ObjectPrimitive.IFile files = 5;\n        required bool secret = 6;\n        required string created_at = 7;\n    }\n\n    message IFile {\n        required string id = 1;\n        required string name = 2;\n        required string extension = 3;\n        required string url = 4;\n        required string created_at = 5;\n    }\n}',
    });