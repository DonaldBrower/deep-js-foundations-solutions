"use stict";

var deepJs = defineWorkshop();

deepJs.addStudent(1, "don", false);
deepJs.addStudent(2, "bill", false);
deepJs.addStudent(3, "sandy", false);
deepJs.addStudent(4, "gino", false);
deepJs.addStudent(5, "emma", false);
deepJs.addStudent(6, "casey", false);

deepJs.enrollStudent(1);
deepJs.enrollStudent(6);

deepJs.printCurrentEnrollment();

function defineWorkshop() {
  var currentEnrollment = [],
    studentRecords = [];

  var publicApi = {
    addStudent,
    enrollStudent,
    printCurrentEnrollment,
    enrollPaidStudents,
    remindUnpaidStudents,
  };

  return publicApi;

  //**********************************
  function addStudent(id, name, paid) {
    studentRecords.push({ id, name, paid });
    // console.log(studentRecords);
  }

  function enrollStudent(id) {
    if (!currentEnrollment.includes(id)) {
      currentEnrollment.push(id);
    }
    // console.log(currentEnrollment);
  }

  function printCurrentEnrollment() {
    printRecords(currentEnrollment);
  }

  function enrollPaidStudents() {
    currentEnrollment = paidStudentsToEnroll();
  }

  function remindUnpaidStudents() {
    remindUnpaid(currentEnrollment);
  }

  //*******************************************
  function getStudentFromId(studentId) {
    return studentRecords.find(matchId);

    // *************************

    function matchId(record) {
      return record.id == studentId;
    }
  }

  function printRecords(recordIds) {
    var records = recordIds.map(getStudentFromId);

    records.sort(sortByNameAsc);

    records.forEach(printRecord);
  }

  function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  }

  function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  }

  function paidStudentsToEnroll() {
    var recordsToEnroll = studentRecords.filter(needToEnroll);

    var idsToEnroll = recordsToEnroll.map(getStudentId);

    return [...currentEnrollment, ...idsToEnroll];
  }

  function needToEnroll(record) {
    return record.paid && !currentEnrollment.includes(record.id);
  }

  function getStudentId(record) {
    return record.id;
  }

  function remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(notYetPaid);

    printRecords(unpaidIds);
  }

  function notYetPaid(studentId) {
    var record = getStudentFromId(studentId);
    return !record.paid;
  }
}

// ********************************
