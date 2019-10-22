
let info = {
    home: 'Lorem Ipsum is simply dummy text of the printing',
    bio: 'this is going to be my bio',
};

function pressHome(){
    $('.homeB').click(function(e){
        let grabInfo = info.home;
        $('.homeP').html(grabInfo);
    })
}

function pressBio(){
    $('.bioB').click(function(e) {
        let grabInfo = info.bio;
        $('.bioP').html(grabInfo);
    })
}


function portLoaded(){
    pressHome();
    pressBio();
}
$(portLoaded);