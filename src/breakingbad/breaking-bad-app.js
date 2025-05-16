



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
    
    element.innerHTML = `
    <div id='quote'></div>
    <button id='btn-quote'>obtener frase</button>
    `;

    const divQuote =  document.querySelector('#quote');
    document.querySelector('#btn-quote').addEventListener('click', async () => {
        const {quote, author} = await fetchQuote();
        divQuote.innerHTML = `
            <p>${quote}</p></br>
            <p><small>${author}</small></p></br>
        `;
    })


}