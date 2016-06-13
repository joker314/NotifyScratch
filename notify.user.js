var title = document.getElementsByTagName("title")[0];
var titleData = title.innerHTML;
var oldMessageCount = -1;
window.old = 0;
function abcde(){
	try{
var messageCount = document.getElementsByClassName("notificationsCount")[0].innerHTML;
	} catch(err){
		var messageCount = document.getElementsByClassName("message-count")[0].innerHTML;
	}
if(messageCount != window.old){
  var bell = new Audio("data:audio/mp3;base64,<INSERT_BASE64_OF_BELL_SOUND>");
  bell.play();
}
window.old = messageCount;
title.innerHTML = (messageCount > 0)?("(" + messageCount + ") " + titleData):(titleData);	
}
setInterval(abcde, 10000, false);
abcde();
