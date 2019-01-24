var pageList = document.querySelectorAll(".page");
var closeTabArr = [];
var openTabArr = [];

for (var i = 1; i < pageList.length; i++) {
  var closeTab = pageList[i].querySelector("#close");
  closeTabArr.push(closeTab);
  var openTab = pageList[i].querySelector("#open");
  openTabArr.push(openTab);
}

closeTabArr.forEach(tab => {
  tab.addEventListener("click", function() {
    var page = tab.parentElement;
    tab.style.cursor = "auto"; // TODO: reset all closeTabs back to pointer
    page.style.zIndex = "10";
    page.classList.add("close");
  });
});

openTabArr.forEach(tab => {
  tab.addEventListener("click", function() {
    var page = tab.parentElement;
    tab.style.cursor = "pointer";
    page.style.zIndex = "1";
    page.classList.remove("close");
  });
});