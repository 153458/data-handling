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