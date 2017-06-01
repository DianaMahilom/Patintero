menuGame={
	
	create:function () {
		titlepage = game.add.image(0,0,"titlepage");
		//menuText = game.add.button(300,350,"Menu",{"fill":"#fff"});
		
		//aboutText = game.add.button(300,500,"aboutPlay",{"fill":"#fff"},this.aboutPlay);
		startButton=game.add.button(100,450,"startButton", this.buttonPlay);
		startButton.scale.y=0.8;
		startButton.scale.x=0.8;
		
		aboutText = game.add.button(340,480,"About",this.about);
        aboutText.anchor.set(0.6);
		aboutText.scale.set(1);  
			
		instruc = game.add.button(460,480,"intruct",this.ins);
		instruc.anchor.set(0.6);
		instruc.scale.set(1);
		//aboutPlay=game.add.button(100,600,"aboutPlay", this.buttonPlay);
		//aboutPlay.scale.y=0.8;
		//aboutPlay.scale.x=0.8;
	},

		lundag:function (){
        game.state.start("playGame");
		
   },

	//update:function () {
	 	
//	},
	//buttonPlay:function(){
	// 	game.state.start("playGame");
		
	//},
	  about: function(){
            about=game.add.image(0,0,"about2");
            about.scale.set(3.2);
		
			
            restartButton=game.add.button(30,30,"menu2",restartB,this);
            function restartB() {
           
            restartButton.destroy();
            game.state.start("menuGame");
            }

            },
    ins: function(){
            about=game.add.image(0,0,"ins");
            about.scale.set(3.2);
			

            restartButton=game.add.button(30,30,"menu2",restartB,this);
            function restartB() {
            restartButton.destroy();

            game.state.start("menuGame");

            }

            },
   

		update: function(){
			//if(keyboard.up.isDown){
			//	game.state.start("playGame");
			//}
			
		},
		buttonPlay:function(){
				game.state.start("playGame");
				menumusic.stop();
		
			},

}