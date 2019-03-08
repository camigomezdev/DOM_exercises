
# DOM

### Instructions

1. Fork and clone this repo.

2. Open the index.html on your browser.

3. Check what the code does and understand it.

4. Do the suggested exercises.

## Exercises

### DOM Manipulation

:memo: Implement the following features:

- :mag: Show all the countries with their capitals.

- :book: Show a random country and its information

- :heavy_plus_sign: Add a country. _**extra** points if it is though user input._

- :heavy_minus_sign: Delete a country. _**extra** points if it is though a click action._

- :heavy_check_mark: Change the color of an element on click.

- :nail_care: Add styles.

### CSS Excercises
Apply styles:

For all the document
- Include the font Gill Sans.

For the list container
- Make 5 columns for the children elements.
- The children elements should ocupy the 100% of the window width.

For all the elements from the list
- Margin in all sides of 2 pixels.
- Gray background.
- The text color must be white.
- Height of 50 pixels.
- Centered text, vertically and horizontally.

For only the odd elements
- Gold background color.

Just for Colombia and Jamaica
- Red background color.


### Resources

Here are some resources that may be useful to help you complete this exercise.

**getElementById**
The getElementById() method returns the element that has the ID attribute with the specified value. _reference:_  [W3schools getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
  
**getElementsByTagName**
The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as a NodeList object. _reference:_  [W3schools getElementsByTagName](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp)

**getElementsByClassName**
The getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object._reference:_  [W3schools getElementsByClassName](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp)
  
**innerHTML**
The innerHTML property sets or returns the HTML content (inner HTML) of an element. _reference:_  [W3schools innerHTML](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

**innerText**
The innerText property sets or returns the text content of the specified node, _and all its descendants_. _reference:_  [W3schools innerText](https://www.w3schools.com/jsref/prop_node_innertext.asp)

**createElement**
The createElement() method creates an Element Node with the specified name. _reference:_  [W3schools createElement](https://www.w3schools.com/jsref/met_document_createelement.asp)
  
**appendChild**
The appendChild() method appends a node as the last child of a node. _reference:_  [W3schools appendChild](https://www.w3schools.com/jsref/met_node_appendchild.asp)
  
**removeChild**
The removeChild() method removes a specified child node of the specified element.  _reference:_  [W3schools removeChild](https://www.w3schools.com/jsref/met_node_removechild.asp)
  
**parentNode**
The parentNode property returns the parent node of the specified node, as a Node object. _reference:_  [W3schools parentNode](https://www.w3schools.com/jsref/prop_node_parentnode.asp)
 
**eventListeners**
Event listeners are handlers which trigger functions upon certain events happening in the DOM. _reference:_  [W3schools eventListeners](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

The addEventListener() method attaches an event handler to the specified element._reference:_  [W3schools addEventListener](https://www.w3schools.com/jsref/met_element_addeventlistener.asp)
  

### Some extra info about the code

**_NOTE:_**
_This code is over-commented, it is not usual or advisable to document your code in this way as it is highly inefficient. This has been done to provide an exaggeratedly clear base for the exercise._


#### What is a callback?

**Simply put:**  _A callback is a function that is to be executed_  **_after_**  _another function has finished executing — hence the name ‘call back’._
You can read more about this [here](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

#### What is an API?

**Simply put:**  _API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API._
You can read more about this [here](https://www.mulesoft.com/resources/api/what-is-an-api)


#### Why `` `text ${variable} text` `` instead of `'text' + variable +'text'`

_This makes part of string interpolation on template literals handling part of the the ES6 implementation of javascript, it may seem confusing at first but in the long run can make your code look and feel cleaner._
You can read more about this [here](https://medium.com/predict/switching-to-es6-part-2-string-interpolation-and-template-literals-2f1b0ee56740)