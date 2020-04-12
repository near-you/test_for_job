$(document).ready(function () {
});
	const elements = $(".share");

	$(".product__share").click(function () {
  elements.addClass("active");
});

	$(".share-link_close").click(function () {
  elements.removeClass("active");
});
