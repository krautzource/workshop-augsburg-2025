# Ergebnisse (Tag 1)

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>

## Ergebnissammlung

- einfach.tex
  - pandoc: keine Sektion Numerierung
    - `--number-section` hilft
  - make4ht: ok
- mathmode.tex
  - MathJax optionen notwendig
  - in math mode bringen z.B. `$\ref{...}$`
  - pandoc: `flalign` problem
  - KISS - einfache Umgebungen meist besser unterstützt
  - Letztlich: MathJax checken
- tikz
  - Beispiele in `tex-spezial`
  - alles kompliziert, nichts prickelnd gut
  - andere tools sind evtl besser
- toc
  - make4ht: ging gut
  - pandoc: braucht `--toc`, dann gut.
- macros
  - einfache macros
    - pandoc: ok
    - make4ht: cfg datie
    - oder Hack im Dokument an MathJax übergeben
  - Bsp tensor: komplexe Pakete brauchen dann doch MathJax Hilfe
- Abbildungen
  - includegraphics klappt an sich
    - SVGs am Besten
  - floats sind "gefährlich", wenn sie an der falschen Position enden
  - Nummerierungen gehen nicht gut (beiden)
  - evtl Nacharbeiten. Yikes.
- theorem.tex
  - beide machen es gut
  - Nummerierung variiert
- lists.tex
  - beide verlieren `\item[]` Konstruktion
  - pandoc: link Inhalt inkorrekt aber link ok; keine description lists
  - Nummerierungen variieren

## Ideen zur Vertiefung (für morgen)

- das jeweils andere Werkzeug testen
- weiter eigene Beispiele testen
- fremde Beispiele testen (z.B. arXiv)
- weitere Werkzeuge testen
