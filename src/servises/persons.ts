export function getPersons(): string[] {
  return getPersonLocalStorage();
}
export function createPerson(name: PersonName) {
  const persons = getPersonLocalStorage();
  persons.push(name);
  savePersonsLocalStorage(persons);
}


function getPersonLocalStorage(): string[] {
  const personsJson = localStorage.getItem('persons');
  if (personsJson === null) {
    return [];
  }
  return JSON.parse(personsJson);
}
 type PersonName = string

function savePersonsLocalStorage(persons: PersonName[]): void {
  localStorage.setItem('persons', JSON.stringify(persons));

}

 export function deletePersonsExpensesInLocalStorage() {
   let deleteLocalStorage = localStorage.removeItem('persons');localStorage.removeItem('expenses')
  return deleteLocalStorage;
  
}

