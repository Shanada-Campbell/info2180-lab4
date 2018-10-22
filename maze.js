window.onload = function() {
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
    });
    let start_maze = document.getElementById("start");
    start_maze.addEventListener("mouseover",function(){
        let end_maze = document.getElementById("end");
        end_maze.addEventListener("mouseover",function(){
            if(touch_wall === false){
                alert("You win!");
            }
        })
    })
}