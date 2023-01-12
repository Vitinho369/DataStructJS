var fibonaci = []

fibonaci[0] = 0
fibonaci[1] = 1
fibonaci[2] = 1

for(var i = 3; i < 20; i++){
    fibonaci[i] = fibonaci[i-1] + fibonaci[i-2]
}

for(var i = 0; i < fibonaci.length; i++){
    consoles.log(fibonaci[i])
} 