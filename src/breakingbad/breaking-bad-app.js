



const fetchQuote = async () => {
    const res = await fetch(' https://api.breakingbadquotes.xyz/v1/quotes');
    return await res.json();
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = ( element ) => {
    element.innerHTML = 'hola tonotos';

    console.log(fetchQuote())
    


}