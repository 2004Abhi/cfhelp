fetch('https://kontests.net/api/v1/codeforces')
  .then(response => response.json())
  .then(data => {
    const contests=data;
    const container = document.querySelector('.contest-container');

    contests.forEach(contest => {
        const contestDiv = document.createElement('ul');
        contestDiv.className = 'contest';

        const contestName = document.createElement('li');
        contestName.textContent = contest.name;
        contestDiv.appendChild(contestName);

        const startTime = document.createElement('li');
        startTime.textContent = `Start Time: ${contest.start_time}`;
        contestDiv.appendChild(startTime);

        const endTime = document.createElement('li');
        endTime.textContent = `End Time: ${contest.end_time}`;
        contestDiv.appendChild(endTime);

        container.appendChild(contestDiv);
    });
    // Do something with the data
  })
  .catch(error => console.log('Error:', error));
  let year = new Date().getFullYear();
  let yearElement = document.querySelector(".year");
  yearElement.textContent="Copyright @"+year;