fetch('https://kontests.net/api/v1/codeforces')
  .then(response => response.json())
  .then(data => {
    const contests=data;
    const container = document.querySelector('.contest-container');

    contests.forEach(contest => {
        const contestDiv = document.createElement('ul');
        contestDiv.className = 'contest';

        const contestName = document.createElement('li');
        const contesturl=contest.url;
        contestName.innerHTML =`<a href=${contesturl}>` + contest.name+ `</a>` ;
        contestDiv.appendChild(contestName);

        const start_time=contest.start_time;
        let char='T'
        let index = start_time.indexOf(char);
        let substring = start_time.substring(0, index);
        let dateArr = substring.split("-");

        const startDate = document.createElement('li');
        startDate.textContent = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
        contestDiv.appendChild(startDate);

        const startTime = document.createElement('li');
        let startChar = "T";
        let endChar = "Z";
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
    // Do something with the data
  })
  .catch(error => console.log('Error:', error));
  let year = new Date().getFullYear();
  let yearElement = document.querySelector(".year");
  yearElement.textContent="Copyright @"+year;