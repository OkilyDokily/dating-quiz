$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    
    var celebrityArray = [["bradpitt","milakunis",0]["leonardodicaprio","jessicaalba",0],["mattdamon","natalieportman",0]];
    var nameArray = ["dog","candy","saturday","vacation","console"];
    for(var i = 0; i < nameArray.length; i++){
      for(var j = 0; j < celebrityArray.length; j++){
        if(
          $("input[name=" + nameArray[i] + "]"+":checked").hasClass(celebrityArray[j][0]) &&
          $("input[name=" + item + "]"+":checked").hasClass(celebrityArray[j][1])
          )
          {
            celebrityArray[j][2]++;
          }   
      }
    }
       
        
    });
    console.log(celebrityArray)
    var mapToNumber = celebrityArray.map(item => item[2]);
    var highest = Math.max(...mapToNumber);
    var filteredCelebrities = celebrityArray.filter(function(celebrity){
      celebrity[2] === highest; 
    });
    
    filteredCelebrities.forEach(function(celebrity){
        $("div.celebritydiv."+ celebrity[0]).show();
        $("div.celebritydiv."+ celebrity[1]).show();
    });
  });
});