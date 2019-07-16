
const rock = document.getElementById('rock');
const paper = document.getElementById('hand');
const scissors = document.getElementById('scissors');

let user_score = document.getElementById('user-score');
let comp_score = document.getElementById('comp-score');
let progress_game = document.getElementById('game-prog');

let u_score = 0;
let c_score = 0;

let comp_btn = ['r', 'p', 's'];
let comp_ch = '';

// reset default in dom
reset_score();

// pc move gen
function comp_move() {
    comp_ch = Math.floor(Math.random() * 3);
    return comp_btn[comp_ch];
}
// on user tile click generate pc move
rock.onclick = () => {
    update('r', comp_move())
}

user_ch = paper.onclick = () => {
    update('p', comp_move())
}

user_ch = scissors.onclick = () => {
    update('s', comp_move())
}

// rules
// scissors cuts paper
// paper covers rock
// rock crushes scissors
// ...

// check combinations
function update(usr, cmp) {

    switch (usr + cmp) {
        case 'rs':
            progress_game.innerHTML = "Rock crushes Scissors. User Wins";
            u_score += 1;
            user_score.innerHTML = u_score;
            break;
        case 'pr':
            progress_game.innerHTML = "Paper covers Rock. User Wins";
            u_score += 1;
            user_score.innerHTML = u_score;
            break;
        case 'sp':
            progress_game.innerHTML = "Scissors cuts Paper. User Wins";
            u_score += 1;
            user_score.innerHTML = u_score;
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            progress_game.innerHTML = "User and Comp Makes A Draw Move."
            break;
        case 'sr':
            progress_game.innerHTML = "Rock crushes Scissors. Comp Wins";
            c_score += 1;
            comp_score.innerHTML = c_score;
            break;
        case 'rp':
            progress_game.innerHTML = "Paper covers Rock. Comp Wins";
            c_score += 1;
            comp_score.innerHTML = c_score;
            break;
        case 'ps':
            progress_game.innerHTML = "Scissors cuts Paper. Comp Wins";
            c_score += 1;
            comp_score.innerHTML = c_score;
            break;


    }
    console.log('move combination: ' + usr + cmp);
    console.log("user: " + usr + " comp: " + cmp)
}


function reset_score() {
    user_score.innerHTML = '0';
    comp_score.innerHTML = '0';
    progress_game.innerHTML = "Hello Otaku. Dare to Make A Move!";
}

function win_indicator(tile) {
    tile.style.border
    comp_score.style.borderColor;
}

