const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
//console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
    // check if shiftkey is down
    // AND check if they are checking the box, not UNchecking it
    let inBetween = false;
    // console.log(e);
  if(e.shiftKey && this.checked) {
  // go ahead and save this info if above criteria are met
  // loop over every single checkbox
  checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log('starting to check them inbetween')
      }
      if(inBetween) {
          checkbox.checked = true;
      }
  });
  }

  lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));