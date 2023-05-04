let ladder = {
	step: 0,
	up: function () {
		this.step++;
		return this;
	},
	down: function () {
		this.step--;
		return this;
	},
	showStep: function () { // показывает текущую ступеньку
		alert(this.step);
		return this;
	}
};

/*
Old way will works
*/

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

/*
This chain will also works
*/

ladder.up().up().down().showStep(); // 2, because step will be increamented before