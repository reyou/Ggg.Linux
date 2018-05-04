# Ggg.Linux
Linux OS practices. Linux is a family of free and open-source software operating systems built around the Linux kernel. 

Synaptic Package Manager  
Install, remove and upgrade software packages  
https://help.ubuntu.com/community/SynapticHowto

### Ubuntu Directory Structure
http://www.ubuntugeek.com/linux-or-ubuntu-directory-structure.html  
In the Linux operating system, all filesystems are contained within one directory hierarchy. 
The root directory is the top level directory, and all its subdirectories make up the 
directory hierarchy. This differs to other operating systems such as MS-Windows which 
applies a separate hierarchy for each device and partition.

https://askubuntu.com/questions/138547/how-to-understand-the-ubuntu-file-system-layout
https://askubuntu.com/questions/27213/what-is-the-linux-equivalent-to-windows-program-files

https://askubuntu.com/a/551932/791459  

<img src="http://blog.danyll.com/content/images/2015/04/linux_directory_map_hd.png" />

There is no single directory that is the exact equivalent of Program Files folder. 
The way Linux arranges things is a lot different than Windows.

https://askubuntu.com/a/27908/791459  
In windows, every program that we install gets its own directory inside the 
Program Files directory. In that directory, further sub-directories are created for 
different kind of files. There is no fixed structure for sub-directories. Programs 
decide for themselves what they want to call each directory and where they want to put what.

But in Linux when a program is installed, different kind of files are copied to 
different locations. Executables are copied to /usr/bin, library files to 
/usr/lib, documentation to one or more of /usr/man, /usr/info and /usr/doc. 
If there are configuration files, they are usually in the user's home directory or in /etc.

### Remove all data and settings of an uninstalled application
https://askubuntu.com/questions/937021/remove-all-data-and-settings-of-an-uninstalled-application

