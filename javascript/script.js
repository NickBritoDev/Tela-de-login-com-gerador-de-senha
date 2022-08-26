//seleção de elementos
const generatePassButton = document.querySelector("#click-password")
const generatePassElement = document.querySelector("#generate-password")

//busca as letras minusculas
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
//busca as letras maiusculas
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//busca os numeros
const getNumber = () => {
    return Math.floor(Math.random() * 10).toString()
}

//busca os simbolos
const getSymbol = () => {
    const symbols = "(){}[]/|!@#$%¨¨&*-+=:;º?"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

//gerador de senha
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getSymbol, getNumber) => {
    let password = ""

    const passwordLength = 10

    const generators = [
        getLetterLowerCase,
        getLetterUpperCase,
        getSymbol,
        getNumber
    ]

    for(i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()

            password += randomValue
        })
    }
    password = password.slice(0, passwordLength)
    generatePassElement.style.display = "block"
    generatePassElement.querySelector("h4").innerText = password
}

//evento de click no botão "clique aqui" 
generatePassButton.addEventListener("click", () => {
    generatePassword(
        getLetterLowerCase,
        getLetterUpperCase,
        getSymbol,
        getNumber
    )
})