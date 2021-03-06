//create a class for the pokemon
//  it should have a name
//  an array of ability names,
//  string array of images
//  an array of the names of the types
//
//use ajax to get the pokemon from the api,
//  use the json to construct the pokemon
//  object, and print the information to the screen.
//  it should be formatted to be presentable,
//  and should show the images as images, not urls

console.log("Hello World");
document.getElementById('pksubmit').addEventListener('click', getPk);

function getPk(){
    const pkid = document.getElementById('pkid').value;
    fetch('https://pokeapi.co/api/v2/pokemon/'+pkid)
    .then(response => response.json())
    .then(json => implant(json));
}

// const promise = new Promise();
// promise.then(console.log).catch(console.error);

function implant(pk){
    let Poke = new Pokemon(pk.name, pk.abilities, pk.sprites, pk.types);
    let move = "";
    let poketype = "";
    for(let x= 0; x< Poke._abilities.length; x++){
        move = move + "  " + Poke._abilities[x].ability.name;
    }
    for(let y of Poke._types){
        poketype = poketype + "  " + y.type.name;
    }

    document.getElementById('pkName').innerHTML = Poke._name;
    document.getElementById('pkAbilities').innerHTML = move;
    document.getElementById('pkTypes').innerHTML = poketype;
    document.getElementById('pkImage').src = pk.sprites.front_shiny;

    console.log(Poke);
    console.log(pk);


}

class Pokemon {
    constructor(name, abilities, image, types){
        this.name = name;
        this.abilities = abilities;
        this.image = image;
        this.types = types;
    }

    get name () {
        return this.name
    }
    set name (name) {
        this._name = name;
    }

    get abilities () {
        return this.abilities
    }
    set abilities (abilities) {
        this._abilities = abilities;
    }

    get image () {
        return this.image
    }
    set image (image) {
        this._image = image;
    }

    get types () {
        return this.types
    }
    set types (types) {
        this._types = types;
    }
}


// function displayPokemons(pk){
//     let name1 = document.getElementById('pkInfo').innerHTML.pk.name;
//     let ability1 = document.getElementById('pkInfo').innerHTML.pk.abilities;
//     let image1 = document.getElementById('pkInfo').innerHTMLpk.sprin;
//     let type1 = document.getElementById('pkInfo').innerHTML.pk.type;
//     const Poke = new Pokemon(name1, ability1, image1, type1);
// }
