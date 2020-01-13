var score = 0
var i = 1
var ans = 1
var maleficent = new Audio('sounds/maleficent.mp3')
var frozen = new Audio('sounds/letItGo.mp3')
var heigh = new Audio('sounds/heighho.mp3')
var toystory = new Audio('sounds/infinity.mp3')
var nemo = new Audio('sounds/nemo.mp3')
var baymax = new Audio('sounds/baymax.mp3')
var mermaid = new Audio('sounds/mermaid.mp3')
var dory = new Audio('sounds/dory.mp3')
var lilo = new Audio('sounds/ohana_.mp3')
var up = new Audio('sounds/up.mp3')
var evilqueen = new Audio('sounds/evilqueen.mp3')
var snowman = new Audio('sounds/snowman.mp3')
var wrong= new Audio('sounds/incorrect.mp3')
var correct = new Audio('sounds/correct.mp3')

var sImg = 'images/sadmickey.png'
var mImg = 'images/mickey.webp'
var rImg = 'images/happyface.png'
var wImg = 'images/sad.png'
var eImg = 'images/empty.png'
var pr= document.createElement("img");
pr.setAttribute('src', 'images/happyface.png');
pr.setAttribute('alt', 'na');
pr.setAttribute('height', '55px');
pr.setAttribute('width', '55px');

function finalscore(){
    var percent = score / 15 * 100
	if (percent >= 80) {
		document.getElementById('question').value= "Your Score Is: " + score + " /15 = " + percent +  " % Congratulations on your high score! You are a Disney-Pixar expert!"
		correct.play();
		pr.src = mImg;
	}

	else {
		document.getElementById('question').value="Your Score Is: " + score + " /15 = " + percent + " % Oh no, it looks like you didn't do so well. Click on the Try Again button to redo the quiz!"
		correct.play();
		pr.src = sImg;
	}	
}



function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
	//Empty Place holder
    document.body.appendChild(pr)

if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="Hooray you are right!"
        score++
        maleficent.play()
        pr.src = rImg;
    }

    else {
        document.getElementById("question").value="Uh oh, your answer is wrong."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}


else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Correct!"
         score++
	    frozen.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Incorrect."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="Yay, you picked the right answer!"
         score++
	    heigh.play()
        pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Oops, it looks like you selected the wrong answer."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Correct!"
         score++
	toystory.play()
        pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Sorry, your answer is incorrect."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right!"
         score++
	nemo.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Incorrect, try again."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="Wow you got the answer right!"
        score++
	baymax.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Your answer was incorrect."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Correct. You're on a role!"
        score++
	correct.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Incorrect."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="Yay, you got another question right!"
         score++
	mermaid.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Oh no, you're anser was incorrect."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="Correct!"
         score++
	correct.play()
        pr.src = rImg;
    }
    else {
        document.getElementById("question").value="You picked the wrong answer."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right!"
         score++
	dory.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Your answer is wrong."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===11){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="Correct, keep going you're on a role!"
         score++
	correct.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Incorrect"
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===12){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="Your answer was correct!"
        score++
	lilo.play()
         pr.src = rImg;
    }
    else {
        document.getElementById("question").value="You picked the wrong letter."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===13){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="Correct, you must be a pixar expert!"
        score++
	up.play() 
	pr.src = rImg;
    }
    else {
        document.getElementById("question").value="You're incorrect. Don't be discouraged that question was a tough one!"
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===14){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="Correct, one more question to go!"
        score++
	evilqueen.play()
        pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Oh no, you picked the wrong letter."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
else if (ans===15){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="Wow, you're a Disney expert!"
        score++
	snowman.play()
        pr.src = rImg;
    }
    else {
        document.getElementById("question").value="Oh no, it looks like you selected the wrong answer."
        wrong.play()
        pr.src = wImg
    }
    document.view.qscore.value=score
}
    
	ans++; 
}	


function main(){ 
if (i===1){
	pr.src = eImg 
	document.view.qnum.value=i;
   	document.view.question.value ="Which of the following Disney characters is the villain in Sleeping Beauty? \na)Jafar \nb)Ursula \nc)Maleficent \nd)Evil Queen";
    document.view.qans.value=""
}
else if (i===2){
	pr.src = eImg 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these songs is from the movie Frozen? \na)A Whole New World \nb)Kiss The Girl \nc)How Far I'll Go \nd)Let It Go";
    document.view.qans.value=""
}
else if (i===3){
	pr.src = eImg 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not one of the Seven Dwarfs? \na)Sleepy \nb)Goofy \nc)Grumpy \nd)Sneezy";
    document.view.qans.value=""
}
else if (i===4){
	pr.src = eImg 
	document.view.qnum.value=i;	
	document.view.question.value ="How many Toy Story movies are there? \na)1 \nb)2 \nc)3 \nd)4";
    document.view.qans.value=""
}
else if (i===5){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="What type of fish is Nemo from Finding Nemo? \na)Clownfish \nb)Goldfish \nc)Sardine \nd)Salmon";
    document.view.qans.value=""
}
else if (i===6){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="What year was Big Hero 6 released? \na)2013 \nb)2014 \nc)2015 \nd)2016";
    document.view.qans.value=""
}
else if (i===7){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not a character found in the movie Tangled? \na)Rapunzel \nb)Flynn \nc)Gothel \nd)Merida";
    document.view.qans.value=""
}
else if (i===8){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="How many sisters did Ariel from The Little Mermaid have? \na)4 \nb)5 \nc)6 \nd)7";
    document.view.qans.value=""
}
else if (i===9){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is not an emotion of Riley from the movie Inside Out? \na)Anger \nb)Jealousy \nc)Sadness \nd)Disgust";
    document.view.qans.value=""
}
else if (i===10){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="Who voiced Dory in Finding Dory and Finding Nemo? \na)Oprah Winfrey \nb)Kristen Bell \nc)Ellen DeGeneres \nd)Dove Cameron";
    document.view.qans.value=""
}
else if (i===11){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="How many Descendants movies are there? \na)1 \nb)2 \nc)3 \nd)4";
    document.view.qans.value=""
}
else if (i===12){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="Fill in the blank: Ohana means _______ \na)Ocean \nb)Family \nc)Lilo \nd)Stitch";
    document.view.qans.value=""
}
else if (i===13){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following Pixar movies won the 2010 Academy Award for Best Animated Feature Film? \na)Toy Story \nb)Ratatouille \nc)The Incredibles \nd)UP";
    document.view.qans.value=""
} 
else if (i===14){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="What was the first Disney movie created? \na)Sleeping Beauty \nb)Cinderella \nc)Snow White \nd)Mulan";
    document.view.qans.value=""
} 
else if (i===15){ 
	pr.src = eImg
	document.view.qnum.value=i;	
	document.view.question.value ="What was the first Disney movie to feature two Disney princesses? \na)Frozen \nb)Cinderella \nc)Mulan \nd)Sleeping Beauty";
    document.view.qans.value=""
}       
	i++;	

if (i===16){
	document.view.qnum.value=" "
	finalscore()
} 
}

function rt() {
	i = 1
	ans = 1
	score = 0
	document.view.qscore.value=score
	main()
}

	