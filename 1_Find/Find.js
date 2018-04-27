function Find(target, array) {
    let width = array.length;
    let height = array[0].length;
    if(width > 0 && height > 0) {
        let num1, num2;
        for(let i = 0; i < min(width, height); i++) {
            if(target <= array[i][i]){
                num1 = i;
                break;   
            }
        }
        for (let j = min(width,height) - 1; j >= 0; j--) {
            if(target >= array[j][j]) {
                num2 = j;
                break;
            }
        }
    
        if(width == min(width, height) && num1 == undefined) {
            for (let x = width - 1; x < height - 1; x++) {
                if(target == array[width-1][x]) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if(height == min(width, height) && num2 == undefined) {
            for(let y = height - 1; y < width - 1; y++) {
                if(target == array[y][height - 1]) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if(num1 == num2) {    //中轴线上的值   
            return true;
        } else {
            if(target == array[num2][num2]) {
                return true;
            } else if(target == array[num2][num2+1]){
                return true;
            } else if(target == array[num2+1][num2]) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

function min(num1, num2) {
    let num;
    return num = num1 < num2 ? num1 : num2;
}


module.exports = {
    Find: Find
}
