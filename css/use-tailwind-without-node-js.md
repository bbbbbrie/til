# Use Tailwind without  Node.js

I really like [Tailwind CSS](https://tailwindcss.com) -- it's beautiful! But...I _really_ don't want Node.js as a dependency. (As of this writing, I would like to replace the dependency that this very site has on Node.js.) Anyway, there's a blog post [Standalone CLI: Use Tailwind CSS without Node.js](https://tailwindcss.com/blog/standalone-cli) that might give me what I'm looking for.

It works by offering a `tailwindcss` exectutable made with [pkg](https://github.com/vercel/pkg) a tool that packages Node.js projects into an executable!

This is a nice compromise because it lets me use the Tailwind watcher workflow.

## Get it! 

```
curl -sLO https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
chmod +x tailwindcss-macos-arm64
mv tailwindcss-macos-arm64 tailwindcss
```


## Use it!  

```
# Create a tailwind.config.js file
./tailwindcss init

touch static/input.css

# Start a watcher
./tailwindcss -i static/input.css -o static/output.css --watch

# Compile and minify your CSS for production
./tailwindcss -i static/input.css -o static/output.css --minify
```

Let's give it a go...it works!

This works through the 🪄 magic of the pkg project by the dine folks at Vercel. It looks like `pkg` does not play nicely with `puppeteer` just yet.
