function dangNhap() {
    var y=document.querySelector(".dangky")
    var x = document.querySelector(".dangnhap");
    var z=document.querySelector(".quenmk");
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
      x.style.left="-1000px"  ;
    } else {
      x.style.left="660px"  ;
      x.style.visibility = "visible";
    }

    if(y.style.visibility==="visible"){
        y.style.visibility = "hidden";
        y.style.left="-1000px"  ;
    }
    if(z.style.visibility==="visible"){
        z.style.visibility = "hidden";
        z.style.left="-1000px"  ;
    }
  }
  function dangKy() {
    var y = document.querySelector(".dangky");
    var x = document.querySelector(".dangnhap");
    var z=document.querySelector(".quenmk");
    if (y.style.visibility === "visible") {
      y.style.visibility = "hidden";
      y.style.left="-1000px"  ;
    } else {
      y.style.visibility = "visible";
      y.style.left="660px"  ;
    }

    if(x.style.visibility==="visible"){
        x.style.visibility = "hidden";
        x.style.left="-1000px"  ;
    }

    if(z.style.visibility==="visible"){
        z.style.visibility = "hidden";
        z.style.left="-1000px"  ;
    }
  }  
  function quenMK() {
    var y = document.querySelector(".dangky");
    var x = document.querySelector(".dangnhap");
    var z=document.querySelector(".quenmk");
    if (z.style.visibility === "visible") {
      z.style.visibility = "hidden";
      z.style.left="-1000px"  ;
    } else {
      z.style.visibility = "visible";
      z.style.left="660px"  ;
    }

    if(y.style.visibility==="visible"){
        y.style.visibility = "hidden";
        y.style.left="-1000px"  ;
    }
    
    if(x.style.visibility==="visible"){
        x.style.visibility = "hidden";
        x.style.left="-1000px"  ;
    }
  }  