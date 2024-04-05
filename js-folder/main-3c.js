// ElzeroChallenge-3
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let i = 0;
for (; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
}
document.write(`<div>We Have ${i} Admins</div>`);
document.write(`<hr>`)
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    document.write(`<div> `);
    document.write(`<p>The Admins For Team ${i + 1} Is ${myAdmins[i]}</p>`)
    document.write(`<h1>Team Members</h1>`)
    for (let j = 0; j < myEmployees.length; j++) {
        if (myAdmins[i][0] !== myEmployees[j][0]) {
            continue;
        }
        document.write(`<p>${myEmployees[j]}</p>`);
    }
    document.write(`</div> `);
    document.write(`<hr> `);


}