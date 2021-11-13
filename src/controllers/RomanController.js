const { convertToRoman } = require("../utils/RomanNumerals")

module.exports = class RomanController {
    async ToRoman(req, res) {
        const { number } = req.body;

        try {
            const result = convertToRoman(number);
            return res.status(200).json({ Roman: result});
        } catch (error) {
            return res.status(400).json({ Error: error});
        }
    }
}