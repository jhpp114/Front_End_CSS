
generateChart();
// Generate Chart
const ctx = document.querySelector('#myChart');

async function generateChart() {
    const csvData = await generateCSV();
    const myChart = new Chart(ctx, {
        type: 'line'
    ,   data: {
            labels: csvData[0]
        ,   datasets: [{
                label: 'Global Average Temperature'
            ,   data: csvData[1]
            ,   backgroundColor: 'rgba(255, 99, 132, 0.2)'
            ,   fill: false
            ,   pointBackgroundColor: 'rgba(255,0,255,0.1)'
            }]
        }
    });
}

// Read CSV File
async function generateCSV() {
    let Years = [];
    let Temps = [];
    let cleanDataSet = [];
    const response = await fetch('../assets/ZonAnn.Ts+dSST.csv');
    const datas = await response.text();
    const rows = datas.split('\n').slice(1);
    rows.forEach(row => {
        const data = row.split(',');
        const YEAR = data[0];
        Years.push(YEAR);
        const TEMP = data[1];
        Temps.push(parseFloat(TEMP) + 14);
        console.log(YEAR + TEMP);
    });
    cleanDataSet.push(Years);
    cleanDataSet.push(Temps);
    console.log(cleanDataSet);
    return cleanDataSet;
}