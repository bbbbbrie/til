# Datasette: local preview with 'get'

I forked [Simon's work](https://github.com/simonw/til) and got started with customizing it for my own use. I got everything working but had some question marks. The most annoying thing was waiting for the GitHub Action to run and deploy to Vercel in order to see the changes I made. For making change to CSS, that's super inefficient. 

I stumbled on `datasette package` which is quite nice as it builds a Docker container with my site but that still takes a bit too long. I finally found what I actually needed in `datasette serve`. To match what goes to Vercel, I use:



```
datasette serve tils.db --static static:static --plugins-dir plugins --template-dir templates --port 8088
```
