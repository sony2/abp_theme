/**
 * @file
 * ABP Theme behaviors.
 */
(function (Drupal) {

  'use strict';

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

} (Drupal));
