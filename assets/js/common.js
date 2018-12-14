// 筛选用
$(function(){
	var $searchBar = $('#searchBar'),
		$searchResult = $('#searchResult'),
		$searchText = $('#searchText'),
		$searchInput = $('#searchInput'),
		$searchClear = $('#searchClear'),
		$searchCancel = $('#searchCancel');

	function hideSearchResult(){
		$searchResult.hide();
		$searchInput.val('');
	}
	function cancelSearch(){
		hideSearchResult();
		$searchBar.removeClass('weui-search-bar_focusing');
		$searchText.show();
	}

	$searchText.on('click', function(){
		$searchBar.addClass('weui-search-bar_focusing');
		$searchInput.focus();
	});
	$searchInput
		.on('blur', function () {
			if(!this.value.length) cancelSearch();
		})
		.on('input', function(){
			if(this.value.length) {
				$searchResult.show();
			} else {
				$searchResult.hide();
			}
		})
	;
	$searchClear.on('click', function(){
		hideSearchResult();
		$searchInput.focus();
	});
	$searchCancel.on('click', function(){
		cancelSearch();
		$searchInput.blur();
	});
  
  
  // 解决iOS10以上无法禁用缩放的问题，参考：https://blog.csdn.net/web_wyj/article/details/81738792
  // window.onload = function() {
  // 阻止双击放大
  var lastTouchEnd = 0;
  document.addEventListener('touchstart', function(event) {
      if (event.touches.length > 1) {
          event.preventDefault();
      }
  });
  document.addEventListener('touchend', function(event) {
      var now = (new Date()).getTime();
      if (now - lastTouchEnd <= 300) {
          event.preventDefault();
      }
      lastTouchEnd = now;
  }, false);

  // 阻止双指放大
  document.addEventListener('gesturestart', function(event) {
      event.preventDefault();
  });
  // }
});