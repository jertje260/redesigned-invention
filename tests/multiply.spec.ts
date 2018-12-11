import {multiply} from "../src";

describe("multiply tests", ()=>{
    it("1 * 1 should be 1",()=>{
        expect(multiply(1,1)).toBe(1);
    });
    it("2 * 4 should be 8",()=>{
        expect(multiply(2,4)).toBe(8);
    });
    it("12 * 19 should be 1",()=>{
        expect(multiply(12,19)).toBe(128);
    });
});