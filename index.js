
function pressHome(){
    $('#buttonH').click(function(e){
        $('.homeP').toggle('slow');
        $('#buttonB').toggle();
    })
}

function pressBio(){
    $('#buttonB').click(function(e) {
        $('.bioP').toggle('slow');
        $('#buttonP').toggle();
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