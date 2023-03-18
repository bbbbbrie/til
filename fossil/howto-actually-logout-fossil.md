# HOWTO (actually) log out of the Fossil UI

(Fossil is a free and open source, simple, high-reliability, distributed software configuration management system with some cool features like a built-in Web interface. [Learn more](https://www.fossil-scm.org/home/doc/trunk/www/index.wiki).)

This is especially helpful if you are accessing the Fossil UI via `localhost`. 

I run `fossil ui` and use the `localhost` URL that is offered. I noticed that the **Logout** link never seemed to actually log me out. Watching the requests via Developer Tools didn't immediately reveal an answer. I did find the answer [this 2009 response](https://www.mail-archive.com/fossil-users@lists.fossil-scm.org/msg01020.html) to the `[fossil-users] Login/Logout while on localhost` thread on the [[fossil-users] mailing list](https://www.mail-archive.com/fossil-users@lists.fossil-scm.org/info.html).  

With that hint, here are two quicker ways to get the **Logout** button in the Fossil Web interface to work. 

Let's assume you are looking at Fossil on the default port of `http://localhost:8080`. 

## Enforce logout via the Web interface

  1. Browse to [localhost:8080/setup_access](http://localhost:8080/setup_access)
  1. Check the **Require password for local access** option
  1. Click **Apply Changes**

## Enforce logout via the config file (`fossil settings`)

  - **TL;DR**: `fossil settings localauth true`

You'll probably want to run the command above in the same directory that you run `fossil ui` in. 

## Confirm the value of the `localauth` setting

You can run `fossil settings localauth` or  `fossil settings | grep auth` in order to check the current value of this setting. That command will tell you whether the local or global settings are being returned. 


```
echo "Local setting" && fossil settings localauth && cd .. && echo "Global setting" && fossil settings localauth
Local setting
localauth            (local)  true
Global setting
localauth            (global) true
```

## Consequences of making this change

This does more than convincing the **Logout** button to work. The `/setup_access` page contains some useful additional information about the consequences of making this change:

> When enabled, the password sign-in is always required for web access. When disabled, unrestricted web access from 127.0.0.1 is allowed for the [fossil ui](http://localhost:8080/help/ui) command or from the [fossil server](http://localhost:8080/help/server), [fossil http](http://localhost:8080/help/http) commands when the "--localauth" command line options is used, or from the [fossil cgi](http://localhost:8080/help/cgi) if a line containing the word "localauth" appears in the CGI script.


## 📚 READmore


### You are not alone...

  - [[fossil-users] "Logout" menu item confusing](https://www.mail-archive.com/fossil-users@lists.fossil-scm.org/msg04068.html)
  - [[fossil-users] Logout/PW/Email UX fix](https://www.mail-archive.com/fossil-users@lists.fossil-scm.org/msg27916.html)
  - [[fossil-users] web UI: 'logout' menu-item doesn't logout](https://www.mail-archive.com/fossil-users@lists.fossil-scm.org/msg16331.html)
