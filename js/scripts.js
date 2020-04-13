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
      removeErrorMessages()
      celebrityArray.forEach(function(celebrity){
        $("div.celebrityimg."+ celebrity[0]).hide();
        $("div.celebrityimg."+ celebrity[1]).hide();
      });
    }

    function validateRadios(){
      
      var noUnchecked = true;
      $(".question").each(function(name){
        var isChecked = false;
        
        $(this).find("input").each(function(){
          if ($(this).is(':checked')){
            isChecked = true;
          } 
        })
       
        if(isChecked == false){
          $(this).closest(".question").addClass("has-error");
          $(this).closest(".question").children("h1").addClass("help-block");
          noUnchecked = false;
          $(this).closest(".question").append("<span class='help-block'>Please make a selection</span>")
        } 
      })
      return noUnchecked;
    }

    function removeErrorMessages(){
      $("div.question").removeClass("has-error")
      $(".help-block").removeClass("help-block");
      $("span.help-block").remove();
    }
  });
});