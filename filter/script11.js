var myApp=angular
                 .module("myApp",[])
				 .controller("myController",function($scope){
					var employees=[
			            {name:"Ben",gender:"male",salary:"55000",city:"London"},
			            {name:"ozan",gender:"male",salary:"65000",city:"Toronto"},
			            {name:"quan",gender:"female",salary:"35000",city:"Montreal"},
						{name:"vivian",gender:"female",salary:"58000",city:"Toronto"},
			            {name:"orhan",gender:"male",salary:"15000",city:"Vancouver"},
						{name:"jack",gender:"male",salary:"75000",city:"Toronto"},
			            {name:"sarah",gender:"female",salary:"50000",city:"Winnipeg"}
					]; 
					$scope.employees=employees;
					$scope.sortColumn="name";
				 });