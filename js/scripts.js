//business logic
var celebrityArray = [["bradpitt","milakunis",0],["leonardodicaprio","jessicaalba",0],["mattdamon","natalieportman",0]];

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

function scoreCelebrities(classArray){
  classArray.forEach(function(item){
    var classToArray = item.split(" ");
    for(i = 0; i < celebrityArray.length; i++){
        if(celebrityArray[i].includes(classToArray[0]) &&
          celebrityArray[i].includes(classToArray[1]))
          {
            celebrityArray[i][2]++;
          }
    };
  });
}

$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    if(!validateRadios()){
      return;
    }
    hide();
    
    var classArray = [];
    $("input:checked").each(function(){
      var classNames = $(this).attr('class');
      classArray.push(classNames);
    });
    scoreCelebrities(classArray);

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

    function validateRadios(){
      var names = ["dog","candy","saturday","vacation","console"];
      var noUnchecked = true;
      names.forEach(function(name){
        var isChecked = false;
        $("input[name=" +name + "]").each(function(){
          if ($(this).is(':checked')){
            isChecked = true;
          }
        });
        if(isChecked == false){
          $("." + name).addClass("error");
          noUnchecked = false;
        }
        
      })
      return noUnchecked;
    }
  });
});