//button to start quizz "First Page"
const btn = document.createElement("button");
btn.append("button");

class Model {
  constructor() {
    this.questions = [
      //Niveau facile
      {
        numQuestion: 1,
        text: "Qui est le ballon d'or 2002 ?",
        difficultyLevel: 1,
        choices: [
          { numProp: 1, text: "Zinedine Zidane", ans: false },
          { numProp: 2, text: "Ronaldo Nazario", ans: true },
          { numProp: 3, text: "Oliver Kahn", ans: false },
          { numProp: 4, text: "Thierry Henry", ans: false },
        ],
      },
      {
        numQuestion: 2,
        text: "A quel âge Messi marque son premier but au FC Barcelone ?",
        difficultyLevel: 1,
        choices: [
          { numProp: 1, text: "2005", ans: true },
          { numProp: 2, text: "2008", ans: false },
          { numProp: 3, text: "2004", ans: false },
          { numProp: 4, text: "2006", ans: false },
        ],
      },
      {
        numQuestion: 3,
        text: "Qui a gagné la CDM 2006 ?",
        difficultyLevel: 1,
        choices: [
          { numProp: 1, text: "France", ans: false },
          { numProp: 2, text: "Allemagne", ans: false },
          { numProp: 3, text: "Portugal", ans: false },
          { numProp: 4, text: "Italie", ans: true },
        ],
      },
      {
        numQuestion: 4,
        text: "Quel equipe nationale a remporté le plus de coupe d'europe (EURO) ?",
        difficultyLevel: 1,
        choices: [
          { numProp: 1, text: "Espagne", ans: true },
          { numProp: 2, text: "Italie", ans: false },
          { numProp: 3, text: "Allemagne", ans: false },
          { numProp: 4, text: "France", ans: false },
        ],
      },
      //Niveau moyen
      {
        numQuestion: 5,
        text: "Qui est le seul gardien à avoir gagner un ballon d'or ?",
        difficultyLevel: 2,
        choices: [
          { numProp: 1, text: "Gianluigi Buffon", ans: false },
          { numProp: 2, text: "Thibaut Courtois", ans: false },
          { numProp: 3, text: "Manuel Neuer", ans: false },
          { numProp: 4, text: "Lev Yachine", ans: true },
        ],
      },
      {
        numQuestion: 6,
        text: "Comment Zizou a marqué son but mythique avec le Real Mardrid en 2002 ?",
        difficultyLevel: 2,
        choices: [
          { numProp: 1, text: "Reprise de volée pied gauche", ans: true },
          { numProp: 2, text: "Frappe de 35m , pleine lucarne", ans: false },
          { numProp: 3, text: "Panenka à la 93e minute", ans: false },
          { numProp: 4, text: "Corner rentrant", ans: false },
        ],
      },
      {
        numQuestion: 7,
        text: "Qui est le meilleur joueur de la coupe du monde 2010 ? ",
        difficultyLevel: 2,
        choices: [
          { numProp: 1, text: "Cristiano Ronaldo", ans: false },
          { numProp: 2, text: "Diego Forlan", ans: true },
          { numProp: 3, text: "David Villa", ans: false },
          { numProp: 4, text: "Wesley Sneijder", ans: false },
        ],
      },
      {
        numQuestion: 8,
        text: "Quel année l'AC Milan a gagné sa derniére LDC ?",
        difficultyLevel: 2,
        choices: [
          { numProp: 1, text: "2007", ans: true },
          { numProp: 2, text: "2003", ans: false },
          { numProp: 3, text: "2009", ans: false },
          { numProp: 4, text: "2006", ans: false },
        ],
      },
      //Niveau difficile
      {
        numQuestion: 9,
        text: "Combien de buts Kylian Mbappé a marqué face à l'AS Monaco ?",
        difficultyLevel: 3,
        choices: [
          { numProp: 1, text: "10", ans: false },
          { numProp: 2, text: "11", ans: false },
          { numProp: 3, text: "13", ans: false },
          { numProp: 4, text: "9", ans: true },
        ],
      },
      {
        numQuestion: 10,
        text: "Qui est le meilleur passeur de la coupe du monde 2014 ? ",
        difficultyLevel: 3,
        choices: [
          { numProp: 1, text: "Lionel Messi", ans: false },
          { numProp: 2, text: "James Rodriguez", ans: false },
          { numProp: 3, text: "Cuadrado", ans: true },
          { numProp: 4, text: "Neymar JR", ans: false },
        ],
      },
      {
        numQuestion: 11,
        text: "Combien de passe decisive Messi a fait à Neymar JR ? ",
        difficultyLevel: 3,
        choices: [
          { numProp: 1, text: "18", ans: false },
          { numProp: 2, text: "20", ans: true },
          { numProp: 3, text: "22", ans: false },
          { numProp: 4, text: "28", ans: false },
        ],
      },
      {
        numQuestion: 12,
        text: "Quel joueur détient le record du plus grand nombre de passes réussies en un seul match de Ligue des Champions ? ",
        difficultyLevel: 3,
        choices: [
          { numProp: 1, text: "Xavi Hernandez", ans: false },
          { numProp: 2, text: "Marco Verratti", ans: true },
          { numProp: 3, text: "Ilkay Gündogan", ans: false },
          { numProp: 4, text: "Toni Kroos", ans: false },
        ],
      },
    ];
  }
  deleteQuestion(numQuestion) {
    this.questions = this.questions.filter(
      (question) => question.numQuestion !== numQuestion
    );
  }
  /*addNewQuestion(newText, addNewDifflevel) {
    const newQuestion = {
      numQuestion: this.questions.length + 1,
      text: newText,
      difficultyLevel: addNewDifflevel,
    };
    this.questions.push(newQuestion);
  }

  verifResponse(){
    for(answer of this.questions[choices]){
      if(click == true){
        
      }
    }
  }
  scoreOfUser(){
    let score = 0
    for(answer of this.questions[choices]){
      if(answer[ans] == true ){ // remplacer par verifResponse()
        if(this.questions[difficultyLevel] == 1){
          score++
        }else if(this.questions[difficultyLevel] == 2){
          score+=2
        } else if(this.questions[difficultyLevel] == 3){
          score+=4
        } 
      }
    }
    return score
  }*/
}

class View {
  constructor() {
    this.quizzApp = this.getElement("#root");

    this.title = this.createElement("h1");
    this.title.textContent = "ça quizzz ou quoi la team ?";

    this.button = this.createElement("button");
    this.button.textContent = "Commencer";

    this.quizzApp.append(this.title);
    this.quizzApp.append(this.button);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }
  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }
  /*buttonTrueElement(){
    const buttonTrue = document.querySelector('button');
    buttonTrue.addEventListener('click',() => {
            button.style.backgroundColor = "green"
    })
    return buttonTrue
  }
  buttonFalseElement(){
    const buttonFalse = document.querySelector('button');
    buttonFalse.addEventListener('click',() => {
            button.style.backgroundColor = "red"
    })
    return buttonFalse
  }*/
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const quizzApp = new Controller(new Model(), new View());
