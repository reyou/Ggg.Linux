### Process management

pid = fork ()
Create a child process identical to the parent

pid = waitpid (pid, &statloc, opts)
Wait for a child to terminate

s = wait (&status)
Old version of waitpid

s = execve (name, argv, envp)
Replace a process core image

exit (status)
Terminate process execution and return status

size = brk (addr)
Set the size of the data segment

pid = getpid ()
Return the caller's process id

pid = getpgrp ()
Return the id of the caller's process group

pid = setsid ()
Create a new session and return its proc. group id

l = ptrace (req, pid, addr, data)
Used for debugging
