function translate(phrase){
    const words = phrase.toLowerCase().split(' ').map(pigLatiniser)
    return(`In Pig Latin that's: ${words.join(' ')}`)
}

function pigLatiniser(word){ 
    let safeWords = ['on', 'the', 'and', 'a', 'an'];
    if(safeWords.includes(word)){
        // what should go here?
        return word;
    }
    let vowels = ['a','e','i','o','u'];
    let sliceIdx;
    for (let i = 0; i < word.length; i++){
        if (vowels.includes(word[i])){
            sliceIdx = i;
            break;
        } 
    }
    let translation = word.slice(sliceIdx) + word.slice(0, sliceIdx) + 'ay';
    // what should go here?
    return translation;
}
translate("nix on the stupid")


module.exports = { translate, pigLatiniser };
