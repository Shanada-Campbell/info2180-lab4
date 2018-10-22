window.onload = function() {
    let wall = document.getElementById("boundary1");
    wall.addEventListener("mouseover",function(){
        wall.setAttribute("class","boundary youlose");
    let walls = document.querySelectorAll(".boundary");
    let touch_wall = false;
    for(let index = 0; index < walls.length-1; index++){
        walls[index].addEventListener("mouseover",function() {
            walls[index].setAttribute("class", "boundary youlose");
            touch_wall = true;
        
        });
    }
    let mouse_maze = document.getElementById("maze");
    mouse_maze.addEventListener("mouseover",function(){
        if(touch_wall === true){
            for(let index = 0; index < walls.length-1; index++){
                walls[index].setAttribute("class","boundary youlose");
            }
        }
    })
    })
}