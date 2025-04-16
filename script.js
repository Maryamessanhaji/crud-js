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
  }
  else {
    obj.status = "Invalid note entered"
  }
  if (obj.notte === "" || obj.fullName === '' || obj.groupy === "") {
    alert('You must enter all required fields ');
  }
  else {
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
      <td>${db_students[i].status}</td>
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
  document.getElementById("fullName").value = db_students[index].fullName
  document.getElementById("group").value = db_students[index].groupy
  document.getElementById("notte").value = db_students[index].notte
  if(newFullName){
    db_students[index].fullName = newFullName

  }
getElementById()

}
function deleteStudent(index){

}
