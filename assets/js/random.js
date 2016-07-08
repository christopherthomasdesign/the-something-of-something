$(document).ready(function() {
    var concrete = new Array("table", "ladder", "staircase", "slide", "teapot", "cat's cradle", "pipeline", "engine", "roadmap", "bicycle", "basket", "refrigerator", "chimney", "window", "cupboard", "path", "plateau", "cul de sac", "highway", "incubator", "landscape", "umbrella", "spiral" )
    randno = concrete[Math.floor( Math.random() * concrete.length )];
    $('#concrete').text( randno );
});

$(document).ready(function() {
    var abstract = new Array("hope", "hopelessness", "disappointment", "engagement", "opportunity", "empathy", "confusion", "despair", "success", "growth", "clarity", "poverty", "awareness", "actualisation", "forgiveness", "freedom", "imagination", "motivation", "speculation", "innovation" )
    randno = abstract[Math.floor( Math.random() * abstract.length )];
    $('#abstract').text( randno );
});