var mastermind ={
	

preload: function(){
		
   this.game.stage.backgroundColor = '#FFF';

	//make a spritesheet with 7 colour circles for your guesses; first colour is blank/grey	
		this.game.load.spritesheet('colours', 'mm/colours.png', 54, 54, 7);
		//4 colour circles show your results: green for correct in right place, yellow for correct in wrong place and white or red for wrong and one grey to start
		this.game.load.spritesheet('results', 'mm/results.png', 27, 27, 4);
		//enter button
		this.game.load.image('enter', 'mm/enter.png');
		
	
	},

create: function(){
	
	//secret code:4 digit code from 6 possible : you could change this to an array of 6 
		this.code = [];
	for (var i =0; i<4; i++){
		//create a random number to push to the array
		var randomNumber = game.rnd.integerInRange(0, 5);
		this.code.push(randomNumber);
	}
	//logging out the code generated 
	console.log("code is " + this.code);
		
		//this has 8 rows allowed for guesses. the x and y positions are determined here by where I wanted them, but you can change these
	//row8
	this.positions =[{x: 250, y:250}, {x:305, y:250}, {x:360, y:250}, {x:415, y:250}];
	this.row8 = [];
	this.group8 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row8.push(this.empty);
			this.group8.add(this.empty);
		}
	//row7
	this.positions =[{x: 250, y:305}, {x:305, y:305}, {x:360, y:305}, {x:415, y:305}];
	this.row7 = [];
	this.group7 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row7.push(this.empty);
			this.group7.add(this.empty);
		}
	
	//row6
	this.positions =[{x: 250, y:360}, {x:305, y:360}, {x:360, y:360}, {x:415, y:360}];
	this.row6 = [];
	this.group6 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row6.push(this.empty);
			this.group6.add(this.empty);
		}
//row5
	this.positions =[{x: 250, y:415}, {x:305, y:415}, {x:360, y:415}, {x:415, y:415}];
	this.row5 = [];
	this.group5 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row5.push(this.empty);
			this.group5.add(this.empty);
		}
	
	//row4
	this.positions =[{x: 250, y:470}, {x:305, y:470}, {x:360, y:470}, {x:415, y:470}];
	this.row4 = [];
	this.group4 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row4.push(this.empty);
			this.group4.add(this.empty);
		}
	
	//row3
	this.positions =[{x: 250, y:525}, {x:305, y:525}, {x:360, y:525}, {x:415, y:525}];
	this.row3 = [];
	this.group3 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row3.push(this.empty);
			this.group3.add(this.empty);
		}
	
	//row2
	this.positions =[{x: 250, y:580}, {x:305, y:580}, {x:360, y:580}, {x:415, y:580}];
	this.row2 = [];
	this.group2 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row2.push(this.empty);
			this.group2.add(this.empty);
		}
	//row1
	this.positions =[{x: 250, y:635}, {x:305, y:635}, {x:360, y:635}, {x:415, y:635}];
	this.row1 = [];
	this.group1 = this.game.add.group();
		for(var i in this.positions){
			this.pos = this.positions[i];
			this.empty = this.add.sprite(this.pos.x, this.pos.y, 'colours', 6);
			this.empty.inputEnabled = true;
			this.empty.events.onInputDown.add(this.changeFrame, this.empty);
			this.row1.push(this.empty);
			this.group1.add(this.empty);
		}
	
	//enter buttons
	this.enter8 = this.game.add.button(500, 250, 'enter', this.onEnter8, this);
	this.enter7 = this.game.add.button(500, 305, 'enter', this.onEnter7, this);
	this.enter6 = this.game.add.button(500, 360, 'enter', this.onEnter6, this);
	this.enter5 = this.game.add.button(500, 415, 'enter', this.onEnter5, this);
	this.enter4 = this.game.add.button(500, 470, 'enter', this.onEnter4, this);
	this.enter3 = this.game.add.button(500, 525, 'enter', this.onEnter3, this);
	this.enter2 = this.game.add.button(500, 580, 'enter', this.onEnter2, this);
	this.enter1 = this.game.add.button(500, 635, 'enter', this.onEnter1, this);

	////////////HINTS/////////////////
	//this is the result hints. They start out grey/blank
	//row 8
	this.hintpos=[{x: 600, y:250}, {x:630, y:250}, {x: 660, y:250}, {x:690, y: 250}];
	this.hint8 = [];
		for (var i in this.hintpos){
		this.posi = this.hintpos[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint8.push(this.hint);
		}	
	//row 7
	this.hintpos7=[{x: 600, y:305}, {x:630, y:305}, {x: 660, y:305}, {x:690, y: 305}];
	this.hint7 = [];
		for (var i in this.hintpos7){
		this.posi = this.hintpos7[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint7.push(this.hint);
		}	
	//row 6
	this.hintpos6=[{x: 600, y:360}, {x:630, y:360}, {x: 660, y:360}, {x:690, y: 360}];
	this.hint6 = [];
		for (var i in this.hintpos6){
		this.posi = this.hintpos6[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint6.push(this.hint);
		}	
	//row 5
	this.hintpos5=[{x: 600, y:415}, {x:630, y:415}, {x: 660, y:415}, {x:690, y: 415}];
	this.hint5 = [];
		for (var i in this.hintpos5){
		this.posi = this.hintpos5[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint5.push(this.hint);
		}	
	
	//row 4
	this.hintpos4=[{x: 600, y:470}, {x:630, y:470}, {x: 660, y:470}, {x:690, y: 470}];
	this.hint4 = [];
		for (var i in this.hintpos4){
		this.posi = this.hintpos4[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint4.push(this.hint);
		}	
	//row 3
	this.hintpos3=[{x: 600, y:525}, {x:630, y:525}, {x: 660, y:525}, {x:690, y: 525}];
	this.hint3 = [];
		for (var i in this.hintpos3){
		this.posi = this.hintpos3[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint3.push(this.hint);
		}	
	
	//row 2
	this.hintpos2=[{x: 600, y:580}, {x:630, y:580}, {x: 660, y:580}, {x:690, y: 580}];
	this.hint2 = [];
		for (var i in this.hintpos2){
		this.posi = this.hintpos2[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint2.push(this.hint);
		}	
	
	//row 1
	this.hintpos1=[{x: 600, y:635}, {x:630, y:635}, {x: 660, y:635}, {x:690, y: 635}];
	this.hint1 = [];
		for (var i in this.hintpos1){
		this.posi = this.hintpos1[i];
		this.hint = this.add.sprite(this.posi.x, this.posi.y, 'results', 0);
		this.hint1.push(this.hint);
		}	
	
	
//at start, all buttons disabled except row 1			
	this.group2.forEach(function(item){
				item.inputEnabled = false;
	});
	this.group3.forEach(function(item){
				item.inputEnabled = false;
	});
	this.group4.forEach(function(item){
				item.inputEnabled = false;
	});
	this.group5.forEach(function(item){
				item.inputEnabled = false;
	});
	this.group6.forEach(function(item){
				item.inputEnabled = false;
	});
	this.group7.forEach(function(item){
				item.inputEnabled = false;
	});
	this.group8.forEach(function(item){
				item.inputEnabled = false;
	});
	
	
	
},
	
	changeFrame: function(){
		this.animations.frame +=1;
	},

	
	onEnter1: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row1)
				{
					this.a = this.row1[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group1.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode1();	
			
		
		}
			
	},	
	checkCode1: function(){
		//log guess and check with code (optional)
		console.log("this guess" + this.guess + "this code" + this.code);

				if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
					
				}
				else {
					this.getHints1();
				}
	},	
	getHints1: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array into right, wrong place and wrong. 
			this.hintsarray.sort();
		}
		
		this.update1();
	},
	update1: function(){
		//optional log out. 
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint1){
			if(this.hintsarray[i] ===1){
				this.hint1[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint1[i].animations.frame = 2;
			}
			else{
				this.hint1[i].animations.frame = 3;
			}
		}
		this.group2.forEach(function(item){
				item.inputEnabled = true;
	});
		
	},


	onEnter2: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row2)
				{
					this.a = this.row2[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group2.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode2();	
			
			//unlock next row's entries
		
		}
			
	},	
	checkCode2: function(){

				if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints2();
				}
	},
	getHints2: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update2();
	},
	update2: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint2){
			if(this.hintsarray[i] ===1){
				this.hint2[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint2[i].animations.frame = 2;
			}
			else{
				this.hint2[i].animations.frame = 3;
			}
		}
		
		this.group3.forEach(function(item){
				item.inputEnabled = false;
	});
	},
	
	
	onEnter3: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row3)
				{
					this.a = this.row3[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group3.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode3();	
			
			//unlock next row's entries
		
		}
			
	},	
	checkCode3: function(){

				if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints3();
				}
	},
	getHints3: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update3();
	},
	update3: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint3){
			if(this.hintsarray[i] ===1){
				this.hint3[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint3[i].animations.frame = 2;
			}
			else{
				this.hint3[i].animations.frame = 3;
			}
		}
		
		this.group4.forEach(function(item){
				item.inputEnabled = false;
	});
		
	},

	
	onEnter4: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row4)
				{
					this.a = this.row4[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group4.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode4();	
			
			//unlock next row's entries
		
		}
			
	},	
	checkCode4: function(){

				if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints4();
				}
	},	
	getHints4: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update4();
	},
	update4: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint4){
			if(this.hintsarray[i] ===1){
				this.hint4[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint4[i].animations.frame = 2;
			}
			else{
				this.hint4[i].animations.frame = 3;
			}
		}
	
		this.group5.forEach(function(item){
				item.inputEnabled = false;
	});
	},


	onEnter5: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row5)
				{
					this.a = this.row5[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group5.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode5();	
			
			//unlock next row's entries
		
		}
			
	},	
	checkCode5: function(){

				if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints5();
				}
	},		
	getHints5: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update5();
	},	
	update5: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint7){
			if(this.hintsarray[i] ===1){
				this.hint5[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint5[i].animations.frame = 2;
			}
			else{
				this.hint5[i].animations.frame = 3;
			}
		}
		this.group6.forEach(function(item){
				item.inputEnabled = false;
	});
	},
	
	
	onEnter6: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row6)
				{
					this.a = this.row6[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group6.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode6();	
			
			//unlock next row's entries
		
		}
			
	},	
	checkCode6: function(){

			if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints6();
				}
	},
	getHints6: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update6();
	},
	update6: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint7){
			if(this.hintsarray[i] ===1){
				this.hint6[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint6[i].animations.frame = 2;
			}
			else{
				this.hint6[i].animations.frame = 3;
			}
		}
		this.group7.forEach(function(item){
				item.inputEnabled = false;
	});
		
	},

	
	
	onEnter7: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row7)
				{
					this.a = this.row7[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group7.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode7();	
			
			//unlock next row's entries
		
		}
			
	},
	checkCode7: function(){

				if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints7();
				}
	},
	getHints7: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update7();
	},
	update7: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint7){
			if(this.hintsarray[i] ===1){
				this.hint7[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint7[i].animations.frame = 2;
			}
			else{
				this.hint7[i].animations.frame = 3;
			}
		}
		this.group8.forEach(function(item){
				item.inputEnabled = false;
	});
		
	},


	onEnter8: function(){
		this.guess = [];
		//get frame number of each item in row and store in array
				for(var i in this.row8)
				{
					this.a = this.row8[i];
					this.num = this.a.animations.frame;	

					this.guess.push(this.num);
				//sprite.animations.frame
				}
		console.log("my guess is" + this.guess);	
			//check the array doesn't contain '6' (empty)
		if(this.guess.includes(6)){
			//throw error
			alert("you haven't finished your guess for this row");
		}
		else{
		//lock row from being used again
			this.group8.forEach(function(item){
				item.inputEnabled = false;

			}, this);
			//compare the guess with the code
		this.checkCode8();	
			
			//unlock next row's entries
		
		}
			
	},
	checkCode8: function(){

			if(JSON.stringify(this.guess) === JSON.stringify(this.code))
				{
					this.puzzWin();
				}
				else {
					this.getHints8();
				}
	},
		
	getHints8: function(){
		this.hintsarray = [];
		//compare numbers in array to see if there are right colours in right places:
		for (var i= 0; i< 4; i++ ){
				if(this.guess[i] === this.code[i]){
					//light up right code in right place peg
					this.hintsarray.push(2);
				}
				//then check right colours in wrong place only if not right in right pace
				else if(this.code.includes(this.guess[i])){

					this.hintsarray.push(1);
				}
				else {
					//not correct: wrongcolour;
					this.hintsarray.push(3);
					}
			//sort array
			this.hintsarray.sort();
		}
		
		this.update8();
	},
	
	update8: function(){
		
		console.log("this hint array is: " + this.hintsarray);
		
		for(var i in this.hint8){
			if(this.hintsarray[i] ===1){
				this.hint8[i].animations.frame = 1;
			}
			else if(this.hintsarray[i] ===2)
			{
				this.hint8[i].animations.frame = 2;
			}
			else{
				this.hint8[i].animations.frame = 3;
			}
		}
		
		this.gameOver();
		
	},

	puzzwin: function(){
	
		console.log("You win!");
	},
	
	gameOver:function(){
		console.log("game over");
},
	
	error: function(){
		
		console.log("error");
		
		
	},


update: function(){}
    

}