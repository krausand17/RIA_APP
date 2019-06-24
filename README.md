# RIA_APP

Steuerung für das neuartige Trainings- und 
Therapiegerät "The Jiggler".
Besteht aus den Applikationen RaspiApp und ExternApp.

RaspiApp benötigt ein RaspberryPi 3B+, Python 3.5
oder höher, und die Module "kivy" und "websockets".
Die RaspiApp enthält die gesamte Steuerlogik für "The Jiggler".
Gedacht als fix montiertes Bedien- und Steuerelement
werden Signale über die GPIOs des RaspberryPi gesendet, 
um die Motoren von "The Jiggler" anzusteuern. 
Gesteuert werden kann Geschwindigkeit, Drehrichtung und Neigungsgrad.
Die Eingabe erfolgt über ein Touch-Display.

ExternApp ist vorrangig als eigene Steuerung für einen allfällig
anwesenden Therapeuten gadacht und stellt lediglich
eine Erweiterung dar, eine getrennte Nutzung ist nicht 
vorgesehen und im momentanen Zustand nicht möglich.
Eine Verbindung zur RaspiApp kann hergestellt werden, nachdem auf 
dieser im Unterpunkt Menü ein Websocket-Server gestartet wurde.
In dieser Version sind die Verbindungsdaten im Source-Code
hardcoded und müssen händisch angepasst werden.
Im Fall der Winkeleinheit ist die Art der Umsetzung in mechanischer
und elektrotechnischer Hinsicht noch nicht restlos geklärt. Die
vorhande Steuerung ist deshalb lediglich ein Platzhalter, beschränkt
auf Konsolen-Outputs und rudimentäre Logik.

Es lassen sich auch vordefinierte Trainingsprogramme abrufen und für 
den späteren Gebrauch soll auch die Möglichkeit geschaffen werden,
eigene Trainingsprogramme zu definieren.