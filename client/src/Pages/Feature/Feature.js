import React from 'react'
import "./feature.css"

export default function Feature() {
  return (
    <div className='basket'>
<div className="container">
  <h1 className="text1" data-src="data/im2.jpeg">Incubation</h1>
  <h1 className="text" data-src="data/im3.jpeg">Acceleration</h1>
  <h1 className="text" data-src="data/im1.jpeg">Adoption</h1>
  <img src="data/im1.jpeg" className='hover-img' alt="" />
  
  
</div>
<div className='img-sec'>
  <img src="https://tse2.mm.bing.net/th?id=OIP.BPZpy1UeDbnNMsMpQrcEAQHaFj&pid=Api&P=0" className='hover-img1' alt="" />
</div>
</div>

  )
}

let container = document.querySelector('.container');
let img = container.querySelector('.hover-img');

document.body.onmousemove = (e) =>{
  let x = e.pageX;
  let y = e.pageY;
  img.style.top = y + 'px';
  img.style.left = x + 'px';
}

container.querySelectorAll('.text').forEach(text =>{
  text.onmousemove = () =>{
    img.src = text.getAttribute('data-src');
  }
});
