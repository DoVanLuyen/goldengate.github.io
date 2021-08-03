  $(document).ready(function() {
    $('#brand').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      pagination:false,
      responsive:{
        0:{
          items:1,
          nav:true
        },
        600:{
          items:3,
          nav:false
        },
        1000:{
          items:5,
          nav:true,
          loop:false
        }
      }
    });




    // $(window).scroll(function() {
    //   var scroll = $(window).scrollTop();
    //   console.log(scroll);
    //   if (scroll >= 452) {
    //     $('.menu_main').addClass('fixed-top');
    //     $('#menu_sub').addClass('hide')
    //     $('#danhmuc').click(function(e) {
    //       e.preventDefault();
    //       $('#menu_sub').removeClass('hide')
    //     });
    //   } else {
    //     $('.menu_main').removeClass('fixed-top')
    //     $('#menu_sub').removeClass('hide')
    //   }


    // });


    $("#scroller").simplyScroll({ orientation: 'vertical', customClass: 'vert', autoMode: 'loop' });





    // var danhMuc = $('#danhmuc');
    // var menuSub = $('#menu_sub');

    // danhMuc.click(function() {
    //   menuSub.toggleClass('active_menu');

    // });











  });