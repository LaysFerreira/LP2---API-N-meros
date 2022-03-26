
function num (action, nums) {
    const numeros = nums;

    if(action == 'minimum') {
        return Math.min(numeros[0], numeros[1], numeros[2]);
    } else {
        return Math.max(numeros[0], numeros[1], numeros[2]);
    }
    
}

module.exports = num;