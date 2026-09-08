@ECHO OFF
SETLOCAL
SET DIR=%~dp0
IF EXIST "%DIR%gradle\wrapper\gradle-wrapper.jar" (
  java -jar "%DIR%gradle\wrapper\gradle-wrapper.jar" %*
) ELSE (
  echo Gradle wrapper jar is missing.
  exit /b 1
)
