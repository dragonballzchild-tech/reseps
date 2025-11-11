const menuData = {
    pizza: [
        {
            name: "Pizza Margherita",
            desc: "Tomatensauce, Mozarella, Basilikum, Oliven, Kapern",
            price: "11,20 €",
            img: "https://mlvtowmmyhok.i.optimole.com/cb:LKhg.615/w:auto/h:auto/q:mauto/ig:avif/https://perfettocheese.id/wp-content/uploads/2025/02/Artikel-3_Resep-Pizza-Margherita-scaled.jpg"
        },
        {
            name: "Pizza Tonno",
            desc: "Tomatensauce, Oregano, Sardellen, Knoblauch, Oliven",
            price: "9,50 €",
            img: "https://omd-com-files.ams3.digitaloceanspaces.com/wp-content/uploads/2017/09/Pizza-tonno.jpg"
        },
        {
            name: "Pizza Salame",
            desc: "Tomatensauce, Mozarella, Salami, Oliven, Kapern",
            price: "9,40 €",
            img: "https://i1.wp.com/www.piccolericette.net/piccolericette/wp-content/uploads/2017/06/3236_Pizza.jpg?fit=1216%2C616&ssl=1"
        }
    ],
    pasta: [
        {
            name: "Spaghetti Bolognese",
            desc: "Mit hausgemachter Tomaten-Hackfleischoße",
            price: "8,90 €",
            img: "https://asset.kompas.com/crops/eWh25QLGaUd83ZfRO6yvdxwygKg=/0x22:968x667/1200x800/data/photo/2023/06/02/64793cbdad978.jpg"
        },
        {
            name: "Penne al Pesto",
            desc: "Mit BNasilikum-Pesto und Pinienkernen",
            price: "8,50 €",
            img: "https://image.idn.media/post/20230106/nerfee-mirandilla-cbrhiz8xhas-unsplash-e717f2af04facf2f678315c7790d6a7f.jpg"
        }
    ],
    meat: [
        {
            name: "Rinderfilet",
            desc: "Mit Rotweinsauce und Gemüse",
            price: "17,90 €",
            img: "https://www.eatclub.de/wp-content/uploads/2022/12/rinderfilet-in-rotweinsauce.jpg"
        }
    ],
    fish: [
        {
            name: "Gegrillter Lachs",
            desc: "Mit Zitronenbutter und kräutern",
            price: "15,90 €",
            img: "https://www.laux-deli.de/media/d6/98/9e/1655115030/16257-161492-2515528-gegrillter-lachs-dill-r.jpeg?ts=1745570789"
        }
    ]
};

// Render default (pizza)
const container = document.getElementById("menu-container");
function renderMenu(category) {
    container.innerHTML = "";
    menuData[category].forEach(item => {
        const dish = document.createElement("div");
        dish.classList.add("menu-item");
        dish.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div calss="price">${item.price}</div>
        `;
        container.appendChild(dish);
    });
}

// Tab click logic
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        renderMenu(tab.dataset.category);
    });
});

// Default View
renderMenu("pizza");



