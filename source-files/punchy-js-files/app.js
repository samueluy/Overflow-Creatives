/*! ------------------------------------------------
 * Project Name: Punchy - Coming Soon and Landing Page Template with Morphing Effects
 * Project Description: Punchy - awesome coming soon template to kick-start your project
 * Tags: mix_design, punchy, coming soon, under construction, template, coming soon page, landing page, one page, html5, css3
 * Version: 2.0.2
 * Build Date: October 2018
 * Last Update: December 2022
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * Author URI: https://themeforest.net/user/mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  2. SVG Fallback
 *  3. Chrome Smooth Scroll
 *  4. Images moving ban
 *  5. PhotoSwipe Gallery Images Replace
 *  6. Main Menu & Sections Behavior
 *  7. Popups Behavior
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

 $(function() {

   // SVG Fallback
   if(!Modernizr.svg) {
     $("img[src*='svg']").attr("src", function() {
       return $(this).attr("src").replace(".svg", ".png");
     });
   };

   // Chrome Smooth Scroll
   try {
     $.browserSelector();
     if($("html").hasClass("chrome")) {
       $.smoothScroll();
     }
   } catch(err) {
   };

   // Images moving ban
   $("img, a").on("dragstart", function(event) { event.preventDefault(); });

   // PhotoSwipe Gallery Images Replace
   $('.my-gallery__link')
     // Background set up
     .each(function(){
     $(this)
     // Add a photo container
     .append('<div class="picture"></div>')
     // Set up a background image for each link based on data-image attribute
     .children('.picture').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
   });

   // Main Menu & Sections Behavior
   var menuTrigger       = $('#menu-trigger'),
       menu              = $('#menu'),
       menuClose         = $('#menu-close');

   // Menu Open
   menuTrigger.on('click', function(event){
     event.preventDefault();
     var morphing = anime({
       targets: '.menu',
       translateY: '200vh',
       easing: 'linear',
       duration: 1300
     });
     var morphing = anime({
       targets: '.menu-morphing-path',
       d: [
         { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' },
         { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' }
       ],
       easing: 'easeInQuad',
       elasticity: 100,
       duration: 500,
       delay: 300
     });
     setTimeout(function(){
       menu.addClass('is-visible');
       menuClose.addClass('is-scaled-up');
     },1300);
   });

   // Menu Close
   menuClose.on('click', function(event){
     event.preventDefault();
     var morphing = anime({
       targets: '.menu',
       translateY: '0',
       easing: 'linear',
       duration: 1300
     });
     var morphing = anime({
       targets: '.menu-morphing-path',
       d: [
         { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
         { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
       ],
       easing: 'easeOutQuad',
       elasticity: 100,
       duration: 800,
       delay: 0
     });
     setTimeout(function(){
       menu.removeClass('is-visible');
       menuClose.removeClass('is-scaled-up');
     },1300);
   });

   $('#navigation a').on('click', function(event){
     setTimeout(function(){
       var moving = anime({
         targets: '.menu',
         translateY: '0',
         easing: 'linear',
         duration: 1300
       });
       var morphing = anime({
         targets: '.menu-morphing-path',
         d: [
           { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
           { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
         ],
         easing: 'easeOutQuad',
         elasticity: 100,
         duration: 800,
         delay: 0
       });
       setTimeout(function(){
         menu.removeClass('is-visible');
         menuClose.removeClass('is-scaled-up');
       },1300);
     },500);
   });

   // Popups Behavior
   var notifyTrigger     = $('#notify-trigger'),
       writealineTrigger = $('#writealine-trigger'),
       notifyPopup       = $('#notify'),
       writealinePopup   = $('#writealine'),
       notifyClose       = $('#notify-close'),
       writealineClose   = $('#writealine-close'),
       popupContent      = $('.popupcontent__wrapper');

       // Notify-me Popup Open
       notifyTrigger.on('click', function(event){
         event.preventDefault();
         var morphing = anime({
           targets: '.notify',
           translateY: '200vh',
           easing: 'linear',
           duration: 1300
         });
         var morphing = anime({
           targets: '.popup-morphing-path',
           d: [
             { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' },
             { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' }
           ],
           easing: 'easeInQuad',
           elasticity: 100,
           duration: 500,
           delay: 300
         });
         setTimeout(function(){
           notifyPopup.find(popupContent).addClass('is-visible');
           notifyClose.addClass('is-scaled-up');
         },1300);
       });

       // Notify-me Popup Close
       notifyClose.on('click', function(event){
         event.preventDefault();
         var moving = anime({
           targets: '.notify',
           translateY: '0',
           easing: 'linear',
           duration: 1300
         });
         var morphing = anime({
           targets: '.popup-morphing-path',
           d: [
             { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
             { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
           ],
           easing: 'easeOutQuad',
           elasticity: 100,
           duration: 800,
           delay: 0
         });
         setTimeout(function(){
           notifyPopup.find(popupContent).removeClass('is-visible');
           notifyClose.removeClass('is-scaled-up');
         },1300);
       });

       // Write-a-Line Popup Open
       writealineTrigger.on('click', function(event){
         event.preventDefault();
         var morphing = anime({
           targets: '.writealine',
           translateY: '200vh',
           easing: 'linear',
           duration: 1300
         });
         var morphing = anime({
           targets: '.writealine .popup-morphing-path',
           d: [
             { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' },
             { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' }
           ],
           easing: 'easeInQuad',
           elasticity: 100,
           duration: 500,
           delay: 300
         });
         setTimeout(function(){
           writealinePopup.find(popupContent).addClass('is-visible');
           writealineClose.addClass('is-scaled-up');
         },1300);
       });

       // Write-a-Line Popup Close
       writealineClose.on('click', function(event){
         event.preventDefault();
         var moving = anime({
           targets: '.writealine',
           translateY: '0',
           easing: 'linear',
           duration: 1300
         });
         var morphing = anime({
           targets: '.writealine .popup-morphing-path',
           d: [
             { value: 'M-22.4-87.7C-30.7,8.2,34.5,488.1,194.2,496c189.3,9.4,264.6-232.7,431.3-231c187.6,2,331.6,482.9,528.2,492c443.7,20.5,435.1-828.5,368.6-954.8C1455.9-324.1,34.5-746.7-22.4-87.7z' },
             { value: 'M-22.4-87.7c-8.3,95.9,56.9,71.1,216.6,79c189.3,9.4,264.6-2.6,431.3-0.8c187.6,2,331.6-9.3,528.2-0.2c443.7,20.5,435.1-61.8,368.6-188.1C1455.9-324.1,34.5-746.7-22.4-87.7z' }
           ],
           easing: 'easeOutQuad',
           elasticity: 100,
           duration: 800,
           delay: 0
         });
         setTimeout(function(){
           writealinePopup.find(popupContent).removeClass('is-visible');
           writealineClose.removeClass('is-scaled-up');
         },1300);
       });

});
