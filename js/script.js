console.log('javascript work!');
(function () {
	
	let canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d');
		w = canvas.width = innerWidth,
		h = canvas.height = innerHeight,
		particles = [],
		properties = {
			bgColor             : 'rgba(17, 17, 17, 1)',
			particleColor       : 'rgba(255, 40, 40, 1)',
			particleRadius      : 3,
			particleCount       : 60,
			particleMaxVelocity : 0.5
		};

	//создание в html canvas
	document.querySelector('body').appendChild(canvas);

	//изменение canvas при изменении экрана
	window.onresize = function(){
		w = canvas.width = innerWidth;
		h = canvas.height = innerHeight;
	};

	class Particle {
		constructor(){
			this.x = Math.random()*w;
			this.y = Math.random()*h;
			this.velocityX = Math.random()*(properties.particleMaxVelocity*2);// остановился!
		}

		//отрисовка частицы на canvas
		reDraw() {
			ctx.beginPath();
			ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
			ctx.closePath();
			ctx.fillStyle = properties.particleColor;
			ctx.fill();
		}
	}

	function reDrawBackground() {
		ctx.fillStyle = properties.bgColor; //цвет заливки canvas
		ctx.fillRect(0, 0, w, h); //прямоугольник
	};


	function reDrawParticles() {
		for(let i in particles) {
			particles[i].reDraw();
		}
	}

	function loop() {
		reDrawBackground();
		reDrawParticles();
		requestAnimationFrame(loop);
	};

	function init() {
		for(let i = 0 ; i < properties.particleCount ; i++) {
			particles.push(new Particle);
		}
		loop();
	};

	init();

	

}());