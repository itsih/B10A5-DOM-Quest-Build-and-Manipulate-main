

function getInputFieldValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
// For StoredBalanace
function getTextFieldValueById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}
