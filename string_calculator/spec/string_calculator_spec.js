describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return 1 for an string with 1', function(){
		expect(calculator.add('1')).toEqual(1);
	});
	it('shoukd return 3 for an string with 1,2', function(){
		expect(calculator.add('1,2')).toEqual(3);
	});
	
});

describe('findSpaceShip',() =>{
	it('should return the coordinates of the spaceshipt', ()=>{
		const map = "..........\n..........\n..........\n.......X..\n..........\n..........";
		expect(findSpaceShip(map)).toEqual([7,2]);
	});

	it('should return "Spaceship lost forever." when spaceship is not found', () => {
        const map = "..........\n..........\n..........\n..........\n..........\n..........";
        expect(findSpaceship(map)).toEqual("Spaceship lost forever.");
    });

   
    it('should return the correct coordinates for a simple map', () => {
        const map = "X";
        expect(findSpaceship(map)).toEqual([0, 0]);
})
});



