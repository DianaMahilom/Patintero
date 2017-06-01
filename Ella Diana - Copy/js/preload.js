preloadGame={
	preload:function () {
		
	 	game.load.image('platform','img/platform.png');
		game.load.image('platform1','img/platform1.png');
		game.load.image('platform2','img/platform2.png');
		game.load.image('platform3','img/platform3.png');
		game.load.image('platform4','img/platform4.png');
		game.load.image('platform5','img/platform5.png');
		game.load.image('platform6','img/platform2.png');
		game.load.image('finish','img/finish.png');
		game.load.image('starting','img/starting.png');

	    game.load.image('bg','img/bg.png');
	    game.load.image('titlepage','img/titlepage.png');
		game.load.image('clock','img/clock.png');
		game.load.image('quit','img/quit.png');
		game.load.image('mute','img/mute.png');
		
		game.load.spritesheet("menu2","img/menu2.png",95,94);
		game.load.image('ins','img/instruction.png');
        game.load.image('About','img/aboutbtn.png');
		game.load.image('about2','img/about2.png');
        game.load.image('intruct',"img/patakaran.png");
		
		game.load.image('btnrestart','img/restartbtn.png');
		game.load.image('btn_paused', 'img/pausedbtn1.png');
		game.load.image('btn_pause', 'img/btnP.png');
		game.load.image('btnUp', 'img/btnUp.png');
		game.load.image('btnDown', 'img/btnDown.png');
		game.load.image('btnLeft', 'img/btnLeft.png');
		game.load.image('btnRight', 'img/btnRight.png');
		game.load.spritesheet('player1', 'img/characters.png', 16, 16);
		game.load.spritesheet('player2', 'img/characters.png', 16, 16);
		game.load.spritesheet('player3', 'img/characters.png', 16, 16);
		game.load.spritesheet('player4', 'img/characters.png', 16, 16);
		
		game.load.spritesheet('player', 'img/characters.png', 16, 16);
		game.load.spritesheet('enemy', 'img/characters.png', 16, 16);
		game.load.spritesheet('enemy1', 'img/characters.png', 16, 16);
		game.load.spritesheet('enemy2', 'img/characters.png', 16, 16);
		game.load.spritesheet('enemy3', 'img/characters.png', 16, 16);
		game.load.image('startButton', 'img/buttonPlay.png');
		

	   
	  
	},

	create:function () {
		game.state.start("playGame");
		game.state.start("menuGame");

	},
}