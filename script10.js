var myApp=angular
                 .module("myApp",[])
				 .controller("myController",function($scope){
					var employees=[
			            {name:"Ben",dateOfBirth: new Date("November 17,1986"),gender:"male",salary:"55000"},
			            {name:"ozan",dateOfBirth: new Date("October 05,1985"),gender:"male",salary:"65000"},
			            {name:"quan",dateOfBirth: new Date("February 13,1987"),gender:"female",salary:"35000"},
			            {name:"orhan",dateOfBirth: new Date("September 02,1995"),gender:"male",salary:"15000"},
			            {name:"sarah",dateOfBirth: new Date("May 15,1979"),gender:"female",salary:"50000"}
					]; 
					$scope.employees=employees;
					$scope.sortColumn="name";
				 });