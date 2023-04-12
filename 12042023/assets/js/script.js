"use strict";

$(document).ready(function() {
    $('.img1 img').on('click', function() {
      var src = $(this).attr('src');
      $('.picturebox').html('<img src="' + src + '">');
    });
  });

$(document).ready(function() {
    $('.img2 img').on('click', function() {
      var src = $(this).attr('src');
      $('.picturebox').html('<img src="' + src + '">');
    });
  });
  
$(document).ready(function() {
    $('.img3 img').on('click', function() {
      var src = $(this).attr('src');
      $('.picturebox').html('<img src="' + src + '">');
    });
  });

$('.zoom').css({
    'width' : '100%',
    'height' : '100%',
    'background-repeat' : 'no-repeat',
    'background-size' : 'contain',
    'background-position' : 'center',
     'background-color' : 'rgba(0,0,0,0.5)',
     position  : 'fixed',
     top : 0,
     display : "none",
     'cursor' : 'zoom-out'
     
  })

  $('img').click(function(){
    let imgPath = $(this).attr('src');
    $('.zoom').css({
      'background-image' : `url('${imgPath}')`,
      'display' : 'block'
    })
    });
  
    $('.zoom').click(function(){
      $('.zoom').css({
          'display':'none'
      })
    })
