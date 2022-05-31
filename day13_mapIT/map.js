var iframe=document.querySelector("#gmap_canvas")

const getmap=()=>{
    var name=document.querySelector(".city").value;
    iframe.src=`https://maps.google.com/maps?q=${name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}