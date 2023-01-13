
fetch('https:kontests.net/api/v1/sites')
.then(response=>response.json())
.then(data=>{
  console.log(data);
  const contests=data;
  const container=document.getElementById('user-select');
  contests.forEach(contest=>{
    const contestName=document.createElement('option');
    contestName.value=contest[1];
    contestName.innerHTML=contest[0];
    container.appendChild(contestName);
  })
}).catch(error=>{console.log(error);})
 function userSelect() {
  var select = document.getElementById("user-select");
  var selectedOption = select.options[select.selectedIndex];
  var currentValue = selectedOption.value;
  var currentContext=selectedOption.innerHTML;
  console.log("The current value of the selected option is: " + currentContext);
  // do something with the selected option
  fetch(`https://kontests.net/api/v1/${currentValue}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const contests=data;
    if(contests.length > 0) {
    const info=document.getElementById('info');
    info.textContent=`Here Are Some Details About Upcoming ${currentContext} Contests`
    const container = document.querySelector('.contest-container');
    container.innerHTML="";
    container.innerHTML+=
    `<div class="heading">
    <div class="contest-name">
        <h3>Name</h3>
    </div>
    <div class="contest-Date">
        <h3>Date</h3>
    </div>
    <div class="contest-starttime">
        <h3>Start Time</h3>
    </div>
    <div class="contest-endtime">
        <h3>End Time</h3>
    </div>
</div>
    `
    contests.forEach(contest => {
        const contestDiv = document.createElement('ul');
        contestDiv.className = 'contest';

        const contestName = document.createElement('li');
        const contesturl=contest.url;
        contestName.innerHTML =`<a href=${contesturl}>` + contest.name+ `</a>` ;
        contestDiv.appendChild(contestName);

        const start_time=contest.start_time;
        let char=(currentValue==='code_chef')?' ':'T'
        let index = start_time.indexOf(char);
        let substring = start_time.substring(0, index);
        let dateArr = substring.split("-");

        const startDate = document.createElement('li');
        startDate.textContent = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
        contestDiv.appendChild(startDate);

        const startTime = document.createElement('li');
        let startChar =(currentValue==='code_chef')?' ':'T';
        let endChar = (currentValue==='code_chef')?'U':'Z'
        let startIndex = start_time.indexOf(startChar) + 1;
        let endIndex = start_time.indexOf(endChar);
        let slice = start_time.slice(startIndex, endIndex);
        let startTimeArr=slice.split(':');
        startTime.textContent = `${startTimeArr[0]>"12"?startTimeArr[0]-"12":startTimeArr[0]}:${startTimeArr[1]} ${startTimeArr[0]>="12"?"PM":"AM"}`;
        contestDiv.appendChild(startTime);

        const endTime = document.createElement('li');
        const end_time=contest.end_time;
        startIndex = end_time.indexOf(startChar) + 1;
        endIndex = end_time.indexOf(endChar);
        slice = end_time.slice(startIndex, endIndex);
        let endTimeArr=slice.split(':');
        endTime.textContent = `${endTimeArr[0]>"12"?endTimeArr[0]-"12":endTimeArr[0]}:${endTimeArr[1]} ${endTimeArr[0]>="12"?"PM":"AM"}`;
        contestDiv.appendChild(endTime);

        container.appendChild(contestDiv);
    });
  }else{
    const info=document.getElementById('info');
    info.textContent=`No Information Available`
    const container = document.querySelector('.contest-container');
    container.innerHTML="";
  }
  })
  .catch(error => {
    const info=document.getElementById('info');
    info.textContent=`No Information Available`
    const container = document.querySelector('.contest-container');
    container.innerHTML="";
    console.log('Error:', error)});
}

  //update date
  let year = new Date().getFullYear();
  let yearElement = document.querySelector(".year");
  yearElement.textContent="Copyright @"+year; 

  