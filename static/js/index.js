function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.758896, lng: -73.985130},
        zoom: 100,
        mapTypeId: 'satellite'
    });
}

/**
 * 
 */

class HazardOverlay {
    constructor(bounds, image, map) {
        this.bounds = bounds;
        this.image = image;
        this.map = map;

        this.div = null;
        this.setMap(map);
    }

    function onAdd() {

    }

    function draw() {
        
    }

    function onRemove() {

    }
}