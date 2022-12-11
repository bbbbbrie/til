#!/bin/bash

datasette serve tils.db --static static:static --plugins-dir plugins --template-dir templates --port 8088
