// FIX USING A CALLBACK FUNCTION.
function loginUser(email, password, callback) {
    let correctPassword = 123456;
    setTimeout(() => {
        if (password === correctPassword) {
            callback({userEmail: email});
        } else {
            console.log("Invalid password")
        }
    }, 2000)
}


// Nesting multiple callbacks
function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["Video 1", "Video ", "Video 3"]);
    }, 1000)
}


function getVideoTitle(video, callback) {
    setTimeout(() => {
        callback("Title of the video");
    }, 1000)
}


loginUser("aderibigbe@goomail.com", 123456, (user) => {
    console.log(`Welcome ${user.userEmail}`);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
        getVideoTitle(videos[0], (title) => {
            console.log(title);
        })
    })
})
// This is already starting to go out of hand. Having multiple callbacks nested in each other can easily turn to a mess.



