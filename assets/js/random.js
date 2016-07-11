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
  }

  $(document).ready(function() { concreteAbstract(); });

})();