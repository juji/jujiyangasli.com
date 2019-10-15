var canvas,context;
var Point = function(x,y){
  this.x = x;
  this.y = y;
}

var Global = {};
Global.gravity = .5;
Global.friction = 0.8;
var line = [];

let callback = null;

var DoublePendulum = function(m1,l1,a1,m2,l2,a2,center){

  // m = mass
  // l = length
  // a = accel
  // center
  
  this.l1 = l1 || 300 + (10 * (Math.random()*Math.PI*2));
  this.l2 = l2 || 500 + (10 * (Math.random()*Math.PI*2));
  this.m1 = m1 || 9;
  this.m2 = m2 || 2;
  this.a1 = a1 || Math.PI * 1.5 + Math.random() * 1;
  this.a2 = a2 || Math.PI * 1.5 + Math.random() * 1;
  
  this.center = center || {
    x: window.outerWidth-55,
    y: window.outerHeight-89
  };
  
  this.acc1 = 0;
  this.acc2 = 0;
  this.vel1 = 0;
  this.vel2 = 0;
  
  this.x1 = this.center.x + this.l1 * Math.cos(this.a1);
  this.y1 = this.center.y + this.l1 * Math.sin(this.a1);
  
  this.x2 = this.x1 + this.l2 * Math.cos(this.a2);
  this.y2 = this.y1 + this.l2 * Math.sin(this.a2);
  
  this.color = '#ff0000';
  
  
}

DoublePendulum.prototype.constructor = DoublePendulum;

DoublePendulum.prototype.draw = function(ctx){
  
  
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x1-10,this.y1-10,20,20);
  ctx.fillRect(this.x2-10,this.y2-10,20,20);
  ctx.fillRect(this.center.x-5,this.center.y-5,10,10);
  
  ctx.beginPath();
  ctx.moveTo(this.center.x,this.center.y);
  ctx.lineTo(this.x1,this.y1);
  ctx.lineTo(this.x2,this.y2);
  ctx.stroke();
  
}

DoublePendulum.prototype.update = function(){
  var g = Global.gravity;
  var ag1 = this.a1 - Math.PI/2;
  var ag2 = this.a2 - Math.PI/2;
  
  this.acc1 = -g * (2*this.m1 + this.m2) * Math.sin(ag1) - this.m2 * g * Math.sin(ag1 - 2*ag2);
  this.acc1 -= 2 * Math.sin(ag1 - ag2) * this.m2 * (Math.pow(this.vel2,2) * this.l2 + Math.pow(this.vel1,2) * this.l1 * Math.cos(ag1 - ag2));
  this.acc1 /= this.l1 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 *ag1 - 2 *ag2));
  
  this.vel1 += this.acc1;
  this.a1 += this.vel1;
  
  this.acc2 = 2 * Math.sin(ag1 - ag2);
  this.acc2 *= Math.pow(this.vel1,2) * this.l1 * (this.m1 + this.m2) + g *( this.m1 + this.m2) * Math.cos(ag1) + Math.pow(this.vel2,2) * this.l2 * this.m2 * Math.cos(ag1 - ag2);
  this.acc2 /= this.l2 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 * ag1 - 2 * ag2));
  
  this.vel2 += this.acc2;
  this.a2 += this.vel2;
  
  this.x1 = this.center.x + this.l1 * Math.cos(this.a1);
  this.y1 = this.center.y + this.l1 * Math.sin(this.a1);
  
  this.x2 = this.x1 + this.l2 * Math.cos(this.a2);
  this.y2 = this.y1 + this.l2 * Math.sin(this.a2);
  
  line.push([this.x2*1,this.y2*1]);
  
}


var pendulum,num,rot,drot,scale,dscale;
rot=0;
drot = .6 * (Math.sin(Math.random()*Math.PI)<0?-1:1);
scale = 0.1;
dscale = .6 * (Math.sin(Math.random()*Math.PI)<0?-1:1);
var anim;

//line number
var linenum = 15000;
var itt = 0;
var linelength = 200;

var draw = function(){
  //context.translate(canvas.width/2,canvas.height/2);
  
  if(line.length){
    
    context.beginPath();
    var l = line.slice(linelength*itt);
    context.moveTo(l[0][0],l[0][1]);
    for(var i in l){
      if(!i) continue;
      context.lineTo(l[i][0],l[i][1]);    
    }
    context.stroke();
    itt++;
  }
  
  for(var i=0;i<linelength;i++)
  pendulum.update();
  //pendulum.draw(context);
  
  
  if(line.length < linenum)
  anim = requestAnimationFrame(draw);
  else {
    cancelAnimationFrame(anim);
    callback && callback(canvas.toDataURL());
  }
}

function rnd(){
  return Math.round(Math.random()*255);
}

var Pendulum = function( canvas, onSrc ){
  context = canvas.getContext('2d');
  context.fillStyle='#ffffff';
  context.fillRect(0,0,window.outerWidth,window.outerWidth);

  context.shadowBlur=4;
  context.shadowColor="#eaeaea";
  context.lineWidth = 0.5;
  context.strokeStyle = '#dedede';

  Global.bound = {left:0,top:0,right:window.outerWidth,bottom:window.outerHeight};
  pendulum = new DoublePendulum();

  callback = onSrc;

  draw();
    
}

export default Pendulum