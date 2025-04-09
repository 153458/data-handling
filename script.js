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



