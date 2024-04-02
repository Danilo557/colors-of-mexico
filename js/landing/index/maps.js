var destinos = ['México', 'CDMX', 'Puebla', 'Yucatán', 'Quintana Roo'];


var canadamap = document.getElementById("canada-map"),
	provinceInfo = document.getElementById("provinceInfo"),
	allProvinces = canadamap.querySelectorAll("g"),
	carrousel = document.getElementById("carouselExampleFadeContenedor");

canadamap.addEventListener("click", function (e) {
	var province = e.target.parentNode;
	if (e.target.nodeName == "path") {
		//Remueve el espacio para el desplegable
		$('#the-tour').removeClass('espacio');
		$titulo = province.querySelector("title").innerHTML;

		if (jQuery.inArray($titulo, destinos) !== -1) {

			for (var i = 0; i < allProvinces.length; i++) {
				allProvinces[i].classList.remove("active");
			}
			province.classList.add("active");
			var provinceName = province.querySelector("title").innerHTML,
				provincePara = province.querySelector("desc p"),
				provinceSelect = province.querySelector("desc ul");
			sourceImg = province.querySelectorAll("img"),
				imgPath = "img/landing/maps/";
			provinceInfo.innerHTML = "";

			//provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h2>"+provinceName+"</h2><p>"+provincePara.innerHTML+"</p>");
			provinceInfo.insertAdjacentHTML("afterbegin", insertCarrousel(sourceImg, imgPath) + "<h2>" + provinceName + "</h2><p>" + provincePara.innerHTML + "</p> " + "<ul class='list-group'>" + provinceSelect.innerHTML +'</ul>' );
			provinceInfo.classList.add("show");
			//$carro = insertCarrousel(sourceImg);
		}
	}
})


 

 

function insertCarrousel($imgList, $imgPath = '') {
	$img = ``;
	for (var i = 0; i < $imgList.length; i++) {
		if (i == 0) {
			$img += `<div class="carousel-item active">`;
		} else {
			$img += `<div class="carousel-item">`;
		}

		$img += `<img src="` + $imgPath + $imgList[i].getAttribute('xlink:href') + `" class="d-block w-100" width="100px" height="100px" alt="` + $imgList[i].getAttribute('alt') + `">`;
		$img += `</div>`;
	}

	$html = `
	<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
		<div class="carousel-inner">
			` + $img + `
		</div>		
	`;

	$html += `
	 
	</div>
	`;

	return $html
}

$(function () {
	$('#CDMX').addClass('active');
});