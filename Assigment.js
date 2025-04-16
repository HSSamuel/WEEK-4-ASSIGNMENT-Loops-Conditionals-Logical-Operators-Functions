// 1. Function to check if a student passed based on score
function checkPass(score) {
  return score >= 180 ? "Passed" : "Failed";
}

// 2. Function to check if a person is eligible to vote
function checkVoteEligibility(age) {
  return age >= 18 ? "You are eligible to vote" : "Not eligible";
}

// 3. Function to grade based on score
function gradeStudent(name, score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Fail";
  }
}

// 4. Function to check if access is granted based on ID and age
function checkAccess(hasID, isAbove18) {
  return hasID && isAbove18 ? "Access granted" : "Access denied";
}

// 5. Loop through an array of student scores and print pass or fail
function checkStudentScores(scores) {
  for (let score of scores) {
    console.log(score > 50 ? "Pass" : "Fail");
  }
}

// 6. Arrow function to check if a student passed both Math and English
const checkSubjectsPassed = (mathScore, englishScore) =>
  mathScore >= 50 && englishScore >= 50 ? "Yes" : "No";

// 7. Function to check if a user has either email or phone number
function checkSignup(user) {
  return user.email || user.phone
    ? "Sign up successful"
    : "Please provide either an email or phone number";
}

// 8. Function to check if username or password is empty
function checkValidInput(username, password) {
  return !username || !password ? "Invalid input" : "Valid input";
}

// 9. Function to check full-time or part-time based on hours worked
function checkWorkStatus(hoursWorked) {
  return hoursWorked >= 40 ? "Full-time" : "Part-time";
}

// 10. Arrow function to return the larger of two numbers
const getLargerNumber = (num1, num2) => (num1 > num2 ? num1 : num2);
