AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////

  var _navbarToggler = () => {
    var toggler = $('.navbar-toggler');
    var navbarCollapse = $('.navbar-collapse');

    $('.navbar-toggler').click((e)=> {
      if (navbarCollapse.hasClass('show')) {
        toggler.attr('aria-expanded', false);
      } else {
        toggler.attr('aria-expanded', true);
      }
      navbarCollapse.toggleClass('show');
    })
  }

  var _rollingNumber = () => {

    var roller = $( ".roller" );
    var section = document.getElementById("counter-wrapper")

    $(window).on('load scroll', function() {

      roller.each(function(){
        var number = $(this).attr('data-number');
        $(this).attr('data-number', number)

      });

      if ($('#counter-wrapper').length) {
        if (isInViewport(section)) {
          runRolling();
        }
      }
    })

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

    }

    function runRolling() {
      roller.each(function(){ 
       
        var number = $(this).attr('data-number');        
        $(this).attr('value',number);
      });
    }
  }

  var _storiesSlides = () => {
    $('.stories-slides').slick({
      dots: true,
      infinite: false,
      slidesToShow: 1,
      arrows: false,
    });
  }

  var _mainBannerSlider = () => {
    $('.banner-slider').on("init", function(event, slick){
      if(slick.slideCount == 1) {
        $('.slider-controls').hide();
        $('.slick-dots').hide();
      }
    });

    $('.banner-slider').slick({
      dots: true,
      infinite: false,
      slidesToShow: 1,
      arrows: false,
    });
  }

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
  };

  var _donate_iframe_container = function() {
      // Adjust iframe height dynamically based on its content
      var iframe = $('#donate-form-iframe');
      
      function resizeIframe() {
        iframeHeight = iframe.contents().find('body').height() + 130;
        iframe.height(iframeHeight);
        $('.iframe-container').css('height', iframeHeight);
      }
      
      $(window).on('resize', function() {
        resizeIframe();
      });

      iframe.on('load', function() {
        resizeIframe();
      });
      setInterval(resizeIframe, 500);

  }

  var _masonry = function() {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
    });
  }

  var _search_filter = function(){
        
		$("#filter-dropdown-category").select2({
			closeOnSelect : false,
			placeholder : "  Filter By Category",
			allowHtml: true,
			allowClear: true,
			tags: true 
		});
        
        $("#filter-dropdown-country").select2({
			closeOnSelect : false,
			placeholder : "  Filter By Country",
			allowHtml: true,
			allowClear: true,
			tags: true,
          
		});

        $('#filter-dropdown-country').on('select2:select', function (e) {
            var selectedCountry  = $('#filter-dropdown-country').val();
            console.log(selectedCountry)
        });
        $('#filter-dropdown-country').on('select2:unselect', function (e) {
            var selectedCountry  = $('#filter-dropdown-country').val();
            console.log(selectedCountry)
        });

        $('#filter-dropdown-category').on('select2:select', function (e) {
            var selectedCategory  = $('#filter-dropdown-category').val();
            console.log(selectedCategory)
        });
        $('#filter-dropdown-category').on('select2:unselect', function (e) {
            var selectedCategory  = $('#filter-dropdown-category').val();
            console.log(selectedCategory)
        });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _navbarToggler();
    _masonry();
    _rollingNumber();
    _storiesSlides();
    _mainBannerSlider();
    _tabs();
    _slider_section();
    _donate_iframe_container();
    _multi_level_menu();
    _stickynav();
    _search_filter();
  };

  return {
    init: init,
  };
})();
