if (age >= 18) {
    document.getElementById("result").innerHTML = "Eligible to vote.";
}

function CheckVotingEligibility() {
    let age = document.getElementById("age").value; 
    if (age >= 18) {
        document.getElementById("votingStatus").innerHTML = " Status: i love SHIH TZU.";
    } else {
        document.getElementById("votingStatus").innerHTML = " Status: Not eligible to vote.";
    }
}

function CheckGrade() {
    let grade = document.getElementById("grade").value;
    if (grade >= 90 && grade <= 100) {
        window.alert("WOW YOU PASSED!!");
    } else if (grade >= 87 && grade <=93) {
        window.alert("WOW YOU PASSED!!");
    }   else if (grade >= 70 && grade <= 86) {
        window.alert("you failed!");
    } else {
        window.alert("you failed!");
    }
}
