function myFunction() {
    let basic = document.querySelector('#basic');
    let pro = document.querySelector('#pro');
    let master = document.querySelector('#master');

    if (basic.innerHTML === "19.99") {
        basic.innerHTML = "199.99";
    } else {
        basic.innerHTML = "19.99";
    }

    if (pro.innerHTML === "24.99") {
        pro.innerHTML = "249.99";
    } else {
       pro.innerHTML = "24.99";
    }

    if (master.innerHTML === "39.99") {
        master.innerHTML = "399.99";
    } else {
        master.innerHTML = "39.99";
    }

  } 
  
  myFunction()