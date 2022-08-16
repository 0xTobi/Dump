// PROMISE.ALL
// If you want to execute asynchronous tasks simultaneously you make use of "Promise.all"
// What if I want to get some data from youtube and facebook at the same time?
const yt = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Getting stuff from youtube");
        resolve({videos: [1,2,3,4,5]});
    }, 2000)
})

const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Stuff from Facebook");
        resolve({username: "Tobi"});
    }, 7000)
})

Promise.all([yt, fb]).then((result) => {
    console.log(result);
})