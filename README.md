1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   answer:  getElementById -> is used select single element with unique id
            getElementByClassName -> is used to select multiple elements with same class,it return an array like object named HTMLcollection
            querySelector -> is used to select an element which matches the first with the css selector inside the function
            querySelectorAll-> is used to select elements with css selector,,it selects all matching elements to the css selector,returns a NodeList

   
2.How do you create and insert a new element into the DOM?
  answer: The createElement() function is used to create a new html element, and appendChild() is used to insert it into the DOM.
  You can append it to any element selected using getElementById, getElementsByClassName, querySelector, or querySelectorAll.
  example ->      
      const newDiv = document.createElement('div'); 
      newDiv.textContent = "Bangladesh";
      const container = document.getElementById('container');
      container.appendChild(newDiv);

      
3. What is Event Bubbling? And how does it work?
   answer: when an event triggers on the target element first and then moves up the DOM tree, triggering listeners on parent elements.
   for example -> let's think of a button  inside a div,if we click on the button and add an alert on both,both of the alert will be triggered,because the tirggering bubbles up from child to parent.
   <div id="parent">
  <button id="child">Click me</button>
  </div>

  document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
  });

  it will print Child clicked,and then parent clicked.

4.What is Event Delegation in JavaScript? Why is it useful?
answer: It is the process of adding a single event hanlder on a parent node the handle it's childrens.it is very useful,when we need to add event listeners on multiple elements under a parent,,we can simply apply
a single event listener to the parent,and can control the dynamic behavior of the children.so number of adding listeners is reduced.


5. What is the difference between preventDefault() and stopPropagation() methods?
answer: preventDefault() -> stops the browser default action
        stopPropagation() -> stop the bubbling up of child to parent
   
