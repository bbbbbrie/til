# Generate sample ansible.cfg config file

I wanted to quiet Ansible's [Interpreter Discovery warning](https://docs.ansible.com/ansible-core/2.14/reference_appendices/interpreter_discovery.html) in a barebones project that had no `ansible.cfg` file. The docs suggested:

> globally, use the `interpreter_python` key in the `[defaults]` section of `ansible.cfg`

OK, but I don't already have that file. What **exact** syntax does it want for the `[defaults]` section? The docs on [Ansible Configuration Settings](https://docs.ansible.com/ansible/latest/reference_appendices/config.html) provide this command for [generating a sample `ansible.cfg` file](https://docs.ansible.com/ansible/latest/reference_appendices/config.html#generating-a-sample-ansible-cfg-file): 

```
ansible-config init --disabled > ansible.cfg
```

## What do we get?

The resulting file is 675 lines:

```
wc -l ansible.cfg
     675 ansible.cfg
```

Those are _mostly_ comments:

```
egrep -v "(^#|^$|^;)"  ansible.cfg | wc -l
      13
```

The `[defaults]` section we are looking for is there. With my change:

```
egrep -v "(^#|^$|^;)"  ansible.cfg
[defaults]
interpreter_python=auto_silent
[privilege_escalation]
[persistent_connection]
[connection]
[colors]
[selinux]
[diff]
[galaxy]
[inventory]
[netconf_connection]
[paramiko_connection]
[jinja2]
[tags]
```


