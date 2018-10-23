window.onload = function() {
    let walls = document.querySelectorAll(".boundary");
    let mazeStatus = document.getElementById("status");
    let touch_wall = false;
    let game_won = false;
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
                if(mazeStatus.innerHTML.search(" You Win!") === -1 && mazeStatus.innerHTML.search(" You Lose!") === -1){
					mazeStatus.innerHTML = mazeStatus.innerHTML + " You Win!";
					game_won = true;
				}
			}else{
				if(mazeStatus.innerHTML.search(" You Win!") === -1 && mazeStatus.innerHTML.search(" You Lose!") === -1){
                    mazeStatus.innerHTML = mazeStatus.innerHTML + " You Lose!";
                    game_won = false;
				}
			}
        })
    })
    start_maze.addEventListener("click",function(){
		for(let index = 0; index<walls.length-1; index++){
				walls[index].setAttribute("class","boundary");
			}
		if(game_won === false){
			let mazeStatus = document.getElementById("status");
			let text_index = mazeStatus.innerHTML.search(" You Lose!");
			if(text_index !== -1){
				mazeStatus.innerHTML = mazeStatus.innerHTML.slice(0,text_index);
			}
		}
		else{
			let mazeStatus = document.getElementById("status");
			let text_index = mazeStatus.innerHTML.search(" You Win!");
			if(text_index !== -1){
				mazeStatus.innerHTML = mazeStatus.innerHTML.slice(0,text_index);
			}
		}
		touch_wall = false;
		game_won = false;
	});
    start_maze.addEventListener("click",function(){
        if (touch_wall === true){
            for(let index = 0;index < walls.length-1; index++){
                walls[index].setAttribute("class","boundary");
            }
            touch_wall = false;
        }
    })
    mouse_game.addEventListener("mouseover",function(){
		if(touch_wall === true){
			for(let index = 0; index < walls.length-1; index++){
				walls[index].setAttribute("class","boundary youlose");
			}
		}
	});

}