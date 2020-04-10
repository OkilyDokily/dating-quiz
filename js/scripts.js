//business logic
var celebrityArray = [["bradpitt","milakunis",0],["leonardodicaprio","jessicaalba",0],["mattdamon","natalieportman",0]];
var nameArray = ["dog","candy","saturday","vacation","console"];

function getFilteredCelebrities(){
    var mapToNumber = celebrityArray.map(item => item[2]);
    var highest = Math.max(...mapToNumber);
    var filteredCelebrities = celebrityArray.filter(function(celebrity){
      return celebrity[2] === highest; 
    });
    return filteredCelebrities;
}

function resetValues(){
  for (i=0; i < celebrityArray.length; i++){
    celebrityArray[i][2] = 0;
  }
};

$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();

    hide();

    for(var i = 0; i < nameArray.length; i++){
      for(var j = 0; j < celebrityArray.length; j++){
        if(
          $("input[name=" + nameArray[i] + "]"+":checked").hasClass(celebrityArray[j][0]) &&
          $("input[name=" + nameArray[i] + "]"+":checked").hasClass(celebrityArray[j][1])
          )
          {
            celebrityArray[j][2]++;
          }   
      }
    }
      
    var filteredCelebrities = getFilteredCelebrities();
  
    $("#bestmatch").show();
    filteredCelebrities.forEach(function(celebrity){
        $("div.celebrityimg."+ celebrity[0]).show();
        $("div.celebrityimg."+ celebrity[1]).show();
    });

    function hide(){
      resetValues();
      celebrityArray.forEach(function(celebrity){
        $("div.celebrityimg."+ celebrity[0]).hide();
        $("div.celebrityimg."+ celebrity[1]).hide();
    });
    }
  });
});