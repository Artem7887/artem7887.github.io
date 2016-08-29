ymaps.ready(function () {
      var myMap = new ymaps.Map('mapx', {
          center: [45.043446, 38.944501],
          zoom: 18,
          controls: ['smallMapDefaultSet']
        }),
        myPlacemark = new ymaps.Placemark([45.04405, 38.944111], {
          hintContent: 'Студия NERDS ул.Головатого, д.100'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'http://barbershop-borodinski.ru/manzhos/mark.png',
          // Размеры метки.
          iconImageSize: [320, 192],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-50, -4]
        });

      myMap.geoObjects.add(myPlacemark);
    });