import { exampleTest } from "./Controller";
import {describe,expect, test} from "vitest"
describe ("createUser Test", () =>{
    test("Test Example test", ()=>{
        const result=exampleTest(1,2)
        expect(result).toBe(3)
    })
})