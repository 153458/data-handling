const student = {
    name: "Berra Tekin",
    age: 22,
    enrolled: true,
    courses: ["Math", "English", "Technology"],
    displayInfo: function () {
      return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`;
    }
  };
  
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Student Info:", student.displayInfo());

const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const newStudent = JSON.parse(jsonString);
console.log("Parsed Object:", newStudent);

console.log("Is same object?", student === newStudent); 

const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [70, 92, 78, 50];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student with Graduation Year:", clonedStudent);

const newCourses = ["History", "Physics"];
const allCourses = [...student.courses, ...newCourses];
console.log("Merged Courses Array:", allCourses);

student.addCourse = function (newCourse) {
  this.courses.push(newCourse);
};

student.totalCourses = function () {
  return this.courses.length;
};

student.addCourse("Computer Science");
console.log("Courses after adding one:", student.courses);
console.log("Total Courses:", student.totalCourses());