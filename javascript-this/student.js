/* exported student */

var student = {
  firstName: 'Douglas',
  lastName: 'Crockford',
  subject: 'JavaScript',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction:function () {
    return `Hello, my name is `+this.firstName+` `+this.lastName+` and I am studying `+this.subject+`.`;
  }
}

function Student() {
  this.firstName;
  this.lastName;
  this.getIntroduction;
}