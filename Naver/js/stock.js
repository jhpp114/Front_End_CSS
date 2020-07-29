const STOCK_API_KEY = `bsgf0afrh5r8gpgm5png`;
// DOM Elements
const COMPANY_IMG = document.querySelector('.stock_name_img');
const COMPANY_LAST_UPDATE = document.querySelector('.stock_last_update');
const COMPANY_STOCK_OPEN = document.querySelector('.stock_open');
const COMPANY_STOCK_CLOSE = document.querySelector('.stock_close');
const COMPANY_STOCK_HIGH = document.querySelector('.stock_high');
const COMPANY_STOCK_LOW = document.querySelector('.stock_low');

// function call
generate_stock_data();

// functions 
function getCompanyName() {
    const companies = [
        'IBM'
    ,   'BA'
    ,   'BAC'
    ,   'BABA'
    ,   'AAPL'
    ];
    return companies;
};

async function generate_stock_data() {
    await Promise.all([
        // api related to low(l) high(h) open(o) current(c)
        await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${STOCK_API_KEY}`)
        // company information
    ,   await fetch(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${STOCK_API_KEY}`)
    ])
    .then(async function (responses) {
        let resultJson = [];
        for (let i = 0; i < responses.length; i++) {
            resultJson[i] = await responses[i].json();
        }
        return resultJson;
    }).then(data => {
        console.log(data);
        let company_name = data[0].name;
        let company_logo = data[0].logo;
        COMPANY_IMG.innerHTML = `<img src="${company_logo}" width="60px"> <p>Company: ${company_name}</p>`;
        
    }).catch(error => console.log(error));
}
