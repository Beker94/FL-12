let email = prompt('Enter your email');
let password, result, oldpassword, newpassword1,newpassword2;
const users = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}

switch (true) {
    case email === '' || email === undefined:
        alert('Canceled.');
        break;
    case email.length < 5:
        alert("I don't know any emails having name length less than 5 symbols");
        break;
    case email === 'user@gmail.com' || email === 'admin@gmail.com':
        password = prompt('enter password');
if (password === '' || undefined) {
    alert('Canceled.');
} else if (password === users[email]) {
    result = confirm('Hello.Do you want to change your password?');
    if (result) {
        oldpassword = prompt('write the oldpassword password');
        if (oldpassword === '' || oldpassword === undefined || oldpassword !== password) {
            alert('Canceled.');
        } else {
            newpassword1 = prompt('enter new password');
        }
        if (newpassword1.length < 6) {
            alert('It’s too short password. Sorry.')
        } else {
            newpassword2 = prompt('enter it again');
        }
        if (newpassword2 === newpassword1) {
            users[email] = newpassword2;
            alert('You have successfully changed your password.')
        } else {
            alert('You wrote the wrong password.')
        }
    } else {
        alert('You have failed the change.')
    }
} else {
    alert('You have failed the change.');
}
        break;
    default:
        alert('I don’t know you');
}

