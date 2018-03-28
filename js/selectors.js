// declare your functions here...

function paragraphSelector() {
  return $('p')
}
function lastImageSelector () {
  var images = new Array();
  images = $('img');
  return images[images.length-1]
}