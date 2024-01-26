const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;


function handleSubmit(e){
    e.preventDefault(); /*Faz com que a página não carregue quando der submit*/ 

    if(!inputValue.value || inputValue.value < 0){
        alert('Informe um valor correto!')
        return;
    }
    else if(!selectedCurrency.value){
        alert('Escolha uma moeda!')
    }

    converter()
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueConverted = inputValue.value / 5.46;
        result.innerHTML = valueFormatter('pt-BR','EUR');
        animateResult()

    } 
    else if(selectedCurrency.value === 'dol'){
        valueConverted = inputValue.value / 4.97;
        result.innerHTML = valueFormatter('en-US','USD');
        animateResult()
    }

    else if(selectedCurrency.value === 'yuan'){
        valueConverted = inputValue.value / 0.72;
        result.innerHTML = valueFormatter('zh-tw','CNY');
        animateResult()
    }

    else if(selectedCurrency.value === 'novo'){
        valueConverted = inputValue.value / 1.34;
        result.innerHTML = valueFormatter('es-PE','PEN');
        animateResult()
    }
    else if(selectedCurrency.value === 'arg'){
        valueConverted = inputValue.value / 0.022;
        result.innerHTML = valueFormatter('es-AR','ARS');
        animateResult()
    }

    else if(selectedCurrency.value === 'chi'){
        valueConverted = inputValue.value / 0.0062;
        result.innerHTML = valueFormatter('es-CL','CLP');
        animateResult()
    }

    else if(selectedCurrency.value === 'ugo'){
        valueConverted = inputValue.value / 0.13;
        result.innerHTML = valueFormatter('es-UY','UYU');
        animateResult()
    }

    else if(selectedCurrency.value === 'col'){
        valueConverted = inputValue.value / 0.0011;
        result.innerHTML = valueFormatter('es-CO','COP');
        animateResult()
    }

    else if(selectedCurrency.value === 'mex'){
        valueConverted = inputValue.value / 0.28;
        result.innerHTML = valueFormatter('es-MX','MXN');
        animateResult()
    }

    inputValue.value = '';
    selectedCurrency.value = '';

};

function valueFormatter(locale, currency){
    const value = valueConverted.toLocaleString(`${locale}`, {style:'currency', currency: `${currency}`});

    return `<span>💰</span> ${value} <span>💰</span>`
};

function animateResult(){
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
    ], {duration: 500});
}