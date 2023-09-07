const Triangle = require('../Triangle');

describe('Triangle', () => {

    describe('Instantiate', () => {

        it('should create a Triangle', () => {

            const triangle = new Triangle();

            expect(triangle).toBeInstanceOf(Triangle);

        });

    });

    describe('Color', () => {

        it('should make a triangle that is green', () => {

            const color = 'Green';

            const triangle = new Comment(color);

            expect(triangle.color).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const Text = '1234';

            const triangle = new Comment( "" , Text);

            const err = new Error('Text must be at most 3 characters long.')

            expect(triangle).toThrowError(err);

        });

    });

});