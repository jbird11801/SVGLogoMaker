const Square = require('../Square');

describe('Square', () => {

    describe('Instantiate', () => {

        it('should create a Square', () => {

            const data = {

                SHcolor : "Green",

                TXcolor : "Green",

                text : "123"

            };

            const square = new Square(data);

            expect(square).toBeInstanceOf(Square);

        });

    });

    describe('Color', () => {

        it('should make a square that is green', () => {

            const color = 'green';

            const data = {

                SHcolor : "Green",

                TXcolor : "red",

                text : "123"

            };

            const square = new Square(data);

            expect(square.SHcolor).toBe(color);

        });

    });

    describe('Text Color', () => {

        it('should make a square thats text is green', () => {

            const color = 'green';

            const data = {

                SHcolor : "red",

                TXcolor : "Green",

                text : "123"

            };

            const square = new Square(data);

            expect(square.TXcolor).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const data = {

                SHcolor : "red",

                TXcolor : "Green",

                text : "Abcd"

            };

            const square = () => new Square(data);

            const err = new Error('Text must be at most 3 characters long.');

            expect(square).toThrowError(err);

        });

    });

});