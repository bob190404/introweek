window.addEventListener("scroll", function () {
        const distance = window.scrollY
        console.log(distance);
        document.querySelector(".header").style.transform = `translateY(${distance *
            2}px)`
        document.querySelector(
            ".header"
    ).style.transform = `translateY(${distance * 0.3}px)`
    
        if(distance > 900){
        
            document.querySelector(".overmij").classList.add("animatie")
        
    }

     if(distance > 1000){
        
            document.querySelector(".overmij2").classList.add("animatie2");
        
    }

     if(distance > 1400){
        
            document.querySelector(".overmij3").classList.add("animatie");
        
    }
    })
    