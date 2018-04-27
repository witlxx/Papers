function replaceSpace(str) {
    let array = str.split('');
    for (let i = 0; i < array.length; i++) {
        if(array[i] == " ") {
            array[i] = "%20";
        }
    }
    return array.join(""); 
}

module.exports = {
    replaceSpace : replaceSpace
}


