
function pressHome(){
    $('#buttonH').click(function(e){
        $('.homeP').toggle('slow');
    })
}

function pressBio(){
    $('#buttonB').click(function(e) {
        $('.bioP').toggle('slow');
    })
}

function pressProjects() {
    $('#buttonP').click(function (e) {
        $('.projectsP').toggle('slow');
    })
}


function portLoaded(){
    pressHome();
    pressBio();
    pressProjects();
}
$(portLoaded);