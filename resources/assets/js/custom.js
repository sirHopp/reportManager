$( document ).ready(function() {

  // menu slide
  $( ".sideNavButton" ).click(function() {
    $('.sideMenu').toggleClass('widthOff');
    $('.sideNavButton').toggleClass('positionOff');
  });



  // form maker
  var max_fields               = 100;
  var wrapper                  = $(".fixedCells");
  var add_button_textarea      = $(".add_form_field");
  var add_heading              = $(".add_heading");
  var add_image                = $(".add_image");

  var x = 1;
  $(add_button_textarea).click(function(e){
    e.preventDefault();
    if(x < max_fields){
      x++;
      $(wrapper).append('<div id="editor-container"></div>'); //add input box
    }
  });

  $(add_heading).click(function(e){
    e.preventDefault();
    if(x < max_fields){
      x++;
      $(wrapper).append('<div class="mui-textfield mui-textfield--float-label">{{form::text("title", "", ["class" => ""] )}}{{form::label("title", "Title")}}</div>'); //add input box
    }
  });

  $(add_image).click(function(e){
    e.preventDefault();
    if(x < max_fields){
      x++;
      $(wrapper).append('<div class="group"><input type="file" name="pic" accept="image/*"><a href="#" class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></a></div>'); //add input box
    }
  });

  $(wrapper).on("click",".delete", function(e){
    e.preventDefault(); $(this).parent('div').remove(); x--;
  })



});