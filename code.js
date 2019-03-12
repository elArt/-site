function Rotation (){
  this.el = document.querySelector('ul');
  this.item = this.el.querySelectorAll('li');
  
  function onMouseOver(item){
          this.item = item.currentTarget;

          this.div = this.item.querySelector('div');
          this.img = this.item.querySelector('img');
          this.h4 = this.item.querySelector('h4');

          this.div.classList.add("rotate");
          this.div.style.borderColor = '#e74c3c';
          this.img.classList.add("rotate2");
          this.h4.style.color = '#e74c3c';
  }
  function onMouseOut(item){
    this.item = item.currentTarget;
    this.div = this.item.querySelector('div');
    this.img = this.item.querySelector('img');
    this.h4 = this.item.querySelector('h4');

    this.div.classList.remove("rotate");
    this.div.style.borderColor = '#e5e5e5';
    this.h4.style.color = '#6a6a6a';
    this.img.classList.remove("rotate2");


  }
  this.init = function (){
     for(var i = 0; i < this.item.length; i++){
          var item = this.item[i];
          console.log(item);
          
          item.addEventListener("mouseover", onMouseOver.bind(this));
          item.addEventListener("mouseout", onMouseOut.bind(item));
      }
  }
this.init();
}
new Rotation ();
