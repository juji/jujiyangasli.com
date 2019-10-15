var xn,yn,zn,a,b,c;
			var centerX,centerY;
			var wratio,hratio;
			var canvas,context;
			var centerX,centerY;

			var noise = 0.005;

			var itt = 50000;
			var sample = 80;
			var currentSample = 0;
			var colorSpan = .4;
			var maxDensity=0;
			var blackBackground=10;
			var background = blackBackground|blackBackground<<8|blackBackground<<16|255<<24;
			var windowRatio = 0.15;
			var colorRange = [128,360]; //H
			var saturationRange = [100,0]; //S
			var brightnessRange = [0,100]; //V

			var colorPixel = [];
			var densityPixel = [];

			var init = function(){
				xn = 0;// + (Math.sin(Math.random()*Math.PI*2)*.1);
				yn = 0;// + (Math.sin(Math.random()*Math.PI*2)*.1);
				zn = 0;// + (Math.sin(Math.random()*Math.PI*2)*.1);
				a = 0 + (Math.sin(Math.random()*Math.PI*2)*4.5);
				b = 0 + (Math.sin(Math.random()*Math.PI*2)*4.5);
				c = 0 + (Math.sin(Math.random()*Math.PI*2)*4.5);
				//a=2.4;
				//b=2.1;
				//c=2.8;
				console.log('a: '+a);
				console.log('b: '+b);
				console.log('c: '+c);
				console.log('xn: '+xn);
				console.log('yn: '+yn);
				console.log('zn: '+zn);

				wratio = window.outerWidth*(windowRatio * window.outerHeight/window.outerWidth);
				hratio = window.outerHeight*windowRatio;
				centerX = window.outerWidth/2;
				centerY = window.outerHeight/2;

				canvas=document.getElementById("myCanvas");
				canvas.width  = window.outerWidth;
				canvas.height = window.outerHeight;

				context=canvas.getContext("2d");
				context.fillStyle = '#' + (blackBackground|(blackBackground<<8)|(blackBackground<<16)).toString(16);
				context.fillRect(0,0,canvas.width,canvas.height);
				//
				//context.putImageData(bitmap, 0, 0);

				var  n = canvas.height*canvas.width;
				for(var i=0;i<n;i++){colorPixel.push(0);densityPixel.push(0);}
				console.log(colorPixel.length);

				itterate();
				//plot();

				//
				setTimeout(function(){
					document.getElementById('box').className="active";
				},1000);
			}

			var itterate = function(){
				currentSample++;
				var initx = xn;
				for(var i=0;i<itt;i++){

					//dejong
					xn = Math.sin(a*yn) - Math.cos(b*xn);
					yn = Math.sin(a*initx) - Math.cos(b*yn);

					//add some noise
					xn += noise*Math.sin(Math.random()*Math.PI*2);
					yn += noise*Math.sin(Math.random()*Math.PI*2);

					var x = Math.round( centerX+(xn*wratio) );
					var y = Math.round( centerY+(yn*hratio) );
					var idx = ( canvas.width * y) + x;

					do{

						if(idx<0) break;
						if(idx>=colorPixel.length) break;
						colorPixel[idx] = Math.round( centerX+(initx*canvas.width*colorSpan) );
						//colorPixel[idx] += (0.5*(Math.round( centerX+(initx*canvas.width*colorSpan) ) - colorPixel[idx]));
						densityPixel[idx] += 1;

					}while(false);

					initx = xn;
				}

				//plot();
				if(currentSample<sample)
				requestAnimationFrame(itterate);
				else plot();
			}

			var plot = function(){
				var bitmap = context.createImageData(canvas.width, canvas.height);
				var buf = new ArrayBuffer(bitmap.data.length);
				var buf8 = new Uint8ClampedArray(buf);
				var data = new Uint32Array(buf);
				var index=0;
				var x,y;
				//set max density
				for(var i in densityPixel)
				if(densityPixel[i]>maxDensity) maxDensity = densityPixel[i];
				var logDensity = Math.log(maxDensity);

				for(var i in colorPixel){
					if(densityPixel[i]<=0) {
						data[i] = background;
						continue;
					}
					var logPixel = Math.log(densityPixel[i]);
					var rgb = Utils.hsvToRgb(
						Utils.map(colorPixel[i],0,canvas.width,colorRange[0],colorRange[1]),
						Utils.map(logPixel,0,logDensity,saturationRange[0],saturationRange[1]),
						Utils.map(logPixel,0,logDensity,brightnessRange[0],brightnessRange[1])
					);
					data[i] = Math.max(background,(255<<24 | rgb.b<<16 | (rgb.g << 8 ) | ( rgb.r )));
				}

				bitmap.data.set(buf8);
				context.putImageData(bitmap,0,0);
				setTimeout(function(){
					$('#overlay').addClass("hide");
					$('#box_init').addClass("hide");
					$('.box_input').removeClass("hide");
				},500);
				///requestAnimationFrame(plot);
			}

			var Utils = {};
			Utils.hsvToRgb = function(h, s, v) {
				var r, g, b;
				var i;
				var f, p, q, t;

				// Make sure our arguments stay in-range
				h = Math.max(0, Math.min(360, h));
				s = Math.max(0, Math.min(100, s));
				v = Math.max(0, Math.min(100, v));

				s /= 100; v /= 100;

				if(s == 0) {
					r = g = b = v;
					return {r:Math.round(r * 255), g:Math.round(g * 255), b:Math.round(b * 255)};
				}

				h /= 60; // sector 0 to 5
				i = Math.floor(h);
				f = h - i; // factorial part of h
				p = v * (1 - s);
				q = v * (1 - s * f);
				t = v * (1 - s * (1 - f));

				switch(i) {
					case 0:r = v;g = t;b = p;break;
					case 1:r = q;g = v;b = p;break;
					case 2:r = p;g = v;b = t;break;
					case 3:r = p;g = q;b = v;break;
					case 4:r = t;g = p;b = v;break;
					default:r = v;g = p;b = q;
				}

				return {r:Math.round(r * 255), g:Math.round(g * 255), b:Math.round(b * 255)};
			}

			Utils.blend = function(color1,color2,factor){
				if(typeof color1=='number'){
					return color1 + (factor*(color2-color1));
				}
				var f = {};
				for(var i in color1){
					f[i] = color1[i] + (factor*(color2[i]-color1[i]));
				}
				return f;
			}

			Utils.map = function(val,minv,maxv,minr,maxr,ease){
				return minr + ((val-minv)/(maxv-minv))*(maxr-minr);
			}
