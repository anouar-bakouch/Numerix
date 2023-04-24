

// integration avec la methode de trapeze

let trapeze = (f, a, b, n)=>{
    let h = (b-a)/n;
    let s = 0.5*(f(a)+f(b));
    for(let i=1; i<n; i++){
        s += f(a+i*h);
    }
    return s*h;
}

export default trapeze;