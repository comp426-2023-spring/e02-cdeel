// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
async function playGame() {
    var game = Array.from(document.getElementsByName("game_select")).find(mode => mode.checked)?.value;
    var shot = document.getElementById("myDropdown").value;

    if (document.getElementById("opponent").checked) {
        const url = `/app/${game}/play/${shot}`;
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("result").textContent = "You shot ${data.player} and ${data.result} against ${data.opponent}";
    } else {
        const url = `/app/${game}/play/${""}`;
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("result").textContent = "You shot ${data.player}";
    }

}

function updateOptions() {
    var radio1 = document.getElementById("rps_button");
    var radio2 = document.getElementById("rpsls_button");
    var dropdown = document.getElementById("myDropdown");
    if (radio1.checked) {
        dropdown.options.length = 0; // clear existing options
        dropdown.options[dropdown.options.length] = new Option("rock");
        dropdown.options[dropdown.options.length] = new Option("paper");
        dropdown.options[dropdown.options.length] = new Option("scissors");
    } else if (radio2.checked) {
        dropdown.options.length = 0; // clear existing options
        dropdown.options[dropdown.options.length] = new Option("rock");
        dropdown.options[dropdown.options.length] = new Option("paper");
        dropdown.options[dropdown.options.length] = new Option("scissors");
        dropdown.options[dropdown.options.length] = new Option("lizard");
        dropdown.options[dropdown.options.length] = new Option("spock");
    }
}