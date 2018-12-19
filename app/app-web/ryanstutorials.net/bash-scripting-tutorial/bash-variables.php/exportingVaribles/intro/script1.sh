#!/bin/bash
# demonstrate variable scope 1.
clear
var1=blah
var2=foo
# Let's verify their current value
echo "Printing values from script1"
echo $0 :: var1 : $var1, var2 : $var2
echo "Exporting var1: $var1"
export var1
bash /home/aozdemir/Documents/Ggg.Linux/app/app-web/ryanstutorials.net/bash-scripting-tutorial/bash-variables.php/exportingVaribles/intro/script2.sh
# Let's see what they are now
echo $0 :: var1 : $var1, var2 : $var2
