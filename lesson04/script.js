const variable1 = 123;
const variable2 = '123';
const variable3 = '    dgdfhfjgkjlfklghjdlgjhjfjghishuhfhufhjisodhfusdhfiushfishdfihsdihfiahfdhfudaugfiuadg    ';

function formatString(str) {
   if (typeof str !== 'string') {
    return 'Переменная не является строкой';
   } else if (str.length > 30) {
    return str.trim().slice(0, 30)+ "..."
   } else {
    return str.trim();
   }
}

console.log(formatString(variable1));
console.log(formatString(variable2));
console.log(formatString(variable3));