

var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    width=screen.width;

    new_width=screen.width-70;
    new_length=screen.height-30;

    if (width<992){

        canvas.width=new_width;
        canvas.height=new_length;
        document.body.style.overflow="hidden";
    }




    


    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("colour").value;
        width_of_line = document.getElementById("width").value;
        //Addictonal Activity ends

        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

    }

   
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;}

        var mouse_event= "";

        var last_position_of_x,last_position_of_y;
        
        canvas=document.getElementById("myCanvas");
        
        ctx=canvas.getContext("2d");
        
        colour="black";
        
        lineWidth=2;

        canvas.width=new_width;
        canvas.height=new_length;
        document.body.style.overflow="hidden";
        
        canvas.addEventListener("mousedown",my_Mousedown);
        
        function my_Mousedown(){
        
            mouse_event="mousedown";
        }
        
        canvas.addEventListener("mouseup",my_Mouseup);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
        
        function my_Mouseup(){
        
            mouse_event="mouseup";
        }
        
        canvas.addEventListener("mouseleave",my_Mouseleave);
        
        function my_Mouseleave(){
        
            mouse_event="mouseleave";
        }
        
        canvas.addEventListener("mousemove",my_Mousemove);
        
        function my_Mousemove(e){
            console.log(e);
        
            current_position_of_x=e.clientX-canvas.offsetLeft;
            current_position_of_y=e.clientY-canvas.offsetTop;
        
            if(mouse_event=="mousedown"){
        
                ctx.beginPath();
                ctx.strokeStyle=colour;
                ctx.lineWidth=lineWidth;
            }
        
            last_position_of_x=current_position_of_x;
            last_position_of_y=current_position_of_y;
        
        }
        
        



    

