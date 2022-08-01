class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "English", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "yellow", "red"])
let france = new Country("France", "French", "Salut tout le monde", ["red", "blue", "white"]);
let brazil = new Country("Brazil", "Portuguese", "Olá Mundo!", ["green", "blue", "yellow"]);
let india = new Country("India", "Hindi", "Namaste Duniya!", ["orange", "white", "green"]);


function SwitchCountry() {
    let input = document.getElementById("CountryList");

    if (input.value === "USA") {    
        DisplayCountry(usa)
    }
    else if (input.value === "Mexico") {
        DisplayCountry(mexico);
    }
    else if (input.value === "Germany") {
        DisplayCountry(germany);
    }
    else if (input.value === "France") {
        DisplayCountry(france);
    }
    else if (input.value === "Brazil") {
        DisplayCountry(brazil);
    }
    else if (input.value === "India") {
        DisplayCountry(india);
    }
}
    function DisplayCountry(Country)
    {
        let colors = Country.colors;

        let color1 = document.querySelector("#Color1"); 
        color1.style.backgroundColor = colors[0]; 

        let color2 = document.querySelector("#Color2");
        color2.style.backgroundColor = colors[1];

        let color3 = document.querySelector("#Color3");
        color3.style.backgroundColor = colors[2]; 

        let countryName = document.querySelector("#CountryName");
        countryName.innerText = Country.name; 

        let officialLanguage = document.querySelector("#OfficialLanguage");
        officialLanguage.innerText = Country.lang;

        let helloWorld = document.querySelector("#HelloWorld");
        helloWorld.innerText = Country.greeting;

        // let countryFlag = document.querySelector("#CountryFlag");
        // countryFlag.setAttribute("src", "https://i.kym-cdn.com/entries/icons/mobile/000/030/157/womanyellingcat.jpg");
    }

    
