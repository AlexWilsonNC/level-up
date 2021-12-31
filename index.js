$(".tab-container").on("click", ".tabs a", function(e) {
    e.preventDefault(),
    $(this)
      .parents(".tab-container")
      .find(".tab-content > div")
      .each(function() {
        $(this).hide();
      });
    
    $(this)
      .parents(".tabs")
      .find("a")
      .removeClass("active-tab"),
      $(this).toggleClass("active-tab"), $("#" + $(this).attr("src")).show();
  });