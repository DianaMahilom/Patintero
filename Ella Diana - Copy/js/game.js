var w = 800,h = 600;
var player1,player2,player3,enemy1,enemy2,enemy3,enemy4;
var player,enemy, btnrestart, keyboard,platform2, platforms2, platform, platforms, score = 0, scoreText, gameOverText, lifeText, life = 3, time, timeText, bestText,platform3, platforms3,platform4, platforms4,platform5, platforms5,platform6, clock;
var btn_pause,menu,choiseLabel,pause_label,titlepage,preloadbar;
var btnUp,btnDown,btnRight,btnLeft,titlepage,startButton,helpButton ,aboutPlay;
var starting,finish;
var duration = 30;
var game = new Phaser.Game(w, h, Phaser.CANVAS, '');


game.state.add("BootGame",BootGame);
game.state.add("preloadGame",preloadGame);
game.state.add("menuGame",menuGame);
game.state.add("playGame",playGame);
game.state.add("winGame",winGame);
game.state.add("loseGame",loseGame);

game.state.start("BootGame");
