//first question
function Employee(name,position,salary){
    this.name=name;
    this.position=position;
    this.salary=salary;
}
const employeesData=[
    new Employee("Selam","Accountant",80000),
    new Employee("Bisrat","Product Manager",95000),
    new Employee("Blen","Doctor",30000),
    new Employee("Million","developer",100000),
    new Employee("Veronica","Artist",200000),
];
function increaseSalary(employeesData){
    employeesData.forEach(employee => {
        if (employee.position==="developer"){
            employee.salary=employee.salary*1.1   //This increaeses by 0.1 or by 10%.
        };
        console.log(`Name:${employee.name}, Position:${employee.position},Salary:${employee.salary}`)
    });
};
increaseSalary(employeesData);

//second question
const productsObject=[
    {name:"Refrigerator",price:55000,inStock:false},
    {name:"Laptop",price:200000,inStock:true},
    {name:"Television",price:50000,inStock:false},
    {name:"Loundary Machine",price:250000,inStock:false},
    {name:"Mobile Phone",price:35000,inStock:true},
    {name:"Headset",price:5000,inStock:true}
];
 function filterProducts(productsObject){
    let productsInstock=productsObject.filter(product=>product.inStock===true);
    productsInstock.sort((a,b)=>a.price-b.price);
    return productsInstock;
 };
 console.log(filterProducts(productsObject));

//third question
const grades={
    Wunesh:[56,78,90,56,78],
    Zufan:[98,90,78,56,45],
    Bahr:[45,67,77,76,89],
    Rahwa:[45,78,98,90,56],
    Mehari:[45,67,89,90]
};
function evaluateStudents(grades){
    for(studentName in grades){
        let results=grades[studentName];
        let resultSum=results.reduce((sumAcc,scoreHolder)=>sumAcc+scoreHolder,0);
        let average=resultSum/results.length;
        console.log(`Hello ${studentName}, your average result is ${average}.`);
        if (average>70){
            console.log("Pass")
        }else{
            console.log("Fail")
        };
    };
};
evaluateStudents(grades);

//forth question
function User(username,email,isActive){
    this.username=username;
    this.email=email;
    this.isActive=isActive;
};
const arrayOfUsers=[
    new User("Birhanu","birhanuteklu@gmail.com",true),
    new User("Bahrimuz","bahrimuzdansha@gmail.com",true),
    new User("Desnet","desnetdivision@gmail.com",false),
    new User("Wedihumera","wedihumerayeak@gmail.com",true),
    new User("Eyal","eyalshre@gmail.com",false)
];
function deactivateUsers(arrayOfUsers){
    const activeUsers=[];
    arrayOfUsers.forEach(user=>{
        if (Math.random()<0.2){
            user.isActive=false;
        };
        if (user.isActive===true){
            activeUsers.push(user);
        }
    });
    console.log(activeUsers);
};
deactivateUsers(arrayOfUsers);

//fifth question
const destinations = [
    { name: "Singapore", distance: 9000, budgetRequired: 10000},
    { name: "Israel", distance: 7800, budgetRequired: 45000 },
    { name: "Imirates", distance: 8500, budgetRequired: 23000 },
    { name: "Russia", distance: 12000, budgetRequired: 78500 },
    { name: "France", distance: 10000, budgetRequired: 18000}
];
function searchDestinations(maxDistance, budget) {
    const availableDestinations = destinations.filter(destination =>
        destination.distance <= maxDistance && destination.budgetRequired <= budget
    );
    if (availableDestinations.length > 0){
       return availableDestinations
    }
    else{
      return "No destinations available under your budget and distance"
    }
   
}
const affordableDestinations = searchDestinations(1000, 2000);
console.log(searchDestinations(affordableDestinations));
