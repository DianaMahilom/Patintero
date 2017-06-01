BootGame={
	create:function () {
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.background = "#ccc";
		keyboard = game.input.keyboard.createCursorKeys();
		game.state.start("preloadGame");

	},
}