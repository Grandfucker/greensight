window.addEventListener('DOMContentLoaded', () => {

    const pickUp = document.querySelector('#self'),
        auto = document.querySelector('#auto'),
        tabWithMap = document.querySelector('.map'),
        tabWithForm = document.querySelector('.form');

    pickUp.addEventListener('click', (e) => {
        tabWithMap.classList.add('show');
        pickUp.classList.add('active');
        auto.classList.remove('active');
        tabWithForm.classList.add('hide');
        tabWithForm.classList.remove('show');

    });

    auto.addEventListener('click', (e) => {
        tabWithMap.classList.remove('show');
        auto.classList.add('active');
        pickUp.classList.remove('active');
        tabWithForm.classList.add('show');
    });

    let map;
    const image = 'img/pin.svg';
    const address1 = {
        lat: 55.977291,
        lng: 37.150163
    };
    const address2 = {
        lat: 55.983297,
        lng: 37.144288
    };

    function initMap() {
        map = new google.maps.Map(document.querySelector(".map__google"), {
            center: {
                lat: 55.977445,
                lng: 37.149040
            },
            zoom: 14

        });

        marker1 = new google.maps.Marker({
            position: address1,
            map: map,
            icon: image
        });
        marker2 = new google.maps.Marker({
            position: address2,
            map: map,
            icon: image,
        });
    }
    initMap();


    const firstAddress = document.querySelector('.first__address'),
        secondAddress = document.querySelector('.second__address'),
        BOUNCE = google.maps.Animation.BOUNCE;


    firstAddress.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('first__address')) {
            marker2.setAnimation(BOUNCE);
            marker1.setAnimation(null);
        }
    });

    secondAddress.addEventListener('click', (e) => {
        console.log(e.target);
        marker1.setAnimation(BOUNCE);
        marker2.setAnimation(null)
    });
});