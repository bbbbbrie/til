# Using xsv for manipulating CSVs on the CLI

A colleague asked for recommendations on CSV manipulation at the command line. I freely admit I have nothing sophisticated here. I use my friends `cut`, `grep`, `head`, `sort`, and `uniq`. My workflow looked something like this:

Using the [IMAP Response Codes](https://www.iana.org/assignments/imap-response-codes/imap-response-codes.xhtml)  in [CSV](https://www.iana.org/assignments/imap-response-codes/imap-response-codes-1.csv) to start:

Get a quick overview of the CSV with `less imap.csv` and things like:

```
# head -n2 imap.csv
Response Code,Reference,Status Description (Optional)
NEWNAME,[RFC2060],obsolete
```

Sort all of the values in a particular column:

```
# cut -d"," -f2 imap.csv | sort -n | uniq -c | sort -nr
  17 [RFC5530][RFC9051]
  11 [RFC3501][RFC9051]
   3 [RFC5259]
   3 [RFC4551]
   3 [RFC4315][RFC9051]
...
```

I have [a TIL snippet](https://til.brie.dev/aws/configure-s3-web) where I used one-liners like these to copy AWS credentials into the clipboard on my Mac:

Get the access key ID:

```
grep action new_user_credentials.csv | cut -d"," -f3 | pbcopy
```

Get the secret access key:

```
grep action new_user_credentials.csv | cut -d"," -f3 | pbcopy
```

For more complicated tasks and bigger CSVs, I use [Python](https://www.python.org/).

---

Newer isn't always better but it's been a long time since I have re-evaluated by CSV manipulation workflow. Could there be something better? My colleague recommended [xsv](https://github.com/BurntSushi/xsv). It's from the same developer that wrote [ripgrep](https://github.com/BurntSushi/ripgrep) -- a promising start!

Let's use the `stats` and `table` subcommands to get an overview of that same IMAP CSV:

```
# xsv stats imap.csv  | xsv table
field                          type     sum  min        max        min_length  max_length  mean  stddev
Response Code                  Unicode       ALERT      USEATTR    5           20
Reference                      Unicode       [RFC2060]  [RFC9051]  9           18
Status Description (Optional)  Unicode       obsolete   obsolete   0           8
```

I'm using an old export of my Peloton workouts for this section. Get an overview of the CSV:

```
xsv stats 0xBRIE_workouts_2021-12-december-22.csv  | xsv table
```

There are a [great many commands available](https://github.com/BurntSushi/xsv#available-commands) so I won't go through them all. 


How many lines in the CSV?

```
# xsv count imap.csv && wc -l imap.csv
58
      59 imap.csv
```

Grab the 2nd through 4th lines (with headers):

```
# xsv slice -s 2 -e 4 imap.csv
Response Code,Reference,Status Description (Optional)
ALERT,[RFC3501][RFC9051],
BADCHARSET,[RFC3501][RFC9051],
```

...and without headers:

```
# xsv slice -s 2 -e 4 imap.csv --no-headers
REFERRAL,[RFC2221],
ALERT,[RFC3501][RFC9051],
```

# 🔗 Links and Tools 🛠️

> A few other neat things I found while looking into `xsv`:

  - 😎 [Awesome CSV](https://github.com/secretGeek/AwesomeCSV)
  - 🤝 [csv,conf](https://csvconf.com/)
  - 🗄️ [CSV Schema](https://csv-schema.surge.sh/)
    - This is super cool and worked well with my Peloton CSV! 
