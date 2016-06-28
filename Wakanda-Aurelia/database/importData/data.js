/**
 * Example Data
 */

//var hireDate = new Date('2012',7,13,1,0,0);

//var companies = [{name:'Company 1'},{name:'Company 2'},{name:'Company 3'}];

//var employees = [{firstName:'John',lastName:'Doe',company:'Company 1',hireDate:hireDate,salary:2000},
//					{firstName:'Frederic',lastName:'Smith',company:'Company 2',hireDate:hireDate,salary:2000},
//					{firstName:'John',lastName:'Doe',company:'Company 3',hireDate:hireDate,salary:3000},
//					{firstName:'Marc',lastName:'Petit',company:'Company 2',hireDate:hireDate,salary:5000},
//					{firstName:'Arthur',lastName:'Johns',company:'Company 3',hireDate:hireDate,salary:2500},
//					{firstName:'Mike',lastName:'Sina',company:'Company 3',hireDate:hireDate,salary:2900},
//					{firstName:'Jack',lastName:'Taylor',company:'Company 1',hireDate:hireDate,salary:7800},
//					{firstName:'Simon',lastName:'Portmann',company:'Company 2',hireDate:hireDate,salary:4700}];

//var newCompany,newEmployee;

//companies.forEach(function(company){
//	newCompany = new ds.Company(company);
//	newCompany.save();
//});

//employees.forEach(function(employee){
//	newEmployee = new ds.Employee(employee);
//	newEmployee.company = ds.Company.find('name == :1',employee.company)
//	newEmployee.save();
//});

ds.Employee.all()