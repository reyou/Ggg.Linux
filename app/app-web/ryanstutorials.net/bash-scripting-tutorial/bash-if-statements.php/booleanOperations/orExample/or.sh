#!/bin/bash
# or example
if [ $USER == 'bob' ] || [ $USER == 'andy' ]
then
echo "Listing bob or andy files."
ls -alh
else
echo "Listing generic files."
ls
fi
