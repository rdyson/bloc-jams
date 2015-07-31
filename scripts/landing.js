var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {

    var revealPoints = function(i) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";   
    };

//    for (var i = 0; i < points.length; i++) {
//        revealPoints(i);
//    };
    
    points.forEach(function(element) {
        //
    });
};

window.onload = function() {
    
    // Automatically animates the points on a tall screen where scrolling can't trigger the animation
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    
    window.addEventListener('scroll', function(event) {
        if (pointsArray[0].getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
        }
    });
}