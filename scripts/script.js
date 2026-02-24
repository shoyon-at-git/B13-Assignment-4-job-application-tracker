console.log("script is ready to take action");

let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

const filteredSection = document.getElementById("filtered-section");
let total = document.getElementById("countTotal");
let interviewCount = document.getElementById("countInterview");
let rejectedCount = document.getElementById("countReject");
let filterJobCount = document.getElementById("filtered-job-count");
let innerFilter = document.getElementById("inner-filter");

const cardContainer = document.getElementById("card-container");
const mainContainer = document.getElementById("main");

function calculateCount(){
    total.innerText = cardContainer.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// toggling buttons
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");
// console.log(allFilterBtn, interviewFilterBtn, rejectedFilterBtn)

function toggleStyle(id){
    allFilterBtn.classList.remove("bg-blue-600", "text-white");
    interviewFilterBtn.classList.remove("bg-blue-600", "text-white");
    rejectedFilterBtn.classList.remove("bg-blue-600", "text-white");

    allFilterBtn.classList.add("text-gray-600", "bg-white");
    interviewFilterBtn.classList.add("text-gray-600", "bg-white");
    rejectedFilterBtn.classList.add("text-gray-600", "bg-white");

    const selected = document.getElementById(id);
    // console.log(selected)
    currentStatus = id;
    selected.classList.add("bg-blue-600", "text-white");
    selected.classList.remove("text-gray-600", "bg-white");

    if(id == "interview-filter-btn"){
        cardContainer.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        filterJobCount.innerText = `${interviewList.length} of ${cardContainer.children.length} jobs`;
        renderInterviewList();
        innerFilter.classList.toggle("hidden", interviewList.length !== 0);
    }
    if(id == "rejected-filter-btn"){
        cardContainer.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        filterJobCount.innerText = `${rejectedList.length} of ${cardContainer.children.length} jobs`;
        renderRejectedList();
        innerFilter.classList.toggle("hidden", rejectedList.length !== 0);

    }
    if(id == "all-filter-btn"){
        cardContainer.classList.remove("hidden");
        filteredSection.classList.add("hidden");
        filterJobCount.innerText = `${cardContainer.children.length} jobs`;
    }
    
}

// showing divs accroding to choise
mainContainer.addEventListener("click", function(event){
    console.log(event.target);
    if(event.target.classList.contains("interview-btn")){
        const parentNode = event.target.parentNode.parentNode;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobRole = parentNode.querySelector(".job-role").innerText;
        const jobPlace  = parentNode.querySelector(".job-place").innerText;
        const jobTime = parentNode.querySelector(".job-time").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        let status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        status = "Interview";
        parentNode.querySelector(".status").innerText = "Interview";
        parentNode.querySelector(".status").className =
            "status w-fit rounded-md px-3 py-2 mb-2 bg-green-100 text-green-700";
    
        const cardDetails = {
            jobTitle,
            jobRole,
            jobPlace,
            jobTime,
            salary,
            status,
            notes
        }
        // console.log(cardDetails)
        const existingJob = interviewList.find(item => item.jobTitle == cardDetails.jobTitle);
        if(!existingJob){
            interviewList.push(cardDetails);
        }
        rejectedList = rejectedList.filter(item => item.jobTitle != cardDetails.jobTitle);
        calculateCount();

        if(currentStatus == "rejected-filter-btn"){
            renderRejectedList();
        }
        else if(currentStatus == "interview-filter-btn"){
            renderInterviewList();
        }
    }   

    if(event.target.classList.contains("rejected-btn")){
        // console.log("reject");
        const parentNode = event.target.parentNode.parentNode;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobRole = parentNode.querySelector(".job-role").innerText;
        const jobPlace  = parentNode.querySelector(".job-place").innerText;
        const jobTime = parentNode.querySelector(".job-time").innerText;
        const salary = parentNode.querySelector(".salary").innerText;
        let status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;

        status = "Rejected";
        parentNode.querySelector(".status").innerText = "Rejected";
        parentNode.querySelector(".status").className =
            "status w-fit rounded-md px-3 py-2 mb-2 bg-gray-100 text-red-700";
    
        const cardDetails = {
            jobTitle,
            jobRole,
            jobPlace,
            jobTime,
            salary,
            status,
            notes
        }
        // console.log(cardDetails)
        const existingJob = rejectedList.find(item => item.jobTitle == cardDetails.jobTitle);
        if(!existingJob){
            rejectedList.push(cardDetails);
        }
        interviewList = interviewList.filter(item => item.jobTitle != cardDetails.jobTitle);
        calculateCount();

        if(currentStatus === "interview-filter-btn"){
            renderInterviewList();
        } 
        else if(currentStatus === "rejected-filter-btn"){
            renderRejectedList();
        }
        calculateCount();
        
    }

    if(event.target.closest(".delete-btn"))
    {
        const cardNode = event.target.closest(".card");
        const jobTitle = cardNode.querySelector(".job-title").innerText;
        interviewList = interviewList.filter(item => item.jobTitle !== jobTitle);
        rejectedList = rejectedList.filter(item => item.jobTitle !== jobTitle);
        cardNode.remove();
        calculateCount();
        updateFilterJobCount();
        if(currentStatus === "interview-filter-btn") 
            renderInterviewList();
        else if(currentStatus === "rejected-filter-btn") 
            renderRejectedList();

    }
});


function renderInterviewList(){
    filteredSection.innerHTML = "";
    if (interviewList.length === 0) {
        innerFilter.classList.remove("hidden");
        filteredSection.appendChild(innerFilter);
    }
    for(let interview of interviewList){
        let div = document.createElement("div");
        div.className = "card  mb-4 bg-white flex justify-between rounded-md";
        div.innerHTML = `
            <div class="card hover:border w-full bg-white p-6 flex justify-between rounded-md">
                <div class="card-left">
                    <h2 class="job-title text-lg font-bold mb-1">${interview.jobTitle}</h2>
                    <p class="job-role text-sm text-gray-500 mb-5">${interview.jobRole}</p>
                    <div class="mb-5">
                        <p class="text-xs text-gray-500 space-x-2"><span class="job-place">${interview.jobPlace}</span>• <span class="job-time">${interview.jobTime}</span>• <span class="salary">${interview.salary}</span></p>
                    </div>
                    <p class="status w-fit rounded-md px-3 py-2 mb-2  bg-green-100 text-green-700">${interview.status}</p>
                    <p class="notes text-xs text-black mb-5">${interview.notes}</p>
                    <div class="flex gap-2">
                        <button class="interview-btn px-3 py-2 border-2 border-green-500 rounded-md text-green-500 font-semibold cursor-pointer">Interview</button>
                        <button class="rejected-btn px-3 py-2 border-2 border-red-500 rounded-md text-red-500 font-semibold cursor-pointer">Rejected</button>
                    </div>
                </div>
                <div class="card-right delete-btn border border-gray-400 rounded-full h-11 w-11 flex justify-center items-center cursor-pointer">
                    <img src="assets/delete.png" alt="">
                </div>
            </div>
        `
        filteredSection.appendChild(div);
    }
}

function renderRejectedList(){
    filteredSection.innerHTML = "";
    if (rejectedList.length === 0) {
        innerFilter.classList.remove("hidden");
        filteredSection.appendChild(innerFilter);
    }
    for(let rejected of rejectedList){
        let div = document.createElement("div");
        div.className = "card mb-4 bg-white flex justify-between rounded-md";
        div.innerHTML = `
            <div class="card hover:border w-full bg-white p-6 flex justify-between rounded-md">
                <div class="card-left">
                    <h2 class="job-title text-lg font-bold mb-1">${rejected.jobTitle}</h2>
                    <p class="job-role text-sm text-gray-500 mb-5">${rejected.jobRole}</p>
                    <div class="mb-5">
                        <p class="text-xs text-gray-500 space-x-2"><span class="job-place">${rejected.jobPlace}</span>• <span class="job-time">${rejected.jobTime}</span>• <span class="salary">${rejected.salary}</span></p>
                    </div>
                    <p class="status w-fit rounded-md px-3 py-2 mb-2 bg-gray-100 text-red-700">${rejected.status}</p>
                    <p class="notes text-xs text-black mb-5">${rejected.notes}</p>
                    <div class="flex gap-2">
                        <button class="interview-btn px-3 py-2 border-2 border-green-500 rounded-md text-green-500 font-semibold cursor-pointer">Interview</button>
                        <button class="rejected-btn px-3 py-2 border-2 border-red-500 rounded-md text-red-500 font-semibold cursor-pointer">Rejected</button>
                    </div>
                </div>
                <div class="card-right delete-btn border border-gray-400 rounded-full h-11 w-11 flex justify-center items-center cursor-pointer">
                    <img src="assets/delete.png" alt="">
                </div>
            </div>
        `
        filteredSection.appendChild(div);
    }
}

function updateFilterJobCount() {
    if(currentStatus === "interview-filter-btn") {
        filterJobCount.innerText = `${interviewList.length} of ${cardContainer.children.length} jobs`;
    } else if(currentStatus === "rejected-filter-btn") {
        filterJobCount.innerText = `${rejectedList.length} of ${cardContainer.children.length} jobs`;
    } else {
        filterJobCount.innerText = `${cardContainer.children.length} jobs`;
    }
}