/* .js files add interaction to your website */


//initializing variables
var linkList = [
  "https://techland.time.com/2012/02/17/how-target-knew-a-high-school-girl-was-pregnant-before-her-parents/",
  "https://www.forbes.com/sites/robpegoraro/2020/11/13/heres-a-hint-about-how-few-people-click-those-do-not-sell-my-personal-information-links/?sh=654fe2f01fc9",
  "https://www.iab.com/insights/iab-ccpa-benchmark-survey/"
];

var titleList = [
  "Target knew a high school girl was pregnant before her parents - Time",
  "How few people click the do not sell my personal data button - Forbes",
  "IAB CCPA Benchmark Survey"
];

var link = document.getElementById("link");
var linkButton = document.getElementById("linkButton");
var count = 0;


//event listeners
linkButton.addEventListener("click", displayLink);


//functions
function displayLink() {
  link.innerHTML = titleList[count];
  document.getElementById("openLink").href = linkList[count];
  count++;
  if(count == linkList.length) {
    count = 0;
  }
}

