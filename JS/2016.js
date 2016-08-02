function masterMenu(){
  if ($('#menuBox').length>0){
    $('#menuBox').remove();
    $('#masterMnu')
      .removeClass('pressed-box').addClass('box')
      .text('¦¦¦');
    return;
  }
  var box = $('<div id="menuBox" class="left-pin black-box bigtext">');
  $(box).width(220);
  fillMasterMenu($(box));
  $('body').append(box);
  $(box).fadeIn('fast');
  $('#masterMnu')
    .removeClass('box').addClass('pressed-box')
    .text('×');
}

function fillMasterMenu(mnu){
  var ul = $('<ul>').appendTo(mnu);
  var menus = [
    ['🏠 Home','http://starcolon.com/'],
    ['☣ Planet of Cells','http://starcolon.com/planet-of-cells/']
  ];

  menus.forEach(function(m){
    ul.append(
      $('<li>').text(m[0]).click(function(){
        window.open(m[1]);
      })
    );
  })
}