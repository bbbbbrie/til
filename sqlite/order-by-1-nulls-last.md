# ORDER BY 1 NULLS LAST

TIL about `NULLS LAST`: scrolling through [SQLite tutorial](https://www.sqlitetutorial.net/sqlite-order-by/) with a [Datasette](https://datasette.io) instance open, I looked for interesting query syntax. I used the [City of Pittsburgh Steps](https://data.wprdc.org/dataset/city-steps) dataset. 

**Number of steps, by neighborhood**

```
SELECT neighborhood, SUM(number_of_steps) as "Total Steps" 
    FROM steps 
    GROUP BY neighborhood 
    ORDER BY 2 DESC NULLS LAST;
```

Steps have been installed since the pandemic but no photos of those steps have been posted:

```
select name, installed, material, length, number_of_steps, neighborhood, image 
    FROM steps 
    ORDER BY installed DESC NULLS LAST; 
```


Datasette is a lot of fun -- so is finding it's limits:

> ```
> You can only execute one statement at a time.
> ```

:crying_cat_face: 

> ```
> Statement must be a SELECT
> ```

Explore the City of Pittsburgh Steps data in the [Datasette instance at 412.brie.run](https://412.brie.run/steps/steps). 
