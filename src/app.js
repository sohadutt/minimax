let playGrid = [ ["", "", ""],
                 ["", "", ""],
                 ["", "", ""]
];

let players = ["X", "O"];
let empty = [];
let currentPlayer = random(players);

function render() {
    let h = height / 3;
    let w = width / 3;

    for (i=0; i < 3; i++) {
       for (j=0; j < 3; j++) {
        let x = height * i;
        let y = width * j;
        let spot = playGrid[i][j];
       } 
    }
}