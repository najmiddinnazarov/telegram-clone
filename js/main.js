// let navsUlElement = document.querySelector("#navs");
// let navsContentDivElement = document.querySelector("#navContent");
let elForm = document.querySelector(".side-middle__form");
let elInput = document.querySelector(".side-middle__input");
let elList = document.querySelector(".side-middle__menu");

let elToggleBtn = document.querySelector(".side-left__search-btn");
let elSideLeftNav = document.querySelector(".side-left__nav");
elToggleBtn.addEventListener("click", function () {
	elSideLeftNav.classList.toggle("side-left__nav--open");
});
// let navs = [
// 	{
// 		id: 1,
// 		title: "Home",
// 		active: false,
// 		content: {
// 			text: "Bu home page uchun",
// 		},
// 	},
// 	{
// 		id: 2,
// 		title: "Profile",
// 		active: true,
// 		content: {
// 			text: "Bu profile page uchun",
// 		},
// 	},
// 	{
// 		id: 3,
// 		active: false,
// 		title: "Contact",
// 		content: {
// 			text: "Bu contact page uchun",
// 		},
// 	},
// ];

// function render() {
// 	navsUlElement.innerHTML = "";
// 	navs.forEach(function (nav) {
// 		let newNavElement = `
// 		<li
// 		id="${nav.id}"
// 		class="${nav.active ? "active" : ""}">
// 		<img src="img/telegram-icon.png" alt="telegram-icon" />
// 						<div class="side-left__card-info">
// 							<div class="side-left__card-title">
// 								<h4>${nav.title}</h4>
// 								<span>Jun 1, 2022</span>
// 							</div>
// 							<div class="side-left__card-subtitle">
// 								Lorem ipsum dolor sit amet.
// 							</div>
// 						</div>
// 		</li>`;
// 		navsUlElement.innerHTML += newNavElement;
// 	});
// 	let activeNav = navs.find(function (nav) {
// 		return nav.active;
// 	});

// 	navsContentDivElement.textContent = activeNav.content.text;

// 	changeActiveElement();
// }

// function changeActiveElement() {
// 	for (let nav of navsUlElement.children) {
// 		nav.addEventListener("click", function (e) {
// 			let navId = e.target.id;
// 			navId = navId - 0;

// 			navs = navs.map(function (element) {
// 				element.id === navId
// 					? (element.active = true)
// 					: (element.active = false);
// 				return element;
// 			});
// 			render();
// 		});
// 	}
// }

// render();

let tabsBtn = document.querySelectorAll(".tabs__nav-btn");
let tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains("active")) {
			tabsBtn.forEach(function (item) {
				item.classList.remove("active");
			});

			tabsItems.forEach(function (item) {
				item.classList.remove("active");
			});

			currentBtn.classList.add("active");
			currentTab.classList.add("active");
		}
	});
}

document.querySelector(".tabs__nav-btn").click();

let list = JSON.parse(window.localStorage.getItem("list")) || [];
renderItems(list);
function addItem(item) {
	let isItemExists = list.includes(item.toLowerCase());

	if (!isItemExists) {
		list.unshift(item);
		window.localStorage.setItem("list", JSON.stringify(list));
		return list;
	} else {
		return false;
	}
}

function renderItems(items) {
	elList.textContent = "";
	for (let i = 0; i < items.length; i++) {
		let elNewLi = document.createElement("li");
		elNewLi.classList.add("side-middle__menu-item");
		elNewLi.textContent = items[i];
		elList.appendChild(elNewLi);
	}
}

elForm.addEventListener("submit", function (e) {
	e.preventDefault();
	let newItem = elInput.value;
	if (newItem) {
		addItem(newItem);
		renderItems(list);
		elInput.value = "";
		elInput.focus();
	}
});
