let current_display = '';

function get_display(dvalue) {
    if (dvalue === 'C') {
        current_display = '';
    } 
    else if (dvalue === '=') {
        calculateResult();
    } 
    else if (dvalue === '%') {
        current_display += '/100';
    } 
    else if (dvalue === '+/-') {
        toggleSign();
    } 
    else {
        current_display += dvalue;
    }
    
    document.querySelector('#display').value = current_display;
}

function removeLastChar() {
    if (current_display.length > 0) {
        current_display = current_display.slice(0, -1);
        document.querySelector('#display').value = current_display;
    }
}

function toggleSign() {
    if (!isNaN(current_display) && current_display !== '') {
        let numberValue = parseFloat(current_display);
        numberValue = -numberValue;
        current_display = numberValue.toString();
        document.querySelector('#display').value = current_display;
    }
}

function calculateResult() {
    try {
        current_display = eval(current_display);
        document.querySelector('#display').value = current_display;
    } catch (error) {
        current_display = 'Error';
        document.querySelector('#display').value = current_display;
    }
}
