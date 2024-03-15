const GMap = function () {
	const $mapContainer = $('#js-gmap');

	if ($mapContainer.length) {
		const
			LAT = parseFloat($mapContainer.attr('data-gmap-lat')),
			LON = parseFloat($mapContainer.attr('data-gmap-lon')),
			ZOOM = parseInt($mapContainer.attr('data-gmap-zoom')),
			MARKER = $mapContainer.attr('data-gmap-marker'),
			TITLE = $mapContainer.attr('data-gmap-title');

		const map = new google.maps.Map(document.getElementById($mapContainer[0].id), {
			center: {
				lat: LAT,
				lng: LON
			},
			zoom: ZOOM,
			styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e9e9e9"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 29
				}, {
					"weight": 0.2
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 18
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 21
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dedede"
				}, {
					"lightness": 21
				}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
				}, {
					"color": "#333333"
				}, {
					"lightness": 40
				}]
			}, {
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f2f2f2"
				}, {
					"lightness": 19
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 17
				}, {
					"weight": 1.2
				}]
			}]
		});

		const marker = new google.maps.Marker({
			position: new google.maps.LatLng(LAT, LON),
			map: map,
			// title: TITLE,
			icon: MARKER
		});

		marker.addListener('click', function () {
			const infowindow = new google.maps.InfoWindow({
				content: TITLE
			});
			infowindow.open(map, marker);
		});
	}
}
