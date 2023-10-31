const circles = document.querySelectorAll('circle'),
      gramConts = document.querySelectorAll('.total-eaten__li-gram'),
      percentConts = document.querySelectorAll('.total-eaten__li-percent');

function update () {
    
    let totalProteins = 0,
        totalFats = 0,
        totalCarbs = 0,
        totalNutrients = 0;
    
    userData.products.forEach(product => {
        totalProteins += +product.protein;
        totalFats += +product.fats;
        totalCarbs += +product.carbs;
    });

    const nutrientsArr = [totalProteins, totalCarbs, totalFats];

    gramConts.forEach((container, index) => {
        container.innerText = `${nutrientsArr[index]} г`;
    })


    totalNutrients = totalProteins + totalFats + totalCarbs;

    let onePercent = totalNutrients/100;
    let protPercent = totalProteins/onePercent;
    let carbPercent = totalCarbs/onePercent;
    let fatPercent = totalFats/onePercent;
    let totalPer = protPercent + carbPercent + fatPercent;

    const percentsArr = [protPercent, carbPercent, fatPercent];

    percentConts.forEach((container, index) => {
        let showedPerc;
        if (!Number.isInteger(percentsArr[index])) {
            showedPerc = percentsArr[index].toFixed(2);
        } else {
            showedPerc = percentsArr[index];
        }
        container.innerText = `(${showedPerc} %)`
    })

    circles[3].style.strokeDasharray = `0 100`;
    circles[0].style.strokeDasharray = `${protPercent} 100`;
    circles[1].style.strokeDasharray = `0 ${protPercent} ${carbPercent} 100`;
    circles[2].style.strokeDasharray = `0 ${protPercent + carbPercent} ${fatPercent} 100`;

    console.log(totalNutrients);
    if (totalNutrients === 0 || totalNutrients === undefined) {
        circles[3].style.strokeDasharray = `100 100`;
    }

}

export const updDetails = update;