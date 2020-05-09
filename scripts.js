// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let rocket = document.getElementById('rocket');
    rocket.style.position = 'absolute';
    rocket.style.marginLeft = '0px';
    rocket.style.marginTop = '0px';
    for (button of ['takeoff', 'landing', 'missionAbort']) {
        document.getElementById(button).addEventListener("click", executeSpecificAction);
    }
    for (moveButton of ['up', 'down', 'right', 'left']) {
        document.getElementById(moveButton).addEventListener("click", moveRocket);
    }
}

function executeSpecificAction(event) {
    let flightStatus;
    let shuttleBackground;
    let shuttleHeigth;
    let response;
    if (event.target.id === "takeoff") {
        response = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeigth = document.getElementById("spaceShuttleHeight");
            shuttleHeigth.innerHTML = String(10000);
        }
    } else if (event.target.id === "landing") {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus = document.getElementById("flightStatus");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeigth = document.getElementById("spaceShuttleHeight");
        shuttleHeigth.innerHTML = String(0);
    } else if (event.target.id === "missionAbort") {
        response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus = document.getElementById("flightStatus");
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeigth = document.getElementById("spaceShuttleHeight");
            shuttleHeigth.innerHTML = String(0);
        }
    }
}

function moveRocket(event) {
    let num;
    let shuttleHeigth;
    let buttonPressed = event.target.id;
    let rocket = document.getElementById('rocket');

    let rocketHorPos = rocket.style.marginLeft;
    let rocketVerPos = rocket.style.marginTop;

    num = Number(rocketVerPos.slice(0, rocketVerPos.indexOf('px')));
    if (buttonPressed === "up") {
        rocket.style.marginTop = `${num - 10}px`;
        shuttleHeigth = document.getElementById("spaceShuttleHeight");
        shuttleHeigth.innerHTML = String(Number(shuttleHeigth.innerHTML) + 10000);
    } else if (buttonPressed === "down") {
        rocket.style.marginTop = `${num + 10}px`;
        shuttleHeigth = document.getElementById("spaceShuttleHeight");
        shuttleHeigth.innerHTML = String(Number(shuttleHeigth.innerHTML) - 10000);
    }

    num = Number(rocketHorPos.slice(0, rocketHorPos.indexOf('px')));
    if (buttonPressed === "right") {
        rocket.style.marginLeft = `${num + 10}px`;
    } else if (buttonPressed === "left") {
        rocket.style.marginLeft = `${num - 10}px`;
    }
}


window.addEventListener("load", function() {
    console.log('window loaded');
});

window.onload = init;
