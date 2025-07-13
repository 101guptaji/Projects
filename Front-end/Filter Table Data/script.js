const headers = ["Roll No", "Name", "Gender", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];

const attendanceData = [
    {
        rollNo: 1,
        name: "John Doe",
        gender: "Male",
        attendance: ["P", "A", "P", "P", "P", "A", "P", "P", "P", "P", "P", "A", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 2,
        name: "Jane Smith",
        gender: "Female",
        attendance: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 3,
        name: "Alice Brown",
        gender: "Female",
        attendance: ["A", "A", "P", "P", "P", "A", "P", "P", "P", "P", "P", "A", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 4,
        name: "Bob Johnson",
        gender: "Male",
        attendance: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 5,
        name: "Charlie Lee",
        gender: "Male",
        attendance: ["A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P", "A", "P", "P"]
    },
    {
        rollNo: 6,
        name: "David Kim",
        gender: "Male",
        attendance: ["P", "P", "A", "P", "P", "P", "A", "P", "P", "P", "P", "P", "A", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 7,
        name: "Eva Green",
        gender: "Female",
        attendance: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 8,
        name: "Frank White",
        gender: "Male",
        attendance: ["A", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 9,
        name: "Grace Black",
        gender: "Female",
        attendance: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    },
    {
        rollNo: 10,
        name: "Henry Blue",
        gender: "Male",
        attendance: ["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
    }
];

function showTableHead() {
    const thead = document.getElementById("tHead");
    thead.innerHTML = `
        <tr>
            ${headers.map((h) => `<th>${h}</th>`).join("")}
        </tr>
    `;
}

// this function takes target Node as first parameter, 
// array of object as second parameter, 
// boolean as third parameter
function showStudentData(parentEle, data, resultFlag = false) {
    parentEle.innerHTML = `
        ${data
            .map((s) => `
            <tr>
                <td>${s.rollNo}</td>
                <td>${s.name}</td>
                <td>${s.gender}</td>
                ${resultFlag
                        ? `<td>${s.percentage}</td>`
                        : s.attendance.map((a) => `
                            <td>${a}</td>
                        `).join("")
                }
            </tr> 
        `).join("")}
    `;
}

showTableHead();
showStudentData(document.getElementById("tBody"), attendanceData);

function calculateAttendanceLessThan75Per() {
    // below array is used to store the student's data as an object, who is having Attendance < 75%
    let student = [];

    for (let st of attendanceData) {
        let totalP = st.attendance.filter(x => x === 'P').length;
        let total = st.attendance.length;
        let percentage = Math.round((totalP * 100) / total);

        if (percentage < 75) {
            student.push({
                name: st.name,
                rollNo: st.rollNo,
                gender: st.gender,
                percentage
            })
        }
    }

    // console.log(student)

    // invokes showStudentData method to show the student's data having Attendance < 75%
    showStudentData(document.getElementById("resultTBody"), student, true);
}

document.getElementById('btn').textContent = 'Calculate & Display';