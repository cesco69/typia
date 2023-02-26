import typia from "../../../../src";
import { TagFormat } from "../../../structures/TagFormat";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagFormat = _test_isPrune(
    "TagFormat",
    TagFormat.generate,
    (input: any): input is TagFormat => {
        const is = (input: any): input is TagFormat => {
            const $is_uuid = (typia.createIsPrune as any).is_uuid;
            const $is_email = (typia.createIsPrune as any).is_email;
            const $is_url = (typia.createIsPrune as any).is_url;
            const $is_ipv4 = (typia.createIsPrune as any).is_ipv4;
            const $is_ipv6 = (typia.createIsPrune as any).is_ipv6;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.uuid &&
                true === $is_uuid(input.uuid) &&
                "string" === typeof input.email &&
                true === $is_email(input.email) &&
                "string" === typeof input.url &&
                true === $is_url(input.url) &&
                "string" === typeof input.ipv4 &&
                true === $is_ipv4(input.ipv4) &&
                "string" === typeof input.ipv6 &&
                true === $is_ipv6(input.ipv6) &&
                "string" === typeof input.custom;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: TagFormat): void => {
            const $is_uuid = (typia.createIsPrune as any).is_uuid;
            const $is_email = (typia.createIsPrune as any).is_email;
            const $is_url = (typia.createIsPrune as any).is_url;
            const $is_ipv4 = (typia.createIsPrune as any).is_ipv4;
            const $is_ipv6 = (typia.createIsPrune as any).is_ipv6;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if (
                        "uuid" === key ||
                        "email" === key ||
                        "url" === key ||
                        "ipv4" === key ||
                        "ipv6" === key ||
                        "custom" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    },
    TagFormat.SPOILERS,
);