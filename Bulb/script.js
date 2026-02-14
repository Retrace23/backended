 function light(show) {
                var pic;
                if (show == 0)  {
                    pic = "BULBOFF.jpeg";
                } 
                else{
                    pic = "BULBON.jpeg";
                }
                document.getElementById('bulb').src = pic;
            }