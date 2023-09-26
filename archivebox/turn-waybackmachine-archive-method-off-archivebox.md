# Turn off the Wayback Machine Archive Method in archivebox

I ❤️  [ArchiveBox](https://archivebox.io/). It's an open source self-hosted Web archiving solution. I use it for managing my 🔖 bookmarks, a task that I care a lot about. 

One thing I _dislike_ about `archivebox` is that the  **Archive Method** for `archive.org` is on by default. I maintain a few different `archivebox` setups for different purposes. For some of them, I don't want to add the sites to the Wayback Machine. (It's great but not for everything.) 

The `archivebox` CLI makes this fairly easy with `archivebox config --set SAVE_ARCHIVE_DOT_ORG=false`. 

```
archivebox config --set SAVE_ARCHIVE_DOT_ORG=false
[i] [2023-09-26 00:23:34] ArchiveBox v0.6.2: archivebox config --set SAVE_ARCHIVE_DOT_ORG=false
    > /Users/brie/box

SAVE_ARCHIVE_DOT_ORG=False
(v) ➜  box archivebox config --get SAVE_ARCHIVE_DOT_ORG
[i] [2023-09-26 00:23:40] ArchiveBox v0.6.2: archivebox config --get SAVE_ARCHIVE_DOT_ORG
    > /Users/brie/box

SAVE_ARCHIVE_DOT_ORG=False
```
  
