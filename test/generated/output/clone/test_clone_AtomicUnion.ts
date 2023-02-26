import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_AtomicUnion = _test_clone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: AtomicUnion): typia.Primitive<AtomicUnion> => {
            return Array.isArray(input)
                ? input.map((elem: any) => elem as any)
                : (input as any);
        })(input),
);