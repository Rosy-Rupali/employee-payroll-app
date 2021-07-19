/**
 * UC 4 Using Template Literals in the employee payroll details
 */
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let employeePayrollData = createEmployeePayrollJSON[0];
    const innerHtml = `${headerHtml}
    <tr>
    <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>${getDeptHtml(employeePayrollData._department)}</td>
    <td>${employeePayrollData._salary}/td>
    <td>${employeePayrollData._startDate}</td>
    <td>
        <img src="../assets/assets/icons/delete-black-18dp.svg" alt="delete" name="${employeePayrollData._id}" onclick="remove(this)">
        <img src="../assets/assets/icons/create-black-18dp.svg" alt="edit" name="${employeePayrollData._id}" onclick="update(this)">
    </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name : 'Anshul Singh',
            _gender : 'male',
            _department : [
                'Engineering',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'D:\RFP\EmployeePayrollApp\assets\assets\profile-images\Ellipse -2.png'
        },
        {
            _name : 'Aparna Shekhar',
            _gender : 'female',
            _department : [
                'Sales',
            ],
            _salary: '350000',
            _startDate: '12 June 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'D:\RFP\EmployeePayrollApp\assets\assets\profile-images\Ellipse -1.png'   
        }
    ];
    return employeePayrollListLocal;
}