$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    var celebrityArray = [["bradpitt","milakunis",0]["leonardodicaprio","jessicaalba",0],["mattdamon","natalieportman",0]];
    var nameArray = ["dog","candy","saturday","vacation","console"];
    nameArray.forEach(function(item){
      celebrityArray.forEach(function(celebrity)){
        if(
        $("input[name=" + item + "]"+":checked").hasClass(celebrity[0]) &&
        $("input[name=" + item + "]"+":checked").hasClass(celebrity[1]))
        {
          celebrity[2]++;
        }
      }
        
    })
    var mapToNumber = celebrityArray.map(item => item[2]);
    var highest = Math.max(...mapToNumber);
    var filteredCelebrities = celebrityArray.filter(function(celebrity){
      celebrity[2] === highest; 
    });
    
    filteredCelebrities.forEach(function(celebrity){
        $("div.celebritydiv."+ celebrity[0]).show();
        $("div.celebritydiv."+ celebrity[1]).show();
    });
  })
});