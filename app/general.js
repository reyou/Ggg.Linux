//=============================================================================
var clear = "clear";
//=============================================================================
// How to run Terminal as root?
// https://askubuntu.com/questions/515198/how-to-run-terminal-as-root
var root_admin = "sudo -i";
var regular_user = "exit";
//=============================================================================
var version = "lsb_release -a";
// update-manager's 'Install Updates' 
// https://ubuntuforums.org/showthread.php?t=1629516
var update = "sudo apt-get update && sudo apt-get upgrade";
//=============================================================================
var list = {
    "ls": "ls",
    "ls -la": "ls -la"
}
//=============================================================================
// restart
var reboot = "reboot";
var poweroff = "sudo poweroff";
var shutdown = "sudo shutdown -P";
//=============================================================================
