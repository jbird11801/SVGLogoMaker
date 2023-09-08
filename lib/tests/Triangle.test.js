const Triangle = require('../Triangle');

describe('Triangle', () => {

    describe('Instantiate', () => {

        it('should create a Triangle', () => {

            const data = {

                color : "Green",

                text : "123"

            };

            const triangle = new Triangle(data);

            expect(triangle).toBeInstanceOf(Triangle);

        });

    });

    describe('Color', () => {

        it('should make a triangle that is green', () => {

            const color = 'green';

            const data = {

                color : "green",

                text : "123"

            };

            const triangle = new Triangle(data);

            expect(triangle.color).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const data = {

                color : "green",

                text : "1234"

            };

            const triangle = () => new Triangle(data);

            const err = new Error('Text must be at most 3 characters long.')

            expect(triangle).toThrowError(err);

        });

    });

});