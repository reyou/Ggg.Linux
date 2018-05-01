# https://www.shellscript.sh/
echo '#!/bin/sh' > my-script.sh
echo 'echo Hello World' >> my-script.sh
# https://en.wikipedia.org/wiki/Chmod
"""
In Unix-like operating systems, chmod is the command and system call which may
 change the access permissions to file system objects (files and directories). 
 It may also alter special mode flags. The request is filtered by the umask. 
 The name is an abbreviation of change mode.[1]
"""
chmod 755 my-script.sh

"""
Note that to make a file executable, you must set the eXecutable bit, and for a shell script, the Readable bit must also be set:
$ chmod a+rx my-script.sh
$ ./my-script.sh
"""