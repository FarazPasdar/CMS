const data = {
   users: [
      { id: 1, name: "1 - علی محمدی", username: "ali_mohammadi", email: "ali.mohammadi@gmail.com", password: "Ali@4729" },
      { id: 2, name: "2 - سارا احمدی", username: "sara_ahmadi", email: "sara.ahmadi@yahoo.com", password: "Sara#5831" },
      { id: 3, name: "3 - امیر رضایی", username: "amir_rezaei", email: "amir.rezaei@outlook.com", password: "Amir!6942" },
      { id: 4, name: "4 - نگار کریمی", username: "negar_karimi", email: "negar.karimi@gmail.com", password: "Negar@7253" },
      { id: 5, name: "5 - محمد حسینی", username: "mohammad_hosseini", email: "m.hosseini@yahoo.com", password: "Mohammad#8364" },
      { id: 6, name: "6 - مریم موسوی", username: "maryam_mousavi", email: "maryam.mousavi@outlook.com", password: "Maryam!9475" },
      { id: 7, name: "7 - رضا اکبری", username: "reza_akbari", email: "reza.akbari@gmail.com", password: "Reza@1586" },
      { id: 8, name: "8 - فاطمه جعفری", username: "fatemeh_jafari", email: "fatemeh.jafari@yahoo.com", password: "Fatemeh#2697" },
      { id: 9, name: "9 - حسین نادری", username: "hossein_naderi", email: "hossein.naderi@outlook.com", password: "Hossein!3708" },
      { id: 10, name: "10 - زهرا صادقی", username: "zahra_sadeghi", email: "zahra.sadeghi@gmail.com", password: "Zahra@4819" },
      { id: 11, name: "11 - آرش کاظمی", username: "arash_kazemi", email: "arash.kazemi@yahoo.com", password: "Arash#5920" },
      { id: 12, name: "12 - الهام مرادی", username: "elham_moradi", email: "elham.moradi@outlook.com", password: "Elham!6031" },
      { id: 13, name: "13 - پویا رستمی", username: "pouya_rostami", email: "pouya.rostami@gmail.com", password: "Pouya@7142" },
      { id: 14, name: "14 - نازنین شریفی", username: "nazanin_sharifi", email: "nazanin.sharifi@yahoo.com", password: "Nazanin#8253" },
      { id: 15, name: "15 - کیان فرهادی", username: "kian_farhadi", email: "kian.farhadi@outlook.com", password: "Kian!9364" },
   ],

   products: [
      { id: 1, title: "1 - کفش ورزشی نایک ایر مکس", price: 3250000, slug: "nike-air-max-shoes" },
      { id: 2, title: "2 - هودی مردانه آدیداس", price: 1890000, slug: "adidas-men-hoodie" },
      { id: 3, title: "3 - ساعت هوشمند سامسونگ", price: 8750000, slug: "samsung-galaxy-watch" },
      { id: 4, title: "4 - هدفون بی‌سیم سونی", price: 5420000, slug: "sony-wireless-headphones" },
      { id: 5, title: "5 - کوله‌پشتی لپ‌تاپ شیائومی", price: 1250000, slug: "xiaomi-laptop-backpack" },
      { id: 6, title: "6 - ماوس گیمینگ لاجیتک", price: 2380000, slug: "logitech-gaming-mouse" },
      { id: 7, title: "7 - کیبورد مکانیکی ردراگون", price: 3690000, slug: "redragon-mechanical-keyboard" },
      { id: 8, title: "8 - اسپیکر بلوتوث جی‌بی‌ال", price: 4150000, slug: "jbl-bluetooth-speaker" },
      { id: 9, title: "9 - تیشرت پنبه‌ای پوما", price: 980000, slug: "puma-cotton-tshirt" },
      { id: 10, title: "10 - شلوار جین مردانه لیوایز", price: 2760000, slug: "levis-men-jeans" },
      { id: 11, title: "11 - عینک آفتابی ری‌بن", price: 4980000, slug: "rayban-sunglasses" },
      { id: 12, title: "12 - کفش پیاده‌روی اسکیچرز", price: 3450000, slug: "skechers-walking-shoes" },
      { id: 13, title: "13 - فلش مموری سن‌دیسک ۱۲۸ گیگابایت", price: 850000, slug: "sandisk-128gb-flash-drive" },
      { id: 14, title: "14 - پاوربانک انکر ۲۰۰۰۰ میلی‌آمپر", price: 2950000, slug: "anker-20000mah-powerbank" },
      { id: 15, title: "15 - مانیتور ال‌جی ۲۷ اینچ", price: 12800000, slug: "lg-27-inch-monitor" },
      { id: 16, title: "16 - میکروفون رومیزی ریزر", price: 6750000, slug: "razer-desktop-microphone" },
      { id: 17, title: "17 - دسته بازی ایکس‌باکس", price: 5290000, slug: "xbox-wireless-controller" },
      { id: 18, title: "18 - هارد اکسترنال وسترن دیجیتال", price: 4380000, slug: "wd-external-hard-drive" },
      { id: 19, title: "19 - دوربین ورزشی گوپرو", price: 19600000, slug: "gopro-action-camera" },
      { id: 20, title: "20 - تبلت سامسونگ گلکسی تب", price: 17400000, slug: "samsung-galaxy-tablet" },
   ],
};

// - Items variables
let usersToLocalStorage = data.users.map(function (user) {
   return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
   };
});
let products = data.products;
let theme = "light";

// - Get info form localstorage
usersToLocalStorage = getInfoFromLocalStorage("Users", usersToLocalStorage);
products = getInfoFromLocalStorage("Products", products);
theme = getInfoFromLocalStorage("Theme", theme);

// - Get 5 last items
let lastUsers = usersToLocalStorage.slice(-5).reverse();
let lastProducts = products.slice(-5).reverse();

// - Pagination variables
let page = 1;
let itemsPerPageNumber = 4;

// - Items per page number variables
let firstIndex = (page - 1) * itemsPerPageNumber;
let lastIndex = firstIndex + itemsPerPageNumber;
let slicedProducts = products.slice(firstIndex, lastIndex);
let slicedUsers = usersToLocalStorage.slice(firstIndex, lastIndex);


let selectedProductObj;
let selectedUserObj;

let toastInterval;

const toggleSidebarBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const lastUsersContainer = document.querySelector(".latest-users");
const lastProductsContainer = document.querySelector("#last-products-container");
const slicedProductsContainer = document.querySelector("#sliced-products-container");
const slicedUsersContainer = document.querySelector("#sliced-users-container");
const productsNumberElems = document.querySelectorAll(".products-data");
const usersNumberElem = document.querySelector(".users-data");
const modalScreen = document.querySelector(".modal-screen");
const modal = document.querySelector(".modal");
const toast = document.querySelector(".toast");
const paginationElem = document.querySelector(".pagination");
const toggleThemeBtn = document.querySelector(".theme-button");
const createProductBtn = document.querySelector("#create-product");
const createUsertBtn = document.querySelector("#create-user");

function toggleSidebarWidth() {
   sidebar.classList.toggle("open");
}

function saveInfoInLocalStorage(key, value) {
   localStorage.setItem(key, JSON.stringify(value));
}

function getInfoFromLocalStorage(key, defaultValue) {
   const localInfo = JSON.parse(localStorage.getItem(key));

   if (localInfo !== null) {
      return localInfo;
   }

   return defaultValue;
}

function showLastUsers() {
   lastUsersContainer.innerHTML = `
   <i class="ui-border top indigo"></i>
   <div class="section-header">
      <p class="section-title">جدیدترین کاربران</p>
      <!-- Redirect to /dashboard/users page -->
      <a href="./dashboard/users/" class="section-link">
         بیشتر
         <!-- Arrow(Chervon Left) -->
         <i class="fa-solid fa-chevron-left"></i>
      </a>
   </div>
   `;
   lastUsers.forEach(function (user) {
      lastUsersContainer.insertAdjacentHTML(
         "beforeend",
         `
         <article>
              <!-- user icon -->
              <span class="icon-card">
                <i class="fa-solid fa-user"></i>
              </span>
              <!-- user data -->
              <div>
                <p class="user-name">${user.name}</p>
                <p class="user-email">${user.email}</p>
              </div>
         </article>
         `,
      );
   });
}

function showProducts(products, container) {
   container.innerHTML = "";
   products.forEach(function (product) {
      container.insertAdjacentHTML(
         "beforeend",
         `
         <div class="tableRow">
                <p class="product-title">${product.title}</p>
                <p class="product-price">${product.price.toLocaleString()}</p>
                <p class="product-shortName">${product.slug}</p>
                <div class="product-manage">
                  <button class="edit-btn" onclick="showModal('edit-product', ${product.id})">
                    <!-- Edit icon -->
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="remove-btn" onclick="showModal('delete-product', ${product.id})">
                    <!-- Delete fas icon -->
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
         </div>
         `,
      );
   });
}

function showUsers() {
   slicedUsersContainer.innerHTML = "";
   slicedUsers.forEach(function (user) {
      slicedUsersContainer.insertAdjacentHTML(
         "beforeend",
         `
         <div class="tableRow">
              <p class="user-fullName">${user.name}</p>
              <p class="user-username">${user.username}</p>
              <p class="user-email">${user.email}</p>
              <p class="user-password">********</p>
              <div class="product-manage">
                <button class="edit-btn" onclick="showModal('edit-user', ${user.id})">
                  <!-- Edit icon -->
                  <i class="fas fa-edit"></i>
                </button>
                <button class="remove-btn" onclick="showModal('delete-user', ${user.id})">
                  <!-- Ban icon -->
                  <i class="fas fa-ban"></i>
                </button>
              </div>
         </div>
         `,
      );
   });
}

// function countItemsNumbers(countElem, items) {
//    countElem.innerHTML = items.length;
// }

// function showModal(operation, itemId) {
//    modalScreen.classList.remove("hidden");

//    if (operation === "edit-product") {
//       modal.innerHTML = `
//       <header class="modal-header">
//          <h3>ویرایش محصول</h3>
//          <button class="close-modal" onclick="hideModal()">
//             <i class="fas fa-times"></i>
//          </button>
//       </header>
//       <main class="modal-content">
//          <input type="text" class="modal-input" placeholder="عنوان محصول را وارد نمائید ..." id="product-title" />
//          <input type="number" class="modal-input" placeholder="قیمت محصول را وارد نمائید ..." id="product-price" />
//          <input type="text" class="modal-input" placeholder="عنوان کوتاه محصول را وارد نمائید ..." id="product-shortName" />
//       </main>
//       <footer class="modal-footer">
//          <button class="cancel" onclick="hideModal()">انصراف</button>
//          <button class="submit" onclick="editItem('Products')">تائید</button>
//       </footer>
//       `;
//       const productTitleInput = document.querySelector("#product-title");
//       const productPriceInput = document.querySelector("#product-price");
//       const productSlugInput = document.querySelector("#product-shortName");

//       selectedProductObj = products.find(function (product) {
//          return product.id === itemId;
//       });

//       if (selectedProductObj) {
//          productTitleInput.value = selectedProductObj.title;
//          productPriceInput.value = selectedProductObj.price;
//          productSlugInput.value = selectedProductObj.slug;
//       } else {
//          hideModal();
//       }
//    } else if (operation === "edit-user") {
//       modal.innerHTML = `
//       <i class="ui-border top red"></i>
//       <i class="ui-border bottom red"></i>
//      <header class="modal-header">
//          <h3>ویرایش اطلاعات کاربر</h3>
//          <button class="close-modal" onclick="hideModal()">
//             <i class="fas fa-times"></i>
//          </button>
//       </header>
//       <main class="modal-content">
//          <input type="text" class="modal-input" placeholder="نام و نام خانوادگی را وارد نمائید ..." id="user-fullName" />
//          <input type="text" class="modal-input" id="user-username" placeholder="نام کاربری را وارد نمائید ..." />
//          <input type="email" class="modal-input" id="user-email" placeholder="ایمیل را وارد نمائید ..." />
//       </main>
//       <footer class="modal-footer">
//          <button class="cancel" onclick="hideModal()">انصراف</button>
//          <button class="submit" onclick="editItem('Users')">تائید</button>
//       </footer>
//       `;

//       const userFullnameInput = document.querySelector("#user-fullName");
//       const userUserNameInput = document.querySelector("#user-username");
//       const userEmailInput = document.querySelector("#user-email");

//       selectedUserObj = usersToLocalStorage.find(function (user) {
//          return user.id === itemId;
//       });

//       if (selectedUserObj) {
//          userFullnameInput.value = selectedUserObj.name;
//          userUserNameInput.value = selectedUserObj.username;
//          userEmailInput.value = selectedUserObj.email;
//       } else {
//          hideModal();
//       }
//    } else if (operation === "delete-product") {
//       modal.innerHTML = `
//         <i class="ui-border top red"></i>
//         <i class="ui-border bottom red"></i>
//         <header class="modal-header">
//           <h3>حذف محصول</h3>
//           <button class="close-modal" onclick="hideModal()">
//             <i class="fas fa-times"></i>
//           </button>
//         </header>
//         <main class="modal-content">
//           <p class="remove-text">آیا از حذف این محصول اطمینان دارید؟</p>
//         </main>
//         <footer class="modal-footer">
//           <button class="cancel" onclick="hideModal()">انصراف</button>
//           <button class="submit" onclick="removeItem(${itemId}, products)">تائید</button>
//         </footer>
//       `;
//    } else if (operation === "delete-user") {
//       modal.innerHTML = `
//       <i class="ui-border top red"></i>
//         <i class="ui-border bottom red"></i>
//         <header class="modal-header">
//           <h3>اخراج کاربر</h3>
//           <button class="close-modal" onclick="hideModal()">
//             <i class="fas fa-times"></i>
//           </button>
//         </header>
//         <main class="modal-content">
//           <p class="remove-text">آیا از اخراج(بن) کردن این کاربر اطمینان دارید؟</p>
//         </main>
//         <footer class="modal-footer">
//           <button class="cancel" onclick="hideModal()">انصراف</button>
//           <button class="submit" onclick="removeItem(${itemId}, usersToLocalStorage)">تائید</button>
//         </footer>
//       `;
//    } else if (operation === "create-product") {
//       modal.innerHTML = `
//       <header class="modal-header">
//          <h3>ایجاد محصول</h3>
//          <button class="close-modal" onclick="hideModal()">
//             <i class="fas fa-times"></i>
//          </button>
//       </header>
//       <main class="modal-content">
//          <input type="text" class="modal-input" placeholder="عنوان محصول را وارد نمائید ..." id="product-title" />
//          <input type="number" class="modal-input" placeholder="قیمت محصول را وارد نمائید ..." id="product-price" />
//          <input type="text" class="modal-input" placeholder="عنوان کوتاه محصول را وارد نمائید ..." id="product-shortName" />
//       </main>
//       <footer class="modal-footer">
//          <button class="cancel" onclick="hideModal()">انصراف</button>
//          <button class="submit" onclick="createProduct()">تائید</button>
//       </footer>
//       `;
//    } else if (operation === "create-user") {
//       modal.innerHTML = `
//       <header class="modal-header">
//          <h3>ایجاد کاربر جدید</h3>
//          <button class="close-modal" onclick="hideModal()">
//             <i class="fas fa-times"></i>
//          </button>
//       </header>
//       <main class="modal-content">
//          <input type="text" class="modal-input" placeholder="نام و نام خانوادگی را وارد نمائید ..." id="user-fullName" />
//          <input type="text" class="modal-input" id="user-username" placeholder="نام کاربری را وارد نمائید ..." />
//          <input type="email" class="modal-input" id="user-email" placeholder="ایمیل را وارد نمائید ..." />
//       </main>
//       <footer class="modal-footer">
//          <button class="cancel" onclick="hideModal()">انصراف</button>
//          <button class="submit" onclick="createUser()">تائید</button>
//       </footer>
//       `;
//    }
// }

// function hideModal() {
//    modalScreen.classList.add("hidden");
// }

// function editItem(items) {
//    if (items === "Products") {
//       if (selectedProductObj) {
//          const productTitleInput = document.querySelector("#product-title");
//          const productPriceInput = document.querySelector("#product-price");
//          const productSlugInput = document.querySelector("#product-shortName");

//          selectedProductObj.title = productTitleInput.value;
//          selectedProductObj.price = +productPriceInput.value;
//          selectedProductObj.slug = productSlugInput.value;

//          saveInfoInLocalStorage("Products", products);

//          if (firstProductsContainer) {
//             showProducts(firstProducts, firstProductsContainer);
//          }
//          if (slicedProductsContainer) {
//             showProducts(slicedProducts, slicedProductsContainer);
//          }

//          hideModal();
//          showToast("ویرایش", "success");
//       } else {
//          showToast("ویرایش", "failed");
//       }
//    } else if (items === "Users") {
//       if (selectedUserObj) {
//          const userFullnameInput = document.querySelector("#user-fullName");
//          const userUserNameInput = document.querySelector("#user-username");
//          const userEmailInput = document.querySelector("#user-email");

//          selectedUserObj.name = userFullnameInput.value;
//          selectedUserObj.username = userUserNameInput.value;
//          selectedUserObj.email = userEmailInput.value;

//          saveInfoInLocalStorage("Users", usersToLocalStorage);

//          if (lastUsersContainer) {
//             showLastUsers();
//          }

//          if (slicedUsersContainer) {
//             showSlicedUsers();
//          }

//          showToast("ویرایش", "success");
//          hideModal();
//       } else {
//          showToast("ویرایش", "failed");
//       }
//    }
// }

// function removeItem(itemId, items) {
//    const selectedItemIndex = items.findIndex(function (item) {
//       return item.id === itemId;
//    });

//    if (selectedItemIndex !== -1) {
//       items.splice(selectedItemIndex, 1);

//       if (firstProductsContainer || slicedProductsContainer) {
//          saveInfoInLocalStorage("Products", products);
//       }

//       if (slicedUsersContainer) {
//          saveInfoInLocalStorage("Users", usersToLocalStorage);
//          slicedUsers = usersToLocalStorage.slice(firstIndex, lastIndex);
//          showSlicedUsers();
//          countItemsNumbers(usersNumberElem, usersToLocalStorage);
//       }

//       if (firstProductsContainer) {
//          firstProducts = products.slice(0, 5);
//          showProducts(firstProducts, firstProductsContainer);
//          productsNumberElems.forEach(function (productsNumberElem) {
//             countItemsNumbers(productsNumberElem, products);
//          });
//       }

//       if (slicedProductsContainer) {
//          slicedProducts = products.slice(firstIndex, lastIndex);
//          showProducts(slicedProducts, slicedProductsContainer);
//          productsNumberElems.forEach(function (productsNumberElem) {
//             countItemsNumbers(productsNumberElem, products);
//          });
//       }

//       hideModal();
//       showToast("حذف", "success");
//       if (slicedProductsContainer) {
//          makePagintion(products);
//       }
//       if (slicedUsersContainer) {
//          makePagintion(usersToLocalStorage);
//       }
//    } else {
//       hideModal();
//       showToast("حذف", "failed");
//    }
// }

// function showToast(action, condition) {
//    clearInterval(toastInterval);

//    const message = condition === "success" ? "با موفقیت انجام شد" : "با شکست مواجه شد";
//    toast.className = `toast ${condition}`;
//    toast.innerHTML = `
//       <i class="ui-border top-0"></i>
//       <span class="icon-card">
//          <span class="icon"></span>
//       </span>
//       <span class="toast-content">${action} ${message}</span>
//       <div class="process-bar">
//          <div class="process"></div>
//       </div>
//       `;

//    const processElem = document.querySelector(".process");
//    let counter = 0;
//    toastInterval = setInterval(function () {
//       counter++;

//       processElem.style.width = `${counter}%`;

//       if (counter >= 100) {
//          clearInterval(toastInterval);
//          hideToast();
//       }
//    }, 60);
// }

// function hideToast() {
//    toast.classList.add("hidden");
// }

// function makePagintion(items) {
//    const pagintionSlidesNumber = Math.ceil(items.length / itmesPerPageNumber);

//    paginationElem.innerHTML = "";
//    for (let i = 1; i < pagintionSlidesNumber + 1; i++) {
//       paginationElem.innerHTML += `<span tabindex="1" class="page ${i === page ? "active" : ""}" onclick="changePage(${i})" >${i}</span>`;
//    }
// }

// function changePage(itemId) {
//    page = itemId;
//    updatePaginationInfo();

//    if (slicedProductsContainer) {
//       showProducts(slicedProducts, slicedProductsContainer);
//       makePagintion(products);
//    }

//    if (slicedUsersContainer) {
//       showSlicedUsers();
//       makePagintion(usersToLocalStorage);
//    }
// }

// function updatePaginationInfo() {
//    itmesPerPageNumber = 4;
//    firstIndex = (page - 1) * itmesPerPageNumber;
//    lastIndex = firstIndex + itmesPerPageNumber;

//    slicedProducts = products.slice(firstIndex, lastIndex);
//    slicedUsers = usersToLocalStorage.slice(firstIndex, lastIndex);
// }

// function themeHandler() {
//    theme = theme === "dark" ? "light" : "dark";

//    document.documentElement.classList.toggle("dark", theme === "dark");

//    saveInfoInLocalStorage("Theme", theme);
// }

// function createProduct() {
//    const productTitleInput = document.querySelector("#product-title");
//    const productPriceInput = document.querySelector("#product-price");
//    const productSlugInput = document.querySelector("#product-shortName");

//    if (productTitleInput.value.trim()) {
//       const newProductObj = {
//          id: Math.floor(Math.random() * 9999),
//          title: productTitleInput.value,
//          price: +productPriceInput.value,
//          slug: productSlugInput.value,
//       };

//       products.push(newProductObj);
//       saveInfoInLocalStorage("Products", products);
//       if (firstProductsContainer) {
//          firstProducts = products.slice(0, 5);
//          showProducts(firstProducts, firstProductsContainer);
//       }
//       if (slicedProductsContainer) {
//          page = Math.ceil(products.length / itmesPerPageNumber);
//          updatePaginationInfo();
//          showProducts(slicedProducts, slicedProductsContainer);
//          makePagintion(products);
//       }

//       productsNumberElems.forEach(function (productsNumberElem) {
//          countItemsNumbers(productsNumberElem, products);
//       });
//       showToast("افزودن محصول", "success");
//    } else {
//       showToast("افزودن محصول", "failed");
//    }
//    hideModal();
// }

// function createUser() {
//    const userFullNameInput = document.querySelector("#user-fullName");
//    const userUserNameInput = document.querySelector("#user-username");
//    const userEmailInput = document.querySelector("#user-email");

//    if (userFullNameInput.value.trim()) {
//       const newUserObj = {
//          id: Math.floor(Math.random() * 9999),
//          name: userFullNameInput.value,
//          username: userUserNameInput.value,
//          email: userEmailInput.value,
//       };

//       usersToLocalStorage.push(newUserObj);
//       saveInfoInLocalStorage("Users", usersToLocalStorage);
//       if (lastUsersContainer) {
//          lastUsers = usersToLocalStorage.slice(-5).reverse();
//          showLastUsers();
//       }
//       if (slicedUsersContainer) {
//          page = Math.ceil(usersToLocalStorage.length / itmesPerPageNumber);
//          updatePaginationInfo();
//          showSlicedUsers();
//          makePagintion(usersToLocalStorage);
//       }

//       countItemsNumbers(usersNumberElem, usersToLocalStorage);
//       showToast("افزودن کاربر", "success");
//    } else {
//       showToast("افزودن کاربر", "failed");
//    }
//    hideModal();
// }




if (toggleSidebarBtn) {
   toggleSidebarBtn.addEventListener("click", toggleSidebarWidth);
}

if (lastUsersContainer) {
   showLastUsers();
}

if (lastProductsContainer) {
   showProducts(lastProducts, lastProductsContainer);
   // productsNumberElems.forEach(function (productsNumberElem) {
   //    countItemsNumbers(productsNumberElem, products);
   // });
}

if (slicedProductsContainer) {
   showProducts(slicedProducts, slicedProductsContainer);
   // makePagintion(products);
}

if (slicedUsersContainer) {
   showUsers();
   // makePagintion(usersToLocalStorage);
}

// if (usersNumberElem) {
//    countItemsNumbers(usersNumberElem, usersToLocalStorage);
// }

// productsNumberElems.forEach(function (productsNumberElem) {
//    if (productsNumberElem) {
//       countItemsNumbers(productsNumberElem, products);
//    }
// });

// if (toggleThemeBtn) {
//    toggleThemeBtn.addEventListener("click", themeHandler);
// }

// if (createProductBtn) {
//    createProductBtn.addEventListener("click", function () {
//       showModal("create-product");
//    });
// }

// if (createUsertBtn) {
//    createUsertBtn.addEventListener("click", function () {
//       showModal("create-user");
//    });
// }

// saveInfoInLocalStorage("Users", usersToLocalStorage);
// saveInfoInLocalStorage("Products", products);
// saveInfoInLocalStorage("Theme", theme);
