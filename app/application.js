//=============================================================================
// How do I search for available packages from the command-line?
// https://askubuntu.com/questions/160897/how-do-i-search-for-available-packages-from-the-command-line
var update = "sudo apt-get update";
var search = "apt-cache search {keyword}";
var apt_search = "apt search {package-name}";
/**So finally we can sort by dictionary order usingsort -d and show only a
 * page at a time usingless. */
// all
var sort = "apt-cache search {keyword} |sort -d |less";
var sort_all = "apt-cache search . |sort -d |less";
//=============================================================================
// https://askubuntu.com/questions/17823/how-to-list-all-installed-packages
// How to list all installed packages
let apt_list = "apt list --installed"
//=============================================================================
