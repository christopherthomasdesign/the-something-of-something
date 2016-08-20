(function() {

  "use strict";

  var concreteArray = [
    "table",
    "ladder",
    "staircase",
    "slide",
    "teapot",
    "cat's cradle",
    "pipeline",
    "engine",
    "roadmap",
    "bicycle",
    "basket",
    "refrigerator",
    "chimney",
    "window",
    "cupboard",
    "path",
    "plateau",
    "cul de sac",
    "highway",
    "incubator",
    "landscape",
    "umbrella",
    "spiral"
  ];

  var abstractArray = [
    "hope",
    "hopelessness",
    "disappointment",
    "engagement",
    "opportunity",
    "empathy",
    "confusion",
    "despair",
    "success",
    "growth",
    "clarity",
    "poverty",
    "awareness",
    "actualisation",
    "forgiveness",
    "freedom",
    "imagination",
    "motivation",
    "speculation",
    "innovation"
  ];

  var getRandomArrayElement = function(array) {
    return array[Math.floor( Math.random() * array.length )];
  }

  var concreteAbstract = function() {
    var $concrete = $('#concrete'),
        $abstract = $('#abstract'),
        concreteNoun = getRandomArrayElement(concreteArray),
        abstractNoun = getRandomArrayElement(abstractArray);

    $concrete.text(concreteNoun);
    $abstract.text(abstractNoun);

    getDiagram(concreteNoun);
  }

  var getDiagram = function(q) {
    var apiKey = "f4b1087863e9496a980a39e48754e715";

    var bingURL = "https://api.cognitive.microsoft.com/bing/v5.0/images/search"
      + "?q="+encodeURIComponent(q)
      + "&color=Monochrome"
      + "&imageType=Line"
      + "&count=10"
      + "&size=Large";

    $.ajax({
      url: bingURL,
      headers: { "Ocp-Apim-Subscription-Key" : apiKey },
      success: function(data, status, xhr) {
        var i = Math.floor(Math.random() * data.value.length);

        var img = '<img src="'+data.value[i].contentUrl+'">';
        $('.container').append(img);
      }
    });
  }



  $(document).ready(function() { concreteAbstract(); });

})();