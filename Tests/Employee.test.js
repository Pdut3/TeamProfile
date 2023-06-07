const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should create an Employee object', () => {
    const employee = new Employee('John Doe', 1, 'johndoe@example.com');
  
    expect(employee.name).toEqual('John Doe');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('johndoe@example.com');
  });

  it('should return the name of the employee', () => {
    const employee = new Employee('John Doe', 1, 'johndoe@example.com');

    expect(employee.getName()).toEqual('John Doe');
  });

  it('should return the id of the employee', () => {
    const employee = new Employee('John Doe', 1, 'johndoe@example.com');

    expect(employee.getId()).toEqual(1);
  });

  it('should return the email of the employee', () => {
    const employee = new Employee('John Doe', 1, 'johndoe@example.com');

    expect(employee.getEmail()).toEqual('johndoe@example.com');
  });

  it('should return the role of the employee', () => {
    const employee = new Employee('John Doe', 1, 'johndoe@example.com');

    expect(employee.getRole()).toEqual('Employee');
  });
});
