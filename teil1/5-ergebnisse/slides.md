# Ergebnisse (Tag 1)

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>

## Ergebnissammlung

- beide Werkzeuge schaffen die Basics
- pandoc macht saubereres HTML
- Suche im Web hilft schnell mit typischen Problemen
- beamer tests etwas enttäuschend, da kein CSS für Slideeffekte

<details><summary>Peters Notizen&amp;Tipps</summary>

- einfach.tex
  - pandoc: Numerierung von Sektionen nur mit flag `--number-section`
- beamer.tex
  - beide nur HTML, kein CSS für Slides (pandoc etwas sauberer)
  - make4ht interpretiert das Theme in Teilen (schlecht)
- cleverref.tex
  - beide schaffen es nicht gut; make4ht leicht besser
- color.tex
  - pandoc verliert fcolorbox inkl. Inhalt
- figures.tex
  - includegraphics klappt an sich 
  - web-fremde Bildformate (eps, pdf) machen evtl. Probleme
  - floats sind "gefährlich", wenn sie an der falschen Position enden
  - Nummerierungen gehen nicht gut (beiden)
  - pandoc macht subfigures ordentlich
- lists.tex
  - beide verlieren `\item[]` Konstruktionen
  - pandoc: link Inhalt inkorrekt aber link ok; keine description lists
  - Nummerierungen variieren
- mathmode.tex
  - MathJax-optionen notwendig
  - refs in math mode bringen z.B. `$\ref{...}$`
    - pandoc: bei alten Versionen `flalign` problem 
  - KISS - einfache Umgebungen meist besser unterstützt
  - Letztlich: MathJax checken
- macros.tex
  - einfache macros
    - pandoc: ok
    - make4ht: cfg datei
    - oder Hack im Dokument an MathJax übergeben
  - Bsp tensor: komplexe Pakete brauchen dann doch MathJax Hilfe
- sprache.tex
  - make4ht: schafft nur globales lang
  - pandoc schafft nur lokales lang, aber flag `-V lang="fr"` geht
- theorem.tex
  - beide machen es gut
  - Nummerierung variiert
- toc.tex
  - pandoc: braucht `--toc`, dann brauchbar.
- Beispiele in `tex-spezial` (tikz etc)
  - alles kompliziert, nichts klappt wirklich gut
  - andere tools sind evtl. besser

</details>

## Ideen zur Vertiefung (für morgen)

- das jeweils andere Werkzeug testen
- weiter eigene Beispiele testen
- fremde Beispiele testen (z.B. arXiv)
- weitere Werkzeuge testen
