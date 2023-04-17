class User {
    constructor(id, name, surname, email, module_access) {
      this.id = id;
      this.name = name;
      this.surname = surname
      this.email = email;
      this.module_access = module_access;
    }
  
    getInfo() {
      return `User ID: ${this.id}, Name: ${this.name}, Surname: ${this.surname}, Email: ${this.email}, Modules: ${this.name}`;
    }
  }
  
  module.exports = User;