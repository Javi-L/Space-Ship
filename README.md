# Space-Ship
Project #1: The Game - Ironhack

URL: https://javi-l.github.io/Space-Ship/index.html

Introducción:

Se trata de un juego de naves arcade clasico. Consiste en eliminar enemigos hasta llegar al final de pantalla y derrotar a la nave nodriza.

Los enemigos se van generando mediante un switch controlado por una variable time. La duracion del nivel se puede alargar añadiendo más case de instrucciones.

<img src = "https://github.com/Javi-L/Space-Ship/blob/master/screenshots/switch.png">


Movimientos de player:

Este se mueve en las cuatro direcciones y en las diagonales mediante el uso combinado de key listeners y condiciones true false.

<img src = https://github.com/Javi-L/Space-Ship/blob/master/screenshots/keys-boolean.png>


Movimientos de enemies:

Se generan aleatoriamente mediante funciones de Math floor y random.

<img src = https://github.com/Javi-L/Space-Ship/blob/master/screenshots/randomY.png>

<img src = https://github.com/Javi-L/Space-Ship/blob/master/screenshots/move-enemies.png>


Las colisiones entre balas y player o enemies se logran mediante bucles forEach y for, ya que tanto las balas como los enemies van agrupados en arrays.

https://github.com/Javi-L/Space-Ship/blob/master/screenshots/battle.png


Las colisiones restan vida a la barra de salud de player y a la de la nave nodriza. Tambien a las de las naves aunque estas no muestran barra de salud.

https://github.com/Javi-L/Space-Ship/blob/master/screenshots/nodriza.png


El juego termina al finalizar la vida de player o al derrotar este a la nave nodriza.

https://github.com/Javi-L/Space-Ship/blob/master/screenshots/levelup.png


Quise incluir items para incrementar la vida del player y alguna pantalla más pero me quedé sin tiempo para ello.

