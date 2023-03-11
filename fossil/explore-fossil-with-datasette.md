# Explore fossil SQLite database with Datasette

Since [Fossil](https://www.fossil-scm.org/home/doc/trunk/www/index.wiki) is backed by an SQLite database, we can use tools like [Datasette](https://datasette.io/) to explore and interact with the `fossil` data.

  - **Input**: `SELECT user,comment FROM event`
  - **Output**: A CSV of users and commit messages

```
user,comment
brie,initial empty check-in
brie,🦖 Initial commit -- rawr
brie,🧪 Let us make some changes
brie,🌈 Add README
brie,🌈 Add test database
brie,😻 Add picture of Plop
```

## How I did it

Use `datasette serve ./whatever.fossil` in order to get a Datasette instance. This instance provides an alternate way to explore the data that is available to `fossil`.

In the Datasette Web UI, click the name of the database and then you can enter queries in **Custom SQL query**. 
