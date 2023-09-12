class Square {

    constructor({SHcolor, TXcolor , text}){

        this.SHcolor = SHcolor.toLowerCase();

        this.TXcolor = TXcolor.toLowerCase();

        if (text){
            

                if (text.length > 3) {

                    

                    throw new Error('Text must be at most 3 characters long.');

                }

                this.text = text;

        } 

    }

    svgText () {

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<rect width="100" height="100" x="100" y="55" fill="${this.SHcolor}"/>

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.TXcolor}">${this.text}</text>

</svg>`

    }

}

module.exports = Square;