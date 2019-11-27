# Intro to Object Orientation
# SWBAT - Students Will Be Able To
# Questions:
- Single source of truth -> defining relationships between classes, and who is storing shich informtion
- single responsibility principle
- when we build out functions they should only do one thing. Also can be related to DRY (Don't Repeat Yourself)



## Objectives

- [ ] Define `object` in programming domain
- [ ] Create a class and instantiate an instance of the class
  - a class is a type of object
  - a blueprint for creating objects
- [ ] Explain the difference between a class and an instance
  - an instance is an object created from a blueprint
- [ ] Pass arguments to `new` by defining an initialize method in class
- [ ] Create instance methods
  - Define attribute readers and writers using `attr_` macros
  - setter, getter methods for instance variables
  - try to use instance variables only in initialize and setter/getter
- [ ] Discuss methods as messages
  - getter method is actually a method called `balance=`
- [ ] Get more practice with array compositions (`each`, `map`, `select`/`filter`)
- [ ] Explain the need for variable scope and why it's important to not utilize global variables

## Deliverables

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"owner_name": "soundarya", "balance": 100}
```

Write an implementation of a bank account that meets the following requirements:

- [ ] whale should return the account with the largest balance
- [ ] overdraw_warning should return all accounts under min balance of 300
- [ ] deposit should increase an account balance by a specific amount
- [ ] withdraw should decrease an account balance by a specific amount

---

# One to Many Relationships

## SWBATs
* [ ] Implement one object to many objects relationship
  * [ ] One object `has many` objects
  * [ ] One object `belongs to` another object
* [ ] Practice passing custom objects as arguments to methods
* [ ] Demonstrate single source of truth
* [ ] Infer type of method (class or instance) through naming conventions
* [ ] Model/Domain
* [ ] Implement both sides of a many to many relationship
* [ ] Practice keeping groups of data related to classes on the class as a class variable
* [ ] Demonstrate _Single Source of Truth_ by **not** storing collections of objects on other objects
* [ ] Demonstrate _Single Source of Truth_ by **not** storing one object in multiple collections

## Questions??????

## Deliverables
* Create a User class. The class should have these methods:
  * [ ] `initialize` which takes a username and have
  * [ ]  a reader method for the username
  * [ ] `tweets` that returns an array of Tweet instances
  * [ ] `post_tweet` that take a message, creates a new tweet, and adds it to the user's tweet collection
  ### this is a little weird, it's keeping track and returning all the tweets.
  * [ ] `tweets` -> tweets array.

* Create a Tweet class. The class should have these methods:
  * [ ] Have a mini breakout and see which methods would be instance vs class.
  * [ ] Tweet has a method `#message` that returns a string
    - reader : that returns a message
    - tweet has a property message
  * [ ] `#user` that returns an instance of the user class
    - getter/reader : that return an user object
    - user is also a property of tweets.
  * [ ] `.all` that returns all the Tweets created
    - this is going to a class variables
    - Tweet class is going to have an @@all
  * [ ] `#username` that returns the username of the tweet's user
    - instance methods
    - user

## Outline

* Review Relationships (one to many => `has_many`, `belongs_to`)
  * Go through other example domains
* Expand on relationships to express many to many
  * We'll build out a **new** relationship from scratch to teach this concept

## Define
* _Model_ - A class whose primary responsibility is to store data
* _Domain_ - The subject matter of the problem, (e.g., Learn's domain is online education)
* _Domain modeling_ - Creating models for your domain to represent real or abstract ideas (e.g., Learn's domain model includes modules, cohorts, assignments as well as their relationships)
* _Relationships_ - How one model or thing is connected to another model or thing
  * _One to many relationship_ - A relationship describing a single model that contains or keeps track of other models (a tree has many leaves, an organism has many cells, the universe has many galaxies)
  * _Many to many relationship_ (today!)
  * `belongs_to`
  * `has_many`
  * `through`
* _Schema_ - A visual representation of your data (models, relationships, etc.)
* [_Single Source of Truth_](https://en.wikipedia.org/wiki/Single_source_of_truth) - The practice of structuring _models_ and _relationships_ such that every data element is stored exactly once; any possible linkages to this data element are by reference only
  * **Why?** - Ask yourself, in the _one to many relationship_ of country to citizen, is it easier for the country to know about all of its citizens or is it easier for a citizen to know the which country they belong to? So how does a country find out its citizens? It conducts a census (a method) that asks all the people in the country if they are a citizen!


  ## References
  - [Blog on Self](https://dev.to/danvyle/understanding-self-via-football-analogy-2f0e)
