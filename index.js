window.onload = ()=>{
    let show = true;
    document.getElementById("add_images");
    let desktop = ['deep-earth', 'night-arcade', 'soccer'];

    document.getElementById("navbtn").addEventListener("click", function (){
        var x = 'none';
        if (show){
            x = 'grid';
        }
        show = !show;
        document.getElementById("nav_list").style.display = x;
    });
}; 