let email = prompt('Enter your email');
let password, result, oldPassword, newPassword1,newPassword2;
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
        oldPassword = prompt('write the oldPassword password');
        if (oldPassword === '' || oldPassword === undefined || oldPassword !== password) {
            alert('Canceled.');
        } else {
            newPassword1 = prompt('enter new password');
        }
        if (newPassword1.length < 6) {
            alert('It’s too short password. Sorry.')
        } else {
            newPassword2 = prompt('enter it again');
        }
        if (newPassword2 === newPassword1) {
            users[email] = newPassword2;
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

