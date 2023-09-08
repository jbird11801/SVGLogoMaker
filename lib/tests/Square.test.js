const Square = require('../Square');

describe('Square', () => {

    describe('Instantiate', () => {

        it('should create a Square', () => {

            const data = {

                color : "Green",

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

                color : "Green",

                text : "123"

            };

            const square = new Square(data);

            expect(square.color).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const data = {

                color : "green",

                text : "Abcd"

            };

            const square = () => new Square(data);

            const err = new Error('Text must be at most 3 characters long.');

            expect(square).toThrowError(err);

        });

    });

});