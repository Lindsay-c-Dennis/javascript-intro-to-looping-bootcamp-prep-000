function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
<<<<<<< HEAD
      array.push(`"I am ${i} strange loop."`)
    }
    else
      array.push(`"I am ${i} strange loops."`)
  }
  return array
}
function whileLoop(n) {
  while (n>0) {
    console.log(--n);
  }
  return "done";
}
function maybeTrue() {
    return Math.random() >=0.5
}
function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
} 
=======
      array.push("I am $i strange loop");
    }
    else {
      array.push("I am " + i + " strange loops.")
    }
  return array
    
  }
}
>>>>>>> c65049626a934f49b3b5b2758640c72b9914033a
