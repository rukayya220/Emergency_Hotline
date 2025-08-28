
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans: getElementById: Returns an element according to a specified ID.
     getElementsByClassName: Returns multiple elements by a class name 
     querySelector:Return the first matching element.
     querySelectorAll: return all matching element(nodelist) 
2. How do you **create and insert a new element into the DOM**?
ans: For create element use createElement('p'), then add content using innerText, then insert using appendChild.
      
3. What is **Event Bubbling** and how does it work? ‍
ans: When an event occurs on an element it first triggers inner element, then moves up to its parent elements,and continues util it reaches the root.  

4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:Event Delegation is a technique by Js where instead of adding separate addEventListener to multiple child elements, a single addEventListener is added to the parent element.
It useful because it uses less memory,make code simpler.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: preventDefault(): The browser won't reload the page 
    stopPropagation(): It stop the event from moving to parent elements(bubbling).
