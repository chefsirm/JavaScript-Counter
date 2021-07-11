let higher = document.querySelector ("#higher");
let lower = document.querySelector ("#lower");
let counterValue = document.querySelector ("#counterValue");

let counter = 0;

higher.addEventListener ("click" , function() {
    
    if(counter < 50){
        counter ++ ;
        counterValue.innerHTML = counter;
    }
    
})
;

 lower.addEventListener ("click" , function() {
     
     if(counter  > 0 ){
        counter -- ;
        counterValue.innerHTML = counter;  
     }
 });