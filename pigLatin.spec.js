const pigLatin = require("./pigLatin");


describe("pig latiniser", () => {
    describe("translate", () => {
        let translate = pigLatin.translate 

        test("it returns a friendly explanation string", () => {
            expect(translate("Hello friend")).toContain('In Pig Latin')
        })
    })

    describe('pigLatiniser', () => {
        let pigLatiniser = pigLatin.pigLatiniser
        test.each([
            ['nix', 'ixnay'],
            ['stupid', 'upidstay'],
            ['the', 'the']
        ])("when given an input, return correct translation", (word, translation) => {
            expect(pigLatiniser(word)).toEqual(translation)
        })
    })
})









