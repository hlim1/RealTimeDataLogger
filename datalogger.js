var numberValues = [];
// number values = [1,5,9,2];

function addNewNumber()
{
  var number = document.getElementById("dataInput").value;
  if (!isNaN(number))
    numberValues.push(number);
  // get the text input from the DOM and store it in a variable
  // check if that variable is a number
  // IF IT IS... add that number to the back of the array
}

function updateTotal()
{
  var newTotal = 0;
  for (var i = 0; i < numberValues.length; i++)
  {
    newTotal += Number(numberValues[i]);
  }
  document.getElementById("total").innerHTML = newTotal; 
}

function updateAverage()
{
  var currentTotal = 0;
  for (var i = 0; i < numberValues.length; i++)
  {
    currentTotal += Number(numberValues[i]);
  }
  var newAverage = currentTotal/2;
  newAverage.toPrecision(3); // x.00
  document.getElementById("average").innerHTML = newAverage;
}
