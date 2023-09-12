
const inquirer = require('inquirer');

const fs = require('fs');

const Square = require('./lib/Square');

const Triangle = require('./lib/Triangle');

const Circle = require('./lib/Circle');

var indexQuestion = 0;

const data = {

  color : "",
  
  text : ""

}



const QuestionObject = [

   
      
      {
  
        type: 'rawlist',
  
        message: 'What shape do you want for your logo',
  
        choices: ["Square","Triangle","Circle"],
  
        name: "answer"
  
      }
      ,

      {

        type: 'input',
  
        message: 'What color do yoy want that shape to be ',
  
        name: "answer"
  
      }
            
      ,
      
      {
  
        type: 'input',
  
        message: 'What are the letters you want on the logo (less than or equal to 3)',
  
        name: "answer"
  
      }

]

ShapeFile = function(shape){

  data.text = answers[2];

  data.color = answers[1];

  if (shape === "Square"){

  return  new Square(data);


  }

  else if (shape === "Triangle"){

    return new Triangle(data);
  
    }

  else {

    return new Circle(data);;

  }

}

const answers = ["","",""];

function ask() {

    if ( indexQuestion < QuestionObject.length){
  
      inquirer.prompt(QuestionObject[indexQuestion]).then ((response) => {
  
        answers[indexQuestion] = response.answer;
  
      indexQuestion++;
  
      ask();
  
    })
  
    }
  
    else {
  
      fs.writeFile(`logo.svg`, ShapeFile(answers[0]).svgText() , (err) =>
  
      err ? console.error(err) : console.log('Generated logo.svg')
  
      )
      
    }

}

ask();