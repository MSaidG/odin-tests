export default {checkEmail}

const email = document.getElementById("email")
const zipcode = document.getElementById("zipcode")
const password = document.getElementById("password")
const passwordc = document.getElementById("passwordc")
const country = document.getElementById("country")


let userPassword = ""
// let isValidToSubmit = false
// numError.style.display = "none"
// lenError.style.display = "none"
// upError.style.display = "none"
// lowError.style.display = "none"
// speError.style.display = "none"

function checkEmail()
{
    const emailError = document.querySelector("#email + span.error")
    if (!email.value.toLowerCase().match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    ))
    {
        emailError.textContent = "Please enter a valid email adress!"
        email.className = "invalid"
        return false
    }
    else
    {
        emailError.textContent = ""
        email.className = "valid"
        return true
    }
}

function checkCountry()
{
    console.log(country.log === "0")
    console.log("asdfasdfas")
    const countryError = document.querySelector("#country + span.error")
    if (country.value === "0")
    {
        countryError.textContent = "Please select your country!"
        country.className = "invalid"
        return false
    }
    else
    {
        countryError.textContent = ""
        country.className = "valid"
        return true
    }
}

function checkZipcode()
{
    const zipcodeError = document.querySelector("#zipcode + span.error")
    if (!zipcode.value.toLowerCase().match(
        /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/
    ))
    {
        zipcodeError.textContent = "Please enter a valid zip code!"
        zipcode.className = "invalid"
        return false
    }
    else
    {
        zipcodeError.textContent = ""
        zipcode.className = "valid"
        return true
    }
}

function checkPassword()
{
    const lenError = document.getElementById("error-len")
    const upError = document.getElementById("error-up")
    const lowError = document.getElementById("error-low")
    const speError = document.getElementById("error-spe")
    const numError = document.getElementById("error-num")

    if (!password.value.match(/(?=.*\d)/))
    {
        numError.textContent = "*Must contain at least one number\n"
    }
    else
    {
        numError.textContent = ""
    }

    if (!password.value.match(/(?=.*[A-Z])/))
    {
        upError.textContent = "*Must contain at least one uppercase character\n"
    }
    else
    {
        upError.textContent = ""
    }

    if (!password.value.match(/(?=.*[a-z])/))
    {
        lowError.textContent = "*Must contain at least one lowercase character\n"
    }
    else
    {
        lowError.textContent = ""
    }

    if (!password.value.match(/(?=.{12,})/))
    {
        lenError.textContent = "*Must be at least 12 character length\n"
    }
    else
    {
        lenError.textContent = ""
    }
    
    if (!password.value.match(/(?=.*[\W])/))
    {
        speError.textContent = "*Must contain at least one special character\n"
    }
    else
    {
        speError.textContent = ""
    }
    userPassword = password.value

    if (speError.textContent === "" &&
        lenError.textContent === "" &&
        lowError.textContent === "" &&
        numError.textContent === "" &&
        upError.textContent === "" 
    )
    {
        password.className = "valid"
        return true
    }
    else
    {
        password.className = "invalid"
        return false
    }

}

function confirmPassword()
{
    let passwordcError = document.querySelector("#passwordc + span.error")
    if (passwordc.value !== userPassword)
    {
        passwordcError.textContent = "Passwords are not identical!"
        passwordc.className = "invalid"
        return false
    }
    else
    {
        passwordcError.textContent = ""
        passwordc.className = "valid"
        return true
    }
}

function validateSubmit(e)
{
    let isConfirmValid = false
    let isPasswordValid = false
    let isZipcodeValid = false
    let isCountryValid = false
    let isEmailValid = false
    if (confirmPassword()) isConfirmValid = true
    if (checkPassword()) isPasswordValid = true
    if (checkZipcode()) isZipcodeValid = true
    if (checkCountry()) isCountryValid = true
    if (checkEmail()) isEmailValid = true

    if (!(isConfirmValid && isPasswordValid && isZipcodeValid && isCountryValid && isEmailValid))
    {
        e.preventDefault()
    }
}
    
email.addEventListener('focusout', () => checkEmail());
country.addEventListener('input', () => checkCountry());
zipcode.addEventListener('focusout', () => checkZipcode());
password.addEventListener('input', () => checkPassword());
passwordc.addEventListener('input', () => confirmPassword());
document.getElementById("submit").addEventListener("click", (e) => validateSubmit(e))