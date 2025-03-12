# Ergebnisse (Tag 2)

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>

## Ergebnissammlung

- Testerfahrung
  - Wikipedia: Linkfarbe in lila Tabelle nicht mehr ausreichend
  - Gruppenhomepage: Hintergrund "ruiniert" Kontrast
- Textalternativen
  - Eigene Page: alt kommt nicht durch das System
  - jupyter notebook: handzeichnung, eher visualierend, kurz reicht, länger auch
  - paper: komplexe Graphik. Viele Bilder in eins. Herausforderung Kontraste, Trennfarben helfen gut,  Probleme bei Farbvariationen
  - paper: Verlagsbearbeitung hat Farben/Kontraste verändert
- fehlende Pakete bei MathJax
  - macros configuration https://docs.mathjax.org/en/latest/input/tex/macros.html
  - z.B. via https://pandoc.org/MANUAL.html#templates oder https://www.kodymirus.cz/make4ht/make4ht-doc.html#makeht-configuration-file
  - Beispiel: `Materialien/tex-einfach/mathmode.cfg`
- Bildbeschreibungen
  - Kontext ist König
  - Vereinfachung nutzen
    - mehrfach Bilder teilen
    - Schritte/Szenarien/Methoden einzeln beschreiben
  - Tips&Tricks
    - Gedankenspiele (übers Telefon erklären)
    - Computer Vision zum Anfang/Inspiration, aber gerade im Hochschulbereich sehr limitiert
- Dokumentstruktur klappt grundsätzlich sehr gut
  - Überschriften
  - Links
  - Abbildungen
    - Mit Einschränkungen
- Farben in Graphiken
  - Simulationsfunktionen helfen bei der Einschätzung
  - Schwierigkeit, Kontraste zu überprüfen
- Browser Accessibility Tools / Inspektor  

<details><summary>Peters Notizen&amp;Tipps</summary>

- einfach.tex
  - expected errors
- beamer.tex
  - mak4ht: empty heading - frametitle bug
  - pandoc: 2x h1 (title, section)
- color.tex
  - axe findet nur text color, nicht in MathJax
  - pandoc verliert content fcolorbox
- figures.tex
  - nested figures in make4ht nicht detektierbar
  - pandoc macht keinen dummy alt text - detektierbar
  - beide können includegraphics alt
- lists.tex
  - beide verlieren `\item[]` Konstruktionen
  - pandoc: link Inhalt inkorrekt aber link ok; keine description lists
  - Nummerierungen variieren - Referenzen können Probleme bringen.
- mathmode.tex
  - MathJax notwendig
- sprache.tex
  - make4ht: schafft nur globales lang
  - pandoc schafft nur lokales lang, aber flag `-V lang="fr"` geht
- theorem.tex
  - keine Struktur für niemand
  - LaTeX hilft (Label+Title am Anfang)
- toc.tex
   - level skipping
   - make4ht keine TOC struktur
   - pandoc keine Nummerierung aber listen

</details>

Anderes:
- ​HTML Slides
  - https://revealjs.com/ - HTML oder markdown
  - https://pandoc.org/ "Slide show formats"
  - [List of markdown presentation tools (gist)](https://gist.github.com/johnloy/27dd124ad40e210e91c70dd1c24ac8c8)


## Ideen zur Vertiefung

- Aktiv Menschen suchen
- weitere Werkzeuge erlernen
  - mehr TeX Konverter ausprobieren
  - Bonus: 1 Screenreader lernen!
- üben, üben, üben


Oder einfach gleich HTML und CSS schreiben 😉
