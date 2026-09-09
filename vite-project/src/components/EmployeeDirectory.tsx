import departmentData from "../data/departments.json";
import type { Department } from "../types";

const departments: Department[] = departmentData;

export function EmployeeDirectory() {
    return (
        <main>
            {departments.map((department) => (
                <section className="department" key={department.name}>
                    <h2>{department.name}</h2>

                    <ul>
                        {department.employees.map((employee) => (
                            <li
                                key={`${employee.firstName} ${employee.lastName}`}
                            >
                                {employee.firstName} {employee.lastName}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}