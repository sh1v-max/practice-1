const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputField = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressLabel = document.querySelector('.progress-label') 
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


const allQuotes = [
  'Raise the bar by completing your goals!',
  'Well begun is half done!',
  'Just a Step away, keep going!',
  'Whoa! You just completed all the goals, time for chill :D',
]


// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//   first: {
//     name: '',
//     completed: false,
//   },
//   second: {
//     name: '',
//     completed: false,
//   },
//   third: {
//     name: '',
//     completed: false,
//   },
// }

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length
// see the reference image for help

progressValue.style.width = `${completedGoalsCount / inputField.length * 100}%`
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputField.length} completed`
progressLabel.innerText = allQuotes[completedGoalsCount]

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputField].every(function (input) {
      return input.value
    })

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle('completed')

      progressValue.style.width = '33.333%'
      const inputId = checkBox.nextElementSibling.id //selecting the id of the input field
      allGoals[inputId].completed = !allGoals[inputId].completed
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length

      progressValue.style.width = `${completedGoalsCount / inputField.length * 100}%`
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/${inputField.length} completed`
      progressLabel.innerText = allQuotes[completedGoalsCount]
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
    } else {
      // errorLabel.style.display = 'block'
      progressBar.classList.add('show-error')
    }
  })
})

inputField.forEach((input) => {
  if(allGoals[input.id]){
    input.value = allGoals[input.id].name

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add('completed')
    }
  }

  input.addEventListener('focus', () => {
    progressBar.classList.remove('show-error')
  })

  input.addEventListener('input', (e) => {
    if (allGoals[input.id] && allGoals[input.id].completed) {
      input.value = allGoals[input.id].name
      // reset input value to the original goal name if complete
      return
      // exit the function early. no further code is executed
    }

    // it the goal is not completed. update the goal name and store it in local storage
    if(allGoals[input.id]){
      allGoals[input.id].name = input.value
    }else{
      allGoals[input.id] = {
        name: input.value,
        completed: false,
      }
    }
    
    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
})
