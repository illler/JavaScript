function amountOfPage(x){
    let a = 1;
    let str = '';
    let ans = 0;
    while (str.length<x){
        str+=a;
        ans=a;
        a++;
    }
    console.log(ans)
}

amountOfPage(1095)