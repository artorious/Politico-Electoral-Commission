function save_new_password() {
    if (confirm("Save new passowrd? Press O.K to continue.")) {
        alert("New password Saved")
   }
}


function cancel_password_reset() {
    if (confirm("Cancel passowrd reset ? Press O.K to continue.")) {
        alert("Cancelling password")
   }
}


function candidates_per_position() {
    location.replace("candidates_per_position.html")
}

function candidates_per_position_admin() {
    location.replace("candidates_per_position_admin.html")
}

function confirm_presidential_vote() {
   if (confirm("Are you sure of your choice for president? Press O.K to continue.")) {
        alert('Vote for president cast!')
   }
}

function confirm_skipping_prez_vote() {
    if (confirm("Are you sure you want to skip presidential vote? Press O.K to continue.")) {
        alert('Pesidential Vote skipped!')
        location.replace("gubernatorial_vote.html")
    }
 }

function confirm_gubenatorial_vote() {
   if (confirm("Are you sure of your choice for governer? Press O.K to continue.")) {
        alert('Vote for Governer cast.')
   }
}

function confirm_skipping_gov_vote() {
    if (confirm("Are you sure you want to skip gubernatorial vote? Press O.K to continue.")) {
        alert('Vote for Governor skipped! All Done. Thank you.')
        location.replace("senatorial_vote.html")
    }
 }


function confirm_senatorial_vote() {
   if (confirm("Are you sure of your choice for Senator? Press O.K to continue.")) {
        alert('Vote for Senator cast. All done, Thank You')
   }
}

function confirm_skipping_sen_vote() {
    if (confirm("Are you sure you want to skip senatorial vote? Press O.K to continue.")) {
        alert('Vote for Senator skipped! All Done. Thank you.')
        location.replace("user_profile.html")
    }
 }
