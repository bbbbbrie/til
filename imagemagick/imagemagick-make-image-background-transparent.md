# ImageMagick: Make image background transparent

Over the years, I have come to love the flexibility and power of ImageMagick. I have very few ImageMagick incantations memorized but I know when it can help and there are [examples galore](https://imagemagick.org/Usage/basics/). In this TIL, I record the ImageMagick incantation I borrowed from [this forum post](https://www.imagemagick.org/discourse-server/viewtopic.php?p=154186) to make an image have a transparent background for an important purpose.

I have used this approach with a black and white headshot.    

## ✨ The Incantation

```
convert image.png -fuzz 10% -transparent white tmp0.png
convert tmp0.png -alpha extract tmp1.png
convert tmp2.png \
-define connected-components:mean-color=true \
-define connected-components:area-threshold=30 \
-connected-components 4 \
tmp3.png
convert image.png tmp3.png -alpha off -compose copy_opacity -composite result.png 
```


## 🤓 Annotated Incantation

```
convert image.png -fuzz 10% -transparent white tmp0.png
```

Here's what went into that command:
![](bitmoji-original.png)


Here's the output:

![](bitmoji-tmp0.png)

On the image above, we used this command:


```
convert tmp0.png -alpha extract tmp1.png
```

...for this result:

![](bitmoji-tmp1.png)


We take one more pass at it:

```
convert tmp1.png \
-define connected-components:mean-color=true \
-define connected-components:area-threshold=30 \
-connected-components 4 \
tmp2.png
```

That looks like this:

![](bitmoji-tmp2.png)

### 🔮 Finishing Touches! 

```
convert image.png tmp2.png -alpha off -compose copy_opacity -composite result.png
```

As you may recall, this whole thing started with:

![](bitmoji-original.png)

The final result:

![](bitmoji-result.png)


🎉
