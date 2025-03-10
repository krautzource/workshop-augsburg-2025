# Erste Schritte: Barrieren finden und auflösen

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>

## Ziele

- Beispiele testen
  - automatisiert
  - manuell
- Problem identifizieren
  - evtl. Lösungen erarbeiten
  - MWEs

## Automatisiertes Testen

Browser-Erweiterungen

- [Deque axe DevTools](https://www.deque.com/axe/devtools/)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/downloads/)

## Manuelles Testen

- Inhaltlich Arbeiten
  - POUR Prinzipien / WCAG Kriterien
- Grundlegende Tests
  - Überschriften und Seitenstruktur
  - Tab order
  - Links
- Checklisten helfen ([Beispiel 1](https://www.webaccessibilitychecklist.com/), [Beispiel 2](https://www.a11y-collective.com/blog/accessibility-checklist/))
- HTML Quellcode hilft, [Browser Entwicklerwerkzeuge](https://de.wikipedia.org/wiki/Entwicklerwerkzeuge_in_Webbrowsern) helfen 
  
Mehr: [Website Accessibility Testing (a11y collective)](https://www.a11y-collective.com/blog/how-to-check-web-accessibility/), [Chrome Entwicklerwerkzeuge (kulturbanause.de)](https://kulturbanause.de/blog/die-chrome-entwicklertools-devtools-fuer-designer-und-einsteiger/)

##  Crashkurs WCAG 1.1.1

Viele Techniken ([Understanding 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)), aber mit LaTeX Quellen oft schwierig:
- Platzierung: *lokal* via `\includegraphics`; *nichtlokal* via *lokal* 
- Schwer: erzeugten Grafiken (tikz etc, evtl. auch R, matplotlib etc)
  - Alternativen erzeugen (z.B. Daten als Tabellen, notfalls Rohtext)
  - Immer (LaTeX) Quellen behalten!
- Formelsatz → [MathJax](https://www.mathjax.org/) hilft

Mehr: [TU Chemnitz](https://www.tu-chemnitz.de/urz/www/bf/alt.html), [FAU Artikel "perfekter" Alttext](https://www.rrze.fau.de/2022/08/der-perfekte-alt-text-interview-mit-blinden-und-sehbehinderten-menschen/), [barrierefreies.design](https://barrierefreies.design/blog/gute-alternativtexte-fur-bilder-formulieren), [BIK](https://bik-fuer-alle.de/alternativtexte-fuer-grafiken.html), [Harvard](https://accessibility.huit.harvard.edu/describe-content-images)\
Inspiration: [Sorge&Austin@ w4a2023](https://githubraw.com/zorkow/pretext/w4a2023/w4a2023/frontmatter-1.html), [@krautzource/aria-tree-walker](https://krautzource.github.io/aria-tree-walker/)

## Crashkurs WCAG 1.1.1 Kategorisierung

Eine grobe Kategorisierung von Bildern (vgl. [WCAG Alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/))

- Dekorativ: Frontispiz, Rand, Aufmacherbild
- Text: Scans, Alltagsfotos etc
- Gruppe: mehrere als ein Ganzes
- Informativ: Icons, "visuelle Notation" wie Knoten, Graphen
- Komplex: Graphen, Diagramme, Illustrationen, Datenvisualisierung etc

## Crashkurs WCAG 1.1.1 Inhalt

Herangehensweise

- Dekorativ: explizit leer
- Text: den Text
- Gruppe: Jedes einzeln + Gruppierung
- Informativ: Funktionale Textalternative
- Komplex: Endgegner

**Kontextabhängig!!**

## Crashkurs WCAG 1.1.1 Platzierung (1)

Die 2 Optionen für Textalternativen:

- lokal / am Bild  / "image alt"
  - kurz
  - wenn nicht ausreichend, dann Grob + Hinweis auf vollwertige Alternative
- nichtlokal / im Textfluss (das beste Bild ist ein Hilfsmittel)
  - beliebige Länge
  - komplexe Inhalte möglich (z.B. Tabellen, Formeln)

## Crashkurs WCAG 1.1.1 Platzierung (2)

- Bild in Abbildung
  - Textalternative in `\caption`
  - sonst: Textalternative nahe `\ref`
  - am Bild: Kurzversion + Hinweis
- Sonst / Position ist wichtig:
  - direkt davor oder danach
  - Falls das nicht geht: äquivalenter Text am Bild

## Farben testen

- Automatische Tests sind gut bei Textfarben
- Manuell: mit Kontrastrechner [bei webaim](https://webaim.org/resources/contrastchecker/), [bei leserlich.info](https://leserlich.info/kontrastrechner)
  - Color-Picker App oder Browser DevTools
- Korrigieren
  - bei Text einfach
  - LaTeX Stärken nutzen (z.B. Makros, in generierte Grafiken)

Mehr: Artikel von [mindescreen.de](https://www.mindscreen.de/farbkontraste), [barrierefreies.design](https://barrierefreies.design/barrierefreiheit-interaktiv-testen/farben-und-kontraste-pruefen)

## Farbschwäche simulieren

Eine einfache Technik, um Fehler zu identifizieren:

- Via Browser Entwicklertools
- Via Betriebssystem ([Windows](https://support.microsoft.com/de-de/windows/verwenden-von-farbfiltern-in-windows-43893e44-b8b3-2e27-1a29-b0c15ef0e5ce), [MacOS](https://support.apple.com/de-de/guide/mac-help/unac089/14.0/mac/14.0))

Weitere Artikel: [farbschwaeche.de](https://www.farbsehschwaeche.de/materialien), [distriko.de](https://distriko.de/blog/barrierefreie-farbkontraste/), [smashing magazine](https://www.smashingmagazine.com/2024/02/designing-for-colorblindness/)

## (Not)lösungen für Inhalte aus LaTeX Quellen

- [_KISS_](https://de.wikipedia.org/wiki/KISS-Prinzip) Vereinfachung hilft oftmals
- manuelle Nachbearbeitung (d.h. im HTML) sind manchmal notwendig (evtl. automatisierbar)
- make4ht: Fallback Bilder erzeugen

## Lesematerial

- [Professional Web Accessibility Auditing Made Easy](https://pressbooks.library.torontomu.ca/pwaa/) (OA Buch, Toronto Metro University)
