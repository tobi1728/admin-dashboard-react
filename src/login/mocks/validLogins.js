import { employeesMock } from '../../employee/mocks/employeesMock';

export const validLogins = employeesMock.map(employee => ({
    login: `${employee.name.toLowerCase()}${employee.id}`,
    password: `${employee.surname.toLowerCase()}${employee.id}`,
    name: employee.name,
    surname: employee.surname,
    role: employee.role,
    salary: employee.salary,
    photo: employee.picture
}));
