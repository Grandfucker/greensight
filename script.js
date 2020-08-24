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

    const mapFirstAddress = document.querySelector('.map__first__address'),
        mapSecondAddress = document.querySelector('.map__second__address'),
        BOUNCE = google.maps.Animation.BOUNCE;
        
    mapFirstAddress.addEventListener('click', (e) => {
        mapFirstAddress.style.color = ('#215BF0');
        mapSecondAddress.style.color = ('#222222');
        marker2.setAnimation(BOUNCE);
        marker1.setAnimation(null);
    });

    mapSecondAddress.addEventListener('click', (e) => {
        mapFirstAddress.style.color = ('#222222');
        mapSecondAddress.style.color = ('#215BF0');
        marker1.setAnimation(BOUNCE);
        marker2.setAnimation(null);
    });

    let inputs = document.querySelectorAll('input[data-rule');

    for (let input of inputs) {
        input.addEventListener('blur', function (e) {
            let rule = this.dataset.rule,
                value = this.value,
                check,
                alert = document.querySelectorAll('.alert'),
                alertText = document.querySelectorAll('.alert__text');

            for (let i = 0; i < alert.length; i++) {
                switch (rule) {
                    case 'name':
                        check = /^[?!,.а-яА-ЯёЁ\s]+$/.test(value);
                        if (check) {
                            alert[0].style.display = 'none';
                            alertText[0].style.display = 'none';
                        } else {
                            alert[0].style.display = 'block';
                            alertText[0].style.display = 'block';
                        }
                        break;
                    case 'number':
                        check = /^\d+$[+-()]/.test(value);
                        if (check) {
                            alert[1].style.display = 'none';
                            alertText[1].style.display = 'none';
                        } else {
                            alert[1].style.display = 'block';
                            alertText[1].style.display = 'block';
                        }
                        break;
                    case 'address':
                        check = /^[?!,.а-яА-ЯёЁ0-9\s]+$/.test(value);
                        if (check) {
                            alert[2].style.display = 'none';
                            alertText[2].style.display = 'none';
                        } else {
                            alert[2].style.display = 'block';
                            alertText[2].style.display = 'block';
                        }
                        break;

                    case 'comments':
                        check = /^[?!,.а-яА-ЯёЁ0-9\s]+$/.test(value);
                        if (check) {
                            alert[3].style.display = 'none';
                            alertText[3].style.display = 'none';
                        } else {
                            alert[3].style.display = 'block';
                            alertText[3].style.display = 'block';
                        }
                        break;
                }

            }
        });
    }

    const element = document.querySelector('#userphone');

    const maskOptions = {

        mask: '{+7}(000) 000-00-00',
    };
    const mask = new IMask(element, maskOptions);

});