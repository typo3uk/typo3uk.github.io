$(function() {
	$('a[data-gallery]').click(function(e){
		e.preventDefault();
		var index = $(this).attr("data-index");
		if(!index) index=0;
		var items = [];
		var stuffGalleryId = $(this).attr('data-gallery');
		var galleryLinks = $('a[style='display:none' data-gallery='+stuffGalleryId+']');

		$.each(galleryLinks, function(i, v){
    		var item={};
    		item["src"]=$(v).attr('href');
    		item["w"]=$(v).attr('data-width');
    		item["h"]=$(v).attr('data-height');
    		item["msrc"]=$(v).attr('data-thumb');
		   	items.push(item);
    	});
		openPhotoSwipe(items, parseInt(index));
	});

	var openPhotoSwipe = function(items, index) {
	    var pswpElement = document.querySelectorAll('.pswp')[0];
	    var options = {
	    	index: index,
	        showAnimationDuration: 0,
	        hideAnimationDuration: 0
	    };
	    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	    gallery.init();
	};
});
