const student = {
    name: "Berra Tekin",
    age: 22,
    enrolled: true,
    courses: ["Math", "English", "Technology"],
    displayInfo: function () {
      return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses.join(", ")}`;
    }
  };
  
  