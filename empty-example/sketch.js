function setup() {
  // put setup code here
  background(255, 255, 255);
  createCanvas(displayWidth, displayHeight);
  var i;
  for (i = 0; i < 6; i++) {
     var n = Math.floor(Math.random() * 100);
     console.log("generated number: " + n);
     while (nums.includes(n)) {
      console.log("already has " + n);
      n = Math.floor(Math.random() * 100)
      console.log("new number: " + n);
     }
     nums.push(n);
  }
  centerX = displayWidth/2;
  centerY = displayHeight/2;
  side = centerX/6;
  nextMinimum = findMinimumIndex(0); 
  console.log(nextMinimum);
  swap1 = 0;
  swap = true;
  spacingFactor = side/5;
  userSelected = -1; 
  swap = false;
  // s0 = true;
  // s1 = true;
  // s2 = true
  // s3 = true;
  // s4 = true;
  // s5 = true;
  numSorted = 0;
  sqClicked = 0;
  textFont('Helvetica');
  done = false;
  fill(0, 0, 0);
  textSize(centerY/6);
  textAlign(CENTER, BOTTOM);
  text('Selection Sort', centerX, centerY/3);
}

function preload() {
  
}

var numSorted;
var nextMinimum; 
var nums = [];
var done; 
var swap; //true if reading to swap nums
var swap1; //first number in unsorted list
var swap2; //smallest number in unsorted list
var userSelected;
var centerX;
var centerY;
var side;
var spacingFactor;
var sqClicked;
var s0;
var s1;
var s2;
var s3;
var s4;
var s5;

var r_s;
var r_g;
var r_b;

function draw() {

  //the sorted vs unsorted square shit 
  noStroke();

  //green rectangle 
  fill(160, 250, 170);
  rect(centerX-side*4, centerY - side*2, side*8, side*2);

  textAlign(CENTER, BOTTOM);
  fill(0, 0, 0);
  textSize(centerY/16);
  if (numSorted == 1) {
    text('sorted', (centerX-side*4) + ((centerX-side*2.5+spacingFactor*0.5) - (centerX-side*4))/2, centerY - side*1.68);
  }
  else if (numSorted == 2) {
    text('sorted', (centerX-side*4) + ((centerX-side*1.5+spacingFactor*1.5) - (centerX-side*4))/2, centerY - side*1.68);
  }
  else if (numSorted == 3) {
    text('sorted', (centerX-side*4) + ((centerX-side*0.5+spacingFactor*2.5) - (centerX-side*4))/2, centerY - side*1.68);
  }
  else if (numSorted == 4) {
    text('sorted', (centerX-side*4) + ((centerX+side*0.5+spacingFactor*3.5) - (centerX-side*4))/2, centerY - side*1.68);
  }
  else if (numSorted == 5) {
    text('sorted', centerX, centerY - side*1.68);
  }
  //text('sorted', centerX-side*3.6, centerY - side*1.68);

  //red rectangle
  fill(255, 130, 130);
  if (numSorted == 0) {
    rect(centerX-side*4, centerY - side*2, side*8, side*2);
  }
  else if (numSorted == 1) {
    rect(centerX-side*2.5+spacingFactor*0.5, centerY - side*2, side*6.5-spacingFactor*0.5, side*2);
  }
  else if (numSorted == 2) {
    rect(centerX-side*1.5+spacingFactor*1.5, centerY - side*2, side*5.5-spacingFactor*1.5, side*2);
  }
  else if (numSorted == 3) {
    rect(centerX-side*0.5+spacingFactor*2.5, centerY - side*2, side*4.5-spacingFactor*2.5, side*2);
  }
  else if (numSorted == 4) {
    rect(centerX+side*0.5+spacingFactor*3.5, centerY - side*2, side*3.5-spacingFactor*3.5, side*2);
  }
  // else if (numSorted == 5) {
  //   rect(centerX+side*1.5+spacingFactor*4.5, centerY - side*2, side*2.5-spacingFactor*4.5, side*2);
  // }

  fill(0, 0, 0);
  textSize(centerY/16);
  textAlign(CENTER, BOTTOM);
  if (!done) {
    if (numSorted == 0) {
      text('unsorted', centerX, centerY - side*1.68);
    }
    else if (numSorted == 1) {
      text('unsorted', (centerX-side*2.5+spacingFactor*0.5) + (side*6.5-spacingFactor*0.5)/2, centerY - side*1.68);
    }
    else if (numSorted == 2) {
      text('unsorted', (centerX-side*1.5+spacingFactor*1.5) + (side*5.5-spacingFactor*1.5)/2, centerY - side*1.68);
    }
    else if (numSorted == 3) {
      text('unsorted', (centerX-side*0.5+spacingFactor*2.5) + (side*4.5-spacingFactor*2.5)/2, centerY - side*1.68);
    }
    else if (numSorted == 4) {
      text('unsorted', (centerX+side*0.5+spacingFactor*3.5) + (side*3.5-spacingFactor*3.5)/2, centerY - side*1.68);
    }
    //text('unsorted', centerX+side*3.47, centerY - side*1.68);
  }


  //squares
  noStroke();

  //square 3
  fill(219, 219, 219);
  if (numSorted < 3 && mouseX > centerX - side - spacingFactor/2 && mouseX < centerX - spacingFactor/2 &&
      mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
    fill(230, 230, 230);
  }
  if (userSelected == 2) {
    stroke('black')
    strokeWeight(4);
  }
  square(centerX - side - spacingFactor/2, centerY/1.7, side);
  noStroke();

  //square 2
  fill(219, 219, 219);
  if (numSorted < 2 && mouseX > centerX - side*2 - spacingFactor*1.5 && mouseX < centerX - side - spacingFactor*1.5 &&
      mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
    fill(230, 230, 230);
  }
  if (userSelected == 1) {
    stroke('black')
    strokeWeight(4);
  }
  square(centerX - 2*side - spacingFactor*1.5, centerY/1.7, side);
  noStroke();

  //square 1
  fill(219, 219, 219);
  if (numSorted == 0 && mouseX > centerX - side*3 - spacingFactor*2.5 && mouseX < centerX - side*2 - spacingFactor*2.5 &&
      mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
    fill(230, 230, 230);
  }
  if (userSelected == 0) {
    stroke('black')
    strokeWeight(4);
  }
  square(centerX - 3*side - spacingFactor*2.5, centerY/1.7, side);
  noStroke();

  //square 4
  fill(219, 219, 219);
  if (numSorted < 4 && mouseX > centerX + spacingFactor/2 && mouseX < centerX + side + spacingFactor/2 &&
      mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
    fill(230, 230, 230);
  }
  if (userSelected == 3) {
    stroke('black')
    strokeWeight(4);
  }
  square(centerX + spacingFactor/2, centerY/1.7, side);
  noStroke();

  //square 5
  fill(219, 219, 219);
  if (numSorted < 5 && mouseX > centerX + side + spacingFactor * 1.5 && mouseX < centerX + side * 2 + spacingFactor * 1.5 &&
      mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
    fill(230, 230, 230);
  }
  if (userSelected == 4) {
    stroke('black')
    strokeWeight(4);
  }
  square(centerX + side + spacingFactor*1.5, centerY/1.7, side);
  noStroke();

  //square 6
  fill(219, 219, 219);
  if (!done && numSorted < 6 && mouseX > centerX + side * 2 + spacingFactor * 2.5 && mouseX < centerX + side * 3 + spacingFactor * 2.5 &&
      mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
    fill(230, 230, 230);
  }
  if (userSelected == 5) {
    stroke('black')
    strokeWeight(4);
  }
  square(centerX + side*2 + spacingFactor*2.5, centerY/1.7, side); 
  noStroke();

  //writing numbers in squares
  fill(0, 0, 0); 
  textAlign(CENTER, TOP);
  textSize(centerY/6);
  text(nums[0], centerX + side/1.63 - side*1.2*3, centerY/1.55); 
  text(nums[1], centerX + side/1.63 - side*1.2*2, centerY/1.55); 
  text(nums[2], centerX + side/1.63 - side*1.2, centerY/1.55); 
  text(nums[3], centerX + side/1.63, centerY/1.55); 
  text(nums[4], centerX + side/1.63 + side*1.2, centerY/1.55); 
  text(nums[5], centerX + side/1.63 + side*1.2*2, centerY/1.55); 

  //click min text 
  fill(0, 0, 0);
  textAlign(CENTER, TOP);
  textSize(centerY/11);
  //if (!done && !swap) {
  if (done) {
    fill(255, 255, 255);
  }
  text("Click the smallest unsorted number.", centerX, centerY*1.1);
  if (done) {
    fill(0, 0, 0);
    text("Congrats! Your list is sorted.", centerX, centerY*1.1);
  }
  //}


  //swap button 
  //console.log("button code");

  //swap button
  if (swap == true) {
    if (mouseX > centerX - side*2 && mouseX < centerX + side*2 && 
        mouseY > centerY*1.25 && mouseY < centerY*1.25 + side) {
      fill(200, 200, 200);
    }
    else{
    fill(234, 234, 234);
    }
  }

  if (swap == false) {
    fill(255, 255, 255);
  }
  rect(centerX-side*2, centerY*1.25, side*4, side);
  if (swap == true) {
    fill(0, 0, 0);
  }
  textAlign(CENTER);
  textSize(centerY/16);
  if (numSorted == nextMinimum) {
    textSize(centerY/20);
    text("Already in correct position! Click to continue", centerX, centerY*1.26+side/3);
  }
  else {
    textSize(centerY/16);
    text("Swap with first unsorted number!", centerX, centerY*1.26 + side/3);
  }
  //text("Swap with first unsorted number!", centerX, centerY*1.41+side/3);

  if(userSelected != -1 && nextMinimum == userSelected) {
    drawPointers(swap1, userSelected);
  }
}

function swapLmao(i1, i2) {
  var temp = nums[i1];
  nums[i1] = nums[i2];
  nums[i2] = temp;
}

function drawVertLine(boxNum) {
  fill(0, 0, 0);
  rectMode(CENTER);
  rect(centerX-(2.5-boxNum)*spacingFactor-side*(2.5-boxNum), centerY - side*0.45, 3, centerY/12);
  rectMode(CORNER);
}

function drawHorizontalLine(box1, box2) {
  fill(0, 0, 0);
  rectMode(CORNER);
  //rect(centerX-(2.5-boxNum)*spacingFactor-side*(2.5-boxNum), centerY - side*0.45, (box2-box1)*side);
  //rect(centerX-2.5*spacingFactor-side*2.5, centerY - side*0.45+centerY/24-3, 2*side+2*spacingFactor, 3);
  if (box1 == box2) {
    rect(centerX-(2.5-box1)*spacingFactor-side*(2.5-box1), centerY - side*0.45+centerY/24-3, side/5, 3);
  }
  else {
    rect(centerX-(2.5-box1)*spacingFactor-side*(2.5-box1), centerY - side*0.45+centerY/24-3, (side+spacingFactor)*(box2-box1), 3);
  }
  // if (box1 == 0) {
  //   rect(centerX-(2.5-box1)*spacingFactor-side*2.5, centerY - side*0.45+centerY/24-3, (side+spacingFactor)*(box2-box1), 3);
  // }
  // else if (box1 == 1) {
  //   rect(centerX-spacingFactor*1.5-side*1.5, centerY - side*0.45+centerY/24-3, (side+spacingFactor)*(box2-box1), 3);
  // }
  // else if (box1 == 2) {
  //   rect(centerX-spacingFactor*0.5-side*0.5, centerY - side*0.45+centerY/24-3, (side+spacingFactor)*(box2-box1), 3);
  // }
  // else if (box1 == 3) {
  //   rect(centerX+spacingFactor*0.5+side*0.5, centerY - side*0.45+centerY/24-3, (side+spacingFactor)*(box2-box1), 3);
  // }
  // else if (box1 == 4) {
  //   rect(centerX+spacingFactor*1.5+side*1.5, centerY - side*0.45+centerY/24-3, (side+spacingFactor)*(box2-box1), 3);
  // }
  rectMode(CORNER);
}

function drawPointers(box1, box2) {
  if (box1 == box2) {
    rectMode(CENTER);
    fill(0, 0, 0);
    rect(centerX-(2.5-box1)*spacingFactor-side*(2.5-box1) - side/5, centerY - side*0.45, 3, centerY/12);
    rect(centerX-(2.5-box1)*spacingFactor-side*(2.5-box1) + side/5, centerY - side*0.45, 3, centerY/12);
    rectMode(CORNER)
    rect(centerX-(2.5-box1)*spacingFactor-side*(2.5-box1) - side/5, centerY - side*0.45+centerY/24-3, side*2/5, 3);
  }
  else {
    drawVertLine(box1);
    drawHorizontalLine(box1, box2);
    drawVertLine(box2);
  }
}

//centerX - side - spacingFactor/2, centerY/1.7, side
function mousePressed() {
  if (!done) {
    if (swap && userSelected != -1 && mouseX > centerX - side*2 && mouseX < centerX + side*2 && 
          mouseY > centerY*1.25 && mouseY < centerY*1.25 + side && swap) {
      console.log(userSelected, nextMinimum);
      if (userSelected == nextMinimum) {
        swapLmao(swap1, nextMinimum);
        numSorted++;
        nextMinimum = findMinimumIndex(numSorted);
        swap1++;

        //why the fuk this no work
        // while (swap1 == nextMinimum) {
        //   numSorted++;
        //   nextMinimum = findMinimumIndex(numSorted);
        //   swap1++;
        // }

        //incredibly good code writing practice 
        // if (swap1 == nextMinimum) {
        //   numSorted++;
        //   nextMinimum = findMinimumIndex(numSorted);
        //   swap1++;
        // }
        // if (swap1 == nextMinimum) {
        //   numSorted++;
        //   nextMinimum = findMinimumIndex(numSorted);
        //   swap1++;
        // }
        // if (swap1 == nextMinimum) {
        //   numSorted++;
        //   nextMinimum = findMinimumIndex(numSorted);
        //   swap1++;
        // }
        // if (swap1 == nextMinimum) {
        //   numSorted++;
        //   nextMinimum = findMinimumIndex(numSorted);
        //   swap1++;
        // }
        // if (swap1 == nextMinimum) {
        //   numSorted++;
        //   nextMinimum = findMinimumIndex(numSorted);
        //   swap1++;
        // }

        userSelected = -1; 
      }
        //swap = false; 
    } else if (numSorted == 0 && mouseX > centerX - side*3 - spacingFactor*2.5 && mouseX < centerX - side*2 - spacingFactor*2.5 &&
        mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
      userSelected = 0;
      //s0 = false;
    } else if (numSorted < 2 && mouseX > centerX - side*2 - spacingFactor*1.5 && mouseX < centerX - side - spacingFactor*1.5 &&
        mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
      userSelected = 1;
      //s1 = false;
    } else if (numSorted < 3 && mouseX > centerX - side - spacingFactor/2 && mouseX < centerX - spacingFactor/2 &&
        mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
      userSelected = 2; 
      //s2 = false;
    } else if (numSorted < 4 && mouseX > centerX + spacingFactor/2 && mouseX < centerX + side + spacingFactor/2 &&
        mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
      userSelected = 3; 
      //s3 = false; 
    } else if (numSorted < 5 && mouseX > centerX + side + spacingFactor * 1.5 && mouseX < centerX + side * 2 + spacingFactor * 1.5 &&
        mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
      userSelected = 4; 
      //s4 = false;
    } else if (numSorted < 6 && mouseX > centerX + side * 2 + spacingFactor * 2.5 && mouseX < centerX + side * 3 + spacingFactor * 2.5 &&
        mouseY > centerY/1.7 && mouseY < centerY/1.7 + side) {
      userSelected = 5;
     //s5 = false;
    }

    // else if (mouseX > centerX - side - spacingFactor/2 && mouse X < centerX + side + spacingFactor/2 &&
    //     mouseY > centerY/1.7 + side) {
    // }

    if (userSelected != nextMinimum && userSelected != -1) {
      //alert("that aint it chief");
      alert("That's not the minimum!");
      userSelected = -1;
    }
    console.log(userSelected, nextMinimum);
    if (userSelected == nextMinimum) {
      swap = true;
    }
    else {
      swap = false;
    }

    if (numSorted == 5) {
      done = true;
    }
  }
}

function findMinimumIndex(minIndex) {
  var i;
  var index = minIndex; 
  console.log("minIndex: " + minIndex);
  for (i = minIndex; i < 6; i++) {
    console.log(i, index);
    if (nums[i] < nums[index]) {
      index = i;
    }
  }
  return index;
}
// function alreadyFukinExistsInTheFukinArray(num) {
//   var k;
//   for (k = 0; k < 6; k++) {
//     if (num == nums[k]) {
//       return true;
//     }
//   }
//   return false;
// }
// function findMinIndex(startIndex){
//   var min = 101;
//   var i;
//   for (i = startIndex; i < 6; i++) {
//     if (nums[i] < min) {
      
//     }
//   }
// }
//
//}







//ignore this lmao
// function setup() {
//   // put setup code here
//   background(255, 255, 255);
//   createCanvas(windowWidth, windowHeight);
//   var nums = [];
//   var i;
//   for (i = 0; i < 6; i++) {
//      nums.push(Math.floor(Math.random() * 101));
//   }
// }


// function draw() {
//   //put drawing code here

//   var centerX = windowWidth;
//   var centerY = windowHeight;

//   //title
//   //stroke();
//   fill(0, 0, 0);
//   textSize(centerY/12);
//   textAlign(CENTER, BOTTOM);
//   text('INSERTION SORT', centerX/2, centerY/6);

//   //squares
//   noStroke();
//   var side = centerX/10;
//   var spacingFactor = side*1.3;
//   fill(219, 219, 219);
//   square(centerX/2 - side/2 - spacingFactor/2, centerY/3, side);
//   square(centerX/2 - side/2 + spacingFactor/2, centerY/3, side);
//   square(centerX/2 - side - spacingFactor, centerY/3, side);
//   //square(centerX/2 + side + spacingFactor, centerY/3, side);


//   // square(centerX/2 - side/2, centerY/3, side);
//   // square(centerX/2 - side/2 - spacingFactor, centerY/3, side);
//   // square(centerX/2 - side/2 + spacingFactor, centerY/3, side);
//   // square(centerX/2 - side/2 + 2 * spacingFactor, centerY/3, side);
//   // square(centerY/2 - side/2 - 2 * spacingFactor, centerY/3, side);
//   // square()
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
