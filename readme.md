
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById: Returns an element according to a specified ID.
     getElementsByClassName: Returns multiple elements by a class name 
     querySelector:Return the first matching element.
     querySelectorAll: return all matching element(nodelist) 
3. How do you **create and insert a new element into the DOM**?

Answer: For create element use createElement('p'), then add content using innerText, then insert using appendChild.
      
4. What is **Event Bubbling** and how does it work? ‍
   
Answer: When an event occurs on an element it first triggers inner element, then moves up to its parent elements,and continues util it reaches the root.  

6. What is **Event Delegation** in JavaScript? Why is it useful?
   
Answer:Event Delegation is a technique by Js where instead of adding separate addEventListener to multiple child elements, a single addEventListener is added to the parent element.
It useful because it uses less memory,make code simpler.

8. What is the difference between **preventDefault() and stopPropagation()** methods?
   
Answer: preventDefault(): The browser won't reload the page 
    stopPropagation(): It stop the event from moving to parent elements(bubbling).
