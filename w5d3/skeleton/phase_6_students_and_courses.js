
function Student(firstName, lastName) {
  
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
  
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`
}

Student.prototype.enroll = function(course) {
  
  if(!this.courses.includes(course)) {
    this.courses.push(course);
  }
  
}

Student.prototype.courseLoad = function() {
  let courseCredits = {};
  
  this.courses.forEach((course)=> {
    if(Object.keys(courseCredits).includes(course.department)) {
      courseCredits[course.department] += course.credits
    } else {
      courseCredits[course.department] = course.credits
    }
  })
  return courseCredits
}

function Course(name, department, credits) {
  
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  
}

Course.prototype.addStudent = function(student) {
  
  student.enroll(this)
}