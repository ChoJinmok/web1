var Links = {
    setColor : function(color) {
      var aList = document.querySelectorAll('a');
      var i = 0;
      while(i < aList.length) {
        aList[i].style.color = color;
        i = i + 1;
    }
  }
}

var Body = {
  setColor : function(color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self) {
  if(self.value === 'night') {
    self.value = 'day';

    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('powderblue');
  }
  else {
    self.value = 'night';

    Body.setColor('black');
    Body.setBackgroundColor('white');
    Links.setColor('blue');
  }
}
