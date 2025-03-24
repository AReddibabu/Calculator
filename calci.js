let currentInput='';
function appendToDisplay(value){
    currentInput += value;
    document.getElementById('bhanu').value=currentInput;

}
function calculateResult() {
    try{
        const result = eval(currentInput);
        document.getElementById('bhanu').value=result;

        currentInput=result.toString();
    } catch (error) {
        document.getElementById('bhanu').value = 'Error';
        currentInput ='';
    }
}
 function clearDisplay (){
    currentInput='';
    document.getElementById('bhanu').value='';
    
 }