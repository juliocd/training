function solution(experience, threshold, reward) {
    const sentences = ["__variable_one__", "_variable_two", "variable_three", "variable_four__", 
        "variable_five_six", "variable_nine _varaible_10en _variable__evleven_twelve", "_or", "o_p"];
    const result = [];
        
    for(const sentence of sentences) {
        if(sentence.length < 3) {
            result.push(sentence);
            continue;
        }
        
        const convertedVariable = [];
        for(let i = 0; i < sentence.length; i++) {
            if(i >= 2 && sentence[i - 2].match(/[a-zA-Z0-9]/) 
                && sentence[i - 1] == '_' 
                && sentence[i].match(/[a-zA-Z0-9]/)) {
                convertedVariable[i - 1] = '';
                convertedVariable[i] = sentence[i].toUpperCase();
                
                continue;
            }
            
            convertedVariable.push(sentence[i]);
        }
        
        result.push(convertedVariable.join(''));
    }
    
    console.log(result)
    
    return true;
}
