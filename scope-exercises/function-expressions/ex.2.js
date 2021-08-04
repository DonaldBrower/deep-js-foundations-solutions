var printRecords = (recordIds) => {
  var records = [];

  recordIds.forEach((id, idx) => {
    var record = studentRecords.find((record) => {
      if (record.id === id) {
        return true;
      }
    });

    if (record) {
      records.push(record);
    }
  });

  records.forEach((record) => {
    console.log(
      `${record.name} (${record.id}): ${
        record.paid === true ? "Paid" : "Not Paid"
      }`
    );
  });

  return records;
};

var paidStudentsToEnroll = () => {
  var returnEnrolled = currentEnrollment;
  studentRecords.forEach((record) => {
    if (record.paid === true && returnEnrolled.includes(record.id) === false) {
      returnEnrolled.push(record.id);
    }
  });
  return returnEnrolled;
};

var remindUnpaid = (recordIds) => {
  // TODO
  var unpaidList = studentRecords
    .filter((record) => {
      return record.paid === false;
    })
    .map((record) => {
      return record.id;
    });

  printRecords(unpaidList);
};

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
