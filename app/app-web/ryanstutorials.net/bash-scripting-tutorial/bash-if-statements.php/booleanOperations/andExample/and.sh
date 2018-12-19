#!/bin/bash
# and example
echo "Argument 1: $1"
if [ -r $1 ] && [ -s $1 ]
then
echo This file is useful.
fi
