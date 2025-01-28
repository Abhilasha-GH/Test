const allSliderGroups = document.querySelectorAll('.slider-group');

allSliderGroups.forEach((group)=>{
  const button = group.querySelector('button');
  button.addEventListener('click', () => {
    group.classList.toggle('paused');
  })
});