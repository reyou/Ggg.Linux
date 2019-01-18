### File Management

fd = creat (name, mode)
Obsolete way to create a new file

fd = mknod (name, mode, addr)
Create a regular, special, or directory i-node

fd = open (file, how, ...)
Open a file for reading, writing or both

s = close (fd)
Close an open file

n = read (fd, buffer, nbytes)
Read data from a file into a buffer

n = write (fd, buffer, nbytes)
Write data from a buffer into a file

pos = lseek (fd, offset, whence)
Move the file pointer

s = stat (name, &buf)
Get a file's status information

s = fstat (fd, &buf)
Get a file's status information

fd = dup (fd)
Allocate a new file descriptor for an open file

s = pipe (&fd[0])
Create a pipe

s = ioctl (fd, request, argp)
Perform special operations on a file

s = access (name, amode)
Check a file's accessibility

s = rename (old, new)
Give a file a new name

s = fcntl (fd, cmd, ...)
File locking and other operations
