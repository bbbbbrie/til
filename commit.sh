#!/bin/bash

git commit -m "🤖 Beep boop: Updated README for commit $CI_COMMIT_SHORT_SHA [skip ci]" README.md  ||  echo "No changes, nothing to commit!"
