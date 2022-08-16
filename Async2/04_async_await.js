// ASYNC AWAIT IS JUST A CONVENTION OF MAKING OUR ASYNCHRONOUS CODE LOOK LIKE IT IS SYNCHRONOUS, BUT BEHIND THE SCENES IT'S STILL PROMISES IN ACTION.


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
    })
}



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



async function getTitle() {
    try {
        const loggedUser = await loginUser("ade@gmail.com", 12435);     // The value passed to the resolve parameter is stored in this variable.
        const video = await getUserVideos(loggedUser.userEmail);
        const title = await getVideoTitle(video[0]);
        console.log(title);
    } catch (error) {
        console.log(error)
    }
}

getTitle();
