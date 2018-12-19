* Title:	What is a Bash Script? - Bash Scripting Tutorial
  * Url:	https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php

Anything you can run normally on the command line can be put into a 
script and it will do exactly the same thing. 
Similarly, anything you can put into a script can also be run 
normally on the command line and it will do exactly the same thing.

*Linux is an extensionless system* so a script doesn't necessarily 
have to have this characteristic in order to work.

In the realm of Linux (and computers in general) we have the concept of programs and processes. 
A program is a blob of binary data consisting of a series of instructions for the 
CPU and possibly other resources (images, sound files and such) organised into a package and 
typically stored on your hard disk. 

When we say we are running a program we are 
not really running the program but a copy of it which is called a process. 
What we do is copy those instructions and resources from the hard disk 
into working memory (or RAM).

Running a Bash script is fairly easy. Another term you may come across is 
executing the script (which means the same thing). Before we can execute a script 
it must have the execute permission set (for safety reasons this permission is generally not set by default). 
If you forget to grant this permission before running the script you'll just get an error message 
telling you as such and no harm will be done.

```
$ ./myscript.sh
bash: ./myscript.sh: Permission denied
$ ls -l myscript.sh
-rw-r--r-- 18 ryan users 4096 Feb 17 09:12 myscript.sh
$ chmod 755 myscript.sh
$ ls -l myscript.sh
-rwxr-xr-x 18 ryan users 4096 Feb 17 09:12 myscript.sh
$ ./myscript.sh
Hello World!
```