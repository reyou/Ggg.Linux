### Dir. & File System Mgt .

s = mkdir (name, mode)
Create a new directory

s = rmdir (name)
Remove an empty directory

s = link (name1, name2)
Create a new entry, name2, pointing to name1

s = unlink (name)
Remove a directory entry

s = mount (special, name, flag)
Mount a file system

s = umount (special)
Unmount a file system

s = sync ()
Flush all cached blocks to the disk

s = chdir (dirname)
Change the working directory

s = chroot (dirname)
Change the root directory
