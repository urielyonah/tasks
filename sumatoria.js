
function Sumatoria(n){

   if(n === 0){
        return 0
   }else{
        return n + Sumatoria(n-1)  
   }    
}

console.log(Sumatoria(7))

