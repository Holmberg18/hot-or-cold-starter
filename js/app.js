var secretNum = 0;
var yourGuess = 0;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	$(".new").click(function(){
		newGame();
	});
	
	$("#guessButton").click(function(action){
		yourGuess = parseInt($("#userGuess").val());
		
		if (yourGuess == secretNum){
		console.log("You win!");
		return;
	} 
	else feedback(yourGuess,secretNum);
	
	});
	
	

});

function feedback(guess, num) {
	
	if (guess < num - 50 || guess > num + 50) console.log("You're Ice Cold!");
	else if ((guess < num - 30 && guess > num - 50) || (guess > num + 30 && guess < num + 50)){
		console.log("You're Cold!");
		
	}
	else if ((guess < num - 20 && guess > num - 30) || (guess > num + 20 && guess < num + 30)){
		console.log("You're Warm!");
		
	}
	else if ((guess < num - 10 && guess > num - 20) || (guess > num + 10 && guess < num + 20)){
		console.log("You're Hot!");
		
	}
	else if ((guess < num - 1 && guess > num - 10) || (guess > num + 1 && guess < num + 10)){
		console.log("You're Very Hot!");
		
	}
}

function newGame() {
	secretNum = Math.floor((Math.random() * (100 - 1)) + 1);
	yourGuess = 0;
}

