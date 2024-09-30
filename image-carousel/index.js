let carouselContent = document.createElement('div')
let body = document.querySelector('body')
let text = document.createElement('p')
let iContents = []
let dots = []
let currentIndex = 0

text.textContent = "Merhaba"
text.style.color = "White"
carouselContent.style.width = 100
carouselContent.style.height = 100
carouselContent.style.backgroundColor = "white"
carouselContent.style.display = "flex"
carouselContent.style.justifyContent = "center"
carouselContent.append(text);

createImage("./Images/461223101.jpg")
createImage("./Images/461223102.jpg")
createImage("./Images/461223103.jpg")
createImage("./Images/461223104.jpg")
createImage("./Images/461223105.jpg")
body.append(carouselContent)

function createImage(path)
{
    let iContent = document.createElement('div')
    iContents.push(iContent)
    iContent.style.display = "none"
    let i = document.createElement('img')
    i.src = path
    iContent.append(i)
    carouselContent.append(iContent);
}

createSliderDots()
function createSliderDots()
{
    let numberOfDot = carouselContent.querySelectorAll('div').length
    let br = document.createElement('br')
    let dotContent = document.createElement('div')
    dotContent.style.textAlign = "center"
    dotContent.style.display = "flex"
    dotContent.style.justifyContent = "center"

    carouselContent.querySelectorAll('div').forEach(imgDiv => {

        let dot = document.createElement('a')
        dots.push(dot)
        dot.className = 'dot'
        dot.style.height = '15px'
        dot.style.width = '15px'
        dot.style.margin = '0 2px'
        dot.style.backgroundColor = '#bbb'
        dot.style.borderRadius = '50%'
        dot.style.display = 'inline-block'
        dot.style.transition = 'background-color 0.6s ease'

        dot.textContent = " "
        dot.addEventListener('click', function() {
            console.log(imgDiv.firstChild.src)
            iContents[currentIndex].style.display = "none"
            dots[currentIndex].style.backgroundColor = "#bbb"
            let i = iContents.indexOf(imgDiv)
            currentIndex = i
            iContents[currentIndex].style.display = "block"
            dots[currentIndex].style.backgroundColor = "#444"
            // imgDiv.style.display = "block"
            clearInterval(picTimeout)
            picTimeout = setInterval(changePic, 2000)
        })
        dot.addEventListener('mouseenter', function() {
            dot.style.backgroundColor = '#444'
        })
        dot.addEventListener('mouseleave', function() {
            if (dots.indexOf(dot) != currentIndex)
            {
                dot.style.backgroundColor = '#bbb'
            }
        })
        dotContent.append(dot,br)
    });
    body.append(br, dotContent)
    text.textContent = numberOfDot
}

let picTimeout = setInterval(changePic, 2000)

function changePic()
{
    let maxIndex = iContents.length
    let nextIndex = currentIndex + 1
    iContents[currentIndex].style.display = "none"
    dots[currentIndex].style.backgroundColor = '#bbb'
    if (nextIndex < maxIndex)
    {
        iContents[nextIndex].style.display = "block"
        currentIndex = nextIndex
    }
    else
    {
        currentIndex = 0
        iContents[0].style.display = "block"
    }
    dots[currentIndex].style.backgroundColor = '#444'
}

iContents[currentIndex].style.display = "block"
dots[currentIndex].style.backgroundColor = '#444'
