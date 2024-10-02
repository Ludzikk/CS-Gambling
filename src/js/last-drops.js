const items = {
	id0: {
		weapon: "M4A1-S",
		name: "M4A1-S Black Lotus",
		skin: "Black Lotus",
		color: "pink",
		imgDist: "./dist/img/weapons/rifles/m4a1-s/black-lotus.jpg",
		price: 27.15,
		id: 0,
	},
	id1: {
		weapon: "AWP",
		name: "AWP Chrome Cannon",
		skin: "Chrome Cannon",
		color: "red",
		imgDist: "./dist/img/weapons/rifles/awp/chrome-cannon.jpg",
		price: 212.41,
		id: 1,
	},
	id2: {
		weapon: "Huntsman",
		name: "Huntsman Lore",
		skin: "Lore",
		color: "gold",
		imgDist: "./dist/img/weapons/knives/huntsman/lore.jpg",
		price: 307.24,
		id: 2,
	},
	id3: {
		weapon: "AK-47",
		name: "AK-47 Slate",
		skin: "Slate",
		color: "purple",
		imgDist: "./dist/img/weapons/rifles/ak-47/slate.jpg",
		price: 10.61,
		id: 3,
	},
	id4: {
		weapon: "M4A4",
		name: "M4A4 Global Offensive",
		skin: "Global Offensive",
		color: "blue",
		imgDist: "./dist/img/weapons/rifles/m4a4/global-offensive.jpg",
		price: 27.68,
		id: 4,
	},
	id5: {
		weapon: "AWP",
		name: "AWP Safari Mesh",
		skin: "Safari Mesh",
		color: "light-blue",
		imgDist: "./dist/img/weapons/rifles/awp/safari-mesh.jpg",
		price: 2.09,
		id: 5,
	},
	id6: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Blaze",
		skin: "Blaze",
		color: "purple",
		imgDist: "./dist/img/weapons/pistols/desert-eagle/blaze.jpg",
		price: 553.19,
		id: 6,
	},
	id7: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Mudder",
		skin: "Mudder",
		color: "light-blue",
		imgDist: "./dist/img/weapons/pistols/desert-eagle/mudder.jpg",
		price: 0.32,
		id: 7,
	},
	id8: {
		weapon: "AK-47",
		name: "AK-47 Redline",
		skin: "Redline",
		color: "pink",
		imgDist: "./dist/img/weapons/rifles/ak-47/redline.jpg",
		price: 113.74,
		id: 8,
	},
	id9: {
		weapon: "Classic Knife",
		name: "Classic Knife Safari Mesh",
		skin: "Mudder",
		color: "gold",
		imgDist: "./dist/img/weapons/knives/classic/safari-mesh.jpg",
		price: 175.00,
		id: 9,
	},
	id10: {
		weapon: "Talon",
		name: "Talon Tiget Tooth",
		skin: "Mudder",
		color: "gold",
		imgDist: "./dist/img/weapons/knives/talon/tiger-tooth.jpg",
		price: 611.78,
		id: 10,
	},
};
const countItemsAmount = Object.keys(items).length;
const lastDropList = document.querySelector(".drop__list");
const dropBox = document.querySelector(".drop__box");
let dropListOrder = 0;

const setDropBoxHeight = () => {
	dropBox.style.height = lastDropList.offsetHeight + "px";
};

const createDropOnStart = () => {
	for (i = 0; i < 24; i++) {
		dropListOrder++;
		const item = document.createElement("li");
		const itemBg = document.createElement("div");
		const itemImg = document.createElement("img");
		item.classList.add("drop__item");
		itemBg.classList.add("drop__item-bg");
		itemImg.classList.add("drop__img");

		const randomItem = Math.floor(Math.random() * countItemsAmount);

		item.classList.add(items[`id${randomItem}`].color + "-drop");

		if (document.body.id === "index") {
			itemImg.setAttribute("src", items[`id${randomItem}`].imgDist);
		} else {
			itemImg.setAttribute("src", "." + items[`id${randomItem}`].imgDist);
		}

		itemImg.setAttribute("alt", items[`id${randomItem}`].name);

		item.style.order = `-${dropListOrder}`;
		item.append(itemImg, itemBg);
		lastDropList.append(item);
	}
};

const createDropAfterStart = () => {
	dropListOrder++;
	const lastDropListFirstChild = lastDropList.firstElementChild;
	const item = document.createElement("li");
	const itemBg = document.createElement("div");
	const itemImg = document.createElement("img");
	item.classList.add("drop__item");
	itemBg.classList.add("drop__item-bg");
	itemImg.classList.add("drop__img");

	const randomItem = Math.floor(Math.random() * countItemsAmount);

	item.classList.add(items[`id${randomItem}`].color + "-drop");

	if (document.body.id === "index") {
		itemImg.setAttribute("src", items[`id${randomItem}`].imgDist);
	} else {
		itemImg.setAttribute("src", "." + items[`id${randomItem}`].imgDist);
	}

	itemImg.setAttribute("alt", items[`id${randomItem}`].name);

	item.style.order = `-${dropListOrder}`;
	item.append(itemImg, itemBg);
	lastDropList.append(item);

	if (lastDropList.childElementCount > 25) {
		lastDropListFirstChild.remove();
	}
};

setInterval(() => {
	createDropAfterStart();
}, 4000);

createDropOnStart();
setDropBoxHeight();