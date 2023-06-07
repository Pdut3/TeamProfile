const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should create an Engineer object', () => {
    const engineer = new Engineer('Jane Smith', 2, 'janesmith@example.com', 'janesmith');

    expect(engineer.name).toEqual('Jane Smith');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual('janesmith@example.com');
    expect(engineer.github).toEqual('janesmith');
  });

  it('should return the GitHub username of the engineer', () => {
    const engineer = new Engineer('Jane Smith', 2, 'janesmith@example.com', 'janesmith');

    expect(engineer.getGithub()).toEqual('janesmith');
  });

  it('should return the role of the engineer', () => {
    const engineer = new Engineer('Jane Smith', 2, 'janesmith@example.com', 'janesmith');

    expect(engineer.getRole()).toEqual('Engineer');
  });
});
