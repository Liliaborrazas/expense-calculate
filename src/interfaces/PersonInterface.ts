export interface Person {
  id?:number,
  name: string,

}

export type Expense = {
  person: string;
  amount: number;
  date: string;
  description: string;
};

export type ExpenseByUser = {
  amount: number;
  person: string;
};

export function getPersons(): string[] {
  return getPerson_LocalStorage();
}

export function createPerson(name: string) {
  const persons = getPerson_LocalStorage();
  persons.push(name);
  savePersons_LocalStorage(persons);
}

function getPerson_LocalStorage(): string[] {
  const personsJson = localStorage.getItem("persons");
  if (personsJson === null) {
    return [];
  }
  return JSON.parse(personsJson);
}

function savePersons_LocalStorage(persons: string[]): void {
  localStorage.setItem("persons", JSON.stringify(persons));
}

 export function deletePerson_LocalStorage(persons:string) {
  return localStorage.removeItem("persons")
  
}