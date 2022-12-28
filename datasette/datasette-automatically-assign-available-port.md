# Configure datasette to automatically assign an available port 

Getting a working Datasette Web interface with something as simple as `datasette whatever.db` is awesome! 

But...

This defaults to `localhost:8001`. Every time. If you are using Datasette a lot, you might run `datasette cats.db` and see:

```
ERROR:    [Errno 48] error while attempting to bind on address ('127.0.0.1', 8001): address already in use
```

# 😿

The built-in `help` for `datasette` is really useful. 

  - When you run `datasette my.db`, `datasette` defaults to the `serve` subcommand so it effectively runs `datasette serve my.db`. 

  From `datasette serve --help`, we learn about the `--port` option. While that would be pretty straightforward to guess, there's a further reward for reading the docs:

  > ```
  > Use -p 0 to automatically assign an available port.
  > ```

  Nice!

  We can use something like this to make sure `datasette` finds a usable port and uses it:

  ```
  datasette -p 0 cats.db
  ```

  # 😻