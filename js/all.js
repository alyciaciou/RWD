$(document).ready(function() {
    $('.burgermenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });
 });