const drop = document.querySelector('button')
const ballContainer = document.querySelector('.ball_container')
const sumDisplay = document.querySelector('.sum')
const scoreDisplay = document.querySelector('.score')

let sum = 0
let score = 0

const insertABall = (color) => {
    const ball = document.createElement('div')
    ball.classList.add('ball', color)
    const ballColor = document.createTextNode(color); // dev
    // ball.appendChild(ballColor);
    ballContainer.appendChild(ball)
}

drop.addEventListener('click', () => {
    // The drop button fires a JSON request, sends down the number of balls,
    (async () => {
        const res = await fetch(`http://localhost:3000/`+sum+'?score='+score, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        const nextball = await res.json();
        switch (nextball.sum) {
            case 2:
                // insertABall('green ')
                insertABall(nextball.color)
                // score += 3
                break
    
            case 4:
                insertABall(nextball.color)
                break
    
            case 14:
                insertABall(nextball.color)
                break
    
            default:
                insertABall(nextball.color)
            }


        sum = nextball.sum
        score = nextball.score
        console.log('nextball', nextball);
        sumDisplay.innerHTML ='sum: '+ sum
        scoreDisplay.innerHTML = 'score: '+score
        // console.log('sum:', sum)
        // console.log('score: ',score)
    })();

     
    // sumDisplay.innerHTML ='sum: '+ sum
    // scoreDisplay.innerHTML = 'score: '+score
    // console.log('sum:', sum)
    // console.log('score: ',score)
})