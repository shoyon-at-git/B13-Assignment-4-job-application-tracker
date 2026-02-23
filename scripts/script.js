console.log("script is ready to take action");

let interviewList = [];
let rejectedList = [];

const filteredSection = document.getElementById("filtered-section");
let total = document.getElementById("countTotal");
let interviewCount = document.getElementById("countInterview");
let rejectedCount = document.getElementById("countReject");
let filterJobCount = document.getElementById("filtered-job-count");

const cardContainer = document.getElementById("card-container");
const mainContainer = document.getElementById("main");

function calculateCount(){
    total.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

