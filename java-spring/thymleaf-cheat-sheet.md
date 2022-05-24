# Thymeleaf 3  Cheatsheet
## Strings and Expressions
### Rendering text to the Page
```html
<!--Inline Version-->
<div>[[${variableName}]]</div>

<!--Same as above text inline-->
<div th:text="${variableName}"></div>
```
Both of these above statements produce the same output.

### Booleans


### Utility 
These methods can be used in a view to modify the data it
is presenting to the user as well as useful methods for other logical operations
```html
          
<!--Calendar Utility -->
<span th:text="${#calendars.format(today,'dd MMMM yyyy')}">13 May 2011</span>
<!-- or -->
<!-- Inline Syntax -->
<span>[[${#calendars.format(today,'dd MMMM yyyy')}]]</span>

```

#### Some examples of Utility Methods
`#dates` :  java.util.Date objects: formatting, component extraction, etc. \
`#calendars` : analogous to #dates, but for java.util.Calendar objects. \
`#numbers` : formatting numeric objects.\
`#strings` :  String objects : contains, startsWith, prepending /appending, etc.\
`#objects` :  objects in general.\
`#bools` :  boolean evaluation.\
`#arrays` :  arrays.\
`#lists` :  lists.\
`#sets` :  sets.

More Info: https://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html#appendix-b-expression-utility-objects

## Loops

```html
<tr th:each="student: ${students}">
    <td th:text="${student.id}" />
    <td th:text="${student.name}" />
</tr>
```
 Under the hood it's Java's for-each loop: `for(Object o : list)`
```html
<tr
        th:each="student, iStat : ${students}"
        th:style="${iStat.odd}? 'font-weight: bold;'"
        th:alt-title="${iStat.even}? 'even' : 'odd'">
    <td th:text="${student.id}" />
    <td th:text="${student.name}" />
</tr>
```

### Iterator to use inside of loopss
| Object | Param      | Definition                             |   |
|--------|------------|----------------------------------------|---|
| iStat  |            |                                        |   |
|        | .index     | The current index                      |   |
|        | .even .odd | if it is even or odd returns a boolean |   |
|        | .count     | count so far in the loop iterations    |   |
|        | .size      | total number of elements in the list   |   |
|        | .first     | returns boolean if first item or not   |   |
|        | .last      | returns boolean if last or not         |   |
## If Conditional


Example to conditionally render a part of the template:
```html
<div th:if="${prod.count} == 1">Display Content</div>
```

Example to choose an inline property of a html element
```html
<tr th:class="${row.even}? 'even' : 'odd'">
  ...
</tr>
```
Will choose the class name based on the value of `row.even`


## Switch-Case

```html
 <div th:switch="${user.role}">
 	<p th:case="'admin'">User is an administrator</p>
 	<p th:case="#{roles.manager}">User is a manager</p>
 	<p th:case="*">User is some other thing</p>
 </div>
```




## Objects
Conditionally null object properties elements
```html
<p th:text="${post?.author?.email}"></p>
<!-- or -->
<p>[[${post?.author?.email}]]</p>
```
*If author is null here it will not cause an error and will not crash the application


### Form Model Binding
```html
 <form th:method="post" th:object="${movie}">
    <input type="text" th:field="*{title}">
    <input type="date" th:field="*{releaseDate}">
    <textarea th:field="*{description}" ></textarea>
    <input type="submit" />
</form>
```


## Controllers

#### Method Annotations:
`@RequestParam`: Single field from a form\
`@PathVariable`: URL variable `user\{id}` \
`@ModelAttribute`: Mapped return of the object associated with form bindings





