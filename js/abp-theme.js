/**
 * @file
 * ABP Theme behaviors.
 */
(function (Drupal) {

  'use strict';
  Drupal.abp_theme = {};


  Drupal.behaviors.abpTheme = {
    attach: function (context, settings) {
      document.addEventListener("scroll", (event) => {
        let scroll = window.scrollY;
        if (scroll > 50) {
          document.querySelector('header').classList.add('scrolled');
        } else {
          document.querySelector('header').classList.remove('scrolled');
        }
      });
    }
  };

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      if ('toggleSearchVisibility' in Drupal.abp_theme && 'searchIsVisible' in Drupal.abp_theme && Drupal.abp_theme.searchIsVisible()) {
        Drupal.abp_theme.toggleSearchVisibility(false);
      } else {
          hideWideNav();
        }
    }
  });

} (Drupal));
