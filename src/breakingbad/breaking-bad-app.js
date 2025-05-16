



const fetchQuote = async () => {
    const res = await fetch(' https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    return data[0];
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async ( element ) => {


  

          const {quote, author} = await fetchQuote();
    
    element.innerHTML = `
    <p>${quote}</p></br>
    <p><small>${author}</small></p></br>
    <button id='btn-quote'>obtener frase</button>
    `;


    document.querySelector('#btn-quote').addEventListener('click', async () => {
          const {quote, author} = await fetchQuote();
        element.innerHTML = `
    <p>${quote}</p></br>
    <p><small>${author}</small></p></br>
    <button id='btn-quote'>obtener frase</button>
    `;
    })


}