console.log("Start");

setTimeout(() => console.log("This is an asynchronous function"), 5000)

console.log("End")

// The setTimeout function is an asynchronous function. 
// That is, it doesn't wait for the output to be ready before it proceeds to the next element on the call stack.
// Whenever it's done processing, it receives control.





let correctPassword = 123456;

function loginUser(email, password) {
    setTimeout(() => {
        return {userEmail: email}
    }, 1500);
}

const userEmail = loginUser("aderibigbe@goomail.com", 12345,)   // This is an asynchronous function, the return value will only be available after 1.5s.
console.log(userEmail)                                          // The return value of the function invoked in userEmail isn't available yet when this function is called.



function loginUser2(email, password, callback) {
    setTimeout(() => {
        callback({userEmail: email})
    }, 1500);
}


