function getStyle(element,attr){
    if(getComputedStyle){
        return getComputedStyle(element,null)[attr];
    }else {
        return element.currentStyle[attr];
    }
}


function animate(element,obj){
    clearInterval(element.timer);
    var flag = true;
    element.timer = setInterval(function(){
        for(var attr in obj){
            if(attr == "opacity"){
                var current = element.style[attr];
                current *= 100;
                var target = obj[attr];
                target *= 100;
                var step = (target-current)/10;
                step = target>current? Math.ceil(step):Math.floor(step);
                element.style[attr] = (current + step)/100;
            }else if(attr == "zIndex"){
                element.style.zIndex = obj[attr];
                var target = obj[attr];
                var current = target;
            }else{
                var current = parseInt(getStyle(element,attr));
                var target = obj[attr];
                var step = (target-current)/10;
                step = target>current? Math.ceil(step):Math.floor(step);
                element.style[attr] = current + step + "px";
            }
            if(current != target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(element.timer);
        }
    },20);
}