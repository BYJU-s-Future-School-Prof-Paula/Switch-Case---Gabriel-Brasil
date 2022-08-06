var input,heading;

function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input = createInput();
  input.position(5,60);

  heading = createElement('h4','Insira uma letra do alfabeto: ');
  heading.position(5, 20);
 

}

function draw() {
  const value = input.value();

  // switch ... case
  switch(value){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      console.log("Vogal");
      break;

    case '':
      console.log("Insira uma letra");
      break;
      
    default: 
      console.log("Consoante");
      break;
  }

}

