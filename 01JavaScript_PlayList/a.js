function playSound(e) 
    {
      const b = document.getElementById('a').innerHTML
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (!audio) return;
      if ( b === '') 
      {
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        document.getElementById('a').innerHTML = e.keyCode;
      }
      else if ( b == e.keyCode) 
      {
        key.classList.remove('playing');
        audio.pause();
        document.getElementById('a').innerHTML = '';
      }
      else
      {
        key.classList.add('playing');
        audio.currentTime = 0;
        const previous = document.querySelector(`audio[data-key="${b}"]`)
        previous.pause();
        audio.play();
        document.getElementById('a').innerHTML = e.keyCode;
      }
    };
