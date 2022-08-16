// A promises is an object that basically gives us the result of an asynchronous operation or a failure of a asynchronous operation.

console.log("start")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (error) {
            reject(new Error("user not logged in"))
        } else {
            resolve({user: "Tobi"})
        }
    }, 2000)
})

promise.then((user) => {
    console.log(user);
}).catch((e) => {
    console.log(e.message)
})




// REFACTORING THE CODES WE HAVE IN callback.js TO BE LESS AWKWARD USING PROMISES.
function loginUser(email, password) {
    let correctPassword = 123456;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === correctPassword) {
                resolve({userEmail: email});
            } else {
                reject("Invalid password")
            }
        }, 2000)
    });
}


// Nesting multiple callbacks
function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Video 1", "Video ", "Video 3"]);
        }, 1000)
    });
}


function getVideoTitle(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Title of the video");
        }, 1000)
    });
}



// loginUser("aderibigbe@goomail.com", 123456, (user) => {
//     console.log(`Welcome ${user.userEmail}`);
//     getUserVideos(user.userEmail, (videos) => {
//         console.log(videos);
//         getVideoTitle(videos[0], (title) => {
//             console.log(title);
//         })
//     })
// })


loginUser("aderibigbe@goomail.com", 123456)
    .then((user) => getUserVideos(user.userEmail))  // here you have to wait for this operation to be completed before you jump to the next one.
    .then((videos) => getVideoTitle(videos[0]))     // Same thing here.
    .then((title) => console.log(title))
    .catch((err) => console.log(err));



console.log("finish")



