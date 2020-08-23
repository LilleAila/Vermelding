var d = new Date();

$("document").ready(function () {
  $("#na").text(`Nå, ${d.getHours()}:${d.getMinutes()}`);
  yr({ lat: 60.29443, lon: 5.277296 });
});

function yr(input) {
  $.ajax({
    url: `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${input.lat}&lon=${input.lon}`,
    type: "get",
    dataType: "json",
    success: function (data) {
      $("#na").text(`Nå, klokken ${d.getHours()}:00`);
      $("#grdrna").text(
        `${data.properties.timeseries[0].data.instant.details.air_temperature}°`
      );
      var ver =
        data.properties.timeseries[0].data.next_6_hours.summary.symbol_code;

      $.ajax({
        url: "https://api.met.no/weatherapi/weathericon/2.0/legends.json",
        type: "get",
        dataType: "json",
        success: function (data) {
          var desc__nb = eval(`data.${ver}.desc_nb`);
          $("#naver").text(desc__nb);
        },
        error: function () {
          $("#app").html("<error>Feil</error>");
        }
      });
      document.getElementById(
        "naimg"
      ).src = `https://api.met.no/images/weathericons/png/${ver}.png`;

      var date1 = new Date(data.properties.timeseries[6].time);
      $("#tim1").text(`${date1.getHours()}:00`);
      $("#varm1").text(
        `${data.properties.timeseries[6].data.instant.details.air_temperature}°`
      );
      var ver1 =
        data.properties.timeseries[6].data.next_6_hours.summary.symbol_code;
      $.ajax({
        url: "https://api.met.no/weatherapi/weathericon/2.0/legends.json",
        type: "get",
        dataType: "json",
        success: function (data) {
          var desc__nb1 = eval(`data.${ver1}.desc_nb`);
          $("#ver1").text(desc__nb1);
        },
        error: function () {
          $("#app").html("<error>Feil</error>");
        }
      });
      document.getElementById(
        "img1"
      ).src = `https://api.met.no/images/weathericons/png/${ver1}.png`;

      var date2 = new Date(data.properties.timeseries[12].time);
      $("#tim2").text(`${date2.getHours()}:00`);
      $("#varm2").text(
        `${data.properties.timeseries[12].data.instant.details.air_temperature}°`
      );
      var ver2 =
        data.properties.timeseries[12].data.next_6_hours.summary.symbol_code;
      $.ajax({
        url: "https://api.met.no/weatherapi/weathericon/2.0/legends.json",
        type: "get",
        dataType: "json",
        success: function (data) {
          var desc__nb2 = eval(`data.${ver2}.desc_nb`);
          $("#ver2").text(desc__nb2);
        },
        error: function () {
          $("#app").html("<error>Feil</error>");
        }
      });
      document.getElementById(
        "img2"
      ).src = `https://api.met.no/images/weathericons/png/${ver2}.png`;

      var date3 = new Date(data.properties.timeseries[18].time);
      $("#tim3").text(`${date3.getHours()}:00`);
      $("#varm3").text(
        `${data.properties.timeseries[18].data.instant.details.air_temperature}°`
      );
      var ver3 =
        data.properties.timeseries[18].data.next_6_hours.summary.symbol_code;
      $.ajax({
        url: "https://api.met.no/weatherapi/weathericon/2.0/legends.json",
        type: "get",
        dataType: "json",
        success: function (data) {
          var desc__nb3 = eval(`data.${ver3}.desc_nb`);
          $("#ver3").text(desc__nb3);
        },
        error: function () {
          $("#app").html("<error>Feil</error>");
        }
      });
      document.getElementById(
        "img3"
      ).src = `https://api.met.no/images/weathericons/png/${ver3}.png`;
    },
    error: function () {
      $("#app").html("<error>Feil</error>");
    }
  });
}
