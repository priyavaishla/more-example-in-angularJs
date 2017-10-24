app.controller("pricontroller",function($scope){

var employes=[
    {name:"priynka",address:"delhi",dateofbirth:new Date("september10,1994"),designation:"software tester",pic:"../images/one.jpg",likes:0,dislikes:0,salary:5500.89},
    {name:"sumitra",address:"newyork",dateofbirth:new Date("December 18,1989"),designation:"front-end developer",pic:"../images/two.jpg",likes:0,dislikes:0,salary:5900.00},
    {name:"harry",address:"berlin",dateofbirth:new Date("october 28,1990"),designation:"UI developer",pic:"../images/three.jpg",likes:0,dislikes:0,salary:4500.23},
    {name:"sam",address:"america",dateofbirth:new Date("march 19,1984"),designation:"software enginner",pic:"../images/one.jpg",likes:0,dislikes:0,salary:3506.91},
    {name:"james",address:"banglore",dateofbirth:new Date("july 22,1991"),designation:"java developer",pic:"../images/two.jpg",likes:0,dislikes:0,salary:7500.89},
    {name:"marton",address:"pune",dateofbirth:new Date("june 30,1992"),designation:"php developer",pic:"../images/three.jpg",likes:0,dislikes:0,salary:6700.43}
];
    $scope.employes=employes;
    $scope.rowlimit=3;
    $scope.sotingcolom="name";
    $scope.likes=function(emp){
        emp.likes++;
    },
    $scope.dislikes=function(emp){
        emp.dislikes++;
    }
});