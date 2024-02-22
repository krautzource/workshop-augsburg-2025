# Erstellung und Aufbereitung von barrierefreien Lehrinhalten aus LaTeX für das Web - Tag 2

**Virtuelles Seminar, Universität Augsburg, 2024**

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>


## Übersicht / Tagesplan

Tag 2

- Orientierung & Rückschau (**Sie sind hier!**) (15min)
- Impulsvortrag: <q>Barrierefreiheit testen und Problemlösungen entwickeln</q> (40min)
- Pause (15min)
- Erste Schritte: Barrieren finden und auflösen (20min)
- Offene Arbeit (90min)
- Ergebnisse (30min)

## Pre-flight Check: 

- Browsererweiterungen
  - [Deque axe DevTools](https://www.deque.com/axe/devtools/)
  - [Microsoft Accessibility Insights](https://accessibilityinsights.io/downloads/)

Slides und Materialien auf [krautzource.github.io/workshop-augsburg-2024](https://krautzource.github.io/workshop-augsburg-2024) (siehe auch Online System der Uni Augsburg)

## Retrospektive Tag 1

- Erkenntnisse
  - Sowohl pandoc als make4ht handhaben LaTeX Grundstruktur adäquat
    - sie weichen oft in visuellen Details bei "echtem" LaTeX Output ab
  - pandoc lässt eher Inhalte weg, make4ht kann of näher am TeX bleiben
  - make4ht ist durch LaTeX-nähe manches Mal besser - aber crashed auch öfter
  - pandoc versteckt einiges hinter flags (Nummerierungen, Inhaltsverzeichnis)
  - ...
-  Herausforderungen
  - math mode geht mit MathJax Hilfe ordentlich, aber kleine und große Schwierigkeiten bleiben (`\ref`, User Makros, komplexe Umgebungen, KISS)
  - Inkompatibilitäten bei Listen
  - Abbildungen hinterlassen einen gemischten Eindruck
  - tikz ist sehr umständlich und fehleranfällig bei beiden
  - ...
- Vertiefung
  - Kurzes Review der beiden Beispiel Artikel
