playGame={

	create:function () {
		
		
		game.add.sprite(0,0,"bg");
		game.add.sprite(300,30,"clock");
		game.add.sprite(650,540,"quit");
		game.add.sprite(540,540,"mute");
		game.add.button(50,435,"btnUp",this.playerUp);

	game.add.button(80,465,"btnLeft",this.playerRight);
	game.add.button(53,500,"btnDown",this.playerDown);
	game.add.button(25,470,"btnRight",this.playerLeft);
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

		var time=1000;
		platform = game.add.group();
		platform.enableBody = true;
		platforms = platform.create(150,h/2-200,"platform");

		platforms.scale.x =1.2;
		platforms.scale.y =0.6;

		platforms.body.immovable = true;

		platform2 = game.add.group();
		platform2.enableBody = true;
		starting=game.add.sprite(168,493,"starting");
		starting.scale.x =0.8;
	    starting.scale.y =0.8;
		platforms2 = platform.create(150,490,"platform2");

		platforms2.scale.x =0.63;
		platforms2.scale.y =0.6;

		platforms2.body.immovable = true;

		platform6 = game.add.group();
		platform6.enableBody = true;
		  finish=game.add.sprite(400,493,"finish");
		finish.scale.x =0.8;
	    finish.scale.y =0.8;
		platforms6 = platform.create(400,490,"platform6");

		platforms6.scale.x =0.57;
		platforms6.scale.y =0.6;

		platforms6.body.immovable = true;



		platform5 = game.add.group();
		platform5.enableBody = true;
		platforms5 = platform.create(150,300,"platform5");

		platforms5.scale.x =1.2;
		platforms5.scale.y =0.6;

		platforms5.body.immovable = true;



		platform1 = game.add.group();
		platform1.enableBody = true;
		platforms1 = platform.create(150,100,"platform1");
		platforms1.scale.x =0.3;
		platforms1.scale.y = 0.5;
		platforms1.body.immovable = true;

		platform3 = game.add.group();
		platform3.enableBody = true;
		platforms3 = platform.create(386,100,"platform3");
		platforms3.scale.x =0.3;
		platforms3.scale.y = 0.5;
		platforms3.body.immovable = true;

		platform4 = game.add.group();
		platform4.enableBody = true;
		platforms4 = platform.create(614,110,"platform4");
		platforms4.scale.x =0.3;
		platforms4.scale.y = 0.5;
		platforms4.body.immovable = true;
	
		player = game.add.sprite(w/2-160,(h/2)+300,"player");	
		player.animations.add('down', [3, 4, 5], 10, true);
		player.animations.add('left', [15, 16, 17], 10, true);
		player.animations.add('right', [27, 28, 29], 10, true);
		player.animations.add('up', [39, 40, 41], 10, true);
		player.scale.x=3;
		player.scale.y=3;
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		
		player1 = game.add.sprite(w/2-160,(h/2)+300,"player1");	
		player1.animations.add('down', [3, 4, 5], 10, true);
		player1.animations.add('left', [15, 16, 17], 10, true);
		player1.animations.add('right', [27, 28, 29], 10, true);
		player1.animations.add('up', [39, 40, 41], 10, true);
		player1.scale.x=3;
		player1.scale.y=3;
		game.physics.arcade.enable(player1);
		player1.body.collideWorldBounds = true;
		
		player2 = game.add.sprite(w/2-160,(h/2)+300,"player2");	
		player2.animations.add('down', [3, 4, 5], 10, true);
		player2.animations.add('left', [15, 16, 17], 10, true);
		player2.animations.add('right', [27, 28, 29], 10, true);
		player2.animations.add('up', [39, 40, 41], 10, true);
		player2.scale.x=3;
		player2.scale.y=3;
		game.physics.arcade.enable(player2);
		player2.body.collideWorldBounds = true;
		enemy = game.add.sprite(150,270,"enemy");
		enemy.animations.add('left', [21, 22, 23], 10, true);
		enemy.animations.add('right', [33, 34, 35], 10, true);
		enemy.scale.x=3;
		enemy.scale.y=3;

		game.physics.arcade.enable(enemy);
		enemy.body.collideWorldBounds = true;

		enemy1 = game.add.sprite(370,100,"enemy1");
		enemy1.animations.add('down', [9, 10, 11], 10, true);
		enemy1.animations.add('up', [45, 46, 47], 10, true);
		enemy1.scale.x=3;
		enemy1.scale.y=3;

		game.physics.arcade.enable(enemy1);
		enemy1.body.collideWorldBounds = true;

		enemy2 = game.add.sprite(150,460,"enemy2");
		enemy2.animations.add('left', [21, 22, 23], 10, true);
		enemy2.animations.add('right', [33, 34, 35], 10, true);

		enemy2.scale.x=3;
		enemy2.scale.y=3;

		game.physics.arcade.enable(enemy2);
		enemy2.body.collideWorldBounds = true;

		enemy3 = game.add.sprite(150,h/2-230,"enemy3");
		enemy3.animations.add('left', [21, 22, 23], 10, true);
		enemy3.animations.add('right', [33, 34, 35], 10, true);

		enemy3.scale.x=3;
		enemy3.scale.y=3;

		game.physics.arcade.enable(enemy3);
		enemy3.body.collideWorldBounds = true;


		timer=game.time.events.loop(Phaser.Timer.SECOND * 0.6,this.enemyMoveDown);

	timer=game.time.events.loop(Phaser.Timer.SECOND * 1,this.enemyMoveRight);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 0.9,this.enemy2MoveRight);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 0.7,this.enemy3MoveRight);

	timer=game.time.events.loop(Phaser.Timer.SECOND * 1,this.enemyMoveUp);

	timer=game.time.events.loop(Phaser.Timer.SECOND * 2,this.enemyMoveLeft);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 1.5,this.enemy2MoveLeft);
	timer=game.time.events.loop(Phaser.Timer.SECOND * 1.6,this.enemy3MoveLeft);

		scoreText = game.add.text(25,25,"Score: 0",{font: "35px Matura MT Script Capitals",fill:'red',align: "center"});
		bestText = game.add.text(25,55,"Best: "+this.retrieve(),{font: "35px Matura MT Script Capitals",fill:'red'});
		timeText = game.add.text(360,30,"0:"+duration,{font: "35px Matura MT Script Capitals",fill:'red'});
		gameOverText = game.add.text(w/2-200,h/2-20,"",{ font: "50px Bernard MT Condensed",fill:'blue',align: "center"});
		ellaText = game.add.text(w/2-200,h/2-20,"",{ font: "50px Bernard MT Condensed",fill:'blue',align: "center"});

		btnrestart = game.add.button(670,90,"btnrestart",this.reset);
		pause_label = game.add.button(670,35,'btn_pause',this.pause_label);
		pause_label.inputEnabled = true;
	 
        
	
	},
		update:function () {
		game.physics.arcade.overlap(player,platforms);
		game.physics.arcade.collide(player, platforms1);
		game.physics.arcade.overlap(player, platforms2);
		game.physics.arcade.collide(player, platforms4);
		game.physics.arcade.overlap(player, platforms5);

		game.physics.arcade.collide(enemy,platforms1);
		game.physics.arcade.collide(enemy,platforms4);
		game.physics.arcade.collide(enemy1,platforms);
		game.physics.arcade.collide(enemy1,platforms6);
		game.physics.arcade.collide(enemy2,platforms1);
		game.physics.arcade.collide(enemy2,platforms4);
		game.physics.arcade.collide(enemy3,platforms1);
		game.physics.arcade.collide(enemy3,platforms4);
		game.physics.arcade.overlap(platforms6,player,this.goalPlayer,this.player1);
		game.physics.arcade.overlap(platforms6,player1,this.goalPlayer1,this.player2);

		game.physics.arcade.overlap(player1,platforms);
		game.physics.arcade.collide(player1, platforms1);
		game.physics.arcade.overlap(player1, platforms2);
		game.physics.arcade.collide(player1, platforms4);
		game.physics.arcade.overlap(player1, platforms5);
		game.physics.arcade.collide(player,enemy,this.killPlayer);
		game.physics.arcade.collide(player,enemy1,this.killPlayer);
		game.physics.arcade.collide(player,enemy2,this.killPlayer);
		game.physics.arcade.collide(player,enemy3,this.killPlayer);
		game.physics.arcade.collide(player1,enemy,this.killPlayer);
		game.physics.arcade.collide(player1,enemy1,this.killPlayer);
		game.physics.arcade.collide(player1,enemy2,this.killPlayer);
		game.physics.arcade.collide(player1,enemy3,this.killPlayer);
     
    if (keyboard.up.isDown){
			player.body.velocity.y = -500;
			player.animations.play('up');
			player1.body.velocity.y = -500;
			player1.animations.play('up');
			player2.body.velocity.y = -500;
			player2.animations.play('up');
			
        } else if (keyboard.down.isDown) {
            player.body.velocity.y = 500;
            player.animations.play('down');
			player1.body.velocity.y = 500;
            player1.animations.play('down');
        player2.body.velocity.y = 500;
            player2.animations.play('down');
        } else if (keyboard.left.isDown) {
			player.body.velocity.x = -500;
			player.animations.play('left');
			player1.body.velocity.x = -500;
			player1.animations.play('left');
      player2.body.velocity.x = -500;
			player2.animations.play('left');
        } else if (keyboard.right.isDown) {
			player.body.velocity.x =500;
			player.animations.play('right');
			player1.body.velocity.x =500;
			player1.animations.play('right');
			player2.body.velocity.x =500;
			player2.animations.play('right');
        } 
		else{
			player.body.velocity.y = 0;
			player.body.velocity.x = 0;
			player.animations.stop();
			player1.body.velocity.y = 0;
			player1.body.velocity.x = 0;
			player1.animations.stop();
			player2.body.velocity.y = 0;
			player2.body.velocity.x = 0;
			player2.animations.stop();
		}
		},
		player1:function(){
		player1 = game.add.sprite(w/2-160,(h/2)+300,"player1");	
		player1.animations.add('down', [6, 7, 8], 10, true);
		player1.animations.add('left', [18, 19, 20], 10, true);
		player1.animations.add('right', [30, 31, 32], 10, true);
		player1.animations.add('up', [42, 43, 44], 10, true);
		player1.scale.x=3;
		player1.scale.y=3;
		game.physics.arcade.enable(player1);
		player1.body.collideWorldBounds = true;
		},
player2:function(){
		player2= game.add.sprite(w/2-160,(h/2)+300,"player2");	
		player2.animations.add('down', [3, 4, 5], 10, true);
		player2.animations.add('left', [15, 16, 17], 10, true);
		player2.animations.add('right', [27, 28, 29], 10, true);
		player2.animations.add('up', [39, 40, 41], 10, true);
		player2.scale.x=3;
		player2.scale.y=3;
		game.physics.arcade.enable(player2);
    	player2.body.collideWorldBounds = true;
    },
		
		enemyMoveDown:function () {

		enemy1.body.velocity.y = 500;
		enemy1.animations.play('down');

		},
		enemyMoveUp:function () {

		enemy1.body.velocity.y =-500;
		enemy1.animations.play('up');

		},
		enemyMoveRight:function () {

		enemy.body.velocity.x = 500;
		enemy.animations.play('right');

		},
		enemyMoveLeft:function () {

		enemy.body.velocity.x = -500;
		enemy.animations.play('left');

		},
		enemy2MoveLeft:function () {

		enemy2.body.velocity.x = -500;
		enemy2.animations.play('left');

		},
		enemy2MoveRight:function () {

		enemy2.body.velocity.x = 500;
		enemy2.animations.play('right');

		},
		enemy3MoveRight:function() {

		enemy3.body.velocity.x = 500;
		enemy3.animations.play('right');

		},
		enemy3MoveLeft:function () {

		enemy3.body.velocity.x = -500;
		enemy3.animations.play('left');

     },
	 playerUp:function(){
		
		player.body.velocity.y = -500;
		player.animations.play('up');

        },
		playerDown:function(){
		 
            player.body.velocity.y = 500;
            player.animations.play('down');
        
        },
		playerLeft:function(){
		
            player.body.velocity.x = -500;
           player.animations.play('left');
		
        },
		playerRight:function(){
		
            player.body.velocity.x =500;
           player.animations.play('right');
		
        },
		  
		playerStill:function(){
		
        player.body.velocity.y = 0;
        player.body.velocity.x = 0;
        player.animations.stop();
    
		},
pause_label:function(){
	pause_label.events.onInputUp.add(function (){
			game.paused = true;
			ellaText.text="Game Pause!";
			this.unpause;
			 });
		
},
 unpause:function(event){

		game.input.onDown.add(function(){;
		if(game.paused){
			ellaText.destroy();
			game.paused = false;
			
		}
		});
 },

		reset:function(){
      game.state.start("menuGame");
 
},
killPlayer:function (){
//enemyMoveDown.destroy();
    gameOverText.text="Game Over!!!";   
    game.paused=true;        
    
},
saveScore:function (score){
    localStorage.setItem("saveScore",score);
},
retrieve:function (){
    var data = localStorage.getItem("saveScore");
    if(data == null || data == ""){
        data = 0;
    }
    return data;
},
goalPlayer:function (){
	 player.kill();
	 //player1.kill();
    this.score=1;
    scoreText.text = "Score: "+this.score++;
    if(this.retrieve<=this.score){
        this.saveScore(score++);  

    }
	
},
goalPlayer1:function (){
	 player1.kill();
	 //player1.kill();
    this.score+=1;
    scoreText.text = "Score: "+this.score++;
    if(this.retrieve<=this.score){
        this.saveScore(score++);  

    }
	
},
time:function (){
    setInterval(function(){
        if(duration<=0){
            gameOverText.text = "TIME is OVER";
			game.paused = true;
        
	}
	 else{
            if(timeText.text != "time: 0"){
              duration--;
			
			}
            timeText.text = "0:"+duration;            
        }
    },time);
}
	}





