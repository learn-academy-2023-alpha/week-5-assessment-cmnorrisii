# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling a super() in a Ruby class lets the child class inherit all of the attributes from a parent class. This is a useful tool for creating child classes because while the child may be similar to a parent class, we can add attributes to the child that dont apply to other children or the parent. For example, if we create a class called vehicle that has a list of attributes that apply to all vehicles, then create a child class called truck, we can then give the truck class eveything that makes a truck a vehicle using super within our initialize method of the truck child class.

Researched answer: A super calls a method on the parent class with the same name as the method that calls super. The super keyword allows child classes call on and modify attributes initialized in the parent class. We can pass super with or without an argument (super / super()). When passed without an argument Ruby tries to find a method of the same name super was called in within the ancestor chain of the child class.
(sources: https://www.rubyguides.com/2018/09/ruby-super-keyword/, https://medium.com/rubycademy/the-super-keyword-a75b67f46f05)

2. What is a gem?

Your answer: A gem is file that contains all of the dependencies required to run other files within our Ruby file. I believe they are similar to what a .json is to JavaScript. I know that when we want to install something like RSpec in a directory, we use gem install to do so.

Researched answer: Gems are open source libraries that contain Ruby code and are packaged with extra dependencies. Gems allow us to use the code they contain without having to implement the physical code in our programs. Some Ruby gems that we have used in class include Ruby on Rails, Active Record, and RSpec.
(sources - https://medium.com/@morgannegagne/what-is-a-ruby-gem-1eec2684e68, https://www.codecademy.com/resources/docs/ruby/gems)

3. What is a relational database? Are there other kinds of databases?

Your answer: Relational databases are databases that are built around being able to recognize relationships between stored items within the database. An example would be creating two tables in a database, and having the data within those tables relate to each other by giving them foreign keys. We can "assign" data from one table to data from another table this way. While I am not familiar with other types of databases, I would imagine that there are instances where we would not want to define relationships with data. I can only assume that there are many types of other databases to suit any number of needs to store data specific ways.

Researched answer: A relational database is stores and provides access points that are related to one another. Each row in a relational database table has a unique ID called the key. Columns in a relational database hold attributes of the data, with each record usually having a value for each attribute. Relational modeled databases are the best at maintaining data continuity across applications and instances of the same database. A good example of a relational db is a shopping cart when shopping online. when adding items, data that exists outside of the cart can be added to one users unique instance of the data. Other types of databases include: (just a brief description of each here, didnt want to over do it)

        - Centralized database
            - operates entirely in one location, users can access the database through a network connected to that db
        - Cloud database
            - data is stored on a local hd or server, users can access the data from anywhere provided they have an internet connection. Encryption is a major focus
        - Commercial database
            - designed by a commercial business, typically include a lot of useful features so it can be sold to customers.
        - Distributed database
            - db that is spread over multiple devices, helps increase the speed of the db, reliability and ease of expansion
        - End-user database
            - db that is primarily used my a single user
        - Graph database
            - focuses on data and connections between data. connections are stored with the data itself, providing a more efficient and faster db.
        - NoSQL database
            - data stored is not structured or relationa, allows for processing larger amounts of data, and makes the db easier to expand.
        - Object-oriented database
            - data is represented as objects and classes. this is a type of relational db. Each piece of data in this type of db is an object, and those objects grouped together are classes. useful for having large data that we want to process quickly
        - Open-source database
            - designed for public use for free. users can see how the program is written and are free to make changes to the program. typically lack more advanced features that are found in commercial databases.
        - Operational database
            - allows users to modify data in real time, can be relational or nosql. these dbs allow us to add, edit, or remove data anytime
        - Personal database
            - designed for a single user. not suitable for complex operations or businesses.

(sources - https://www.oracle.com/database/what-is-a-relational-database/, https://www.indeed.com/career-advice/career-development/types-of-databases)

4. What are primary keys? Why are they important?

Your answer: Primary keys are the columns in a database that represent unique pieces of data. Keys are important when handling large amounts of data because each key is unique, they essentially catagorize different collections of data for quick access. Without primary keys, we would not be able to use relational databases to tie relationships to different pieces of data.

Researched answer: A primary key is a unique identifier to quickly identify data within a given table in a relational database. A given table can only have one primary key. However, that one key can consist of mupltiple columns if needed. Having a primary key helps prevent bogging down our databases with duplicate records.
(sources - https://www.techopedia.com/definition/5547/primary-key, https://www.w3schools.com/sql/sql_primarykey.ASP, https://learnsql.com/blog/what-is-a-primary-key/ )

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Post request is a HTTP verb that creates new content, which corresponds to the Create CRUD action. Get request lets us display content, which relates to read action when relating to CRUD, meaning we can retrieve or display content. Put request allows us to replace content, and patch request allows us to edit content. These two verbs relate to the Update action in CRUD. Finally, delete request allows us to remove content, which easily relates to the Delete action in CRUD.

Researched answer: Get request, post request, put request, patch request, and delete request are the 5 primary HTTP verbs that can be performed as request methods to indicate desired actions for a given resource. These HTTP verbs are used by developers to operate on stored data within a web application or webpage. CRUD (create, read, update, delete) is a mnemonic that that outlines the 4 major ways that developers manipulate or access stored data. Post request submits an element to the specified resource, resulting in a change in state or side effects to other data on the server, this relates to the 'Create' CRUD action. Get request requests a representation of a specified element, it retrieves data, which correlates to the "Read" CRUD action. Put and patch requests both relate to the "Update" action of CRUD. Put requests replace all current representations of a target element with the request payload, patch requests apply partial modifications to an element. Finally, delete requests delete a specified element, which corresponds to the "Delete" CRUD action.
(sources - https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods, https://developer.mozilla.org/en-US/docs/Glossary/CRUD)

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful (representational state transfer) routing is a set of standards used by many different languages to create efficient, reusable routes. The purpose is to make code easier to understand between developers, and to make navigating an application as cleanly and consistently as possible. It is a naming convention pattern that ties the primary HTTP verbs to CRUD actions in our code.
   (sources - https://medium.com/@atingenkay/restful-routes-what-are-they-8fe221521bb, https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/introduction-to-restful-routing)

2. Model validations: Process of testing and confirming that a given program, application, or process achieves its intended purpose or outcome. This seems to coincide with TDD and a methodolgy to problem solving and creating clean code. This also reminds me of refactoring, after we have a MVP (minimum viable product) we can gp back and validate a more efficient method to solve a problem or process data. It is more of a big picture look at how efficient and successful our programs are.
   (sources - https://datatron.com/what-is-model-validation-and-why-is-it-important/)

3. Params: Assuming that this is asking about params in rails, then params are an alias for the parameters method. Parameters being passed to the ActionController via a GET or POST HTTP request are params. We can store data in our database using params as well. (if this was actually asking what a parameter in general is, then a paremeter is a placeholder piece of data that allows arguments to be passed into and maniplated by functions and methods.)
   (sources - https://guides.rubyonrails.org/action_controller_overview.html#parameters, https://flatironschool.com/blog/how-params-works-in-rails/)

4. ERB: Embedded Ruby (ERB) is a templating system for Ruby. ERB allows actual Ruby code to be added to any plain text document for the purposes of generating document information details. Its purpose is to make Ruby easier to write and maintain. It is used to generate web pages, produce XML documents, RSS feeds, and other structured text files. Can be useful wjen creating files that include many repititions of a pattern, like unit tests.
   (sources - https://github.com/ruby/erb, https://www.stuartellis.name/articles/erb/)

5. API: Application Programming Interfaces are mechanisms that enable two pieces of software to communicate using a set of definitions and protocols. APIs work as a client/server relationship where the requests data and the server sends data. There are 4 different ways that APIs can work.

SOAP APIs - Simple Object Access Protocol is an older API style that allows clients and servers to communicate using XML.

RPC APIs - Remote Procedure Call APIs rely on a client completing a function on the server, with the server sending the output of that function to the client.

Websocket APIs - More modern type of API that uses JSON object to pass data. Supports two-way communication between clients and the server, with the server being able to send callback messages to the client.

REST APIs - Representational State Transfer APIs are the most popular and most flexible. The client sends requests as data, the server takes the data and applies it to internal functions that return output data to the client. REST APIs are stateless, meaning that they do not save client data between requests. REST APIs offer four main benefits; integration, innovation, expansion, and ease of maintenance.

APIs are also classified by their scope of use, defined as these four types:

Private APIs - Internal to a business and its connected systems

Public APIs - Open to the public and can be accessed by anyone.

Partner APIs - Only accessible by external developers for business to business partnerships

Composite APIs - Combination of two or more APIs for complex system requirements or behaviors.
(source - https://aws.amazon.com/what-is/api/ (this is probably the best source for a given topic i have researched so far. very thorough and basic explanation of APIs))
