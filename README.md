# Space-Ship

Project #1: The Game - Ironhack

## Introducción:

Se trata de un juego de naves arcade clásico. Consiste en eliminar enemigos hasta llegar al final de la pantalla y derrotar a la nave nodriza.

Los enemigos se van generando mediante un switch controlado por una variable time. La duración del nivel se puede alargar añadiendo más case de instrucciones. Para esta demo, con fines demostrativos, se ha implementado una duración corta del nive.

```
      switch(this.time) {
        case 1000:
        this.generateEnemies()
        break;
        case 2500:
        this.generateEnemies()
        break;
        case 4000:
        this.enemies.splice(0, this.enemies.length);
        break;
        case 4001: this.mShips.push (new Mothership(this.ctx, 250, 290, "images/mothership2.png", this.width, this.height, 250, 0, 360, 300));
        break;
```

### Movimientos de player:

Este se mueve en las cuatro direcciones utilizando las arrow keys y en las direcciones diagonales presionando a la vez las dos arrow keys correspondientes a la dirección diagonal que se quiera tomar (Ej: para ir en diagonal hacia la parte superior izquierda de la pantalla habrá que presionar a la vez las arrow keys ```izquierda``` y ```arriba```). El poder presionar dos teclas a la vez se ha hecho mediante el uso combinado de key listeners y condiciones true false. 

Primero se crea un objeto en el que a las arrow keys se les da una condición de false:
```
setListeners() {
    let direction = {
      up: false,
      right: false,
      down: false,
      left: false
    };
```
A partir de ese objeto, al presionarse cada tecla, por un evento "keydown" se le da a cada una la condición de true.
 

    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.up:
          direction.up = true;
          break;
        case this.keys.right:
          direction.right = true;
          break;
        case this.keys.down:
          direction.down = true;
          break;
        case this.keys.left:
          direction.left = true;
          break;
      }


Por ejemplo para desplazar al player en diagonal hacia arriba a la derecha solo habrá que combinar los listeners "direction.up" y "direction.right" en true.

      if (direction.up && direction.right) {
        this.posY -= 15;
        this.vy -= 45;
        this.posX += 15;
        this.vx += 45;
      } else if ...


Tras ello mediante eventos "keyup" (dejar de presionar la tecla) haremos que las teclas adquieran la condición de false nuevamente. De esta manera se evita que se crucen los comportamientos de los distintos listeners (lo que provocaría por ejemplo que el player se mueva persistentemente hacia arriba a la izquierda aún cuando se presionara solo la arrow key "izquierda").

    document.addEventListener("keyup", e => {
      if (this.keys.up === e.keyCode) {
        direction.up = false;
      } else if (this.keys.right === e.keyCode) {
        direction.right = false;
      } else if (this.keys.down === e.keyCode) {
        direction.down = false;
      } else if (this.keys.left === e.keyCode) {
        direction.left = false;
      } ...


## Movimientos de enemies:

Se generan aleatoriamente a partir de las funciones de Math floor y random. Primero se ha creado un valor máximo de la posición "Y" generada por random.
```
   this.interval = setInterval(() => {
      this.randomY = Math.floor(Math.random() * 300);
    }, 1000);
```

Para después, al añadirla a la función de moviento de los enemies, hagamos que estos movimientos sean aleatorios a lo largo de la parte de la pantalla reservada a ellos.

```
move() {
    this.posX += this.vx;
    this.posY += this.vy;

    if (this.posX + this.vx > this.maxPosX) {
      this.vx *= -1;
    } else if (this.posX + this.vx < 0) {
      this.vx *= -1;
    }

    if (this.posY + this.vy > this.randomY) {
      this.vy *= -1;
    } else if (this.posY + this.vy < 0) {
      this.vy *= -1;
    }
    
 ```
 
Las posiciones "X" e "Y" iniciales de los enemies son también aleatorias, y distintas dependiendo del tipo de enemigo, viniendo definidas al construirse éste; siendo así sus movimientos diferentes en función del tipo que sean.

    this.posX1 = Math.floor(Math.random() * 500);
    this.posY1 = Math.floor(Math.random() * 400);
    this.enemies.push(new Enemy(this.ctx, 100, 100, "images/enemy1.png"...
      
    this.posX1 = Math.floor(Math.random() * 500);
    this.posY1 = Math.floor(Math.random() * 200);
    this.enemies.push(new Enemy(this.ctx, 150, 150, "images/enemy2.png"...
 
### Colisiones:

Las colisiones entre balas y player o entre balas y enemies se logran mediante la combinación de bucles ```forEach``` con bucles ```for```, ya que tanto las balas como los enemies van agrupados en arrays.



--------------------------------------------------------------

Algunas capturas de pantalla del juego...
 
<img src="https://github.com/Javi-L/Space-Ship/raw/master/screenshots/battle.png" style="max-width:100%;">


Las colisiones restan vida a la barra de salud de player y a la de la nave nodriza. Tambien a las de las naves aunque estas no muestran barra de vida.

<img src="https://github.com/Javi-L/Space-Ship/raw/master/screenshots/nodriza.png" style="max-width:100%;">


El juego termina al finalizar la vida de player o al derrotar éste a la nave nodriza.

<img src="https://github.com/Javi-L/Space-Ship/raw/master/screenshots/levelup.png" style="max-width:100%;">

