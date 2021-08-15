
const goals = ["half-marathon", "marathon", "10k personal record", "bench press personal record", "deadlift personal record", "squat personal record", "5k personal record", "100m dash", "10k row", "overhead press"];

function changeGoalText() {
    var randomGoalSelector = Math.floor(Math.random() * (goals.length - 0) + 0);
    $(document).ready(function () {
        $('#quoteText').fadeOut(500, function () {
            $('#quoteText').text(goals[randomGoalSelector]).fadeIn(500);
        });
    });
}

setInterval(changeGoalText, 3000);




