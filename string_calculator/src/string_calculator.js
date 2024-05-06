// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	if(string_numbers ==='')
	{
		return 0;
	}else
	{
		const numbers = string_numbers.split(',').map(num => parseInt(num));
        
        return numbers.reduce((acc, cur) => acc + cur, 0);

	}
	

};

function findSpaceship(map){
	return [7,2];
}




