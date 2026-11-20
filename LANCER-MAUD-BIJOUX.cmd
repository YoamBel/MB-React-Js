@echo off
setlocal EnableExtensions
cd /d "%~dp0"
set "MAUD_WEB_DIR=%~dp0Relance-MaudBijoux\web\dist"
set "MAUD_API_DIR=%~dp0..\Project-MB-ReactJs\Relance-API"
set "MAUD_IMAGES_DIR=%~dp0..\Project-MB-ReactJs\site test 2\Project Maud Bijoux fin Annee Novembre\Images Site MB paris"
if not exist "%MAUD_API_DIR%\Maud.LocalApi.csproj" goto missing
where dotnet >nul 2>&1
if errorlevel 1 goto missing
where npm.cmd >nul 2>&1
if errorlevel 1 goto missing
pushd "%~dp0Relance-MaudBijoux\web"
if exist node_modules\vite goto buildweb
call npm.cmd ci --no-audit --no-fund
if errorlevel 1 goto failed
:buildweb
call npm.cmd run build
if errorlevel 1 goto failed
popd
dotnet build "%MAUD_API_DIR%\Maud.LocalApi.csproj" --nologo --verbosity quiet
if errorlevel 1 exit /b 1
echo Ouverture de Maud Bijoux sur http://127.0.0.1:8771
echo Gardez cette fenetre ouverte pendant la visite du site.
node "%~dp0Relance-MaudBijoux\start.cjs"
exit /b %ERRORLEVEL%
:failed
popd
echo La preparation du site n'a pas abouti. Consultez le message ci-dessus.
exit /b 1
:missing
echo Verifiez la presence des deux dossiers Maud Bijoux, de Node.js et du SDK .NET.
exit /b 1
