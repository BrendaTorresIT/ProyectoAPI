//comando predeterminado para que no ocurran errores de excepcion:

export function removeLogs() {
//importa esta funcion a tus pruebas para evitar el uncaught exception
Cypress. on('uncaught:exception',  ()  => {
return false;

});

//comando predeterminado para que no aparezcan los fetch
const origLog = Cypress. log;
Cypress. log = function (opts, ... other) {
    if (opts.displayName === 'xhr' ||  (opts.displayName === 'fetch'  && opts.url.startsWith('https://')) ) {
    return;
    }  
    
    return origLog(opts,  ...other);

}








}