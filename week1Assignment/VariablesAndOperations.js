function concatenate(var1, var2){
    if(typeof var1 != 'string'){
        throw new Error('This must be a string');
    }
    return var1 + var2;
}