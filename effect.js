var mySignUp = document.querySelector('.root > div:nth-child(6) > a');
var myForgotpassword = document.querySelector('.underSignIn > p > a');
var myRoots = document.querySelector('.root');
var videobackground = document.querySelector('video');

function changePageEffect(...rest){
    for(let i = 0; i < rest.length; i++){
        rest[i].addEventlistener('click',function(e){
            e.preventDefault();
            myRoots.classList.add('hidden');
            videobackground.classList.add('active_background');
            
        })
    }
}
changePageEffect(mySignUp,myForgotpassword);

