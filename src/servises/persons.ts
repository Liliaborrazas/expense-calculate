export function getPersons(): string[] {
  return getPersonLocalStorage();
}
export function createPerson(name: string) {
  const persons = getPersonLocalStorage();
  persons.push(name);
  savePersonsLocalStorage(persons);
}


// var datosDeCadaEquipoRecuperado = [1, 2, 3]; // los datos que sean

// // localStorage.getItem() devuelve null si la clave no existe
// var datos_existentes = localStorage.getItem('transito');
// datos_existentes = datos_existentes === null ? [] : JSON.parse(datos_existentes);

// datos_existentes.push(datosDeCadaEquipoRecuperado);
// // o
// // datos_existentes.push({tiempo: new Date().getTime(), datos: datosDeCadaEquipoRecuperado});

// localStorage.setItem('transito', JSON.stringify(datos_existentes));
// export function createPerson(name: string) {
//   // let existingPersons: any = JSON.parse(localStorage.getItem('persons'))
//   // if(existingPersons === null) existingPersons = []
//   let existingPersons:any = localStorage.getItem('persons');
//   // JSON.parse(existingPersons);
//   existingPersons = existingPersons ? existingPersons.split(',') : [];
//   let objetPerson = {
//     name,
//     debts:[],
//     payments:[],
//     total_paid: 0,
//     relative_debts:[],
//   }
//   existingPersons.push(objetPerson);
//   // existingPersons.push({name:name, debts:[],payments:[],total_paid: 0,relative_debts:[]});
//   savePersonsLocalStorage(existingPersons);
//   console.log(existingPersons)
// }

// function addEntry() {
//   // Parse any JSON previously stored in allEntries
//   var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
//   if(existingEntries == null) existingEntries = [];
//   var entryTitle = document.getElementById("entryTitle").value;
//   var entryText = document.getElementById("entryText").value;
//   var entry = {
//       "title": entryTitle,
//       "text": entryText
//   };
//   localStorage.setItem("entry", JSON.stringify(entry));
//   // Save allEntries back to local storage
//   existingEntries.push(entry);
//   localStorage.setItem("allEntries", JSON.stringify(existingEntries));
// };

function getPersonLocalStorage(): string[] {
  const personsJson = localStorage.getItem('persons');
  if (personsJson === null) {
    return [];
  }
  return JSON.parse(personsJson);
}

function savePersonsLocalStorage(persons: any[]): void {
  localStorage.setItem('persons', JSON.stringify(persons));

}

 export function deleteLocalStorage(persons:string) {
   let deleteLocalStorage = localStorage.removeItem('persons');localStorage.removeItem('expenses')
  return deleteLocalStorage;
  
}

// Get the existing data
// var existingPerson = localStorage.getItem('persons');

// // If no Person data, create an array
// // Otherwise, convert the localStorage string to an array
// Person = Person ? Person.split(',') : [];

// // Add new data to localStorage Array
// Person.push('tuna');

// // Save back to localStorage
// localStorage.setItem('myFavoriteSandwich', Person.toString());