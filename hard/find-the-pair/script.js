const gameTime = 120;
    let listener, restartTimeout, isFill, timer;
    let timeToGame = gameTime;
    let isPaused = false;
    const game = () => {
      clearInterval(timer);
      const winOrLoseTheGame = (time) => {
        if (document.querySelectorAll('.card-hidden').length === 12 && time > 0) {
          clearInterval(timer);
          timeToGame = 0;
          document.querySelector('.overlay h1').innerHTML = 'you win the game';
          document.querySelector('.overlay-container span').innerHTML = '';
          document.querySelector('.overlay button').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 501.28 501.28" style="enable-background:new 0 0 501.28 501.28" xml:space="preserve"><path style="fill:#ffcd00" d="m501.28 194.37-166.02-35.04-84.62-147.06v407.5l154.9 69.24-17.98-168.72z"/><path style="fill:#ffda44" d="M166.02 159.33 0 194.37l113.72 125.92-17.98 168.72 154.9-69.24V12.27z"/></svg>
          `;
          document.querySelector('.overlay').classList.remove('overlay-close');
          document.querySelectorAll('.card').forEach(card => {
            restartTimeout = setTimeout(() => {
              card.remove();
              document.querySelector('.overlay').innerHTML = '';
              document.querySelector('.overlay').insertAdjacentHTML('beforeend', `
                  <h1>find the pair game</h1>
                  <div class="overlay-container">
                    <span>Click to start <br> the game</span>
                    <button class="start-btn"><svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="start-btn"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3l1.166-.624 8 5.333v1.248l-8 5.334-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z" fill="rgb(38, 123, 138)" class="start-btn" />
                    </svg></button>
                  </div>
                `);
              document.querySelector('.overlay').classList.add('overlay-close');
              timeToGame = gameTime;
              game();
            }, 2000);
          })
        } else if (document.querySelectorAll('.card-hidden').length === 12 && time <= 0) {
          clearInterval(timer);
          timeToGame = 0;
          document.querySelector('.overlay h1').innerHTML = 'you win the game';
          document.querySelector('.overlay-container span').innerHTML = '';
          document.querySelector('.overlay button').innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 501.28 501.28" style="enable-background:new 0 0 501.28 501.28" xml:space="preserve"><path style="fill:#ffcd00" d="m501.28 194.37-166.02-35.04-84.62-147.06v407.5l154.9 69.24-17.98-168.72z"/><path style="fill:#ffda44" d="M166.02 159.33 0 194.37l113.72 125.92-17.98 168.72 154.9-69.24V12.27z"/></svg>
        `;
          document.querySelector('.overlay').classList.remove('overlay-close');
          document.querySelectorAll('.card').forEach(card => {
            restartTimeout = setTimeout(() => {
              card.remove();
              document.querySelector('.overlay').innerHTML = '';
              document.querySelector('.overlay').insertAdjacentHTML('beforeend', `
                  <h1>find the pair game</h1>
                  <div class="overlay-container">
                    <span>Click to start <br> the game</span>
                    <button class="start-btn"><svg width="40px" height="40px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="start-btn"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 3l1.166-.624 8 5.333v1.248l-8 5.334-1.166-.624V3zm1.5 1.401v7.864l5.898-3.932L5.75 4.401z" fill="rgb(38, 123, 138)" class="start-btn" />
                    </svg></button>
                  </div>
                `);
              document.querySelector('.overlay').classList.add('overlay-close');
              timeToGame = gameTime;
              game();
            }, 2000);
          })
        } else if (document.querySelectorAll('.card-hidden').length < 12 && time <= 0) {
          clearInterval(timer);
          timeToGame = 0;
          document.querySelector('.overlay').innerHTML = '';
          document.querySelector('.overlay').insertAdjacentHTML('beforeend', `
            <h1>you lose the game</h1>
            <div class="overlay-container">
              <span>Click <a href="#" class="reload-game">HERE</a> to restart the game</span>
              <button class="reload-btn"><svg width="40px" height="40px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" class="reload-btn">
              <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              transform="matrix(0 1 1 0 2.5 2.5)" class="reload-btn">
                <path
                d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" class="reload-btn" />
                <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" class="reload-btn" />
              </g>
            </svg></button>
            </div>
          `);
          document.querySelector('.overlay').classList.remove('overlay-close');
            document.querySelectorAll('.card').forEach(card => {
              restartTimeout = setTimeout(() => {
                timeToGame = gameTime;
                document.addEventListener('click', (e) => {
                  if (e.target.matches('.restart-game') || e.target.matches('.reload-btn')) {
                    e.preventDefault();
                    document.querySelector('.overlay').classList.add('overlay-close');
                    card.remove();
                    game();
                  }
                })
              }, 2000);
            })
        }
      }
      const time = (time) => {
        timer = setInterval(() => {
          if (!isPaused) {
            const seconds = time % 60;
            const minutes = time / 60 % 60;
            const preNumber = num => {
              if (num < 10) {
                return `0${num}`;
              } else {
                return num;
              }
            };
            if (time <= 0) {
              winOrLoseTheGame(time);
            } else {
              document.getElementById('timer-minutes').innerHTML = preNumber(Math.trunc(minutes));
              document.getElementById('timer-seconds').innerHTML = preNumber(seconds);
              winOrLoseTheGame(time);
            }
            --time;
          }
        }, 1000)
      }
      const restartGame = (e) => {
        clearTimeout(restartTimeout);
        const target = e.target;
        if (target.matches('.restart-btn')) {
          document.querySelectorAll('.card').forEach(card => {
            card.classList.add('card-restart');
            restartTimeout = setTimeout(() => {
              card.remove();
              clearInterval(timer);
              timeToGame = gameTime;
              time(timeToGame);
              game();
            }, 2000);
          })
        }
      } 
      function shuffle(max, min, array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (max - min + 1)) + min;
          let t = array[i];
          array[i] = array[j];
          array[j] = t;
        }
        return array;
      }
      const res = shuffle(0, 6, [6, 5, 4, 3, 2, 1]).concat(shuffle(0, 6, [1, 2, 3, 4, 5, 6]));
      isFill = document.querySelector('.card-container').children.length;
      if (isFill) {
        if(document.querySelector('.card-restart')) {
          document.querySelectorAll('.card-restart').forEach(elem => {
            elem.remove();
          })
        } else if (document.querySelectorAll('.card') && timeToGame !== +document.getElementById('timer-seconds').textContent.substring(1,)) {
          document.querySelectorAll('.card').forEach(elem => {
            elem.remove();
          })
          game();
        }
        return;
      } else {
        res.forEach(elem => {
          document.querySelector('.card-container').insertAdjacentHTML('beforeend', `
            <div class="card">
              <div class="card-front">
              </div>
              <div class="card-back">
                <img src="card-img_0${elem}.png" alt=""/>
              </div>
            </div>
          `);
        })
        clearInterval(timer);
        time(timeToGame);
      }
      let flipBackTimeout;
      const clearFlipBack = () => {
        clearTimeout(flipBackTimeout);
      }
      let clicks = 0;
      let firstElem, secondElem;
      const reset = () => {
        firstElem = null;
        secondElem = null;
        clicks = 0;
      }
      listener = (e) => {
        if (e.target.matches('.card-front')) {
          const doFlip = () => {
            const target = e.target.closest('.card');
            const front = target.querySelector('.card-front');
            const back = target.querySelector('.card-back');
            if (front) {
              front.classList.add('card-front-rotate');
            }
            if (back) {
              back.classList.add('card-back-rotate');
            }
            const flipBack = () => {
              flipBackTimeout = setTimeout(() => {
                front.classList.remove('card-front-rotate');
                back.classList.remove('card-back-rotate');
              }, 2000);
              if (firstElem) {
                if (secondElem) {
                  if (firstElem.querySelector('.card-back img').getAttribute('src').substring(10, 11) === secondElem.querySelector('.card-back img').getAttribute('src').substring(10, 11)) {
                    firstElem.classList.add('card-hidden');
                    secondElem.classList.add('card-hidden');
                  }
                }
              }
            }
            flipBack();
          }
          clicks++;
          if (clicks <= 1 && clicks < 2) {
            firstElem = e.target.closest('.card');
            doFlip();
          } else if (clicks === 2) {
            secondElem = e.target.closest('.card');
            doFlip();
          } else if (clicks > 2) {
            reset();
          }
        } else if (e.target.matches('.start-btn')) {
          document.querySelector('.overlay').classList.add('overlay-close');
          document.querySelector('.overlay span').innerHTML = 'Click to start <br> the game';
          isPaused = false;
        } else if (e.target.matches('.pause-btn')) {
          document.querySelector('.overlay span').innerHTML = 'Click to continue <br> the game';
          document.querySelector('.overlay').classList.remove('overlay-close');
          isPaused = true;
          game();
        }
      }
      document.addEventListener('click', listener);
      document.addEventListener('click', restartGame);
      clearFlipBack();
    }
    document.addEventListener('click', (e) => {
      if (e.target.matches('.start-btn')) {
        document.querySelector('.overlay').classList.add('overlay-close');
        game();
      }
    })