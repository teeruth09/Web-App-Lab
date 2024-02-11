let intervalId;

// Function to start the timer
function starttime() {
    intervalId = setInterval(sendTime, 1000); // Update every second
}

function sendTime() {
    var currentDate = new Date();
    var timeString = currentDate.toString();
    self.postMessage(timeString);
}

//Receieve message from the main html
self.onmessage = function(event) {
    if (event.data === "start") {
        starttime();
    } 
};


