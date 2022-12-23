# Web UI for searching code with datasette and ripgrep

This one is _lightning_ fast. 

**First**, you need to prepare the repository you want to search. I am going to use the source for [Python Flask](https://github.com/pallets/flask). I cloned the source into `/tmp/flask`.  
**Next**, you'll want to create a separate directory and set up a virtual environment. You can do that with something like this:

```
mkdir ~/codesearch && cd ~/codesearch
python3 -m venv v
source v/bin/activate
pip install datasette 
```

**Then**, we will install the `datasette-ripgrep` plugin for `datasette`:

```
datasette install datasette-ripgrep
```

We are almost ready! We need to tell `datasette` where to look for our data. Create a file called `metadata.json` with content like this:

```
{
    "plugins": {
        "datasette-ripgrep": {
            "path": "/tmp/flask"
        }
    }
}
```


## 🚀 Let's go! 

Let's launch it!

```
datasette -m metadata.json
```

If everything went well you should be able to browse to [localhost:80001](http://localhost:8001) to see the Web interface. Use the hamburger menu and click **ripgrep search** or browse to [localhost:8001/-/ripgrep](http://localhost:8001/-/ripgrep) to get to the ripgrep search. 

That's all it takes!

## 📚 READmore

  - [datasette-ripgrep plugin](https://datasette.io/plugins/datasette-ripgrep)
  - [demo](https://ripgrep.datasette.io/-/ripgrep) of datasette-ripgrep
  - [ripgrep](https://github.com/BurntSushi/ripgrep)
