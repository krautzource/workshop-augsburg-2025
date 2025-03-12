# Erstellung und Aufbereitung von barrierefreien Lehrinhalten aus LaTeX für das Web - Tag 2

**Virtuelles Seminar, Universität Augsburg, 2025**

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
  - [webaim WAVE](https://wave.webaim.org/)
  - [Microsoft Accessibility Insights](https://accessibilityinsights.io/downloads/)

Slides und Materialien auf [krautzource.github.io/workshop-augsburg-2025](https://krautzource.github.io/workshop-augsburg-2025) (siehe auch Online System der Uni Augsburg)

## Retrospektive Tag 1

- Erkenntnisse
  - Sowohl pandoc als make4hst handhaben LaTeX Grundstruktur adäquat
    - sie weichen oft in visuellen Details bei "echtem" LaTeX Output ab
  - pandoc lässt eher Inhalte weg, make4ht kann oft näher am TeX bleiben
  - pandoc generiert "saubereres" HTML
  - make4ht ist durch LaTeX-nähe manches Mal besser - aber crashed auch öfter
  - pandoc versteckt vieles hinter flags (Nummerierungen, Inhaltsverzeichnis, Bibliographie)
  - ...
- Herausforderungen
  - math mode geht mit MathJax erstmal ganz gut
    - kleine&große Schwierigkeiten bleiben (`\ref`, User Makros, Umgebungen)
    - pandoc ist etwas eigen beim Umschreiben von Umgebungen (equation fällt weg, array-likes werden "aligned")
  - ...
- Vertiefung?
  - ...
