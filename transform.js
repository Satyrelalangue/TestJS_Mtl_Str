let str = '';
let nb = '';
let letter = 'A';

function transform (nb) {
    nb++
    for (let i = 0; i < nb; i++) {
        if (str.length > 9) {
            str = str + letter;
            letter = letter.charCodeAt();
            letter++;
            letter = String.fromCharCode(letter);
        }
        else {
            str = str + i;
        }
        console.log(str.split('').reverse().join(''));
    }
}

transform(35)
