document.addEventListener("DOMContentLoaded", function() {
    const shimmerElements = document.querySelectorAll("span.shimmer");

    if (!shimmerElements[0].classList.contains("shimmer-animation")) {
        setTimeout(function() {
            shimmerElements.forEach(function(shimmer) {
                shimmer.classList.add("shimmer-animation");
                setTimeout(function() {
                    shimmer.classList.remove("shimmer-animation");
                }, 900);
            });
        }, 1900);
    }

    shimmerElements.forEach(function(shimmer) {
        shimmer.addEventListener("mouseenter", function() {
            shimmer.classList.add("shimmer-animation");
            setTimeout(function() {
                shimmer.classList.remove("shimmer-animation");
            }, 900);
        });
    });
});