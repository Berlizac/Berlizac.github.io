$(function(){
    question1();
});

var question1 = function(){
  
  //UPDATING GRAPHICS
  $("div.narrative, span.q1").html("Are you ready?");
  $(".q1").show();
  $(".buttons").html("<button class='btn btn-warning q1-yes'> YES </button>");
  $(".buttons").append("<button class='btn btn-warning q1-no'> NO </button>");
  $(".images").html("<img src='images.jpg'>");
  //MAKE IT WORK
  $(".q1-yes").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("YES").show();
      //Run Question 2
      $(".images").html("<img src'thumbs-up.png'>")
      question2();
    });
   $(".q1-no").click(function(){
      
      //Update Sidebar
      $(".q1-choice").html("NO").show();
      //Run Question 2
      $(".narrative").html("This is not for you");
      $(".images").html("<img src='exit.png'>");
      $(".buttons").hide();
    });
  
};

var question2 = function(){
  
  //UPDATE GRAPHICS
  $("div.narrative, span.q2").html("What weapon do you want?");
  $(".q2").show();
  $(".buttons").html("<button class='btn btn-warning q2-sword'>SWORD</button>");
  $(".buttons").append("<button class='btn btn-warning q2-knife'>KNIFE</button>");
  $(".buttons").append("<button class='btn btn-warning q2-fish'>FISH</button>");
  $(".images").html("<img src='Medieval-Weapons.gif'>");
  //MAKE IT WORK
  $(".q2-sword").click(function(){
      $(".q2-choice").html("SWORD").show();
      question3();
  });
  
  $(".q2-knife").click(function(){
      $(".q2-choice").html("KNIFE").show();
      question4();
  });
  
  $(".q2-fish").click(function(){
      $(".q2-choice").html("FISH").show();
      question5();
  });
  
};

var question3 = function(){
  
  //UPDATE GRAPHICS
  $("div.narrative, span.q3").html("Do you want to engage in combat?");
  $(".q3").show(); 
  $(".buttons").html("<button class='btn btn-warning q3-yes'>YES</button>");
  $(".buttons").append("<button class='btn btn-warning q3-no'>NO</button>");
  $(".images").html("<img src='combat3.jpg'>");
  //MAKE IT WORK 
  $(".q3-yes").click(function(){
     $(".q3-choice").html("YES"); 
     question6();
  });
    
    $(".q3-no").click(function(){
     $(".q3-choice").html("NO"); 
     $(".narrative").html("You have been eaten by the big bad bear"); 
     $(".images").html("<img src='bear.png'>");
     $(".buttons").hide();
  });
};

var question4 = function(){
  
  //UPDATE GRAPHICS 
  $("div.narrative, span.q4").html("Do you want to fight wolf?");
  $(".q4").show(); 
  $(".buttons").html("<button class='btn btn-warning q4-yes'>YES</button>");
  $(".buttons").append("<button class='btn btn-warning q4-no'>NO</button>");
  $(".images").html("<img src='wolf.png'>");
  //MAKE IT WORK 
  $(".q4-yes").click(function(){
     $(".q4-choice").html("YES");
     question7();
  }); 
  
  $(".q4-no").click(function(){
     $(".q4-choice").html("NO");
     $(".narrative").html("You have been eaten by a furious wolf");
     $(".images").html("<img src='wolf.png'>");
     $(".buttons").hide();
  }); 
};

var question5 = function(){
  
  //UPDATE GRAPHICS
  $("div.narrative, span.q5").html("What do you want to with the fish?");
  $(".q5").show(); 
  $(".buttons").html("<button class='btn btn-warning q5-eat'>EAT</button>");
  $(".buttons").append("<button class='btn btn-warning q5-save'>SAVE</button>");
  $(".buttons").append("<button class='btn btn-warning q5-givetobear'>GIVE TO BEAR</button>");
  $(".images").html("<img src='fish.jpg'>")
  //MAKE IT WORK
  $(".q5-eat").click(function(){
     $(".q5-choice").html("EAT");
     $(".narrative").html("You have died by Salmonella");
     $(".images").html("<img src='cdc2.png' alt='cdc'>");
     $(".buttons").hide();
  }); 
  
  $(".q5-save").click(function(){
     $(".q5-choice").html("SAVE");
     question8();
  }); 
  
  $(".q5-givetobear").click(function(){
      $(".q5-choice").html("GIVE TO BEAR");
      question11();
  });
};

var question6 = function(){
  
    //UPDATE GRAPHICS
  $("div.narrative, span.q6").html("You have found the master sword are you going to use it?");
  $(".q5").show(); 
  $(".buttons").html("<button class='btn btn-warning q6-yes'>YES</button>");
  $(".buttons").append("<button class='btn btn-warning q6-no'>NO</button>"); 
  $(".images").html("<img src='master-sword.png'>");
  //MAKE IT WORK 
  $(".q6-yes").click(function(){
    $(".q6-choice").html("YES");
    question9();
  });
  
   $(".q6-no").click(function(){
      $(".q6-choice").html("NO");
      $(".narrative").html("YOU HAVE RETIRED"); 
      $(".images").html("<img src='retire2.png'>")
      $(".buttons").hide();
   });
};

var question7 = function(){
    //UPDATE GRAPHICS 
  $("div.narrative, span.q7").html("You killed the wolf will you eat it?");
  $(".q7").show(); 
  $(".buttons").html("<button class='btn btn-warning q7-yes'>YES</button>");
  $(".buttons").append("<button class='btn btn-warning q7-no'>NO</button>"); 
  
  //MAKE IT WORK 
  $(".q7-yes").click(function(){
    $(".q7-choice").html("YES");
    $(".narrative").html("You have been eaten by the wolf pack");
    $(".images").html("<img src='wolfPack.png'>")
    $(".buttons").hide();
  });
  
  $(".q7-no").click(function(){
    $(".q7-choice").html("NO");
    question10(); 
  });
};

var question8 = function(){
    //UPDATE GRAPHICS
  $("div.narrative, span.q8").html("Would you like to save or eat the fish?");
  $(".q8").show(); 
  $(".buttons").html("<button class='btn btn-warning q8-save'>SAVE</button>");
  $(".buttons").append("<button class='btn btn-warning q8-eat'>EAT</button>");
  
  //MAKE IT WORK
  $(".q8-save").click(function(){
     $(".q8-choice").html("SAVE");
     $(".narrative").html("You have died by a nice hungry bear");
     $(".images").html("<img src='bear.png'>");
     $(".buttons").hide();
  });
  
  $(".q8-eat").click(function(){
     $(".q8-choice").html("EAT");
     $(".narrative").html("You have died of salmonella"); 
     $(".images").html("<img src='cdc2.png'>");
     $(".buttons").hide();
  });
};

var question9 = function(){
    //UPDATE GRAPHICS
  $("div.narrative, span.q9").html("What will you do with the master sword?");
  $(".q9").show(); 
  $(".buttons").html("<button class='btn btn-warning q9-joinarmy'>JOIN ARMY</button>");
  $(".buttons").append("<button class='btn btn-warning q9-makearmy'>MAKE ARMY</button>");
  $(".buttons").append("<button class='btn btn-warning q9-assasin'>ASSASIN</button>");
  $(".images").html("<img src='army.png'>");
  //MAKE IT WORK 
  $(".q9-joinarmy").click(function(){
     $(".q9-choice").html("JOIN ARMY"); 
     $(".narrative").html("You have died a noble hero in the battle of jordan"); 
     $(".images").html("<img src='medal.png' alt='medal'>");
     $(".buttons").hide();
  });
  
  $(".q9-makearmy").click(function(){
     $(".q9-choice").html("MAKE ARMY");
     $(".narrative").html("You have defeated the great kingdom of Jordan. YOU WIN!"); 
     $(".images").html("<img src='win_logo.png'>");
     $(".buttons").hide();
  }); 
  
  $(".q9-assasin").click(function(){
      $(".q9-choice").html("ASSASIN");
      $(".narrative").html("You have been caught by the police of Jordan");
      $(".images").html("<img src='jail.png'>");
      $(".buttons").hide();
  });
};

var question10 = function(){
    //UPDATE GRAPHICS
  $("div.narrative, span.q10").html("The wolf pack befriends you what will you do?");
  $(".q10").show(); 
  $(".buttons").html("<button class='btn btn-warning q10-join'>JOIN</button>");
  $(".buttons").append("<button class='btn btn-warning q10-leave'>LEAVE</button>");
  $(".images").html("<img src='wolfPack.png'>");    
  //MAKE IT WORK
  $(".q10-join").click(function(){
     $(".q10-choice").html("JOIN"); 
     $(".narrative").html("You and the wolf pack takes down the kindgom of Jordan. YOU WIN!");
     $(".images").html("<img src='win_logo.png'>");
     $(".buttons").hide();
  });
  
  $(".q10-leave").click(function(){
    $(".q10-choice").html("LEAVE");
    $(".narrative").html("You were mauled by the wolves for showing weakness");
    $(".images").html("<img src='wolfPack.png'>");
    $(".buttons").hide();
  });  
}; 

var question11 = function(){
  //UPDATE GRAPHICS
  $("div.narrative, span.q11").html("You have made a friend from a bear what will you do?");
  $(".q11").show(); 
  $(".buttons").html("<button class='btn btn-warning q11-use-as-a-weapon'>USE AS A WEAPON</button>");
  $(".buttons").append("<button class='btn btn-warning q11-runaway'>RUN AWAY</button>");
  $(".buttons").append("<button class='btn btn-warning q11-eatbear'>EAT BEAR</button>");  
  $(".images").html("<img src='bear.png'>")
  //MAKE IT WORK
       
      
  $(".q11-use-as-a-weapon").click(function(){
     $(".q11-choice").html("USE AS A WEAPON");
     $(".narrative").html("You have killed all of the people in Jordan. YOU WIN!");
     $(".images").html("<img src='win_logo.png'>");
     $(".buttons").hide(); 
  });
  
  $(".q11-runaway").click(function(){
     $(".q11-choice").html("RUN AWAY");
     $(".narrative").html("Your bear got caught in a bear trap and you got thrown in jail");
     $(".images").html("<img src='jail.png'>");
     $(".buttons").hide();
  });
  
  $(".q11-eatbear").click(function(){
    $(".q11-choice").html("EAT BEAR");
    $(".narrative").html("You have caught salmonella");
    $(".images").html("<img src='cdc2.png'>");
    $(".buttons").hide();
  });
  
};



































































