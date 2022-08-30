let posts = [
    {name: "Tobi", age: 21},
    {name: "Silas", age: 19}
]


function getPosts() {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.name} is ${post.age}`
        })
        document.body.innerHTML = output;
    }, 1000)
}


// // COMMENT THIS OUT TO USE BELOW FUNCTION.
//     function createPost(post) {
//         setTimeout(() => {
//             posts.push(post)
//         }, 2000)
//     }

//     getPosts()
//     createPost({name: "Marvy", age: 21})

//     // Call getPost function that paints the contents of the post array to the DOM in 1 second.
//     // While waiting for the 1 second it goes ahead to execute the other function, which takes about 2 seconds to complete.
//     // The getPost function completes before the createPost, so the newly created post is not displayed in the output.
//     // If we reduce the delay of the createPost function to something lower than the getPost delay, the newly created post will be displayed.


// // COMMENT THIS OUT TO USE BELOW FUNCTION.
// // Passing a callback function as the second arguement to a function, we can efficiently handle delayed functions.
// function createPost(post, callback) {
//     setTimeout(() => {      // After 2 seconds delay, run the code in this block.
//         posts.push(post);
//         callback();         // Run the callback function after the post array has been updated. 
//     }, 2000);
// }

// createPost({name: "Marvy", age: 21}, getPosts)
// // Total time taken: 3000ms. 



// An advanced way to handle asynchronous operations (Promises). Exactly as the name implies.
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            let error = false;

            if (!error) {
                resolve()       // If everything goes as planned i promise to do something for you. You don't know what yet. you = this function.
            } else {
                reject("Error: Something went wrong")       // If it doesn't go as planned I won't do anything for you.
            }
        }, 2000)
    })
}

createPost({name: "Marvy", age: 21})
    .then(getPosts)           // This is what I promised to do for you.
    .catch((err) => console.log(err))







// // PROMISE.ALL for when you need to resolve multiple promises.
// function goodbye() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 500, "goodbye")
//     })
// }

// function hello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 1000, "hello")
//     })
// }



// Promise.all([goodbye(), hello()]).then(v => console.log(v))
















