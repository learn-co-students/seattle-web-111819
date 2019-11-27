# Thoughts on Databases, why do we need databases
- Store Data
- Get your data
- refer to it later
- access later
- seperate out the things that do stuff and modularize.
- use the data to change programming later( somehow work this data later and update)
- allow different users to access the data.
- ease of use.
- SQL -> Structured Query Language

# Intro to SQL
1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data).
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below
5. Introduce CRUD

##Question :
1. Filter out specific columns in select.

## Challenges
1. Write the SQL to return all of the rows in the artists table?
1. What table do I need to look at - `artists`
2. Reading data.
```SQL
    SELECT name AS arti FROM artists
```

2. Write the SQL to select the artist with the name "Black Sabbath"
1. What table do I need to look at - `artists`
2. Reading data
```SQL
SELECT * FROM artists WHERE name = "Black Sabbath"
```

3. Write the SQL to create a table named 'fans' with an auto-incrementing ID that's a primary key and a name field of type text
1. we created a fans
2. Create 
```sql
CREATE TABLE fans (Id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?
1. fans
2. Update
```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
1. fans
2. Create
```sql
INSERT INTO fans (name, artist_id) VALUES("Nicole", 169);
INSERT INTO fans (name, artist_id) VALUES("Natali", 169);
INSERT INTO fans (name, artist_id) VALUES("Soundarya", 169);
```

6. Write the SQL to return fans that are not fans of (artist_id : 37).
1. fans
2. Read
```sql
SELECT * FROM fans WHERE artist_id IS NOT 37
```

7. remove fans from our DB
1. fans
2. Destroy/Delete/"Destruct"

```sql
DROP TABLE fans
```

8. Write the SQL to display an artists name next to their album title
1. artists and albums
2. Read

- albums && artists
```sql
SELECT artists.name AS artists_name, albums.title AS albums_title
FROM artists  INNER JOIN albums 
ON artists.id == albums.artist_id
```

9. Write the SQL to display artist name, album title and number of tracks on that album
```sql
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre
```sql
```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have more than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql
```
