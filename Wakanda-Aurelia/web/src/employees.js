// This is the ES6 way. There is a bug so I use the normal html loader and not the System.js one
//import WakandaClient from 'wakanda-client';
//var wakanda = new WakandaClient();

var wakanda = new WakandaClient.WakandaClient(); //It will reach server on /rest address, you can pass an URI if you want to reach a specific server

/**
 * Lets write the so called "class" in a functionnal way. Because you can do everything what a "classical" allow you.
 * You just need to know the patterns : http://javascript.crockford.com/private.html - http://javascript.crockford.com/inheritance.html
 */
export function Employees() {
	var self = this;

	self.heading = 'Edit Employees';
	self.currentEmployee = {};

//	Equivalent of the `get` statement of an ES6 class
//	Object.defineProperty(this, 'fullName', { get: function () {
//		return `${self.firstName} ${self.lastName}`;
//	}});

	self.save = function (employee) {
		employee.save().then(function(evt){
			console.log('Saved');
		});
	};

	self.getAllEmployees = function () {
		wakanda.getCatalog().then(function (ds) {
			ds.Employee.query({
				filter: 'firstName == :1',
				params: ['*']
			}).then(function (evt) {
				self.employees = evt.entities;
				self.currentEmployee = evt.entities[0];
			});
		});
	};

	self.setCurrentEmployee = function (employee) {
		self.currentEmployee = employee;
	};

	self.getAllEmployees();

	return self;
};
