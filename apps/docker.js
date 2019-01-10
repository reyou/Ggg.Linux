//=============================================================================
// C:\Github\Ggg\Ggg.Docker\app\Ggg.Docker.Run.ps1
//=============================================================================
var sudo = "sudo -i";
//=============================================================================
// https://docs.docker.com/install/linux/docker-ce/ubuntu/
var uninstall = "apt-get remove docker docker-engine docker.io";
var update = "apt-get update";
var install_depedencies =
  "apt-get install apt-transport-https ca-certificates curl software-properties-common";
var curl =
  "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -";
var fingerprint = "apt-key fingerprint 0EBFCD88";
var repo =
  'add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"';
// Install the latest version of Docker CE, or go to the next step to install
// a specific version. Any existing installation of Docker is replaced.
var install_docker = "apt-get install docker-ce";
// Uninstall the Docker CE package
var uninstall_ce = "apt-get purge docker-ce";
//=============================================================================
// Verify that Docker CE is installed correctly by running the hello-world image.
var verify = "docker run hello-world";
// http://localhost:8086
var web_server = "docker run -d -p 8086:80 --name webserver nginx";
// List containers
var ps = "docker ps";
var images = "docker images";
//=============================================================================
// .NET Core Docker Samples
// https://github.com/dotnet/dotnet-docker-samples
var samples = "docker run microsoft/dotnet-samples";
//=============================================================================
// https://github.com/dotnet/dotnet-docker-samples/tree/master/dotnetapp-prod
var dotnetDockerSamples = "git clone https://github.com/dotnet/dotnet-docker-samples/";
// How to open a folder in linux via terminal?
// https://askubuntu.com/questions/464324/how-to-open-a-folder-in-linux-via-terminal/464342#464342
var nautilus = "nautilus dotnet-docker-samples/";
// https://github.com/dotnet/dotnet-docker-samples/tree/master/dotnetapp-prod#build-and-run-the-sample-with-docker
function BuildAndRunTheSampleWithDocker() {
  var commands = {
    "browse": "cd dotnetapp-prod",
    "build": "docker build -t dotnetapp-prod .",
    "run": "docker run --rm dotnetapp-prod Hello .NET Core from Docker",
    "vscode-root": 'sudo code --user-data-dir="~/.vscode-root"'
  };
}
//=============================================================================
// .NET Core Development Sample
// https://github.com/dotnet/dotnet-docker-samples/tree/master/dotnetapp-dev
// https://docs.microsoft.com/en-us/dotnet/core/docker/docker-basics-dotnet-core
var EssentialDockerCommands = {
  build: "docker build",
  run: "docker run",
  ps: "docker ps",
  stop: "docker stop",
  rm: "docker rm",
  rmi: "docker rmi",
  image: "docker image",
}
// You wrote the dockerfile; now Docker builds your app and then runs the container.+
/**docker build -t dotnetapp-dev .
docker run --rm dotnetapp-dev Hello from Docker */
function DockerBuildWithContainer() {
  var build = "sudo docker build -t dotnetapp-dev .";
  var run = "sudo docker run --rm dotnetapp-dev Hello from Docker";
}
//=============================================================================
