// BUTTON EFFECT
var myAnchors = document.querySelectorAll('.menuList > li > a');
var myElements = document.querySelectorAll('.menuList > li');
var rootDiv = document.querySelector('.root');
var videoBackground = document.querySelector('video');

// Hàm thêm class active mới cho phàn tử 
function addEffect(element){
    element.classList.add('active');
}
// Hàm xóa class active cũ của mảng
function  deleteHoverEffect(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].classList.remove('active');
    }
}
// Gán sự kiện hover ( mouseover ) vào các phần tử 
for(let i = 0; i < myElements.length; i++){
    myElements[i].addEventListener('mouseover',()=>{
        deleteHoverEffect(myElements);
        addEffect(myElements[i]);
    })
}
// Gán các sự kiện khi lia chuột ra khỏi phần tử ( mouse out )
for(let i = 0; i < myElements.length; i++){
    myElements[i].addEventListener('mouseleave',()=>{
        deleteHoverEffect(myElements);
        myElements[0].classList.add('active');
    });
}  

// HIDDEN EFFECT
for(let i = 0; i < myAnchors.length; i++){ 
    myAnchors[i].addEventListener('click',function(e){
        // ngăn chặn thuộc tính mặc định chuyển trang 
        e.preventDefault();
        rootDiv.classList.add('hidden');
        videoBackground.classList.add('active_background');
        console.log(this.href);
       
        setTimeout(() => {
            window.location.href = this.href;
        },1800);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".fade-in");

    // Nếu từ trang khác quay lại, reset hiệu ứng
    if (localStorage.getItem("resetEffect") === "true") {
        localStorage.removeItem("resetEffect"); // Xóa để tránh lặp lại lần sau
        title.classList.remove("active"); // Reset trạng thái về ban đầu
        setTimeout(() => title.classList.add("active"), 10); // Kích hoạt lại hiệu ứng
    } else {
        title.classList.add("active");
    }
});