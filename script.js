

function rpsgame(yourchoice){
    console.log(yourchoice);
    var humanchoice=yourchoice.id;
    var num = Math.floor(Math.random()*3);
    var options=['rock' , 'paper' , 'scissors']
    var botchoice = options[num];
    console.log(botchoice);
    results=winner(humanchoice,botchoice);
    console.log(results);
    messege = finalmessege(results);
    console.log(messege);
    rpsdisplay(humanchoice,botchoice,messege);
}

function winner(humanchoice,botchoice){
    var rpsdata={
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1,'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourscore = rpsdata[humanchoice][botchoice];
    var compscore = rpsdata[botchoice][humanchoice];

    return [yourscore,compscore];
}

function finalmessege([yourscore,compscore]){
    if(yourscore === 0){
        return {'messege':'You Lost!' , 'color':'red'};
    }
    else if(yourscore===0.5)
    {
        return {'messege':'You tied!' , 'color':'orange'};
    }
    else{
        return {'messege':'You Won!' , 'color':'green'};
    }
}

function rpsdisplay(humanchoice,botchoice,messege){
    var images = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    //remove all images in click
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv = document.createElement('div');
    var messegediv = document.createElement('div');

    humandiv.innerHTML = "<img src='"+ images[humanchoice]+ "'style = 'box-shadow:0px 10px 50px rgba(37,50,233,1);'><div style='margin:0rem 0rem 2rem; color:rgba(37,50,233,1);'><h3>You</h3></div>"
    document.getElementById('img_box').appendChild(humandiv);

    messegediv.innerHTML = "<h1 style='color:"+ messege.color+"'>"+messege.messege+"</h1>"
    document.getElementById('img_box').appendChild(messegediv);

    botdiv.innerHTML = "<img src='"+ images[botchoice]+"'style = 'box-shadow:0px 10px 50px rgba(243,38,24,1);'><div style='margin:0rem 0rem 2rem; color:rgba(243,38,24,1);'><h3>Computer</h3></div>"
    document.getElementById('img_box').appendChild(botdiv);

}


