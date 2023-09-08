const Circle = require('../Circle');

describe('Circle', () => {

    describe('Instantiate', () => {

        it('should create a Circle', () => {

            const data = {

                color : "Green",

                text : "123"

            };

            const circle = new Circle(data);

            expect(circle).toBeInstanceOf(Circle);

        });

    });

    describe('Color', () => {

        it('should make a circle that is green', () => {

            const data = {

                color : "green",

                text : "123"

            };

            const color = "green";

            const circle = new Circle(data);

            expect(circle.color).toBe(color);

        });

    });

    describe('Text Length', () => {

        it('should throw an error when the text length is more than 3', () => {

            const data = {

                color : "green",

                text : "1234"

            };

            const circle = () => new Circle(data);

            const err = new Error('Text must be at most 3 characters long.')

            expect(circle).toThrowError(err);

        });

    });

});