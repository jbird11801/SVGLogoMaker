
const inquirer = require('inquirer');

const fs = require('fs');

const Square = require('./lib/Square');

const Triangle = require('./lib/Triangle');

const Circle = require('./lib/Circle');

var indexQuestion = 0;

const data = {

  SHcolor : "",
  
  text : "",

  TXcolor : ""

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
  
        message: 'What color do you want that shape to be (for hex decimal put a # in front)',
  
        name: "answer"
  
      }
            
      ,

      {

        type: 'input',
  
        message: 'What color do you want the text to be (for hex decimal put a # in front)',
  
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

  data.text = answers[3];

  data.SHcolor = answers[1];

  data.TXcolor = answers[2];

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