var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [41.649194, 41.625802],
      zoom: 10,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  myMap.geoObjects.add(
    new ymaps.Placemark([41.649194, 41.625802], {
      iconCaption: "Hilton Batumi",
    })
  );
}
