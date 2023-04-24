

// integration avec la methode de Simpson

let simpson = (f, a, b, n)=>{
    let h = (b-a)/n;
    let s = f(a)+f(b);
    for(let i=1; i<n; i++){
        if(i%2==0){
            s += 2*f(a+i*h);
        }else{
            s += 4*f(a+i*h);
        }
    }
    return s*h/3;
}