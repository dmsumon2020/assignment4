function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }

  let tax = (income - expenses) * 0.2;

  return tax;
}

function sendNotification(email) {
  const indexOfEmailSign = email.indexOf("@");

  if (indexOfEmailSign === -1) {
    return "Invalid Email";
  }

  const userName = email.slice(0, indexOfEmailSign);

  const domainName = email.slice(indexOfEmailSign + 1);

  return `${userName} sent you an email from ${domainName}`;
}

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }

  for (let letter of name) {
    if (letter >= "0" && letter <= "9") {
      return true;
    }
  }

  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  let testScore = obj.testScore;

  let schoolGrade = obj.schoolGrade;

  let isFFamily = obj.isFFamily;

  isFFamily = isFFamily ? 20 : 0;

  let finalScore = testScore + schoolGrade + isFFamily;

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let sum = 0;

  for (const time of waitingTimes) {
    sum += time;
  }

  let average = Math.round(sum / waitingTimes.length);

  let remainingCandidates = serialNumber - waitingTimes.length - 1;

  let timeToWait = remainingCandidates * average;

  return timeToWait;
}
