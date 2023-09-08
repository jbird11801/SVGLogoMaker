class cicle {

    constructor({color , text}){

        this.color = color.toLowerCase();

        if (text){
            

                if (text.length > 3) {

                    

                    throw new Error('Text must be at most 3 characters long.');

                }

                this.text = text;

        } 

    }

    svgText () {

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.color}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

</svg>`

    }

}

module.exports = cicle;