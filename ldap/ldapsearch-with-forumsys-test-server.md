# LDAP Queries and search filters with ldapsearch

I really love `ldapsearch` but I mostly use it to get in, solve the problem and move on. I wanted to take a moment to get to know `ldapsearch` just a little bit better. You can follow along and run all of these commands and inspect the output yourself! I'm using the [onlne test LDAP server](https://www.forumsys.com/2022/05/10/online-ldap-test-server/) maintained by the fine folks at Forumsys. The documentation about it is pretty light but that's OK: it's a great environment to be curious in and we have enough information to get started. 


## Assumptions 

In this guide, I will use group and OU (organizational unit) to mean the same thing. Humans understand the term group much more readily than OU. 

I assume you have `ldapsearch` installed and a basic understanding of what LDAP is to get started. 

## Queries: let's go! 

Since we can both access the same server, let's learn a bit more about `ldapsearch` together and see what fun queries we can come up with!

List all members of the `mathematics` group:

```
ldapsearch  -h ldap.forumsys.com -D cn=read-only-admin,dc=example,dc=com -w password  -b "ou=mathematicians,dc=example,dc=com"  -LLL
```

List all members of the `scientists` group:

```
ldapsearch  -h ldap.forumsys.com -D cn=read-only-admin,dc=example,dc=com -w password  -b "ou=scientists,dc=example,dc=com"  -LLL
```

According to [the man page](https://www.openldap.org/software//man.cgi?query=ldapsearch) for `ldapsearch`, we can add `attrs` to the end of our command to get all of the attributes returned. With that, we find a third group: the Italians!

```
# ldapsearch  -h ldap.forumsys.com -D cn=read-only-admin,dc=example,dc=com -w password  -b "ou=scientists,dc=example,dc=com"  -LLL attrs
dn: ou=scientists,dc=example,dc=com

dn: ou=italians,ou=scientists,dc=example,dc=com
```

Neat! 

We can query the OU for the Italians the same way we queries the OU (group) for the mathematicians. 


But there's more, LDAP also has [operational attributes](https://help.hcltechsw.com/domino/11.0.0/conf_usingldapsearchtoreturnoperationalattributes_t.html). Some directory servers let you ask nicely by adding `+` to your request instead of `attrs`. Let's try that with the Italians:

```
ldapsearch  -h ldap.forumsys.com -D cn=read-only-admin,dc=example,dc=com -w password  -b "ou=italians,ou=scientists,dc=example,dc=com"  -LLL +
dn: ou=italians,ou=scientists,dc=example,dc=com
structuralObjectClass: groupOfUniqueNames
entryUUID: d50e0f9a-94a0-1033-8a40-8fb78330d80a
creatorsName: cn=admin,dc=example,dc=com
createTimestamp: 20140630125017Z
entryCSN: 20140819133135.023434Z#000000#000#000000
modifiersName: cn=read-only-admin,dc=example,dc=com
modifyTimestamp: 20140819133135Z
entryDN: ou=italians,ou=scientists,dc=example,dc=com
subschemaSubentry: cn=Subschema
hasSubordinates: FALSE
```

Run the command again without the `+` to see how much extra info we learned!

### Say less...

In LDAP, **CN** means Common Name. This is where we can make things a bit more human-friendly than `ou=italians,ou=scientists,dc=example,dc=com`. 

```
# ldapsearch  -h ldap.forumsys.com -D cn=read-only-admin,dc=example,dc=com -w password  -b "ou=scientists,dc=example,dc=com"  -LLL CN

dn: ou=scientists,dc=example,dc=com
cn: Scientists

dn: ou=italians,ou=scientists,dc=example,dc=com
cn: Italians
```

Cool: we have learned two CNs that we can use later. 

## Let's keep going: LDAP Search Filters!

We got a lot done with those `ldapsearch` commands! To get more out of our time with `ldapsearch`, let's learn about LDAP search filters. The syntax should be a little bit more accessible now that we've been looking at LDAP output. We know that group `italians` exists and has a common name (CN) of `Italians`. We should be able to search for it and find it with just that information and an LDAP search filter!

```
ldapsearch -h ldap.forumsys.com -p 389 -D cn=read-only-admin,dc=example,dc=com     -w password -b "dc=example,dc=com" "(cn=Italians)"
``` 

The search filter part is `"(cn=Italians)"`. You'll note that the output produced by `ldapsearch` tells you what it thinks it heard you say:

```
# LDAPv3
# base <dc=example,dc=com> with scope subtree
# filter: (cn=Italians)
# requesting: ALL
```

Let's take a look at some of the [basic LDAP queries](https://support.google.com/cloudidentity/answer/6126589?hl=en#zippy=%2Cbasic-ldap-queries) in Google's Cloud Identity documentation. 

Show me all all of the people:

```
ldapsearch -h ldap.forumsys.com -p 389 -D cn=read-only-admin,dc=example,dc=com     -w password -b "dc=example,dc=com"     "(objectClass=person)"
```

Show me every object that is a person with an email address that ends with `@ldap.forumsys.com`:

```
ldapsearch -h ldap.forumsys.com -p 389 -D cn=read-only-admin,dc=example,dc=com     -w password -b "dc=example,dc=com"   "(&(objectClass=person)(mail=*@ldap.forumsys.com))" mail
```

In the results, we see:

```
# numResponses: 14
# numEntries: 13
```

That means that there are some users that we did not find. We can find them pretty easily by looking for every person with an email address that does not end with `@ldap.forumsys.com` by negating the search. 

```
ldapsearch -h ldap.forumsys.com -p 389 -D cn=read-only-admin,dc=example,dc=com     -w password -b "dc=example,dc=com"   "(&(objectClass=person)(!(mail=*@ldap.forumsys.com)))" mail
```

The `!` character is what negates the search. The search filter went from this:

```
"(&(objectClass=person)(mail=*@ldap.forumsys.com))"
```

to this:

```
"(&(objectClass=person)(!(mail=*@ldap.forumsys.com)))" 
```

We added `!(` before the `mail` search and the `)` behind it. 

Find all people with the last name/surname `training`:

```
ldapsearch -h ldap.forumsys.com -p 389 -D cn=read-only-admin,dc=example,dc=com     -w password -b "dc=example,dc=com"   "(|(&(objectClass=person)(sn=training)))"
```


## READmore

  - [How to write LDAP search filters](https://confluence.atlassian.com/kb/how-to-write-ldap-search-filters-792496933.html) 
