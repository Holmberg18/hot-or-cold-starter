
$(document).ready(function(){
	
	var secretNum;
	var yourGuess;
	var guessNum;
	var prevGuess;
	secretNum = newGame();

	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
	
	$(".new").click(function(){
		secretNum = newGame();
		prevGuess;
		
	});
	
	$("form").submit(function(action){ //submits the whole form.
	if (parseFloat($("#userGuess").val()) % 1 == 0){
					yourGuess = parseInt($("#userGuess").val());
					guessNum++;
					$("#count").text(guessNum);
					
					if (yourGuess == secretNum){
					$("#feedback").text("You win!");
					$("form").hide();
					
					} //end if
					else feedback(prevGuess,yourGuess,secretNum);
					prevGuess = yourGuess;
		}//end if
		else{
			$("#feedback").text("Please enter an integer!");
		}
			
	return false;

	});
	
	





function feedback(prevGuess, guess, num) {
	
	if(prevGuess){
			if(Math.abs(num - guess) > Math.abs(num - prevGuess))
			{$("#feedback").text("Colder");}
			else
			{$("#feedback").text("Warmer");}
	}

	 
		
			if($("#guessList li").length == 0){
				$("#guessList").append("li");
			}
				
			
				if (guess < num - 50 || guess > num + 50) $("#guessList li").html("You're Ice Cold!");
				else if ((guess < num - 30 && guess > num - 50) || (guess > num + 30 && guess < num + 50)){
					 $("#guessList li").html("You're Cold!");
					
				 }
				 else if ((guess < num - 20 && guess > num - 30) || (guess > num + 20 && guess < num + 30)){
					 $("#guessList li").html("You're Warm!");
					
				 }
				 else if ((guess < num - 10 && guess > num - 20) || (guess > num + 10 && guess < num + 20)){
					 $("#guessList li").html("You're Hot!");
					
				 }
				 else if ((guess < num - 1 && guess > num - 10) || (guess > num + 1 && guess < num + 10)){
					 $("#guessList li").html("You're Very Hot!");
					
				 
				}//end else if
		

}//end function

function newGame() {
		
		$("form").show();
		guessNum = 0;
		$("#count").text(guessNum);
		var secretNumber = Math.floor((Math.random() * (100 - 1)) + 1);
		return secretNumber;

}

});

