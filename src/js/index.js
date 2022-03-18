// Quando clicar no pokemon da listagem, temos qu eesconder o cartao do pokemon aberto, e mostrar o cartão correspondente ao que foi selecionado na listagem!

// Para isso, vamos precisar trabalhar com 2 elementos:
// 1 - Listagem
// 2 - Cartao do pokemon

// Precisamos criar 2 variaveis no JS para trabalhar com os elements da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon =>{
    // Vamos precisa trabalhar com um evento de clique, feito pelo usuario na listagem do pokemons
    pokemon.addEventListener('click', () => {
        // Remover a classe abrto so do cartao que esta aberto
        const cartaoPokemonParaAberto = document.querySelector('.aberto')
        cartaoPokemonParaAberto.classList.remove('aberto')
        // ao clicar em um pokemon da listagem, pegamos o id desse pokemon para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // Remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // Adicionar a classe ativo no item da lista selecionado ID
        const podemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        podemonSelecionadoNaListagem.classList.add('ativo')
    })
})

