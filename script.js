async function loadDepartments() {
    const response = await fetch("./employees.csv");
    const csvText = await response.text();

    const rows = csvText.trim().split(/\r?\n/).slice(1);
    const departments = [];

    for (const row of rows) {
        const [fullName, departmentName] = row.split(",");

        let department = departments.find(
            item => item.name === departmentName
        );

        if (!department) {
            department = {
                name: departmentName,
                employees: []
            };

            departments.push(department);
        }

        const [firstName, ...remainingNames] = fullName.split(" ");

        department.employees.push({
            firstName: firstName,
            lastName: remainingNames.join(" ")
        });
    }

    return departments;
}

document.addEventListener("DOMContentLoaded", async () => {
    const main = document.querySelector("main");

    document.getElementById("currentYear").textContent = new Date().getFullYear();

    const departments = await loadDepartments();

    for (const department of departments) {
        const section = document.createElement("section");
        section.className = "department";

        const heading = document.createElement("h2");
        heading.textContent = department.name;

        const employeeList = document.createElement("ul");

        for (const employee of department.employees) {
            const employeeItem = document.createElement("li");

            employeeItem.textContent =
                `${employee.firstName} ${employee.lastName}`;

            employeeList.appendChild(employeeItem);
        }

        section.appendChild(heading);
        section.appendChild(employeeList);
        main.appendChild(section);
    }
});


//  i finnaly did it