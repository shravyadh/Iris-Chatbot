function toggleAnimation(element)
{
    var x = element.classList.contains("before");
    if (x)
    {
        element.classList.remove("before");
        element.classList.add("after");
    }
    else{
        element.classList.remove("after");
        element.classList.add("before");
    }
}

function initStyle(element)
{
   element.classList.add("before");
}

function buttonClickAnimation(element)
{
    element.classList.add("button-click-animation");
    element.style.opacity = 0.3;
    setTimeout(function() {element.style.opacity = 1}, 800);
}