/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.  Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

DATI:
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/

// Create an array containing the properties of each team member
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "./assets/img/wayne-barnett-founder-ceo.jpg"
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "./assets/img/angela-caroll-chief-editor.jpg"
  },

  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "./assets/img/walter-gordon-office-manager.jpg"
  },

  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "./assets/img/angela-lopez-social-media-manager.jpg"
  },

  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "./assets/img/scott-estrada-developer.jpg"
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "./assets/img/barbara-ramos-graphic-designer.jpg"
  }
]

logToConsole(teamMembers);
printMembersToDOM(teamMembers, ".container > .row");

// <---------- FUNCTIONS ---------->

/**
 * Prints to console each property of every team member
 * @param {object[]} teamMembers Array containing every team member, with its properties
 */
function logToConsole(teamMembers) {
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    console.log(`Name: ${thisMember.name}`);
    console.log(`Role: ${thisMember.role}`);
    console.log(`Photo: ${thisMember.photo}`);
    console.log(`----------`);
  }
}

/**
 * Prints to DOM, as strings, the properties of every team member
 * @param {object[]} teamMembers Array containing every team member, with its properties
 * @param {string} container CSS selector used to target the row that will contain the outputs
 */
function printMembersToDOM(teamMembers, classSelector) {
  const rowElement = document.querySelector(`${classSelector}`);
  const markupsList = createSingleMemberMarkup (teamMembers);
  for (let i = 0; i < markupsList.length; i++) {
    const singleMemberMarkup = markupsList[i];
    rowElement.append(singleMemberMarkup);
  }
}

/**
 * Creates the markup for every team member
 * @param {object[]} teamMembers Array containing every team member, with its properties
 * @returns {HTMLElement[]} Array containing the markups of every team member
 */
function createSingleMemberMarkup(teamMembers) {
  const membersMarkups = [];
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    const singleMemberElement = document.createElement("div");
    singleMemberElement.classList.add("col", "my-4");
    singleMemberElement.innerHTML = `
    <div class="card border-dark">
      <div class="card-header text-center fs-3 fw-bold bg-light text-dark">
        <span>${thisMember.name}</span>
      </div>
      <div class="card-body bg-white">
        <img src="${thisMember.photo}" class="card-img-top rounded-circle">
        <br>
      </div>
      <div class="card-footer text-center bg-light text-dark fs-5 fst-italic">
        <span>${thisMember.role}</span>
      </div>
    </div>`
    membersMarkups.push(singleMemberElement);
  }
  return membersMarkups;
}