## SWBATs
- Understand, theoretically how authentication works
- Understand theoretically how authorization work
- Implement Sign in vs sign up
- Review sessions, cookies
- Implement log in, and log out

## Authentication && Authorization
1. What is authentication?
    - making sure that what your saying is what it is.
    - be authentic
    - two step verification -> ex
    - are you a robot 
    - captcha's -> are you who you say you are
    - thumbprint
    - faceid
2. What is authorization?
    - allowing the person the priviledges
    - admin user vs regular user
    - CUUUD

## User Stories
1. As a registered teacher, I should be able to sign up by providing my username.
    - Authentication
    - Model
        - Class : Add a teacher model and add a username
        - Migration
            - create_table :teachers
        - Seeds
            - we will get it from the form.
    - Controller
        - new - for the form.
        - create -> creating a new teacher.    
    - View
        - new.html.erb

2. As a registered teacher, I should be able to log in by providing my username.
    - Model
        - no new model
    - Routes
        - '/login'
    - Controller
        - create a new controller
        - auth controller
    - View
        - login page

3. As an un-authenticated teacher, I should not be able to see a list of students and information about an individual student.
    - Authorization
    - show and index
    - session and see if someone is logged in.

4. As an authenticated teacher I should be able see a list of students and information about an individual student plus create a new student.

5. If an un-authenticated teacher tries to see the new student form, they should be redirected to the login page.

6. I should be able to add a password to my site and validate teacher.

## Resources
##### Password Authentication Guidelines

- install gem `bcrpyt`
- you don't store passwords as plain text
  - add a password_digest column.
  - add `has_secure_password` to the model with the password.
- at signin use the bcrypt authenticate method to confirm that the password matches
- password hashing is one-way encryption (we never decrypt it)

- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
"README.md" 41L, 1628C
