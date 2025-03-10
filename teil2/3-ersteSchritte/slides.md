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

## Textalternativen in LaTeX (WCAG 1.1.1)

- Technisch: Neues LaTeX Feature: `\includegraphics[alt={}]{}`
  - Bei langer Alternative, damit Hinweise geben.
- Inhaltlich: Üben, üben, üben
  - am Besten mit Eigenem Material

## Farben testen

- Color-Picker in [Browser Entwicklertools](https://de.wikipedia.org/wiki/Entwicklerwerkzeuge_in_Webbrowsern) ([kulturbanause.de Artikel](https://kulturbanause.de/blog/die-chrome-entwicklertools-devtools-fuer-designer-und-einsteiger/))
- [leserlich.info Kontrastrechner](https://www.leserlich.info/werkzeuge/kontrastrechner/)

- Und korrigieren
  - LaTeX Stärken nutzen (z.B. Makros, in generierte Grafiken)

Mehr: Artikel von [mindescreen.de](https://www.mindscreen.de/farbkontraste), [barrierefreies.design](https://barrierefreies.design/barrierefreiheit-interaktiv-testen/farben-und-kontraste-pruefen)

## Farbschwäche simulieren

Eine einfache Technik, um Fehler zu identifizieren:

- Via Browser Entwicklertools
- Via Betriebssystem ([Windows](https://support.microsoft.com/de-de/windows/verwenden-von-farbfiltern-in-windows-43893e44-b8b3-2e27-1a29-b0c15ef0e5ce), [MacOS](https://support.apple.com/de-de/guide/mac-help/unac089/14.0/mac/14.0))

Weitere Artikel: [farbschwaeche.de](https://www.farbsehschwaeche.de/materialien), [distriko.de](https://distriko.de/blog/barrierefreie-farbkontraste/), [smashing magazine](https://www.smashingmagazine.com/2024/02/designing-for-colorblindness/)

## (Not)lösungen für Inhalte aus LaTeX Quellen

- [_KISS_](https://de.wikipedia.org/wiki/KISS-Prinzip) Vereinfachung hilft oftmals
- manuelle Nachbearbeitung (d.h. im HTML) sind manchmal notwendig
- make4ht: Fallback Bilder erzeugen

## Lesematerial

- [Professional Web Accessibility Auditing Made Easy](https://pressbooks.library.torontomu.ca/pwaa/) (OA Buch, Toronto Metro University)
