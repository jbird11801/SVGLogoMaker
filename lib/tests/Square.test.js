const Square = require('../Square');

describe('Square', () => {

    describe('Instantiate', () => {

        it('should create a Square', () => {

            const square = new Square();

            expect(square).toBeInstanceOf(Square);

        });

    });

    describe('Color', () => {

        it('should make a square that is green', () => {

            const color = 'Green';

            const square = new Comment(color);

            expect(square.color).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const Text = '1234';

            const square = new Comment( "" , Text);

            const err = new Error('Text must be at most 3 characters long.')

            expect(square).toThrowError(err);

        });

    });

});