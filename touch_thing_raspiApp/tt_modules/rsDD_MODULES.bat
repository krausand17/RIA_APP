@echo off
setlocal enableExtensions enableDelayedExpansion


rem variables to be set by user
rem //////////////////////////////////////////////////////
set "raspiFolder=/home/pi/project_touch/tt_modules/"
set "raspiUser=pi"
set "raspiIP=10.0.0.6"
set "raspiPass=2qsx$Rdx::"
rem //////////////////////////////////////////////////////


set "filenames=%*"
set "raspi=%raspiUser%@%raspiIP%:%raspiFolder%"
(for %%a in (%filenames%) do ( 		
	set home=!home! %%a 
	))
pscp -pw %raspiPass%!home! %raspi% 
endlocal
exit