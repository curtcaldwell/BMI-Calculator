//BMI Calculator///
var height = parseFloat(prompt("Whats your height in meters"));
var weight = parseFloat(prompt("Whats your weight in kilogram"));

var BMI =function (height, weight){
	return weight/(height*height);

}
alert(BMI (height, weight))
