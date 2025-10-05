@echo off
echo Starting E-Bus Management System...
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo The app will open at http://localhost:3000
echo.
call npm start
pause
