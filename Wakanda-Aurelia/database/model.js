/**
 * Example how to create dataclasses with the model API
 */
 
model.Company = new DataClass('CompanyCollection');
//model.Company = new DataClass('Companies');
model.Company.ID = new Attribute('storage', 'long', 'key auto');
model.Company.name = new Attribute('storage', 'string', 'b-tree');
model.Company.allEmployees = new Attribute('relatedEntities', 'EmployeeCollection', 'company',{reversePath:true});
 
//Creating the Person class
model.Person = new DataClass("PersonCollection");
//model.Person = new DataClass("People");
model.Person.ID = new Attribute("storage", "long", "key auto");
model.Person.firstName = new Attribute("storage", "string", "btree");
model.Person.lastName = new Attribute("storage", "string", "btree");
model.Person.fullName = new Attribute("calculated", "string");
 
//Creating the derived Employee class
model.Employee = new DataClass ("EmployeeCollection", "public", "Person");
//model.Employee = new DataClass ("Employees", "public", "Person");
model.Employee.hireDate = new Attribute("storage", "date",{simpleDate:false}); // adding specific attributes to the derived class
model.Employee.accessLevel = new Attribute("storage", "long");
model.Employee.salary = new Attribute("storage", "number");
model.Employee.company = new Attribute('relatedEntity', 'Company', 'Company');
model.Employee.companyName = new Attribute('alias', 'string', 'company.name');

//onGet for the calculated atttibute
model.Person.fullName.onGet = function () {
    return this.firstName + ' ' + this.lastName;
}

model.Employee.events.validate = function (event) {
	if(this.hireDate !== '' && this.hireDate !== null && this.hireDate instanceof Date !== true){
		this.hireDate = new Date(this.hireDate);
		
		if(this.hireDate instanceof Date !== true){
			return {error:12, errorMessage:'The hireDate is not a valid date.'}
		}
	}
};