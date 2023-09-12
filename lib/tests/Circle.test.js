const Circle = require('../Circle');

describe('Circle', () => {

    describe('Instantiate', () => {

        it('should create a Circle', () => {

            const data = {

                SHcolor : "Green",

                TXcolor : "Green",

                text : "123"

            };

            const circle = new Circle(data);

            expect(circle).toBeInstanceOf(Circle);

        });

    });

    describe('Color', () => {

        it('should make a circle that is green', () => {

            const data = {

                SHcolor : "Green",

                TXcolor : "Green",

                text : "123"

            };

            const color = "green";

            const circle = new Circle(data);

            expect(circle.SHcolor).toBe(color);

        });

    });

    describe('Text Color', () => {

        it('should make a circle thats text is green', () => {

            const color = 'green';

            const data = {

                SHcolor : "red",

                TXcolor : "Green",

                text : "123"

            };

            const circle = new Circle(data);

            expect(circle.TXcolor).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const data = {

                SHcolor : "red",

                TXcolor : "Green",

                text : "1234"

            };

            const circle = () => new Circle(data);

            const err = new Error('Text must be at most 3 characters long.')

            expect(circle).toThrowError(err);

        });

    });

});