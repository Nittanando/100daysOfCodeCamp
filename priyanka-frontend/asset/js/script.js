// filterizer

// $(document).ready(function () {
//   var containerEl = document.querySelector(".filtr-container");
//   var filterizd;
//   if (containerEl) {
//     filterizd = $(".filtr-container").filterizr({});
//   }
//   //Active changer
//   $(".filter-controls li").on("click", function () {
//     $(".filter-controls li").removeClass("active");
//     $(this).addClass("active");
//   });
// });

// light gallery intializer

// lightGallery(document.getElementById("lightgallery"));

// gallery

$(document).ready(function () {
  $(".buttons").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    var filter = $(this).attr("data-filter");

    if (filter == "all") {
      $(".image").show(400);
    } else {
      $(".image")
        .not("." + filter)
        .hide(200);
      $(".image")
        .filter("." + filter)
        .show(400);
    }
  });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// active navbar item

// $(document).ready(function () {
//   let url = window.location.href;
//   let me = $("ul li a");
//   //using jquery map
//   $(me).map(function (idx, elem) {
//     if (url.includes($(elem).attr("href"))) {
//       $(elem).addClass("active");
//     }
//   });
// });
