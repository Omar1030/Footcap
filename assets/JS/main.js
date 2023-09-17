/* ========== Start General Functions ========== */

// Scroll to section
function moveTo(nav_items) {
    nav_items.forEach(li => {
        li.addEventListener("click", (e) => {
            document.querySelector(`#${e.target.dataset.section}`).scrollIntoView({behavior:"smooth"});
            if (navbar.classList.contains("active") && overlay.classList.contains("active")) {
                navbar.classList.remove("active");
                overlay.classList.remove("active");
            }
        })
    })
}

// Handle active class
function addActive(items) {
    items.forEach(item => {
        item.onclick = (e) => {
            items.forEach(item => {
                item.classList.remove("active")
            })
            e.target.classList.add("active")
        }
    })
}

/* ========== End General Functions ========== */


/* ========== Start Navbar ========== */
let sections = document.querySelectorAll("section");
let header = document.querySelector(".header");
let overlay = document.querySelector(".overlay");
let menu_icon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".header .navbar");
let close_btn = document.querySelector(".header .navbar .logo .close");
let nav_items = document.querySelectorAll(".header .navbar .nav-items ul li");

// Style of Navbar
if (window.scrollY > 20) {
    header.style.cssText = "box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.1)";
}
else {
    header.style.cssText = "box-shadow: none";
}

// Style of navbar on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.style.cssText = "box-shadow: 0 2px 10px hsla(0, 0%, 0%, 0.1)";
    }
    else {
        header.style.cssText = "box-shadow: none";
    }
})

// Add active class
addActive(nav_items);

// Add active class to current nav-item's section
window.addEventListener("scroll", () => {
    sections.forEach(ele => {
        if (window.scrollY >= ele.offsetTop - 200) {
            nav_items.forEach(li => {
                if (ele.dataset.section == li.dataset.section) {                   
                    nav_items.forEach(lis => {
                        lis.classList.remove("active");
                    })
                    li.classList.add("active")
                }
            })
        }
    })
})

// Open Navbar-Menu
menu_icon.onclick = () => {
    overlay.classList.add("active");
    navbar.classList.add("active");
}

// Close Navbar-Menu
overlay.onclick = () => {
    overlay.classList.remove("active");
    navbar.classList.remove("active");
}
close_btn.onclick = () => {
    overlay.classList.remove("active");
    navbar.classList.remove("active");
}

// Scroll to section
moveTo(nav_items);
/* ========== End Navbar ========== */


/* ========== Start Cart Menu ========== */
let open_cart = document.querySelector(".header .navbar .nav-icons li:last-of-type");
let cart_menu = document.querySelector(".header .navbar .cart-menu");
let close_cart = document.querySelector(".header .navbar .cart-menu .close");
let add_to_cart = document.querySelectorAll(".bestseller .product-list .product-item .card-banner ul li:first-of-type");
let products_container = document.querySelector(".header .navbar .cart-menu .products");


// Open Cart Menu
open_cart.onclick = () => {
    cart_menu.classList.add("active")
}

// Close Cart Menu
close_cart.onclick = () => {
    cart_menu.classList.remove("active");
}

// Click icon to add product
add_to_cart.forEach(icon => {
    icon.addEventListener("click", () => {

    // products > product
    let product = document.createElement("div");
    product.classList.add("product");
    product.setAttribute("product-id", Date.now());
    products_container.appendChild(product);

    // products > product > product-img
    let product_img = document.createElement("div");
    product_img.classList.add("product-img");
    product.appendChild(product_img);

    // products > product > product-img
    let img = document.createElement("img");
    img.src = icon.parentElement.parentElement.parentElement.dataset.src;
    product_img.appendChild(img);

    // products > product > product-data
    let product_data = document.createElement("div");
    product_data.classList.add("product-data");
    product.appendChild(product_data);

    // products > product > product-data > info
    let info = document.createElement("div");
    info.classList.add("info");
    product_data.appendChild(info);
    
    // products > product > product-data > info > name
    let name = document.createElement("div");
    name.classList.add("name");
    let name_txt = document.createTextNode(icon.parentElement.parentElement.parentElement.dataset.name);
    name.appendChild(name_txt);
    info.appendChild(name);

    // products > product > product-data > info > price
    let price = document.createElement("div");
    price.classList.add("price");
    let price_txt = document.createTextNode(icon.parentElement.parentElement.parentElement.dataset.price);
    price.appendChild(price_txt);
    info.appendChild(price);
    
    // products > product > product-data > num-items
    let num_items = document.createElement("div");
    num_items.classList.add("num-items");
    product_data.appendChild(num_items);
    
    // products > product > product-data > num-items > div
    let div = document.createElement("div");
    num_items.appendChild(div);

    // products > product > product-data > num-items > div > span
    let arr = ["+", "1", "-"];
    for (let i = 0; i < 3; i++) {
        let span = document.createElement("span");
        let span_txt = document.createTextNode(arr[i]);
        span.appendChild(span_txt);
        div.appendChild(span);
    }

    // products > product > product-data > num-items > del
    let del = document.createElement("div");
    del.classList.add("del");
    num_items.appendChild(del);

    // Delete product onclick
    del.addEventListener("click", () => {
        product.remove();
    })
    
    // products > product > product-data > num-items > del > i
    let del_icon = document.createElement("i");
    del_icon.className = "fa-solid fa-trash";
    del.appendChild(del_icon);

    })
})
/* ========== End Cart Menu ========== */


/* ========== Start Bestsellers ========== */
let type_list = document.querySelectorAll(".bestseller .type-list li");
let product_list = document.querySelectorAll(".bestseller .product-list .product-item");

// Add active class
addActive(type_list);

// Show items by type
type_list.forEach(type => {
    type.addEventListener("click", e => {
        product_list.forEach(item => {
            if (e.target.textContent.toLowerCase() == "all") {
                item.classList.remove("dis-show");
            }
            else if (e.target.textContent.toLowerCase() != item.dataset.type) {
                item.classList.add("dis-show");
            }
            else {
                item.classList.remove("dis-show");
            }
        })
    })
})
/* ========== End Bestsellers ========== */


/* ========== Start Special ========== */
var swiper = new Swiper(".special-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
    320: {
        slidesPerView: 1
    },
    580: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 1
    },
    992: {
        slidesPerView: 2
    },
    1200: {
        slidesPerView: 3
    }
}
});
/* ========== End Special ========== */


/* ========== Start Instgram Links ========== */
var swiper = new Swiper(".insta-swiper", {
    slidesPerView: 3,
    freeMode: true,
    breakpoints: {
    320: {
        slidesPerView: 3
    },
    580: {
        slidesPerView: 4
    },
    768: {
        slidesPerView: 5
    },
    992: {
        slidesPerView: 6
    },
    1200: {
        slidesPerView: 8
    }
}
});
/* ========== End Instgram Links ========== */


/* ========== Scroll to up ========== */
let up = document.querySelector(".up");

// Display Up Button
window.onscroll = () => {
    if (window.scrollY > 500) {
        up.classList.add("active");
    }
    else {
        up.classList.remove("active");
    }
}

// Scroll to up
up.onclick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}
/* ========== Scroll to up ========== */




        

    



