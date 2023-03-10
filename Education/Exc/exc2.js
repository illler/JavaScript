function isPangram(str){
    let newStr = str.replace(' ', '').split('');
    const set = new Set(newStr);
    console.log(Array.from(set).sort())
    return set.size === 26;

}
console.log(isPangram("The quick brown fox jumps over the lazy dog"));