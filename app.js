const container = document.createElement('div')
document.body.appendChild(container)
base = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (let j = 1; j < 1026; j++) {
    const newImg = document.createElement('img')
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const label = document.createElement('span')
    label.innerText = `#${j}`;
    newImg.src = `${base}${j}.png`;
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)

}
