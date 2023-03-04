# Simple CSV to SQLite Recipe

I do this often enough that I want to have it written down for easy reference. 

  - **Input**: A CSV file
  - **Output**: An SQLite database (mostly for use with [datasette](https://datasette.io))

I am going to use the CSV that I got when exporting my data from [Daylio](https://daylio.net/) but you can use (almost) any CSV you'd like.

```
$ pip install csv-to-sqlite
$ csv-to-sqlite -f  daylio_export_2023_01_21.csv -o daylio.db
  [####################################]  100%
Written 43 rows into 1 tables in 0.114 seconds
$ file daylio.db
daylio.db: SQLite 3.x database, last written using SQLite version 3040000, file counter 2, database pages 4, cookie 0x1, schema 4, UTF-8, version-valid-for 2
```

In short: 

```
pip install csv-t-sqlite
csv-to-sqlite -f whatever.csv -o howdy.db
```
