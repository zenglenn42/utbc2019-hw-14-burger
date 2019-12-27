# utbc2019-hw-14-burger

### Your personal burger consumption manager has arrived.

![alt](docs/mvp-2.0-ui.png)

### Value Proposition

Are you a burger-lover?
Does the scale of that devotion require some burger-consumption management?

This entirely silly application will do that.

* It allows you to create a description of a burger you'd like to eat.
* Add that burger to a list.
* Move the burger to the 'Devoured' list at the press of a button.

Burger lists are persisted through a mysql database on a server.

## The (Real) Value Proposition: Dev Fu

This simple, fullstack web application illustrates several classic web development technologies:

* Object Relational Mapping (ORM)
    
    Put an object-based front-end on your relational database queries.

* Server-side HTML generation with templates
    
    Use handlebars syntax and middleware to render scalable HTML within your Node express server.

* Mode View Controller (MVC) software pattern
    
    Organize server-side components in this classic form that facilitates development and maintenance through a separation of concerns.

    ## Technology Stack

    * Frontend
        * HTML, CSS (flex box)
        * AJAX-based javascript controller
            * Fetch, Promises
    * Backend
        * Node.js / Express.js server
        * Persisted data via ORM-wrapped mysql database
        * Middleware
            * json body parsing
            * Handlebars templates and HTML rendering
        * Model View Controller decomposition
            * model = database and related interface
            * view = html templates
            * controller = server side routes
        * RESTful API
