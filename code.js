//- Create an alert that lists all users, with their ids, names and what city they're from
//- Prompt the user for a user id and then:
//- Display an alert with the username and all the todos titles that belong to that user 

let greetingAlert = ""
for (let user of users) {
    greetingAlert +=` ${user.id} ${user.name} ${user.address.city} \n`
}

alert( greetingAlert )

let todosTitles = []
let userName = ""
let find = Number(prompt("Choose an user ID you want to search for?"))
for (let user of users) {
    if (find = user.id) {
        userName = user.username
    }
    
}
for (let item of todos) {
    if (item.userId === find) {
        todosTitles.push(item.title )
       }
    }


let titlesAlert = ""
 for (const todo of todosTitles) {
    titlesAlert  += `${todo} \n`
 }
alert(`Username: ${userName} \n${titlesAlert}`)
/*
for (let i = 0; find !== users[i].id; i++) {
    console.log(users[i].id)
    
}*/