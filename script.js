const phrases = [
  "O êxito é ir de frustração a frustração sem perder a animação.",
  "É em meio a dificuldade que se encontra a oportunidade.",
  "Mesmo que algo pareça difícil, nunca desista antes de tentar.",
  "Você é o único que entende as suas dificuldades, por isso motive se a prosseguir.",
  "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso.",
  "A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis.",
  "Que os dias bons se tornem rotina, e os ruins se tornem raros.",
  "É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota.",
  "Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução.",
  "Já pensou que você já superou muitas dificuldades até aqui?"
]
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const cookie = document.querySelector(".cookie")
const back = document.querySelector(".button")

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    toggleScreen()
  }
})

function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
  if (screenTwo.classList.contains("hide")) {
    location.reload()
  }
}

function putPhrases(phrase) {
  let randomPhrase = Math.floor(Math.random() * phrase.length)
  return phrase[randomPhrase]
}

document.querySelector(".phrases").innerHTML = putPhrases(phrases)
