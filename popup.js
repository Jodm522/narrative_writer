

// function insertScript(){
//     chrome.tabs.query({active: true, currentWindow: true}, tabs => {
//     chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: runWriter})
//     })
// }



var tab_title = '';
function executed (results){
  h1=results;
  console.log(results)
  document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1[0].unit + " " +h1[0].urgency +" "+ "</p>";
}
chrome.tabs.query({active: true}, function(tabs) {
  var tab = tabs[0];
  tab_title = tab.title;
  chrome.tabs.executeScript(tab.id, {
    file:"script.js"
  }, executed);
});


