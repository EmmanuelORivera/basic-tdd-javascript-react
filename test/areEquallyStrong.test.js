import { describe, expect, it } from "vitest";
import { areEquallyStrong } from "../src/areEquallyStrong";

describe('areEquallyStrong', () => {
    it('should be a function', () => {
        expect(typeof areEquallyStrong).toBe('function')
    })

    it('should throw a spesific error if the first argument is not passed', () => {
        expect(() => areEquallyStrong()).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the first argument is not passed', () => {
        expect(() => areEquallyStrong(NaN)).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the second argument is not passed', () => {
        expect(() => areEquallyStrong(1)).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the second argument is not passed', () => {
        expect(() => areEquallyStrong(1, NaN)).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the third argument is not passed', () => {
        expect(() => areEquallyStrong(15, 10)).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the third argument is not passed', () => {
        expect(() => areEquallyStrong(15, 10, NaN)).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the fourth argument is not passed', () => {
        expect(() => areEquallyStrong(15, 10, 10)).toThrow('parameter provided must be a number')
    })

    it('should throw a spesific error if the fourth argument is not passed', () => {
        expect(() => areEquallyStrong(15, 10, 10, NaN)).toThrow('parameter provided must be a number')
    })

    it("should returns TRUE if your strongest arm is as strong as your friend's. Also if your weaker arm is as strong as your friend's weaker arm", () => {
        expect(areEquallyStrong(15, 10, 10, 15)).toBe(true)
    })

    it("should returns FALSE if your strongest arm is NOT as strong as your friend's. Also if your weaker arm is NOT as strong as your friend's weaker arm", () => {
        expect(areEquallyStrong(13, 1, 12, 1)).toBe(false)
    })
})