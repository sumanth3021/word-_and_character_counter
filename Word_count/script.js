function countText() {

  var text = document.getElementById("textInput").value;


  var charCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== " ") {  
      charCount++;
    }
  }


  var wordCount = 0;
  var inWord = false;

  for (var i = 0; i < text.length; i++) {
    if (text[i] !== " " && inWord === false) {
      wordCount++;
      inWord = true;
    } else if (text[i] === " ") {
      inWord = false;
    }
  }

  document.getElementById("wordCount").textContent=wordCount
  document.getElementById("charCount").textContent= charCount;
}
