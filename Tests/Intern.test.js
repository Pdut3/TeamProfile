const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('should create an Intern object', () => {
    const intern = new Intern('Mike Johnson', 3, 'mikejohnson@example.com', 'University of XYZ');

    expect(intern.name).toEqual('Mike Johnson');
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('mikejohnson@example.com');
    expect(intern.school).toEqual('University of XYZ');
  });

  it('should return the school of the intern', () => {
    const intern = new Intern('Mike Johnson', 3, 'mikejohnson@example.com', 'University of XYZ');

    expect(intern.getSchool()).toEqual('University of XYZ');
  });

  it('should return the role of the intern', () => {
    const intern = new Intern('Mike Johnson', 3, 'mikejohnson@example.com', 'University of XYZ');

    expect(intern.getRole()).toEqual('Intern');
  });
});
