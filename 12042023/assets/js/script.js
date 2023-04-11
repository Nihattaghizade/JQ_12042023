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

  