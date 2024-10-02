let ticket = [859298, 903711, 962508, 871455, 154789, 235687, 214698, 959889, 203605, 74859];

function selectWinner() {
    if (ticket.length === 0) {
        console.log("No lottery ticket numbers left.");
        document.getElementById('Html').innerHTML = "No lottery ticket numbers left.";
    } else {
        let index = ticket[Math.floor(Math.random() * ticket.length)];
        
        console.log("Winner Ticket Number:", index);

        document.getElementById('Html').innerHTML = "Winner Ticket Number " + index;

        document.getElementById('Modal').style.color = "red";

        document.getElementById('Modal').innerHTML = "Winner Ticket Number  " + index;
        $('#winnerModal').modal('show');
    }
}