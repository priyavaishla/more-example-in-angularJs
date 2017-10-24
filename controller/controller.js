app.controller("mycontroller",function($scope){
$scope.typing="hello priyanka";
$scope.submit=function(){
    document.write("Data is submitted"+" "+$scope.typing);
}
 var employess=[
        {name:"amit",address:"delhi",likes:0,dislikes:0},
         {name:"sumit",address:"gurgaon",likes:0,dislikes:0},
         {name:"priyanka",address:"banglore",likes:0,dislikes:0},
         {name:"shilpa",address:"hudaii",likes:0,dislikes:0} 
    ]
    $scope.employess=employess;
     $scope.likesinc = function(employe){
      employe.likes++; 
   },
     $scope.dislikesinc = function(employe){
      employe.dislikes++; 
   }
     $scope.uptolimit=4;
/*var employes=[
{name:"sam",address:"berlin",dateofbirth:new Date("December 23,1998"),salary:555000.79,likes:0,dislikes:0},   
{name:"kudvekant",address:"austria",dateofbirth:new Date("november18,1995"),salary:67585.78,likes:0,dislikes:0},
{name:"salman",address:"ameraica",dateofbirth:new Date("january 17,1768"),salary:56000.0,likes:0,dislikes:0},
{name:"harryh",address:"brazil",dateofbirth:new Date("march 16,1990"),salary:868687.97,likes:0,dislikes:0},
{name:"sahlvin",address:"china",dateofbirth:new Date("october 18,1889"),salary:46645.505,likes:0,dislikes:0}

];   
 $scope.employes=employes;*/
    
    
});