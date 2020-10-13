function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 1; i < 10000; i++) { 
		let sequence = [], n = i;
		
		let r = map( i, 1, 10000, 150, 255),
			g = map( i, 1, 10000, 35, 150),
			b = map( i, 1, 10000, 35, 150);

    do {
      sequence.push(n);
      n = collatz(n);
    } while (n != 1);
    sequence.push(1);
    sequence.reverse(); 

		let len = 5, angle = 0.15;
		
    resetMatrix();
    translate(width/2, height/2);
    for (let j = 0; j < sequence.length; j++) {
      let n = sequence[j];
      if (n % 2) rotate(angle);
			else rotate(-angle);
			
      strokeWeight(3);
      stroke(r, g, b, 10);
      line(0, 0, 0, -len);
      translate(0, -len);
    }
	}
	// save()
}


function draw() {}

function collatz(n){
	if (n % 2 == 0) return n / 2;
	else return (3 * n + 1)/2;
}