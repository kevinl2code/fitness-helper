const switchMetric = document.querySelector('#switch-metric')
const switchImperial = document.querySelector('#switch-imperial')
const front = document.querySelector('#front')
const back = document.querySelector('#back')

const formButtonImperial = document.querySelector('#form-btn-imperial')
const formButtonMetric = document.querySelector('#form-btn-metric')




switchMetric.addEventListener('click', (e) => {
    front.style.transform = "rotateY(-180deg)"
    back.style.transform = "rotateY(0)"
})

switchImperial.addEventListener('click', (e) => {
    front.style.transform = "rotateY(0)"
    back.style.transform = "rotateY(-180deg)"
})

formButtonImperial.addEventListener('click', (e) => {
    e.preventDefault()
    let userStats = {
        height: (parseInt(e.target.form[1].value) * 12) + parseInt(e.target.form[2].value),
        weight: parseInt(e.target.form[4].value),
        age: parseInt(e.target.form[6].value),
        sex: e.target.form[8].checked ? 'male' : 'female'
    }
    const base = document.querySelector('#base')
    const sedentary = document.querySelector('#sedentary')
    const light = document.querySelector('#light')
    const moderate = document.querySelector('#moderate')
    const heavy = document.querySelector('#heavy')
    const intense = document.querySelector('#intense')


    const returnBMR = (userStats) => {
        let bmr = 0
        if (userStats.sex === 'male') {
            bmr = (66 + (6.23 * userStats.weight) + (12.7 * userStats.height) - (6.8 * userStats.age))
        } else if (userStats.sex === 'female') {
            bmr = (655 + (4.35 * userStats.weight) + (4.7 * userStats.height) - (4.7 * userStats.age))
        }
        base.innerHTML = Math.round(bmr)
        sedentary.innerHTML = Math.round(bmr * 1.2)
        light.innerHTML = Math.round(bmr * 1.375)
        moderate.innerHTML = Math.round(bmr * 1.55)
        heavy.innerHTML = Math.round(bmr * 1.725)
        intense.innerHTML = Math.round(bmr * 1.9)
    }
    returnBMR(userStats)
})


formButtonMetric.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    let userStats = {
        height: parseInt(e.target.form[1].value),
        weight: parseInt(e.target.form[3].value),
        age: parseInt(e.target.form[5].value),
        sex: e.target.form[7].checked ? 'male' : 'female'
    }
    const base = document.querySelector('#base')
    const sedentary = document.querySelector('#sedentary')
    const light = document.querySelector('#light')
    const moderate = document.querySelector('#moderate')
    const heavy = document.querySelector('#heavy')
    const intense = document.querySelector('#intense')


    const returnBMR = (userStats) => {
        let bmr = 0
        if (userStats.sex === 'male') {
            bmr = (66 + (13.7 * userStats.weight) + (5 * userStats.height) - (6.8 * userStats.age))
        } else if (userStats.sex === 'female') {
            bmr = (655 + (9.6 * userStats.weight) + (1.8 * userStats.height) - (4.7 * userStats.age))
        }
        base.innerHTML = Math.round(bmr)
        sedentary.innerHTML = Math.round(bmr * 1.2)
        light.innerHTML = Math.round(bmr * 1.375)
        moderate.innerHTML = Math.round(bmr * 1.55)
        heavy.innerHTML = Math.round(bmr * 1.725)
        intense.innerHTML = Math.round(bmr * 1.9)
    }
    returnBMR(userStats)
})