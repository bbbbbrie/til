# Frequency analysis in SQL

  - **Input**: pipe to `uniq -c | sort -n` (or to `uniq -c | sort -nr | less` for an interactive experience) 
  - **Output**: `SELECT catname,COUNT(*) AS "# of toys" FROM cuties GROUP BY catname;`

I pipe stuff to an incantation of `uniq -c | sort` fairly often. For example, to take a look at what folders have Markdown files, I use:

```
find . -type f -iname \*md | cut -d"/" -f2 | uniq -c | sort -n
```

Recently, I found myself needing to do something similar at the `psql` console. I wound up using this:

```
# SELECT file_store,COUNT(*) AS "where packages are" FROM packages_package_files GROUP BY file_store;
 file_store | where packages are
------------+--------------------
          1 |                  9
          2 |                 14
```

There are a few tricks here:

  - The `COUNT(*)` function will help us get the total number of rows.
  - The `AS "where packages are"` is a fun way to give the column a different name.
 

## 📚 READmore

  - [PostgreSQL COUNT Function](https://www.w3resource.com/PostgreSQL/postgresql-count-function.php)  
