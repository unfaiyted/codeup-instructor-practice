const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



//Exercises
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const filterOver3Languages = (item) => item.languages.length >= 3


const filteredUsers =  users.filter(filterOver3Languages);

console.log(filteredUsers)

// Use .map to create an array of strings where each element is a user's email address

const getEmailAddresses = (item) =>  item.email;

const mapUsersEmails = users.map(getEmailAddresses)

console.log(mapUsersEmails)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const getTotalYearsOfExp = (prev, curr/*, index, arr*/) => prev + curr.yearsOfExperience

const reducedYearsExp = users.reduce(getTotalYearsOfExp,0)

console.log(reducedYearsExp)
// Use .reduce to get the longest email from the list of users.

const getLongestEmail = (prev, curr) => {

    const isLastLarger = prev.length > curr.email.length;

    // console.log(isLastLarger);

    return (!isLastLarger) ? curr.email : prev
};

const reducedLongestEmail = users.reduce(getLongestEmail);

console.log(reducedLongestEmail)
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


//V1
// const getUsersNamesString = (prev, curr) => `${prev} ${curr.name},`
//
// const userNamesString = users.reduce(getUsersNamesString,"")


//V2
// const getUsersNamesString = (prev, curr) => `${prev} ${curr.name},`
//
// const userNamesString = users.reduce(getUsersNamesString,"Your instructors are:")

const getUsersNamesString = (prev, curr, index, array) => {

    let delimiter = (index < (array.length-1)) ? "," : "."

    return `${prev} ${curr.name}${delimiter}`
}

// Could you do this with map, why or why not?

const userNamesString = users.reduce(getUsersNamesString,"Your instructors are:")


console.log(userNamesString)
// Bonus
// Use .reduce to get the unique list of languages from the list of users.


//V1 Using Set
const getUniqueLanguages = (prev, curr) => {
    return prev.add(...curr.languages)
}

const listOfLanguages = users.reduce(getUniqueLanguages,new Set())

console.log(listOfLanguages)


//V2 with filter?
// const getUniqueLanguages = (prev, curr) => {
//
//     prev.filter(
//
//     return prev.add(...curr.languages)
// }
//
// const listOfLanguages = users.reduce(getUniqueLanguages,[])
//
// console.log(listOfLanguages)