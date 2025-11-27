$UserTemp = [System.IO.Path]::GetTempPath()
$UserTempWindows = "C:\Windows\Temp"
$Prefetch = Join-Path $env:SystemRoot "Prefetch"

# Detecta se está rodando como Administrador
$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
$adminRole = [Security.Principal.WindowsBuiltInRole]::Administrator

if (-not $principal.IsInRole($adminRole)) {
    # Se não estiver como admin, relança o script elevado
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = "powershell.exe"
    $psi.Arguments = "-ExecutionPolicy Bypass -File `"$PSCommandPath`" $args"
    $psi.Verb = "runas"        # RunAs = elevação
    $psi.UseShellExecute = $true
    $psi.CreateNoWindow = $true

    try {
        [System.Diagnostics.Process]::Start($psi) | Out-Null
    } catch {
        Write-Host "O usuário cancelou a elevação ou ocorreu um erro."
    }
    exit
}
Write-Host "Opções de configuração"
Write-Host "1-- Limpeza de arquivos temporarios"
Write-Host "2-- Limpeza do cache do navegador"
Write-Host "3-- Limpar cache do sistema"
Write-Host "4-- Limpar o cache do windows update"

if($args[0] -eq "1"){
    #Limpeza Arquivos Temporarios
    Remove-Item -LiteralPath "$UserTemp\" -Force -Recurse -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath "$UserTempWindows\" -Force -Recurse -ErrorAction SilentlyContinue
    Remove-Item -LiteralPath "$Prefetch\" -Force -Recurse -ErrorAction SilentlyContinue
} 
elseif($args[0] -eq "2"){
    #Cache do Navegador
    Get-ChildItem "$env:LOCALAPPDATA\Microsoft\Windows\Explorer" -Filter "thumbcache_*.db" -Recurse | Remove-Item -Force -ErrorAction SilentlyContinue
}
elseif($args[0] -eq "3"){
    #Limpar a lixeira do sistema
    Clear-RecycleBin -Force -ErrorAction SilentlyContinue
}
elseif($args[0] -eq "4"){
    #Limpar o cache do windows Update
    Start-Process -FilePath "dism.exe" -ArgumentList "/Online /Cleanup-Image /StartComponentCleanup /Quiet" -NoNewWindow -Wait
}


exit 0
