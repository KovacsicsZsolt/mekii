 Mekii Ordering App

Egy egyszerű, játékos ételrendelő felület – HTML, CSS és JavaScript segítségével megvalósítva.

 Projekt bemutatása

A Mekii egy interaktív rendelési felület, ahol a felhasználó kategóriákból választhat, megtekintheti a termékek adatait, darabszámot állíthat, kosárba tehet tételeket, majd egy animált fizetési képernyőn keresztül befejezheti a rendelést.

A projekt teljes egészében frontenden fut, backend nélkül.

 Funkciók
 Kategória-alapú böngészés

Hamburger, wrap, saláta, desszert, ital stb.

Kategóriaváltáskor külön scroll-terület.

 Termékadatok megtekintése

Külön "termék részletei" nézet.

Termékkép, név, ár.

Darabszám növelése/csökkentése.

 Kosár funkció

Lebegő kosár ikon, darabszámmal.

Termékek összevonása (ugyanazt a terméket újra hozzáadva nő a darabszám).

Összeg automatikus számolása.

Termék törlése a kosárból.

 Fizetési folyamat

Kosár tartalmának ellenőrzése.

“Sikeres fizetés” GIF megjelenítése teljes képernyőn.

Automatikus visszatérés a kezdőképernyőre és kosár ürítése.

 Technológiák

HTML5

CSS3

JavaScript (ES6+)

Git / GitHub verziókezelés

Nem használ külső könyvtárakat vagy frameworköket (vanilla JS)

📁 Projekt struktúra
mekii-order-app/
│
├── assets/
│   └── logo/            # Minden termékkép és fizetési GIF
│
├── css/
│   └── style.css        # A teljes design megvalósítása
│
├── js/
│   └── app.js           # Kosár, animációk, logika
│
├── Screenshots/         # Képek a projekt állapotairól (nem szükséges a futáshoz)
│
└── index.html           # Belépési pont

 Futatás

Nincs szükség telepítésre.
Egyszerűen nyisd meg a index.html fájlt böngészőben:

mekii\index.html


Vagy GitHub-ból klónozva:

git clone https://github.com/KovacsicsZsolt/mekii-order-app

 Jövőbeli fejlesztési ötletek

Hanghatások rendeléskor

Dinamikus árlista szerverről

Rendelt tételek megjelenítése egy “nyugtán”

Többnyelvű felület

Animált menüátmenetek

 Fejlesztő

Zsolt Kovacsics

GitHub profil: https://github.com/KovacsicsZsolt

📜 Licenc

Ez a projekt oktatási és portfólió célokra készült.
Szabadon felhasználható, módosítható.
