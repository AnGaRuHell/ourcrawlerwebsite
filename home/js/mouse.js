brand_now = null;
filter_now = null;
var tabSearch = document.getElementById("twotabsearchtextbox");
tabSearch.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { // kiểm tra nếu phím nhấn là Enter
    event.preventDefault(); // ngăn chặn trang web chuyển đến URL khác
    var textSearch = tabSearch.value.trim(); 
    tabSearch.value = ''; // đặt lại giá trị của phần tử input thành một xâu rỗng
    updateList({category: 'laptop', name:textSearch});
  }
});


let Category = [
    {
        cate: "ALL",
    },
    {
        cate: "logitech",
        img: "./image/chuot-logitech.png"
    },
    {
        cate: "razer",
        img: "./image/chuot-razer.png"
    },
    {
        cate: "dareu",
        img: "./image/chuot-dareu.png"
    },
    {
        cate: "steelseries",
        img: "./image/chuot-steelseries.png"
    },
    {
        cate: "rapoo",
        img: "./image/chuot-rapoo.png"
    },
    {
        cate: "asus",
        img: "./image/chuot-asus.png"
    },
    {
        cate: "hyperx",
        img: "./image/chuot-hyperx.png"
    },
    {
        cate: "msi",
        img: "./image/chuot-msi.png"
    },
    {
        cate: "e-dra",
        img: "./image/chuot-edra.png"
    },
    {
        cate: "havit",
        img: "./image/chuot-havit.png"
    },
    {
        cate: "pulsar",
        img: "./image/chuot-pulsar.png"
    },
    {
        cate: "corsair",
        img: "./image/chuot-corsair.png"
    },
]

function render_brand(){
    const categoryEle = document.getElementById("product-category");
    let eleRender = "";

    Category.forEach((i) => {
        if (i.cate === "ALL"){
            eleRender += 
            `
                <li class = "" onclick="cateFilter(this)">
                    <p class = "all">${i.cate}</p>
                </li>
            `;
        } else{
            eleRender += 
            `
                <li class = "" onclick="cateFilter(this)">
                    <p>${i.cate}</p>
                    <img src = "${i.img}">
                </li>
            `;
        }
    });

    if (categoryEle) categoryEle.insertAdjacentHTML("beforeend", eleRender);
}
function cateFilter(thisEle){
    removeClassActiveItemMenu();
    brand_now = thisEle.textContent.trim();

    updateList({category: 'mouse', name: brand_now});
}

function render_MouseItems(listData){
    const listItems = document.getElementById("list_product");
    let eleRender = "";

    listData.forEach((i) => {
        eleRender += `<div class = "Mouse"> 
            <a href = "${i.url}">
                <img src = "${i.image_urls}">
                <div class = "infor-lap">
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
    const brandEle = document.getElementById("product-category");
    for (let i of brandEle.children){
        i.removeAttribute("class");
    }
}

function Filter(thisEle){
  //  console.log("hello");
    var FilterEle = thisEle.textContent;
    FilterEle.trim();
    filter_now.trim();
    console.log(FilterEle, filter_now);
    removeClassActiveItemMenu();

    updateList({category: 'mouse', [filter_now]: [FilterEle]});
}
function updateNumProduct(numProduct) {
    var productsDiv = document.getElementById("num_products");
    productsDiv.innerHTML = "Có " + numProduct + " sản phẩm";
}
function updateList(dataType){
    // Gửi dữ liệu lên server
    $.ajax({
        url: '/update',
        type: 'POST',
        data: dataType,
        success: function(response) {
            render_MouseItems(response);
            updateNumProduct(response.length);
        },
        error: function(error) {
            console.log(error);
        }
    });
}
function render_FILTER(event) {
    // Lấy thẻ FILTER tương ứng với thẻ li được click
    var filter = event.currentTarget.querySelector(".FILTER");
    
    var filter_list = document.querySelectorAll(".FILTER");
    for (var i = 0; i < filter_list.length; i++) {
      if (filter_list[i] !== filter) {
        filter_list[i].style.display = "none";
      }
    }
    // var prop = filter.querySelector("p").innerHTML;
    // console.log(prop);
    
    // Kiểm tra trạng thái của thuộc tính display
    if (filter.style.display === "none") {
      // Nếu đang ẩn, hiển thị thẻ FILTER
      filter.style.display = "block";
    } else {
      // Nếu đang hiển thị, ẩn thẻ FILTER
      filter.style.display = "none";
    }
    filter_now = event.currentTarget.classList[0];
    
    
}
var filter_list = document.querySelectorAll(".PRODUCT-FILTER li");
console.log(filter_list);
filter_list.forEach(function (filter) {
    filter.addEventListener("click", render_FILTER);
});

render_brand();
updateList({category: 'mouse', name:null});

function openPanel(){
    document.getElementById("Containerpanel").style.display = "block";
}
function closePanel(){
    document.getElementById("Containerpanel").style.display = "none";
}