//=============================================================================
/**you can view a list of available tasks by entering the following from
 a terminal prompt: */
 var install = "sudo apt install tasksel";
 var tasksel = "sudo tasksel";
 var tasksel_list = "tasksel --list-tasks";
 /**If you did not install one of the tasks during the installation process,
  * but for example you decide to make your new LAMP server a DNS server as well,
  * simply insert the installation media and from a terminal: */
 var tasksel_install = "sudo tasksel install dns-server";
 /**to list the packages installed with the DNS Server task enter the
  * following: */
 var tasksel_dns = "tasksel --task-packages dns-server";
 //=============================================================================