# Space-Ship
Project #1: The Game - Ironhack

Introducción:

Se trata de un juego de naves arcade clasico. Consiste en eliminar enemigos hasta llegar al final de pantalla y derrotar a la nave nodriza.

Los enemigos se van generando mediante un switch controlado por una variable time.

Movimientos de player:

Este se mueve en las cuatro direcciones y en las diagonales mediante el uso combinado de key listeners y condiciones true false.

Movimientos de enemies:

Se generan aleatoriamente mediante funciones de Math floor y random:

Las colisiones entre balas y player o enemies se logran mediante bucles forEach y for, ya que tanto las balas como los enemies van agrupados en arrays.

Las colisiones restan vida a la barra de salud de player y a la de la nave nodriza. Tambien a las de las naves aunque estas no muestran barra de salud.

El juego termina al finalizar la vida de player o al derrotar este a la nave nodriza.

Quise incluir items para incrementar la vida del player y alguna pantalla más pero me quedé sin tiempo para ello.

