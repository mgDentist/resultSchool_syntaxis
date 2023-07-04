const name = 'Maxim';
const age = 35;
const isExDentist = true;
const daysToBecomeProfesional = 100500n;
const future = undefined;
const anyDoubts = null;
const allFacts = {
    name: 'Maxim',
    age: 35,
    isExDentist: true,
    daysToBecomeProfesional: 100500n,
    future: undefined,
    anyDoubts: null
}
const id = Symbol('id');

console.log('name:', name, typeof(name));
console.log('age:', age, typeof(age));
console.log('am I an ex-dentist:', isExDentist, typeof(isExDentist));
console.log('How many days do I need to become a hero:', daysToBecomeProfesional, typeof(daysToBecomeProfesional));
console.log('What\'s the future:', future , typeof(future));
console.log('Do I have any doubts:', anyDoubts, typeof(anyDoubts));
console.log('Total:', allFacts, typeof(allFacts));
console.log('smth idk yet:', id, typeof(id));

console.log(`And one more time: 
I'm ready to studying and practicing for`, allFacts.daysToBecomeProfesional, 'days, with no doubts!');
