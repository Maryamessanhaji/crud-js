let db_students = [];

function postStudent() {
  let obj = {
    fullName: document.getElementById("fullName").value.trim(),
    groupy: document.getElementById("group").value.trim(),
    notte: document.getElementById("notte").value.trim(),
    status: "",
  };

  if (obj.notte >= 10 && obj.notte <= 12) {
    obj.status = " PASS";
  } else if (obj.notte > 12 && obj.notte <= 14) {
    obj.status = "Good";
  } else if (obj.notte > 14 && obj.notte <= 16) {
    obj.status = "Average";
  } else if (obj.notte > 16 && obj.notte <= 18) {
    obj.status = "Very Good";
  } else if (obj.notte >= 18 && obj.notte <= 20) {
    obj.status = "Excellent ";
  } else if (obj.notte >= 0 && obj.notte <= 10) {
    obj.status = " Fail";
  } else {
    obj.status = "Invalid note entered";
  }
  if (obj.notte === "" || obj.fullName === "" || obj.groupy === "") {
    alert("You must enter all required fields ");
  } else {
    db_students.push(obj);
  }
  getStudents();

  document.getElementById("fullName").value = ''
  document.getElementById("group").value = ''
  document.getElementById("notte").value = ''
}

function getStudents() {
  let i;
  let tableData = document.getElementById("tableData");
  tableData.innerHTML = "";

  for (i = 0; i < db_students.length; i++) {
    let newTr = document.createElement("tr");
    newTr.innerHTML = `
      <td>${db_students[i].fullName}</td>
      <td>${db_students[i].groupy}</td>
      <td id='status'>${db_students[i].status}</td>
       <td>
        <button onclick='updateStudent(${i})' style='  background-color: red;
        color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;'>update</button>
        <button style='  background-color: green;
        color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;' onclick='deleteStudent(${i})'>delete</button>
      </td>
    `;
    tableData.appendChild(newTr);
  }
}
function updateStudent(index) {
  document.getElementById("submitBtn").innerText = "Update Student";
  document.getElementById("submitBtn").setAttribute("onclick", `edit(${index})`)

// afficher les valeur du table in  des inputs form
  document.getElementById("fullName").value = db_students[index].fullName;
  document.getElementById("group").value = db_students[index].groupy;
  document.getElementById("notte").value = db_students[index].notte;

}
function edit(index) {
  let newFullName = document.getElementById("fullName").value
  let newgroup = document.getElementById("group").value;
  let newnotte = document.getElementById("notte").value;
  let newstatus ='';

  db_students[index].fullName = newFullName
  db_students[index].groupy = newgroup
  db_students[index].notte = newnotte




  if (newnotte>= 10 && newnotte<= 12) {
    newstatus = " PASS";
  } else if (newnotte> 12 && newnotte<= 14) {
    newstatus = "Good";
  } else if (newnotte> 14 && newnotte<= 16) {
    newstatus = "Average";
  } else if (newnotte> 16 && newnotte<= 18) {
    newstatus = "Very Good";
  } else if (newnotte>= 18 && newnotte<= 20) {
    newstatus = "Excellent ";
  } else if (newnotte>= 0 && newnotte<= 10) {
    newstatus = " Fail";
  } else {
    newstatus = "Invalid note entered";
  }
  db_students[index].status = newstatus

  getStudents()

}
function deleteStudent(index) {
  db_students.splice(index, 1);
  getStudents();
}
