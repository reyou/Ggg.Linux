function Ggg-VirtualBox-Resize($vdiPath, $sizeInGigaBytes) {
    write-host "vdiPath: $vdiPath sizeInGigaBytes: $sizeInGigaBytes"
    $programFiles = "D:\Program Files"    
    $programFiles32 = "D:\Program Files (x86)"
    $fileName = "VBoxManage.exe"
    write-host "Searching for $fileName..."
    $items = Get-ChildItem $programFiles, $programFiles32, -Filter "*$fileName*" -Recurse -ErrorAction Ignore
    $VBoxmanageExe = $items[0];
    "$fileName found at: $($VBoxmanageExe.FullName)"
    $sizeInMegaBytes = Ggg-GigaBytesToMegaBytes $sizeInGigaBytes
    Write-Host "Resize will start in 5 seconds..."
    Start-Sleep -Seconds 5
    Ggg-Run-Process $VBoxmanageExe.FullName "modifyhd $vdiPath --resize $sizeInMegaBytes"    
}

function Ggg-Start-Process($filePath, $argumentList) {
    Start-Process -FilePath $filePath -ArgumentList $argumentList -WindowStyle Normal -Wait 

}

function Ggg-Run-Process($filePath, $argumentList) {
    $pinfo = New-Object System.Diagnostics.ProcessStartInfo
    $pinfo.FileName = $filePath
    $pinfo.RedirectStandardError = $true
    $pinfo.RedirectStandardOutput = $true
    $pinfo.UseShellExecute = $false
    $pinfo.Arguments = $argumentList
    $p = New-Object System.Diagnostics.Process
    $p.StartInfo = $pinfo
    $p.Start() | Out-Null
    $p.WaitForExit()
    $stdout = $p.StandardOutput.ReadToEnd()
    $stderr = $p.StandardError.ReadToEnd()
    Write-Host "stdout: $stdout"
    Write-Host "stderr: $stderr"
    Write-Host "exit code: " + $p.ExitCode
}

function Ggg-GigaBytesToMegaBytes($sizeInGigaBytes) {    
    # 1 GB 10^3 MegaBytes
    $sizeInMegaBytes = $sizeInGigaBytes * 10 * 10 * 10;
    return $sizeInMegaBytes;
}

<##>
$vdiPath = "`"D:\Programs2\VirtualBox\Ubuntu-2-5-2018\Ubuntu.vdi`""
$sizeInGigaBytes = 20
Ggg-VirtualBox-Resize  $vdiPath $sizeInGigaBytes
