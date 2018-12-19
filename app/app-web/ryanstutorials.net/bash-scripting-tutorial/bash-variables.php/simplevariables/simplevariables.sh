#!/bin/bash
# A simple variable example
myvariable=Hello
anothervar=Fred
multiword="This is multi $anothervar"
multiword2='This is multi $anothervar'
echo $myvariable $anothervar
echo
echo $multiword and $multiword2
echo
sampledir=/etc
ls $sampledir
