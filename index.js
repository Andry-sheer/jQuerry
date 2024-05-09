$('body').css('background', 'white').css('padding', '30px');

$('.container').css('background', 'black').css('width', '800px').css('height', '600px').css('margin', '0 auto') ;
$('.container').css('@media (min-width: 380px {}')

// $('.container').text('hello');

$('.container').css('border-radius', '24px').css('display', 'flex').css('position', 'relative');
$('.container').css('justify-content', 'center');

$('div').eq(1).addClass('container_2');
$('.container_2').css('width', '400px').css('height', '200px').css('background', 'silver');
$('.container_2').css('border', '3px solid white').css('border-radius', '24px').css('position', 'absolute');
$('.container_2').css('left','200px').css('bottom','0');

$('.container_2').css('opacity', '0');  // .css('display', 'none');

$('p').addClass('paragraph').text('MODAL WIN').css('text-align', 'center').css('font-size', '30px');

$('#buttonOpen').val('click to show').css({'padding': '0 25px', 'height': '40px', 'margin-top':'50px'});   //? запізно помітив що можна було робити через = { , : , : ,} 

$('#buttonClose').val('click to close').css('padding', '0 25px').css('height', '40px').css('margin-top','50px').css('display', 'none');


$('#buttonOpen').on('click', show);
  function show(){
  // $('.container_2').css('display', 'block');
  $('#buttonOpen').css('display', 'none');
  $('#buttonClose').css('display', 'block');

  $('.container_2').animate({
    top: '200px',
    opacity: 1,
  }, 1500)
};

$('#buttonClose').on('click', hide);
  function hide(){
  // $('.container_2').css('display', 'none');
  $('#buttonOpen').css('display', 'block');
  $('#buttonClose').css('display', 'none');

  $('.container_2').animate({
    top: '380px',
    opacity: 0,
  }, 1000)
};



