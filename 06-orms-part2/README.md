# Questions
# SWBATs
- [ ] Review ORMs
- [ ] Introduce Active Record this afternoon
- [ ] Get familiar with new file organization structure.

# Gemfile
- Requires all the gems that we are going to use in the program
- Binding -> Whatever we require we can include in the same place.
- List of whatever we need to run.

# ORMs - Organizing our data/models:
- Object Relational Mapping
- Connects Ruby to SQL to do stuff.

- DB -> Domain/Project
- Table -> Ruby class 
- Columns -> Class Attributes
- Rows -> Instances

``SQL
"CREATE TABLE users..."
```

```Ruby
class User
end
```

# CRUD REVIEW

 - Create
   ```SQL
   ```
   ```Ruby
   ```
   ```SQL
   ```
   ```Ruby
   ```
 - Read
  ```SQL
   ```
   ```Ruby
   ```
   ```SQL
   ```
   ```Ruby
   ```
 - Update
    ```SQL
    ```  
    ```Ruby
    ```
 - Delete
    ```SQL
    ```  
    ```Ruby
    ```

# Intro to ORMs (Object Relational Mappers)

## Reference
```ruby
#Connection string for a database )
DB = {
  conn: SQLite3::Database.new('db/tweeter.db')
}
DB[:conn].results_as_hash = true

#Gems to install
gem "sqlite3"
gem "pry"
```