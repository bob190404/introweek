window.addEventListener("scroll", function () {
        const distance = window.scrollY
        console.log(distance);
        document.querySelector(".header").style.transform = `translateY(${distance *
            2}px)`
        document.querySelector(
            ".header"
    ).style.transform = `translateY(${distance * 0.2}px)`
    
        if(distance > 600){
        
            document.querySelector(".text1").classList.add("text1in")
        
    }

     if(distance > 1000){
        
            document.querySelector(".titel1").classList.add("text1in");
        
    }

    if(distance > 1100){
        
            document.querySelector(".text2").classList.add("text1in");
        
    }

    if(distance > 1800){
        
            document.querySelector(".titel2").classList.add("text1in");
        
    }

     if(distance > 1900){
        
            document.querySelector(".text3").classList.add("text1in");
        
    }

      if(distance > 2200){
        
            document.querySelector(".titel3").classList.add("text1in");
        
    }

       if(distance > 2300){
        
            document.querySelector(".text4").classList.add("text1in");
        
    }

         if(distance > 2700){
        
            document.querySelector(".titel4").classList.add("text1in");
        
    }

       if(distance > 2900){
        
            document.querySelector(".text5").classList.add("text1in");
        
    }

          if(distance > 3400){
        
            document.querySelector(".titel5").classList.add("text1in");
        
    }

       if(distance > 3500){
        
            document.querySelector(".text6").classList.add("text1in");
        
    }

           if(distance > 4200){
        
            document.querySelector(".titel6").classList.add("text1in");
        
    }

       if(distance > 4300){
        
            document.querySelector(".text7").classList.add("text1in");
        
    }

              if(distance > 4700){
        
            document.querySelector(".titel7").classList.add("text1in");
        
    }

       if(distance > 4900){
        
            document.querySelector(".text8").classList.add("text1in");
        
    }
    })