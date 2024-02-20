# Barrierefreiheit testen und Problemlösungen entwickeln

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>

## Übersicht

Drei verwickelte Fragen:

- Auf welche Barrieren hin testen wir?
- Wie testen wir darauf?
- Wie vermeiden wir Barrieren?

## Was wir testen: WCAG

[Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)

- ~80 Success Criteria (Erfolgskriterien) eingeteilt in A, AA, AAA
- A&AA rechtlich gefordert, AAA optional/ideal
- Betreffen größtenteils Interaktion, weniger "statische" Inhalte

Zur Erinnerung: WCAG ist lediglich das **Minimum**!

## Wie testen wir

- Automatisiert
- Manuell

## Automatisiertes Testen

Ein grobes Bild in Zahlen:

- Einerseits: nur geschätzt 20-30% der Kriterien können durch automatisierte Werkzeuge geprüft werden (siehe z.B. [bik-fuer-alle](https://bik-fuer-alle.de/automatisierte-tests.html), [level access](https://www.levelaccess.com/blog/automated-accessibility-testing-tools-how-much-do-scans-catch/), [gov.uk](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/))
- Andererseits: 57% der Fehler können entdeckt werden [Deque](https://www.deque.com/automated-accessibility-testing-coverage/)

[Nebenbemerkung: [Accessibility Overlays](https://overlayfactsheet.com/) sind sehr problematisch.]

## Werkzeuge zum automatisierten Testen

Browser-Erweiterungen

- [Deque axe DevTools](https://www.deque.com/axe/devtools/) (\*)
- [Microsoft Accessibility Insights](https://accessibilityinsights.io/downloads/) (\*)
- [IBM Equal Access Toolkit](https://www.ibm.com/able/toolkit/tools/)
- [WebAIM WAVE](https://wave.webaim.org/extension/)

Weitere Helfer:  [SkipTo Landmarks&Headings](https://github.com/skipto-landmarks-headings/browser-extension), [Landmarks](http://matatk.agrip.org.uk/landmarks/), Browser *Reader Mode*, [und viele weitere Erweiterungen](https://chromewebstore.google.com/category/extensions/make_chrome_yours/accessibility)

## Werkzeuge zum manuellen Testen

- Gesunder Menschenverstand (POUR etc)
- HTML Quellcode
- [Browser Entwicklertools](https://de.wikipedia.org/wiki/Entwicklerwerkzeuge_in_Webbrowsern) ([kulturbanause.de Artikel](https://kulturbanause.de/blog/die-chrome-entwicklertools-devtools-fuer-designer-und-einsteiger/))

## Für Fortgeschrittene: Screenreader

Assistive Technologien bilden ein komplexes Feld an Software und Hardware. Eine zentrale Kategorie bilden [Screenreader](https://de.wikipedia.org/wiki/Screenreader), z.B.

- Windows: [NVDA](https://www.nvaccess.org/), [JAWS](https://www.freedomscientific.com/products/software/jaws/), [Microsoft Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started)
- Mac/iOS: [VoiceOver](https://www.apple.com/accessibility/)
- Android: [Talkback](https://support.google.com/accessibility/android/answer/6283677?hl=de)
- Linux: [Gnome ORCA](https://wiki.gnome.org/Projects/Orca) (ChromeOS: [ChromeVox](http://www.chromevox.com/))

Demos: [ATHEN STEM conference, 2022](https://pkra.github.io/2022-athen-stem-conf/)


*Kleine* Screenreader: [Texthelp](https://www.texthelp.com/), [Speechify](https://speechify.com/) (oft als browser Erweiterungen); *Reader Mode*


## Was wir testen: WCAG Reloaded

[Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)

- ~80 Success Criteria (Erfolgskriterien) eingeteilt in A, AA, AAA
- A&AA rechtlich gefordert, AAA optional/ideal
- Betreffen größtenteils Interaktion, weniger "statische" Inhalte

Zur Erinnerung: WCAG ist lediglich das **Minimum**!

⇒ Wir werfen einen Blick auf einige wichtige Erfolgskriterien.

## WCAG 1.1.1 Nicht-Text-Inhalt

> Alle Nicht-Text-Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die einem äquivalenten Zweck dient, mit Ausnahme der unten aufgelisteten Situationen. [...]

NB: Dekorativausnahme.

**Was sind Nicht-Text-Inhalte?**

> Jeglicher Inhalt, der keine Buchstabenfolge ist und der durch Software bestimmt werden kann oder bei dem die Abfolge etwas nicht in menschlicher Sprache ausdrückt.\
> Hinweis: Dies beinhaltet ASCII Art (ein Muster von Buchstaben), Emoticons, Leetspeak (Ersetzung von Buchstaben durch Ziffern oder Sonderzeichen) und Bilder, die Text repräsentieren.

## Einordnung: WCAG 1.1.1

- Kurze vs Lange Alternativen
- Viele Techniken ([Understanding 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)), aber mit LaTeX Quellen oft schwierig:
  - *kurz* via `\includegraphics`; *lang* via *kurz* möglich
  - Unterschiede bei <q>fixen</q> und erzeugten Grafiken (tikz etc // R, matplotlib etc)
  - Immer (LaTeX) Quellen behalten! Evtl. Alternativen erzeugen (z.B. Daten als Tabellen, notfalls als Rohtext)
- Formelsatz → [MathJax](https://www.mathjax.org/) hilft
- SVG > Raster (SVG+Raster!)

Mehr: [TU Chemnitz](https://www.tu-chemnitz.de/urz/www/bf/alt.html), [FAU Artikel "perfekter" Alttext](https://www.rrze.fau.de/2022/08/der-perfekte-alt-text-interview-mit-blinden-und-sehbehinderten-menschen/), [barrierefreies.design](https://barrierefreies.design/blog/gute-alternativtexte-fur-bilder-formulieren), [BIK](https://bik-fuer-alle.de/alternativtexte-fuer-grafiken.html), [Harvard](https://accessibility.huit.harvard.edu/describe-content-images)\
Inspiration: [Sorge&Austin@ w4a2023](https://githubraw.com/zorkow/pretext/w4a2023/w4a2023/frontmatter-1.html), [@krautzource/aria-tree-walker](https://krautzource.github.io/aria-tree-walker/)

## WCAG 1.3.1 Info und Beziehungen

> Informationen, Struktur und Beziehungen, die über die Darstellung vermittelt werden, können durch Software bestimmt werden oder stehen in Textform zur Verfügung.

**Einordung**:

- viele Fälle und Techniken ([Understanding 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html))
- Die Best Practices zu Dokumentstruktur (und mehr) helfen
  - aber auch: pragmatische Möglichkeiten (z.B. hervorgehobenes List item ⇒ "neu" dazu schreiben)
- Gleichheitsgrundsatz nicht missbrauchen
- Mein LaTeX Litmustest: Tabellenkopf, Theorem-Umgebungen

## WCAG 1.3.2 Bedeutungstragende Reihenfolge

> Wenn die Reihenfolge, in der Inhalte präsentiert werden, sich auf deren Bedeutung auswirkt, kann die korrekte Leseabfolge durch Software bestimmt werden.

Meistens leicht lösbar. Typische Risikobereiche:

- Floats
- Abbildungen mit mehreren Grafiken
  - Whitespace Hacking zur Positionierung
- Wrapfig Paket

## WCAG 1.3.3 Sensorische Eigenschaften

> Anweisungen, die für das Verständnis und die Bedienung von Inhalt bereitgestellt werden, stützen sich nicht nur auf sensorische Eigenschaften von Komponenten wie Form, Farbe, Größe, visuelle Position, Ausrichtung oder Ton.

Typische Risikobereiche:

- Querverweise ohne Links (<q>Bild rechts</q>, <q>Seite XX</q>)
- Textfarben referenzieren
- Abbildungen mit mehreren Grafiken (1x4 →  2x2  →  4x1)
- Inline-Grafiken (z.B. Glyph-artiges)
- Wrapfig Paket

## WCAG 1.4.1 Benutzung von Farbe

> Farbe wird nicht als einziges visuelles Mittel benutzt, um Informationen zu vermitteln, eine Handlung zu kennzeichnen, eine Reaktion zu veranlassen oder ein visuelles Element zu unterscheiden.

Typische Risikobereiche:

- Fast immer bei Nutzung von Textfarben, d.h. Vorder- und Hintergrundfarben.
  - oft korrigierbar durch Muster (Rand, Schraffierung) und Markup (Links)
- Betrifft ebenso nicht-text (1.1.1), vor allem auch generierten oder textlastigen Nicht-Text
  - insbesondere Legenden, Bildunterschriften, Textalternativen

## WCAG 1.4.3 Kontrast (Minimum)

> Die visuelle Darstellung von Text und Bildern von Text hat ein Kontrastverhältnis von mindestens 4,5:1 mit folgenden Ausnahmen:\
> **Großer Text** [...] **Nebensächlich** [...] **Wortbildmarken**

Typische Risikobereiche:

- Alles aus 1.4.1
- Nur Vordergrund/Hintergrund spezifiziert
- Text auf Bild

## WCAG 1.4.5 Bilder eines Textes

> Wenn die benutzten Techniken die visuelle Präsentation bewirken können, dann wird Text statt Bilder eines Textes dazu benutzt, Informationen zu vermitteln [mit Ausnahmen]

Natürlich guter Stil - nicht Textlayout als Bild, nicht Layout hacken (Größe, Abstände).

Aber: bei LaTeX Paketen oft die einzige Notlösung.

## WCAG 1.4.10 Umfluss (Reflow)

> Inhalte können ohne Informations- oder Funktionsverlust dargestellt werden, ohne dass dafür ein Scrollen in zwei Dimensionen erforderlich ist.

- 320 x 256 CSS-Pixel
- Ausnahme: Verwendung oder Bedeutung erfordern zweidimensionales Layout
  - Beispiele: Bilder, Karten, Diagramme, Videos, Spiele, Präsentationen, Datentabellen

**Einordnung**: (Block-)Formeln sind meistens Ausnahmen. Probleme entstehen oft bei Layout-intensiven Inhalten (z.B. Verse, Algorithm Paket)

<!-- ## WCAG 1.4.11 Nicht-Text-Kontrast

> Ein Kontrastverhältnis von mindestens 3:1 zu benachbarten Farben gilt für die visuelle Präsentation von:\
> **Bestandteilen der Benutzerschnittstelle** [...] **Grafische Objekte**

**Einordnung**: Links sind vermutlich die einzigen Beispiele für den ersten Teil. Betrifft sehr häufig inhaltlich wichtige Graphiken vor allem auch Text in/auf Grafik.
 -->
## WCAG 2.4.2 Seite mit Titel versehen

> Webseiten haben einen Titel, der Thema oder Zweck beschreibt.

**Einordnung**: Inhaltlich einfach (Werkzeuge sollten automatisch `\title` als `<title>` setzen).

Probleme gibt es evtl. bei Einpflege in LMS/CMS etc.

## WCAG 2.4.4 Linkzweck (im Kontext)

> Der Zweck jedes Links kann durch den Linktext allein oder durch den Linktext zusammen mit seinem durch Software bestimmten Link-Kontext bestimmt werden außer in Fällen, in denen der Zweck des Links mehrdeutig für Benutzer im Allgemeinen wäre.

**Einordnung**: Sehr wahrscheinlich fast immer erfüllbar durch die Ausnahmen "Kontext", "allgemeine Ambiguität" (z.B. `\cite{Augs2024}` erzeugt `[1]`).

Trotzdem können Pakete wie cleverref deutlichen Mehrwert bieten (vgl. 2.4.9).

<!-- ## WCAG 2.4.5 Verschiedene Methoden

> Es gibt mehr als eine Methode, um eine Webseite innerhalb eines Satzes von Webseiten zu finden, außer die Webseite ist das Ergebnis oder ein Schritt innerhalb eines Prozesses.

**Einordnung**: Eher relevant für CMS/LMS. Ggf. Relevant, wenn ein Dokument mehrere Seiten erzeugt (z.B. pro Kapitel); siehe 1.3.1. Einfache Best practices wie ein Inhaltsverzeichnis können helfen. -->

## WCAG 2.4.6 Überschriften und Beschriftungen (Labels)

> Überschriften und Labels beschreiben ein Thema oder einen Zweck.

**Einordnung**: Sehr wichtig. Meist von selbst gegeben. 

Grenzfälle: repetitive oder gewollt vage Überschriften, Abbildungen ohne `\caption`.

<!-- ## WCAG 2.4.7 Fokus sichtbar

> Jede durch Tastatur bedienbare Benutzerschnittstelle hat einen Bedienmodus, bei dem der Tastaturfokus sichtbar ist.

**Einordnung**: Konvertierungswerkzeuge sind manchmal nicht gut bei solchen elementaren Designstandards. -->

## WCAG 2.4.9 Linkzweck (reiner Link)

AAA

> Es gibt einen Mechanismus, um den Zweck jedes Links durch den Linktext allein zu erkennen, außer der Linkzweck wäre mehrdeutig für Benutzer im Allgemeinen.

**Einordnung**: Wie 2.4.4 mit weniger Ausnahmen. Gute Motivation, um cleverref etc. zu bevorzugen.

## WCAG 2.4.10 Abschnittsüberschriften

AAA

> Abschnittsüberschriften werden genutzt, um den Inhalt zu gliedern.

> Hinweis: „Überschrift“ wird in seiner allgemeinen Bedeutung benutzt und beinhaltet Titel und andere Methoden, um verschiedenen Arten von Inhalt eine Überschrift hinzuzufügen.

**Einordnung**: Best Practices zeigen, was sie können. Abbildungen, Theorem-Umgebungen etc.

NB: Schwierig, das Ende eines Abschnitt zu beschreiben.

<!-- ## WCAG 2.5.3 Beschriftung (Label) im Namen

> Bei Bestandteilen der Benutzerschnittstelle mit Beschriftungen (Labels), die Text oder Bilder eines Textes enthalten, enthält der Name den Text, der visuell angezeigt wird.

**Einordnung**: Betrifft Links! -->

## WCAG 2.5.8 Target Size (Minimum)

Neu in WCAG 2.2, daher nur auf Englisch:

> The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except where:\
> _Spacing_ [...] _Equivalent_ [...] _Inline_ [...] _User agent control_ [...] _Essential_

Sonst werden sehr kurze Links unbrauchbar - <q>Kapitel [1](...)</q>, <q>siehe [[Kr]](...)</q>.

**Einordnung** Eigentlich schwerwiegendes Problem, aber die Ausnahmen gelten meistens.

Wiederum: cleverref etc. helfen, es gut zu machen.

## WCAG 3.1.1 Sprache der Seite

> Die voreingestellte menschliche Sprache jeder Webseite kann durch Software bestimmt werden.

**Einordnung** Inhaltlich trivial (`<html lang="...">`) aber Werkzeuge scheitern überraschend oft.

## WCAG 3.1.2 Sprache von Teilen

> Die menschliche Sprache jedes Abschnitts oder jedes Satzes im Inhalt kann durch Software bestimmt werden außer bei Eigennamen, technischen Fachbegriffen, Wörtern einer unklaren Sprache und Wörtern oder Wendungen, die Teil des Jargons des direkt umliegenden Textes geworden sind.

**Einordnung**: Eigentlich einfach (via `\foreignlanguage` und `lang`) aber Werkzeuge scheitern manchmal.

## WCAG 3.1 - einige AAAs

Hochgradig relevant aber schwer umsetzbar.

- **3.1.3 Ungewöhnliche Wörter** <q>Es gibt einen Mechanismus, um spezielle Definitionen von Wörtern oder Wendungen zu erkennen, die auf ungewöhnliche oder eingeschränkte Weise benutzt werden, Idiome und Jargon eingeschlossen.</q>
- **3.1.4 Abkürzungen** <q>Es gibt einen Mechanismus, um die ausgeschriebene Form oder Bedeutung von Abkürzungen zu erkennen.</q>
- **3.1.5 Leseniveau** <q> Wenn der Text nach der Entfernung von Eigennamen und Titeln Lesefähigkeiten voraussetzt, die über das Niveau der niedrigen, sekundären Schulbildung hinausgehen, dann gibt es ergänzenden Inhalt oder eine Version, die keine über die niedrige, sekundäre Schulbildung hinausgehenden Lesefähigkeiten verlangt.</q>
- **3.1.6 Aussprache** <q>Es gibt einen Mechanismus, um die bestimmte Aussprache von Wörtern zu erkennen, wenn die Bedeutung der Wörter – im Zusammenhang – mehrdeutig ist, wenn man die Aussprache nicht kennt.</q>
