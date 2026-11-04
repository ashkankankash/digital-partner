$('.result_container').clone().addClass('target').appendTo('.spm_container .result');
$(".spm_container .block").click(function (e){

  console.log('test');
  var thisClassName = $(this).attr('class');
  var parentClassName = $(this).parents('.mTop').attr('class');

  console.log(parentClassName);

  /*$('.spm_container .result').removeClass('activeIt');
  $('.spm_container .result.m1m2').removeClass('activeIt');*/

  var browserWidth = $( window ).width();

  switch(thisClassName) {
      case 'block cms1': //Barbara-print
            if( parentClassName.indexOf('m1') != -1){
              $('.spm_container .result.m2 .result_container ').hide();
              $('.spm_container .result.m3 .result_container ').hide();
              $('.spm_container .result.m4 .result_container ').hide();

              $('.spm_container .result.m1 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m1').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

               $('html,body').animate({scrollTop: $(".spm_container .block.cms1").offset().top},'slow');

               $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms1').addClass('setResult');


              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms1').removeClass('hideMe');
              e.stopPropagation();
            }
        break;
      case 'block cms2': //Barbar epaper
            if( parentClassName.indexOf('m1') != -1 ){
              $('.spm_container .result.m2 .result_container ').hide();
              $('.spm_container .result.m3 .result_container ').hide();
              $('.spm_container .result.m4 .result_container ').hide();

              $('.spm_container .result.m1 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m1').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

              $('.spm_container .block').removeClass('setResult');

              $('.spm_container .block.cms2').addClass('setResult');
              $('html,body').animate({scrollTop: $(".spm_container .block.cms2").offset().top},'slow');


              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms2').removeClass('hideMe');
              e.stopPropagation();
            }

        break;
      case 'block cms3': //Barbar epaper
            if( parentClassName.indexOf('m2') != -1 ){
              $('.spm_container .result.m1 .result_container ').hide();
              $('.spm_container .result.m3 .result_container ').hide();
              $('.spm_container .result.m4 .result_container ').hide();

              $('.spm_container .result.m2 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m2').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

              $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms3').addClass('setResult');
              $('html,body').animate({scrollTop: $(".spm_container .block.cms3").offset().top},'slow');

              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms3').removeClass('hideMe');
              e.stopPropagation();
            }

        break;

      case 'block cms4': //Barbar epaper
            if( parentClassName.indexOf('m2') != -1 ){
              $('.spm_container .result.m1 .result_container ').hide();
              $('.spm_container .result.m3 .result_container ').hide();
              $('.spm_container .result.m4 .result_container ').hide();

              $('.spm_container .result.m2 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m2').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

              $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms4').addClass('setResult');
              $('html,body').animate({scrollTop: $(".spm_container .block.cms4").offset().top},'slow');

              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms4').removeClass('hideMe');
              e.stopPropagation();
            }

        break;

        case 'block cms5': //Barbar epaper
            if( parentClassName.indexOf('m3') != -1 ){
              $('.spm_container .result.m1 .result_container ').hide();
              $('.spm_container .result.m2 .result_container ').hide();
              $('.spm_container .result.m4 .result_container ').hide();

              $('.spm_container .result.m3 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m3').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

              $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms5').addClass('setResult');

              if ( browserWidth > '766' ){
                 $('html,body').animate({scrollTop: $(".spm_container .block.cms1").offset().top + 100},'slow');
              }else{
                $('html,body').animate({scrollTop: $(".spm_container .block.cms5").offset().top},'slow');
              }


              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms5').removeClass('hideMe');
              e.stopPropagation();
            }

        break;

        case 'block cms6': //Barbar epaper
            if( parentClassName.indexOf('m3') != -1 ){
              $('.spm_container .result.m1 .result_container ').hide();
              $('.spm_container .result.m2 .result_container ').hide();
              $('.spm_container .result.m4 .result_container ').hide();

              $('.spm_container .result.m3 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms6').addClass('setResult');


              $('.spm_container .result.m3').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');


              if ( browserWidth > '766' ){
                 $('html,body').animate({scrollTop: $(".spm_container .block.cms2").offset().top + 100},'slow');
              }else{
                $('html,body').animate({scrollTop: $(".spm_container .block.cms6").offset().top},'slow');
              }




              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms6').removeClass('hideMe');
              e.stopPropagation();
            }

        break;

        case 'block cms7': //Barbar epaper
            if( parentClassName.indexOf('m4') != -1 ){
              $('.spm_container .result.m1 .result_container ').hide();
              $('.spm_container .result.m2 .result_container ').hide();
              $('.spm_container .result.m3 .result_container ').hide();

              $('.spm_container .result.m4 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m4').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

              $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms7').addClass('setResult');


              if ( browserWidth > '766' ){
                 $('html,body').animate({scrollTop: $(".spm_container .block.cms3").offset().top + 100},'slow');
              }else{
                $('html,body').animate({scrollTop: $(".spm_container .block.cms7").offset().top},'slow');
              }



              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms7').removeClass('hideMe');
              e.stopPropagation();
            }

        break;


        case 'block cms8': //Barbar epaper
            if( parentClassName.indexOf('m4') != -1 ){
              $('.spm_container .result.m1 .result_container ').hide();
              $('.spm_container .result.m2 .result_container ').hide();
              $('.spm_container .result.m3 .result_container ').hide();

              $('.spm_container .result.m4 .result_container ').show();
              $('.spm_container .result.m1m2 .result_container ').show();

              $('.spm_container .result.m4').addClass('activeIt');
              $('.spm_container .result.m1m2').addClass('activeIt');

              $('.spm_container .block').removeClass('setResult');
              $('.spm_container .block.cms8').addClass('setResult');

              if ( browserWidth > '766' ){
                 $('html,body').animate({scrollTop: $(".spm_container .block.cms4").offset().top + 100},'slow');
              }else{
                $('html,body').animate({scrollTop: $(".spm_container .block.cms8").offset().top},'slow');
              }


              $('.result_container.target .m_result').addClass('hideMe');
              $('.result_container.target .cms8').removeClass('hideMe');
              e.stopPropagation();
            }

        break;

      default:
        // code block
    }


});

$(".m_result .closeMe").click(function (e){
  $(this).parent('.m_result').addClass('hideMe');
  $('.spm_container .result').removeClass('activeIt');
  $('.spm_container .result.m1m2').removeClass('activeIt');
  $('.spm_container .block').removeClass('setResult');
e.stopPropagation();
});

const atBottom =
    $(window).scrollTop() + $(window).height() >=
    $(document).height() - 5;



$('.bounce').click(function () {

    const $sections = $('div.sec');

    // Check if we are at the bottom
    const atBottom =
        $(window).scrollTop() + $(window).height()
        >= $(document).height() - 10;

    if (atBottom) {

        $('html, body').animate({
            scrollTop: 0
        }, 600);

        return;
    }

    // Find current section
    const scrollPosition = $(window).scrollTop() + 100;

    const $current = $sections.filter(function () {
        return $(this).offset().top <= scrollPosition;
    }).last();

    // Find next section
    const currentIndex = $sections.index($current);
    const $next = $sections.eq(currentIndex + 1);

    if ($next.length) {

        $('html, body').animate({
            scrollTop: $next.offset().top
        }, 600);

    }

});
