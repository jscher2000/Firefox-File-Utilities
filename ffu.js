window.onload = function(e){
	var homelink = document.querySelector('#logo:not([nolink])');
	if (homelink){
		homelink.style.cursor = 'pointer';
		homelink.addEventListener('click', function(){window.location.href='https://www.jeffersonscher.com/ffu/'});
	}
}
