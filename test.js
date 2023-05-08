tabSearch = getElementById("twotabseachtextbox")


function render_LaptopCategory(){
    const categoryEle = document.getElementById("product-category");
    let eleRender = "";

    LaptopCategory.forEach((i) => {
        eleRender += 
        `
            <li class = "" onclick="cateFilter('${i.cate}', this)">
                <p>${i.cate}</p>
            </li>
        `;
    });

    if (categoryEle) categoryEle.insertAdjacentHTML("beforeend", eleRender);
}

render_LaptopCategory();

function render_LaptopItems(listData){
    const listItems = document.getElementById("list_product");
    let eleRender = "";

    listData.forEach((i) => {
        eleRender += `<div class = "Laptop"> 
            <a href = "${i.link}">
                <img src = "${i.pic}">
                <div class = "infor-lap">
                    <p class = "s-cate">${i.cate}</p>
                    <p>${i.name}</p>
                    <p>${i.price}</p>
                </div>
            </a>
        </div>
        `;
    });
    if (listItems) listItems.innerHTML = eleRender;
}


function removeClassActiveItemMenu(){
    const categoryEle = document.getElementById("product-category");
    for (let i of categoryEle.children){
        i.removeAttribute("class");
    }
}
function cateFilter(cateFilter, thisEle){
    removeClassActiveItemMenu();
    thisEle.classList.add("active");
    const laptopFilter = cateFilter === "ALL" ? listLaptop : listLaptop.filter((i) => i.cate === cateFilter);
    render_LaptopItems(laptopFilter);
}

function ramFilter(thisEle){
    // console.log("hello");
    var ramFilterEle = thisEle.textContent;
    // console.log(ramFilterEle);
    removeClassActiveItemMenu();
    const laptopFilter = listLaptop.filter((i) => i.ram === ramFilterEle);
    render_LaptopItems(laptopFilter);
}

render_LaptopItems(listLaptop);

function render_FILTER(event) {
    // Lấy thẻ FILTER tương ứng với thẻ li được click
    var filter = event.currentTarget.querySelector(".FILTER");
  
    var filter_list = document.querySelectorAll(".FILTER");
    for (var i = 0; i < filter_list.length; i++) {
      if (filter_list[i] !== filter) {
        filter_list[i].style.display = "none";
      }
    }
  
    // Kiểm tra trạng thái của thuộc tính display
    if (filter.style.display === "none") {
      // Nếu đang ẩn, hiển thị thẻ FILTER
      filter.style.display = "block";
    } else {
      // Nếu đang hiển thị, ẩn thẻ FILTER
      filter.style.display = "none";
    }
}
var filter_list = document.querySelectorAll(".PRODUCT-FILTER li");
filter_list.forEach(function (filter) {
    filter.addEventListener("click", render_FILTER);
});