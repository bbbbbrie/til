# 🐍💙💛 Reload Web app served via gunicorn when specific files change

I like using 💚🦄 [gunicorn](https://gunicorn.org/) to serve Flask apps, like [httpcat.us](https://httpcat.us). The Web site will be reloaded when `app.py` is modified with `--reload`. If I want to also reload the Web service when various HTML, CSS and JavaScript files are changed, I can use `--reload-extra-file`. In the end, it looks something like:

```
 gunicorn --reload   --reload-extra-file static/dist/css/output.css \
  --reload-extra-file templates/index.html  --reload-extra-file static/js/popups.js   \
    -b 127.0.0.1:8088  --log-level debug 'app:app'
 ```

Logs [don't go to the console](https://docs.gunicorn.org/en/latest/faq.html#why-i-don-t-see-any-logs-in-the-console) by default.


---

BTW: `gunicorn` is 🟩 green 🦄 unicorn. The [pronunciation](https://github.com/benoitc/gunicorn/issues/139) is ambiguous.
