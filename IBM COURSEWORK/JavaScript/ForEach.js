function sendWelcomeEmail(email) {
    console.log('Welcome email sent to ${email}');
}

const users = [
    {name: 'John', email: 'John@gmail.com'},
    {name: 'Roman', email: 'Roman@gmail.com'},
    {name: 'Kali', email: 'Kali@gmail.com'},
];

users.forEach((user) => {
    sendWelcomeEmail(user.email);
})

//come back and finish
//come back and finish
//come back and finish