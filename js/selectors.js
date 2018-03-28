// declare your functions here...

function paragraphSelector() {
  return $('p')
}
function lastImageSelector () {
  var images = new Array();
  images = $('img:last');
  return images[images.length-1]
}