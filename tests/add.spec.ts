import {add} from "../src"

describe("add tests", ()=>{
    it("1 + 1 should return 2", ()=>{
        const result = add(1,1);
        expect(result).toBe(2);
    });

    it("2 + 2 should return 4", ()=>{
        const result = add(2,2);
        expect(result).toBe(4);
    });
    it("1 + 2 should return 3", ()=>{
        const result = add(1,2);
        expect(result).toBe(3);
    });
});