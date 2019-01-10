//=============================================================================
// Get started with .NET in 10 minutes
// https://www.microsoft.com/net/learn/get-started/linuxubuntu
// Register the trusted Microsoft signature key
var register = "curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg";
var trusted = "sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg";
// Ubuntu 16.04 / Linux Mint 18
// command => sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" > /etc/apt/sources.list.d/dotnetdev.list'
//=============================================================================
// Install .NET SDK
// https://www.microsoft.com/net/learn/get-started/linuxubuntu
var sdk = {
    "apt-transport-https": "sudo apt-get install apt-transport-https",
    "update": "sudo apt-get update",
    "dotnet-sdk": "sudo apt-get install dotnet-sdk-2.1.4",
}
//=============================================================================
// Create your app
// https://www.microsoft.com/net/learn/get-started/linuxubuntu
var create = {
    "new": "dotnet new console -o myApp",
    "cd": "cd myApp",
    "run": "dotnet run",
    "vscode-root": 'sudo code --user-data-dir="~/.vscode-root"',
}
//=============================================================================