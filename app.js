var likes = document.getElementsByClassName("like");
var small_menu = document.querySelector('.toggle_menu')
          var menu = document.querySelector('.menu')

          small_menu.onclick = function(){
               small_menu.classList.toggle('active');
               menu.classList.toggle('responsive');
            }
  for(let i=0;i<likes.length;i++)
     {
        let like= likes[i];
        like.addEventListener("click", function(){
        if (like.style.color== "red")
        {
        like.style.color="black"
        }
        else 
        like.style.color = "red";
                  });

     }
    