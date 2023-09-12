const Triangle = require('../Triangle');

describe('Triangle', () => {

    describe('Instantiate', () => {

        it('should create a Triangle', () => {

            const data = {

                SHcolor : "Green",

                TXcolor : "Green",

                text : "123"

            };

            const triangle = new Triangle(data);

            expect(triangle).toBeInstanceOf(Triangle);

        });

    });

    describe('Shape Color', () => {

        it('should make a triangle that is green', () => {

            const color = 'green';

            const data = {

                SHcolor : "Green",

                TXcolor : "red",

                text : "123"

            };

            const triangle = new Triangle(data);

            expect(triangle.SHcolor).toBe(color);

        });

    });

    describe('Text Color', () => {

        it('should make a triangle thats text is green', () => {

            const color = 'green';

            const data = {

                SHcolor : "red",

                TXcolor : "Green",

                text : "123"

            };

            const triangle = new Triangle(data);

            expect(triangle.TXcolor).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const data = {

                SHcolor : "Green",

                TXcolor : "Green",

                text : "1234"

            };

            const triangle = () => new Triangle(data);

            const err = new Error('Text must be at most 3 characters long.')

            expect(triangle).toThrowError(err);

        });

    });

});