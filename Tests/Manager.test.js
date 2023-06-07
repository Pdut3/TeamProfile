const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('should create a Manager object', () => {
    const manager = new Manager('Sarah Davis', 4, 'sarahdavis@example.com', 123);

    expect(manager.name).toEqual('Sarah Davis');
    expect(manager.id).toEqual(4);
    expect(manager.email).toEqual('sarahdavis@example.com');
    expect(manager.officeNumber).toEqual(123);
  });

  it('should return the office number of the manager', () => {
    const manager = new Manager('Sarah Davis', 4, 'sarahdavis@example.com', 123);

    expect(manager.getOfficeNumber()).toEqual(123);
  });

  it('should return the role of the manager', () => {
    const manager = new Manager('Sarah Davis', 4, 'sarahdavis@example.com', 123);

    expect(manager.getRole()).toEqual('Manager');
  });
});
