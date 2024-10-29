const employees = [
    {
        id: 1,
        name: 'Employee-1',
        languages: ["Javascript : 80%", "Java : 20%"],
        email: 'employee1@example.com', businessUnit: 'BU-1',
        projects: [
            {
                name: 'Project 1',
                contribution: 20,
                linesChanged: 100,
                commits: 5,
                firstCommit: '2022-01-01',
                lastCommit: '2022-01-31',
                languages: [
                    { name: 'JavaScript', value: 50 },
                    { name: 'HTML', value: 30 },
                    { name: 'CSS', value: 20 },
                ],
                otherContributors: [
                    { name: 'Employee-4', empId: 2, contribution: 30 },
                    { name: 'Employee-5', empId: 3, contribution: 50 },
                ],
            },
            {
                name: 'Project 2',
                contribution: 30,
                linesChanged: 200,
                commits: 10,
                firstCommit: '2022-02-01',
                lastCommit: '2022-02-28',
                languages: [
                    { name: 'Java', value: 60 },
                    { name: 'Python', value: 40 },
                ],
                otherContributors: [
                    { name: 'Employee-2', empId: 4, contribution: 20 },
                    { name: 'Employee-3', empId: 5, contribution: 50 },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Employee-4',
        email: 'employee4@example.com', businessUnit: 'BU-3',
        languages: ["Javascript : 80%", "Java : 20%"],
        projects: [
            {
                name: 'Project 3',
                contribution: 25,
                linesChanged: 150,
                commits: 7,
                firstCommit: '2022-03-01',
                lastCommit: '2022-03-31',
                languages: [
                    { name: 'C++', value: 70 },
                    { name: 'C#', value: 30 },
                ],
                otherContributors: [
                    { name: 'Employee-6', empId: 8, contribution: 25 },
                    { name: 'Employee-7', empId: 9, contribution: 40 },
                ],
            },
            {
                name: 'Project 4',
                contribution: 35,
                linesChanged: 250,
                commits: 12,
                firstCommit: '2022-04-01',
                lastCommit: '2022-04-30',
                languages: [
                    { name: 'Ruby', value: 55 },
                    { name: 'Swift', value: 45 },
                ],
                otherContributors: [
                    { name: 'Employee-2', empId: 4, contribution: 20 },
                    { name: 'Employee-3', empId: 5, contribution: 50 },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Employee-5',
        email: 'employee5@example.com', businessUnit: 'BU-4',
        languages: ["Javascript : 80%", "Java : 20%"],
        projects: [
            {
                name: 'Project 5',
                contribution: 20,
                linesChanged: 120,
                commits: 6,
                firstCommit: '2022-05-01',
                lastCommit: '2022-05-31',
                languages: [
                    { name: 'PHP', value: 65 },
                    { name: 'Perl', value: 35 },
                ],
                otherContributors: [
                    { name: 'Employee-6', empId: 8, contribution: 25 },
                    { name: 'Employee-7', empId: 9, contribution: 40 },
                ],
            },
            {
                name: 'Project 6',
                contribution: 30,
                linesChanged: 220,
                commits: 11,
                firstCommit: '2022-06-01',
                lastCommit: '2022-06-30',
                languages: [
                    { name: 'Go', value: 50 },
                    { name: 'Rust', value: 50 },
                ],
                otherContributors: [
                    { name: 'Employee-2', empId: 4, contribution: 20 },
                    { name: 'Employee-3', empId: 5, contribution: 50 },
                ],
            },
        ],
    },
    {
        id: 4,
        name: 'Employee-2',
        email: 'employee2@example.com', businessUnit: 'BU-2',
        languages: ["Javascript : 80%", "Java : 20%"],
        projects: [
            {
                name: 'Project 7',
                contribution: 25,
                linesChanged: 180,
                commits: 8,
                firstCommit: '2022-07-01',
                lastCommit: '2022-07-31',
                languages: [
                    { name: 'Kotlin', value: 60 },
                    { name: 'Scala', value: 40 },
                ],
                otherContributors: [
                    { name: 'Employee-2', empId: 4, contribution: 20 },
                    { name: 'Employee-3', empId: 5, contribution: 50 },
                ],
            },
            {
                name: 'Project 8',
                contribution: 35,
                linesChanged: 280,
                commits: 13,
                firstCommit: '2022-08-01',
                lastCommit: '2022-08-31',
                languages: [
                    { name: 'Haskell', value: 55 },
                    { name: 'Lisp', value: 45 },
                ],
                otherContributors: [
                    { name: 'Employee-4', empId: 2, contribution: 30 },
                    { name: 'Employee-5', empId: 3, contribution: 50 },
                ],
            },
        ],
    },
    {
        id: 5,
        name: 'Employee-3',
        email: 'employee3@example.com', businessUnit: 'BU-5',
        languages: ["Javascript : 80%", "Java : 20%"],
        projects: [
            {
                name: 'Project 9',
                contribution: 20,
                linesChanged: 140,
                commits: 7,
                firstCommit: '2022-09-01',
                lastCommit: '2022-09-30',
                languages: [
                    { name: 'TypeScript', value: 65 },
                    { name: 'CoffeeScript', value: 35 },
                ],
                otherContributors: [
                    { name: 'Employee-4', empId: 2, contribution: 30 },
                    { name: 'Employee-5', empId: 3, contribution: 50 },
                ],
            },
            {
                name: 'Project 10',
                contribution: 30,
                linesChanged: 240,
                commits: 12,
                firstCommit: '2022-10-01',
                lastCommit: '2022-10-31',
                languages: [
                    { name: 'Julia', value: 50 },
                    { name: 'MATLAB', value: 50 },
                ],
                otherContributors: [
                    { name: 'Employee-2', empId: 4, contribution: 20 },
                    { name: 'Employee-3', empId: 5, contribution: 50 },
                ],
            },
        ],
    },
    {
        id: 6,
        name: 'Emily Davis',
        email: 'emily@example.com', businessUnit: 'BU-6',
        languages: ["Javascript : 80%", "Java : 20%"],
        projects: [
            {
                name: 'Project 11',
                contribution: 25,
                linesChanged: 160,
                commits: 8,
                firstCommit: '2022-11-01',
                lastCommit: '2022-11-30',
                languages: [
                    { name: 'R', value: 60 },
                    { name: 'SQL', value: 40 },
                ],
                otherContributors: [
                    { name: 'Employee-2', empId: 4, contribution: 20 },
                    { name: 'Employee-3', empId: 5, contribution: 50 },
                ],
            },
            {
                name: 'Project 12',
                contribution: 35,
                linesChanged: 260,
                commits: 13,
                firstCommit: '2022-12-01',
                lastCommit: '2022-12-31',
                languages: [
                    { name: 'Assembly', value: 55 },
                    { name: 'Bash', value: 45 },
                ],
                otherContributors: [
                    { name: 'Employee-4', empId: 2, contribution: 30 },
                    { name: 'Employee-5', empId: 3, contribution: 50 },
                ],
            },
        ],
    },
];

// create table rows
const tableBody = document.querySelector("#employee-table tbody");
employees.forEach((employee) => {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.businessUnit}</td>
        <td>${employee.languages.join(", ")}</td>
        <td><button class="action-button">+</button></td>
    `;
  tableBody.appendChild(row);
});

// const actionButtons = document.querySelectorAll(".action-button");
// actionButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // get employee data
//     const employeeId = button.parentNode.parentNode.cells[0].textContent;
//     const employee = employees.find((e) => e.id == employeeId);

//     // show modal
//     const modal = document.getElementById("employee-modal");
//     modal.style.display = "block";

//     // update modal content
//     const employeeName = document.getElementById("employee-name");
//     employeeName.textContent = employee.name;

//     const languageChart = document.getElementById('language-chart');
//     languageChart.innerHTML = '<canvas id="chart-canvas"></canvas>';
//     const chartData = employee.languages.map((language) => {
//         const [lang, percentage] = language.split(' : ');
//         return { label: lang, value: parseInt(percentage) };
//     });
//     const ctx = document.getElementById('chart-canvas').getContext('2d');
//     const chart = new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: chartData.map((d) => d.label),
//             datasets: [{
//                 data: chartData.map((d) => d.value),
//                 backgroundColor: chartData.map((d, i) => `hsl(${i * 360 / chartData.length}, 100%, 50%)`),
//             }],
//         },
//         options: {
//             legend: {
//                 display: true,
//             },
//         },
//     });
//   });
// });

// script.js
// ... 
// add event listeners to action buttons
const actionButtons = document.querySelectorAll('.action-button');
actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // get employee data
        const employeeId = button.parentNode.parentNode.cells[0].textContent;
        const employee = employees.find((e) => e.id == employeeId);

        // show modal
        const modal = document.getElementById('employee-modal');
        modal.style.display = 'block';

        // update modal content
        const employeeName = document.getElementById('employee-name');
        employeeName.textContent = employee.name;

        // create project dropdown
        const projectDropdown = document.getElementById('project-dropdown');
        projectDropdown.innerHTML = '';
        employee.projects.forEach((project) => {
            const option = document.createElement('option');
            option.value = project.name;
            option.textContent = project.name;
            projectDropdown.appendChild(option);
        });

        // function to update project details and contributors
        function updateProjectDetails(project) {
            const projectDetails = document.getElementById('project-details');
            projectDetails.innerHTML = `
                <p>Contribution: ${project.contribution}%</p>
                <p>Number of lines changed: ${project.linesChanged}</p>
                <p>Number of commits: ${project.commits}</p>
                <p>Date of first commit: ${project.firstCommit}</p>
                <p>Date of last commit: ${project.lastCommit}</p>
            `;

            const otherContributorsTable = `
                <h3>Other Contributors:</h3>
                <table id="other-contributors">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Emp Id</th>
                            <th>Contribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${project.otherContributors.map(contributor => `
                            <tr>
                                <td>${contributor.name}</td>
                                <td>${contributor.empId}</td>
                                <td>${contributor.contribution}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
            projectDetails.innerHTML += `<h3>Other Contributors:</h3>${otherContributorsTable}`;
        }

        // initial project details
        const project = employee.projects[0];
        updateProjectDetails(project);

        // create language chart
        const languageChart = document.getElementById('language-chart');
        languageChart.innerHTML = '<canvas id="chart-canvas"></canvas>';
        const chartData = project.languages.map((language) => ({ label: language.name, value: language.value }));
        const ctx = document.getElementById('chart-canvas').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: chartData.map((d) => d.label),
                datasets: [{
                    data: chartData.map((d) => d.value),
                    backgroundColor: chartData.map((d, i) => `hsl(${i * 360 / chartData.length}, 100%, 50%)`),
                }],
            },
            options: {
                legend: {
                    display: true,
                },
            },
        });

        // add event listener to project dropdown
        projectDropdown.addEventListener('change', () => {
            const selectedProject = employee.projects.find((p) => p.name === projectDropdown.value);
            updateProjectDetails(selectedProject);
            const selectedChartData = selectedProject.languages.map((language) => ({ label: language.name, value: language.value }));
            chart.data.labels = selectedChartData.map((d) => d.label);
            chart.data.datasets[0].data = selectedChartData.map((d) => d.value);
            chart.data.datasets[0].backgroundColor = selectedChartData.map((d, i) => `hsl(${i * 360 / selectedChartData.length}, 100%, 50%)`);
            chart.update();
        });
    });
});
// add event listener to close button
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  const modal = document.getElementById("employee-modal");
  modal.style.display = "none";
});
