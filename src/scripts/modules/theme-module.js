AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    // const swiper = new Swiper('.swiper-container', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    // });
  };
  var _stickynav = function () {
    $(window).on("load scroll", function () {
      if ($(this).scrollTop() > 10) {
        $('header').addClass('sticky');
      } else {
        $('header').removeClass('sticky');
      }
    });
  };

  const _multi_level_menu = () => {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        $(this).removeClass('show');
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
      $(this).toggleClass('show');
    
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
        $(this).removeClass('show');
      });
    
    
      return false;
    });
  }

  var _tabs = function () {
    // add click event to tabs
    $('.tab-menu li').on('click', function() {
      if ($(this).data('title')) { // check if the tab is a title
        return; // do nothing if it's a title
      }
      // remove active class from all tabs
      $('.tab-menu li').removeClass('active');
      // add active class to clicked tab
      $(this).addClass('active');
      // hide all tab contents
      $('.tab-content div').removeClass('active-tab');
      // show corresponding tab content
      $($(this).find('a').attr('href')).addClass('active-tab');
      return false; // prevent default link behavior
    });
  };

  var _slider_section = function() {
    $('.slider').on("init", function(event, slick){
      if(slick.slideCount == 1) {
        $('.slider-controls').hide();
        $('.slick-dots').hide();
      }
    });
    $('.slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      arrows: false,
    });
  }
  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _tabs();
    _slider_section();
    _multi_level_menu();
    _stickynav();
  };

  return {
    init: init,
  };
})();
