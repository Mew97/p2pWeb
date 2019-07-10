$(function() {
  $(".question").on("click", "dt", function() {
    $(this).siblings("dd").toggle().closest(".question").siblings().find("dd").hide();
  });

  $(".content-tab").on("click", "li", function() {
    var me = $(this);
    var index = me.index();

    me.addClass("sel").siblings().removeClass("sel");
    me.closest("dl").find("dd.question-list-wrap:eq("+index+")").show().siblings(".question-list-wrap").hide();
  }).find(".sel").trigger('click');
});

seajs.use(['$',''],function($,Accordion){
  $(document).ready(function(){
    var accordion = new Accordion({
      element: '#faq',
      triggers: '.accordion-trigger',
      panels: '.accordion-panel',
      activeIndex: -99,
      multiple: true,
    }).render();
    accordion.on('switch',function(toIndex, fromIndex){
      var obj = $($(".accordion-trigger")[toIndex]).children("span");
      if(obj.hasClass('icon-arrow-down2')){
        obj.removeClass('icon-arrow-down2');
        obj.addClass('icon-arrow-up2');
      }else{
        obj.removeClass('icon-arrow-up2');
        obj.addClass('icon-arrow-down2');
      }
    })
  });
});
