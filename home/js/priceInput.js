rangeInput = document.querySelectorAll(".range-input input");
priceInput = document.querySelectorAll(".price-input input");
progress = document.querySelector(".slider .progress");
const priceGap = 100000;
rangeInput.forEach(input =>{
    input.addEventListener("input", e => {
        // getting two ranges values and parse to numbers
        minVal = parseInt(rangeInput[0].value);
        maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap){
            if (e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap; 
            } else{
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        console.log(filter_now, FilterEle_now);
        if (filter_now === null)
        updateList({category: 'laptop',name:brand_now, [filter_now]: [FilterEle_now], minVal:[minVal], maxVal:[maxVal]});
        else updateList({category: 'laptop', name: brand_now, minVal: [minVal], maxVal: [maxVal], [filter_now]:[FilterEle_now]});
    })
    
})
// priceInput.forEach(input =>{
//     input.addEventListener("input", e => {
        
//         // getting two inputs values and parse to numbers
//         minVal = parseInt(priceInput[0].value);
//         maxVal = parseInt(priceInput[1].value);
      
//         if (maxVal - minVal >= priceGap){
//             if (e.target.className === "input-min"){
//                 rangeInput[0].value = minVal;
//                 progress.style.left = (minVal / rangeInput[0].max) * 100 + "%"; 
//             } else{
//                 rangeInput[1].value = minVal + priceGap;
//                 progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//             }
//         }
//         updateList(); 
//     })
// })