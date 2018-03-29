$(function(){
  var mySpan = $('.text');
  var myHead = $('h1');
  var Try = $('.try');

  function startDis(){
    $('.text').each(function(){ $(this).text("") });
    var letters = ['A','B','C','E','A','B','C','E','A','C','B','E','A','B','C','E','A','B','C','E','A','B','C','E'];

    for( var i = 0 ; i < mySpan.length  ; i++ )
    {
      var randomLetter = letters[ Math.floor( Math.random() * letters.length ) ];

      mySpan.eq(i).text(randomLetter);
      mySpan.eq(i).addClass(randomLetter); 

      letters.splice( letters.indexOf(randomLetter),1 );
    };
  };
  startDis();

  Try.on('click',function(){
    startDis();
    $(this).fadeOut();
    myHead.text("");
    parent.find('div').each(function(){
      $(this).find('span').css('opacity','0');
      $(this).css('background-color','#ffffffeb');
      $(this).removeClass('disabled');
      $(this).removeClass('active')
    })
  })

  var parent = $('.parent');

  parent.find('div').on('click',function(){

    var active = $('.active');

    var currentText = $(this).find('.text').text();
    $(this).css('background-color','#FFF');
    $(this).find('.text').css('opacity','1');

    if(!$(this).siblings().hasClass('active') && !$(this).hasClass('disabled'))
    {
      $(this).addClass('active')
    }
    else
    {
      if ( currentText == $('.active').find('span').text() )
      {
        $(this).addClass('disabled good');
        active.addClass('disabled good');
        $(this).removeClass('active').siblings().removeClass('active')
      }
      else
      {
        if(!$(this).hasClass('disabled'))
        {
          $(this).find('span').animate({opacity:"0"},1000,function(){ 
            $(this).parent().css('background-color','#ffffffeb') 
          });

          active.find('span').animate({opacity:"0"},function(){ $(this).parent().css('background-color','#ffffffeb') });

          active.removeClass('active');
        }
      };

      Win();

    }
  });

  function Win(){
    myHead.text("");
    if( $('.disabled').length == parent.find('div').length )
    {
      myHead.text( 'You Win !!!!!' )

      Try.fadeIn();
    }
  }
});