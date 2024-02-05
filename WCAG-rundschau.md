## WCAG 2.2 Rundschau aus LaTeX sicht

Eine informelle Rundschau der [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2). Da es keine aktuelles anerkannte Übersetzung von WCAG 2.2 gibt, sind die Auszüge teils auf Englisch und teils aus der (leider) inoffiziellen Übersetzung der [WCAG 2.1](https://outline-rocks.github.io/wcag/translations/WCAG21-de/).

Die Rundschau reduziert WCAG 2.2 auf diejenigen Erfolgskriterien (Success Criteria), die für solche Dokumenten relevant sind, welche aus LaTeX-Quellen erzeugt wurden.

Darüberhinaus enthält die Rundschau Kommentare zu LaTeX-spezifischen Problemen und Anwendungsfällen.

### 1. Wahrnehmbar - Perceivable

> Informationen und Bestandteile der Benutzerschnittstelle müssen den Benutzern so präsentiert werden, dass diese sie wahrnehmen können.

#### 1.1 Textalternativen

> Stellen Sie Textalternativen für alle Nicht-Text-Inhalte zur Verfügung, so dass diese in andere vom Benutzer benötigte Formen geändert werden können, wie zum Beispiel Großschrift, Braille, Symbole oder einfachere Sprache.

##### 1.1.1 Nicht-Text-Inhalt

> Alle Nicht-Text-Inhalte, die dem Benutzer präsentiert werden, haben eine Textalternative, die einem äquivalenten Zweck dient, mit Ausnahme der unten aufgelisteten Situationen.

- (Auswahl der) Ausnahmen:
  - **Test**: Wenn es sich bei dem Nicht-Text-Inhalt um einen Test oder eine Übung handelt, die nichtig wäre, wenn sie als Text dargestellt würde, dann stellen Textalternativen zumindest eine deskriptive Identifizierung des Nicht-Text-Inhalts bereit.
  - **Sensorisch**: Wenn Nicht-Text-Inhalt hauptsächlich dafür gedacht ist, eine bestimmte Sinneserfahrung zu schaffen, dann stellen Textalternativen zumindest eine deskriptive Identifizierung des Nicht-Text-Inhalts bereit.
  - **Dekoration, Formatierung, unsichtbar** Wenn der Nicht-Text-Inhalt reine Dekoration ist, nur für visuelle Formatierung benutzt wird oder dem Benutzer gar nicht präsentiert wird, dann wird der Inhalt so implementiert, dass er von assistierender Technik ignoriert werden kann.

###### Techniken (WCAG Quickref)

Zwei Szenarien werden unterschieden: kurz und lang.

- Situation A: If a short description can serve the same purpose and present the same information as the non-text content: ...
- Situation B: If a short description can not serve the same purpose and present the same information as the non-text content (e.g., a chart or diagram): ...

Eine vielzahl Techniken steht für beide bereit.

Aus [Understanding 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html):

- **Objective**: Information about images and other non-text content is available to more people
- **Author task**: Create a text alternative for visual and auditory content
- Starting point Situation A:
  - Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content
  - e.g., [Technique G94](https://www.w3.org/WAI/WCAG22/Techniques/general/G94)
  - basically: provide alt-text/aria-label etc on the element
- Starting point Situation B:
  - **BOTH** Providing short text alternatives that provide a brief description of the non-text content
    - e.g., G95
  - **AND** Long text alternative techniques
    - e.g., G73 (long description in another location with immediately adjacent link to the non-text content)
    - e.g., G74 (long description in text near the non-text content, with a reference to the location of the long description in the short description)
    - e.g., G92 (long description for non-text content that serves the same purpose and presents the same information)

TODO:

###### Einordnung

Die vermutlich größte Hürde, da grundsätzlich neue Denkweisen nötig sind.

Was sind Nicht-Text-Inhalte?

Definition aus WCAG:

> Jeglicher Inhalt, der keine Buchstabenfolge ist und der durch Software bestimmt werden kann oder bei dem die Abfolge etwas nicht in menschlicher Sprache ausdrückt.
> Hinweis: Dies beinhaltet ASCII Art (ein Muster von Buchstaben), Emoticons, Leetspeak (Ersetzung von Buchstaben durch Ziffern oder Sonderzeichen) und Bilder, die Text repräsentieren.

Im Kontext von LaTeX:

- externe Grafik
  - Rasterformate (png, jpg etc)
  - SVG inhalte (s.u.)
- Formeltextsatz
  - MathJax hilft bei allen üblichen Fällen
  - aber es ist kompliziert
- erzeugte Grafiken
  - "Zeichen"pakete (tikz, pstricks, xypic etc)
  - Pakete für Funktionsplots, Datenvisualisierung
  - Quellen können dazu dienen, Alternativen zu erzeugen (e.g., Daten als Tabellen, aurale Präsentation von Graphen, 2-Dim Braille (cf. Sorge/Austin paper))
- Spezialfälle
  - Grafik mit Formeln
  - Formeln mit Grafik
  - "inline" Grafiken (Icons, Marker, Glyphen-artiges)

#### 1.2 Zeitbasierte Medien

> Stellen Sie Alternativen für zeitbasierte Medien zur Verfügung.

###### Einordnung

> N/A (für fast alle denkbaren LaTeX-basierten Inhalte)

1.2.1 Reine Audio- und Videoinhalte (aufgezeichnet)\
1.2.2 Untertitel (aufgezeichnet)\
1.2.3 Audiodeskription oder Medienalternative (aufgezeichnet)\
1.2.4 Untertitel (Live)\
1.2.5 Audiodekcription (aufgezeichnet)

AAA:\
1.2.6 Gebärdensprache (aufgezeichnet)\
1.2.7 Erweiterte Audiodeskription (aufgezeichnet)\
1.2.8 Medienalternative (aufgezeichnet)\
1.2.9 Reiner Audioinhalt (Live)

#### 1.3 Anpassbar

> Erstellen Sie Inhalte, die auf verschiedene Arten dargestellt werden können (z. B. einfacheres Layout), ohne dass Informationen oder Struktur verloren gehen.

##### 1.3.1 Info und Beziehungen

> Informationen, Struktur und Beziehungen, die über die Darstellung vermittelt werden, können durch Software bestimmt werden oder stehen in Textform zur Verfügung.

###### Techniken (WCAG quickref)

Situation A: The technology provides semantic structure to make information and relationships conveyed through presentation programmatically determinable:

- identify regions and landmarks
- identify headings
- name regions and landmarks
- Using semantic elements to mark up structure
- Using semantic markup to mark emphasized or special text
- Using text to convey information that is conveyed by variations in presentation of text
- Separating information and structure from presentation to enable different presentations (e.g., HTML+CSS)
- Semantically identifying a font icon with role="img"
- Making information and relationships conveyed through presentation programmatically determinable using the following techniques:
  - Using semantic markup whenever color cues are used
  - Using table markup to present tabular information
  - Using caption elements to associate data table captions with data tables
  - Using the scope attribute to associate header cells and data cells in data tables
  - Using id and headers attributes to associate data cells with header cells in data tables
  - Using ol, ul and dl for lists or groups of links
  - Using h1-h6 to identify headings
  - Grouping related links using the nav element

Situation B: The technology in use does NOT provide the semantic structure to make the information and relationships conveyed through presentation programmatically determinable:

- Using text to convey information that is conveyed by variations in presentation of text (e.g., bold on 'new' item gets "(new)" in item text)
- Making information and relationships conveyed through presentation programmatically determinable or available in text using the following techniques:
  - [pkra: what follows here in WCAG is for plain text but might serve to inform preformatted & pseudo-code content]

###### Einordnung

TODO: alle guten LaTeX Tips zu Dokumentenstruktur

##### 1.3.2 Bedeutungstragende Reihenfolge

> Wenn die Reihenfolge, in der Inhalte präsentiert werden, sich auf deren Bedeutung auswirkt, kann die korrekte Leseabfolge durch Software bestimmt werden.

- Ordering the content in a meaningful sequence
- Using the dir attribute on an inline element to resolve problems with nested directional runs
- Positioning content based on structural markup
- Using CSS letter-spacing to control spacing within a word
- Making the DOM order match the visual order
- Failures
  - using white space characters to control spacing within a word
  - changing the meaning of content by positioning information

###### Einordnung

- wrapfig package
- single figure caption for multi-img figure "aligned" using whitespace
- packages that created layout by whitespace (e.g., other tools for algorithm packages)
- certain types of white space misuse fit here

##### 1.3.3 Sensorische Eigenschaften

> Anweisungen, die für das Verständnis und die Bedienung von Inhalt bereitgestellt werden, stützen sich nicht nur auf sensorische Eigenschaften von Komponenten wie Form, Farbe, Größe, visuelle Position, Ausrichtung oder Ton.

- Providing textual identification of items that otherwise rely only on sensory information to be understood (e.g., "press the lower-right (sign up) button.")
- Failures
  - identifying content only by its shape or location (e.g, "to the left of the illustration", "the circled piece")
  - using a graphical symbol alone to convey information

###### Einordnung

- figures/figcaptions, in particular mulit-img figures
- virtually all uses of inline graphics (e.g., glyph-likes)
- text references
- wrapfig

##### 1.3.4 Bildschirmausrichtung

> Die Betrachtung und Bedienung von Inhalten ist nicht auf eine einzige Bildschirmausrichtung wie z. B. Hoch- oder Querformat beschränkt, es sei denn, eine bestimmte Bildschirmausrichtung ist unentbehrlich.

###### Einordnung

N/A

##### 1.3.5 Bestimmung des Eingabezwecks

N/A

##### 1.3.6 Bestimmung des Zwecks

AAA

> In Inhalten, die mit Auszeichnungssprachen implementiert sind, kann der Zweck von Bestandteilen der Benutzerschnittstelle, Symbolen und Regionen durch Software bestimmt werden.

TODO: AAA und ein schöner Anlass über eigentlich einfach "mach alles besser" zu reden. Speziell regions/landmarks/etc

#### 1.4 Unterscheidbar

> Machen Sie es Benutzern leichter, Inhalt zu sehen und zu hören einschließlich der Trennung von Vorder- und Hintergrund.

##### 1.4.1 Benutzung von Farbe

> Farbe wird nicht als einziges visuelles Mittel benutzt, um Informationen zu vermitteln, eine Handlung zu kennzeichnen, eine Reaktion zu veranlassen oder ein visuelles Element zu unterscheiden.

- Situation A: If the color of particular words, backgrounds, or other content is used to indicate information:
  - Ensuring that information conveyed by color differences is also available in text
  - Including a text cue for colored form control labels
  - Ensuring that additional visual cues are available when text color differences are used to convey information
  - Using a contrast ratio of 3:1 with surrounding text and providing additional visual cues on hover for links or controls where color alone is used to identify them
- Situation B: If color is used within an image to convey information:
  - Using color and pattern
  - Ensuring that information conveyed by color differences is also available in text
- Failures for Success Criterion 1.4.1
  - having a text alternative that does not include information that is conveyed by color differences in the image
  - creating links that are not visually evident without color vision
  - identifying required or error fields using color differences only

###### Einordnung

Betrifft alle Nutzung von Textfarben, d.h. Vorder- und Hintergrundfarben.

Betrifft ebenso nicht-text (1.1.1), vor allem auch generierten oder textlastigen Nicht-Text.

##### 1.4.2 Audio-Steuerelement

N/A

##### 1.4.3 Kontrast (Minimum)

> Die visuelle Darstellung von Text und Bildern von Text hat ein Kontrastverhältnis von mindestens 4,5:1 mit folgenden Ausnahmen:
>
> - **Großer Text** Großer Text und Bilder von großem Text haben ein Kontrastverhältnis von mindestens 3:1;
> - **Nebensächlich** Für Text oder Bilder eines Textes, die Teil eines inaktiven Bestandteils der Benutzerschnittstelle, rein dekorativ, für niemanden sichtbar oder Teil eines Bildes sind, welches signifikanten anderen visuellen Inhalt enthält, gibt es keine Kontrastanforderung.
> - **Wortbildmarken** Text, der Teil eines Logos oder eines Markennamens ist, hat keine Kontrastanforderungen.

- Situation A: text is less than 18 point if not bold and less than 14 point if bold
  - Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text
  - Not specifying background color, not specifying text color, and not using technology features that change those defaults
  - Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast
- Situation B: text is at least 18 point if not bold and at least 14 point if bold
  - Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text
  - Not specifying background color, not specifying text color, and not using technology features that change those defaults
- Advisory: Using a technology that has commonly-available user agents that can change the foreground and background of blocks of text
  - e.g., dark mode, high contrast mode
- Failures
  - specifying foreground colors without specifying background colors or vice versa
  - using background images that do not provide sufficient contrast with foreground text (or images of text)

###### Einordnung

So wie 1.4.1

##### 1.4.4 Textgröße ändern

> Mit Ausnahme von Untertiteln und Bildern eines Textes, kann Text ohne assistierende Technik um bis zu 200 Prozent geändert werden, ohne dass dabei Inhalt oder Funktionalität verloren geht.

###### Einordnung

Sollte nie wirklich ein Problem sein. Außenahmen bestehen für manche zweidimensionale Konstrukte (z.B. Tabellen).

##### 1.4.5 Bilder eines Textes

> Wenn die benutzten Techniken die visuelle Präsentation bewirken können, dann wird Text statt Bilder eines Textes dazu benutzt, Informationen zu vermitteln mit den folgenden Ausnahmen:
>
> - **Anpassbar** Das Bild eines Textes kann visuell an die Anforderungen des Benutzers angepasst werden;
> - **Unentbehrlich** Eine bestimmte Präsentation von Text ist für die vermittelten Informationen unentbehrlich.
>   - Note 1:Wortbildmarken (Text, der Teil eines Logos oder Markennamens ist) werden als unentbehrlich betrachtet.

Aus Techniken:

- Using CSS to control visual presentation of text
- Using CSS to replace text with images of text and providing user interface controls to switch
- Separating information and structure from presentation to enable different presentations
- Advisory
  - Using percent for font sizes
  - Using named font sizes
  - Using em units for font sizes
  - Using CSS letter-spacing to control spacing within a word
  - Positioning content based on structural markup

###### Einordnung

Im Wesentlichen guter Stil - nicht Textlayout als Bild, nicht Layout hacken (Größe, Abstände)

##### 1.4.6 Kontrast (erhöht)

AAA

###### Einordnung

Wie 1.4.3 aber 7:1 ratio

##### 1.4.7 Leiser oder kein Hintergrund-Audioinhalt

AAA & N/A

##### 1.4.8 Visuelle Präsentation

AAA

###### Einordnung

Eher außerhalb der der Inhalte.

Z.B. EPUB Lesesystem haben solche Feature.

##### 1.4.9 Images of Text (No Exception)

AAA

###### Einordnung

Weniger Ausnahmen als 1.4.5.

##### 1.4.10 Umfluss (Reflow)

> Inhalte können ohne Informations- oder Funktionsverlust dargestellt werden, ohne dass dafür ein Scrollen in zwei Dimensionen erforderlich ist für:
>
> - vertikal scrollenden Inhalt mit einer Breite, die 320 CSS-Pixeln entspricht;
> - horizontal scrollenden Inhalt mit einer Höhe, die 256 CSS-Pixeln entspricht.

> Eine Ausnahme bilden Teile des Inhalts, deren Verwendung oder Bedeutung ein zweidimensionales Layout erfordern.

> Hinweis: Beispiele für Inhalte, die ein zweidimensionales Layout erfordern, sind Bilder, Karten, Diagramme, Videos, Spiele, Präsentationen, Datentabellen und Benutzerschnittstellen, bei denen es notwendig ist, Werkzeugleisten im Blick zu behalten, während der Inhalt bearbeitet wird.

- Techniques
  - Using media queries and grid CSS to reflow columns
  - Using CSS Flexbox to reflow content
  - Allowing for Reflow with Long URLs and Strings of Text
  - Using CSS width, max-width and flexbox to fit labels and inputs
  - Calculating size and position in a way that scales with text size
  - Providing options within the content to switch to a layout that does not require the user to scroll horizontally to read a line of text
- Advisory Techniques
  - Using media queries to un-fixing sticky headers / footers
  - Using CSS max-width and height to fit images
  - CSS, Reflowing simple data tables (Potential future technique)
  - CSS, Fitting data cells within the width of the viewport (Potential future technique)
  - Mechanism to allow mobile view at any time (Potential future technique)
- Failures
  - content disappearing and not being available when content has reflowed

##### 1.4.11 Nicht-Text-Kontrast

> Ein Kontrastverhältnis von mindestens 3:1 zu benachbarten Farben gilt für die visuelle Präsentation von:
>
> - **Bestandteilen der Benutzerschnittstelle** Visuelle Informationen, die zur Identifizierung von Bestandteilen der Benutzerschnittstelle und Zuständen benötigt werden, außer bei inaktiven Bestandteilen oder wenn das Aussehen des Bestandteils durch den Benutzeragenten bestimmt und nicht vom Autor geändert wird;
> - **Grafische Objekte** Teile von Grafiken, die zum Verständnis des Inhalts erforderlich sind, es sei denn, eine bestimmte Präsentation von Grafiken ist unentbehrlich für die zu vermittelnde Information.

- Situation B: Color is required to understand graphical content
  - Ensuring that a contrast ratio of 3:1 is provided for icons
  - Provide sufficient contrast at the boundaries between adjoining colors
- Text in or over graphics
  - Include labels and values with the graphic (TBD)
  - Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text
  - Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text
  - Providing a control with a sufficient contrast ratio that allows users to switch to a presentation that uses sufficient contrast
- Failures
  - styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator

###### Einordnung

Betrifft sehr häufig inhaltlich wichtiged Graphiken.

TODO: add example

##### 1.4.12 Textabstand

> Bei Inhalten, die mit Auszeichnungssprachen implementiert werden, die die folgenden Stileigenschaften für Text unterstützen, kommt es zu keinem Verlust von Inhalt oder Funktionalität, wenn man sämtliche folgenden Einstellungen vornimmt und keine andere Stileigenschaft ändert:
>
> - Zeilenhöhe (Zeilenabstand) auf mindestens das 1,5-Fache der Schriftgröße;
> - Abstand nach Absätzen auf mindestens das 2-Fache der Schriftgröße;
> - Buchstabenabstand (Laufweite) auf mindestens das 0,12-Fache der Schriftgröße;
> - Wortabstand auf mindestens das 0,16-Fache der Schriftgröße.
>
> Ausnahme: Menschliche Sprachen und Schriften, die eine oder mehrere dieser Textstileigenschaften im geschriebenen Text nicht verwenden, können dieses Erfolgskriterium erfüllen, indem sie nur die Eigenschaften verwenden, die für diese Kombination von Sprache und Schrift existieren.

###### Einordnung

N/A?

##### 1.4.13 Inhalt bei Überfahren mit dem Zeiger oder Tastaturfokus („Hover“ oder „Focus“)

> Wenn durch das Überfahren mit dem Zeiger oder durch Tastaturfokus zusätzlicher Inhalt sichtbar wird, der anschließend bei Entfernen des Zeigers oder des Tastaturfokus wieder ausgeblendet wird, muss folgendes zutreffen:
>
> - **Verwerfbar** Es gibt einen Mechanismus, um den zusätzlichen Inhalt zu verwerfen, ohne den Zeiger oder den Tastaturfokus zu bewegen, es sei denn, der zusätzliche Inhalt kommuniziert einen Eingabefehler oder verdeckt oder ersetzt andere Inhalte nicht;
> - **Überfahrbar** Wenn zusätzlicher Inhalt durch Überfahren mit dem Zeiger ausgelöst werden kann, dann kann der Zeiger über den zusätzlichen Inhalt bewegt werden, ohne dass der zusätzliche Inhalt verschwindet;
> - **Beständig** Der zusätzliche Inhalt bleibt sichtbar, bis der Auslöser des „Hover“ oder „Focus“ entfernt wird, der Benutzer ihn verwirft oder die dazugehörige Information nicht mehr gültig ist.
>
> Ausnahme: Die visuelle Darstellung des zusätzlichen Inhalts wird durch den Benutzeragenten gesteuert und nicht durch den Autor verändert.

###### Einordnung

TODO: N/A?

### 2. Bedienbar

> Bestandteile der Benutzerschnittstelle und Navigation müssen bedienbar sein.

#### 2.1 Tastatur

> Alle Funktionalitäten des Inhalts sind durch eine Tastaturschnittstelle bedienbar, ohne dass eine bestimmte Zeiteinteilung für einzelne Tastenanschläge erforderlich ist, außer wenn die zugrunde liegende Funktion Eingaben verlangt, die vom Pfad der Bewegung des Benutzers und nicht nur von den Endpunkten abhängig sind.

2.1.1 Keyboard\
2.1.2 No Keyboard Trap\
AAA 2.1.3 Keyboard (No Exception)\
2.1.4 Character Key Shortcuts

###### Einordnung

N/A?

#### 2.2 Ausreichend Zeit

> Geben Sie den Benutzern ausreichend Zeit, Inhalte zu lesen und zu benutzen.

2.2.1 Timing Adjustable\
2.2.2 Pause, Stop, Hide\
AAA 2.2.3 No Timing\
AAA 2.2.4 Interruptions\
AAA 2.2.5 Re-authenticating\
AAA 2.2.6 Timeouts\

###### Einordnung

N/A?

TODO: Aufgaben/Klausuren/Testsysteme fallen hier hinein

#### 2.3 Anfälle und physische Reaktionen

> Gestalten Sie Inhalte nicht auf Arten, von denen bekannt ist, dass sie zu Anfällen oder physischen Reaktionen führen.

2.3.1 Grenzwert von dreimaligem Blitzen oder weniger\
AAA 2.3.2 Drei Blitze\
AAA 2.3.3 Animation durch Interaktionen\

###### Einordnung

N/A?

(animated content, video etc is affected by this.)

#### 2.4 Navigierbar

> Stellen Sie Mittel zur Verfügung, um Benutzer dabei zu unterstützen zu navigieren, Inhalte zu finden und zu bestimmen, wo sie sich befinden.

##### 2.4.1 Blöcke umgehen

> Es gibt einen Mechanismus, um Inhaltsblöcke zu umgehen, die auf verschiedenen Webseiten wiederholt werden.

###### Einordnung

N/A?

Mehr fokussiert auf UI. Inhalte werden eher in 1.3.1 verhandelt (headings, regions etc)

##### 2.4.2 Seite mit Titel versehen

> Webseiten haben einen Titel, der Thema oder Zweck beschreibt.

###### Einordnung

Inhaltich einfach und Werkzeuge sollten es automatisch machen, aber evtl. schwierig in LMS/CMS etc einzupflegen.

##### 2.4.3 Fokus-Reihenfolge

> Wenn eine Webseite der Reihe nach navigiert werden kann und die Reihenfolge der Navigation die Bedeutung oder Bedienung beeinflusst, erhalten fokussierbare Komponenten den Fokus in einer Reihenfolge, der Bedeutung und Bedienbarkeit aufrecht erhält.

###### Einordnung

Aus LaTeX-Quellen erzeugte Inhalte sind normalerweise zu statisch, um darauf Einfluß zu nehmen.

##### 2.4.4 Linkzweck (im Kontext)

> Der Zweck jedes Links kann durch den Linktext allein oder durch den Linktext zusammen mit seinem durch Software bestimmten Link-Kontext bestimmt werden außer in Fällen, in denen der Zweck des Links mehrdeutig für Benutzer im Allgemeinen wäre.

- Techniques
  - Providing link text that describes the purpose of a link
  - Providing link text that describes the purpose of a link for anchor elements
  - Allowing the user to choose short or long link text using one of the techniques below:
    - Providing a control near the beginning of the Web page that changes the link text
    - Using scripts to change the link text
  - Identifying the purpose of a link using link text combined with the text of the enclosing sentence
  - Providing a supplemental description of the purpose of a link using one of the following techniques:
    - Supplementing link text with the title attribute
    - Using CSS to hide a portion of the link text
  - Identifying the purpose of a link using link text combined with programmatically determined link context using one of the following techniques:
    - Using aria-labelledby for link purpose
    - Using aria-label for link purpose
    - Identifying the purpose of a link using link text combined with its enclosing list item
    - Identifying the purpose of a link using link text combined with its enclosing paragraph
    - Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells
    - Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested
  - Providing link text that describes the purpose of a link
- Advisory Techniques
  - Combining adjacent image and text links for the same resource
  - Identifying the purpose of a link using link text combined with the preceding heading element
- Failures
  - to providing link context only in content that is not related to the link
  - not providing an accessible name for an image which is the only content in a link

###### Einordnung

Sehr warscheinlich fast immer erfüllbar durch die Ausnahmen "Kontext", "allgemeine Ambiguität" (z.B. `\cite` macht "[1]").

Trotzdem können Pakete wie cleverref deutlichen Mehrwert bieten.

##### 2.4.5 Verschiedene Methoden

> Es gibt mehr als eine Methode, um eine Webseite innerhalb eines Satzes von Webseiten zu finden, außer die Webseite ist das Ergebnis oder ein Schritt innerhalb eines Prozesses.

- Sufficient Techniques: Using two or more of the following techniques:
  - Providing links to navigate to related Web pages
  - Providing a Table of Contents
  - Providing a site map
  - Providing a search function to help users find content
  - Providing a list of links to all other Web pages - Linking to all of the pages on the site from the home page
- Advisory Techniques
  - Using the link element and navigation tools

###### Einordnung

Größtenteils N/A.

Normalerweise nicht relevant für Inhalte.

Evtl. für Bücher, aber Kurzform ist eher eine einzelne Seite.

Siehe auch: 1.3.1.

Siehe auch: Best practices (TOC etc)

##### 2.4.6 Überschriften und Beschriftungen (Labels)

> Überschriften und Labels beschreiben ein Thema oder einen Zweck.

###### Einordnung

Sehr relevant. Aber meist automatisch ok

Obacht: Grenzfälle - repetitiv, gewollt vage Überschriften

##### 2.4.7 Fokus sichtbar

> Jede durch Tastatur bedienbare Benutzerschnittstelle hat einen Bedienmodus, bei dem der Tastaturfokus sichtbar ist.

###### Einordnung

Wichtig.

Konvertierungswerkzeuge sind manchmal nicht gut bei solchen elementaren Designstandards.

##### 2.4.8 Position

AAA

> Es gibt Informationen zu der Position des Benutzers innerhalb eines Satzes von Webseiten.

###### Einordnung

N/A.

Ähnlich wie 2.4.5 ist es meist nicht relevant.

##### 2.4.9 Linkzweck (reiner Link)

AAA

> Es gibt einen Mechanismus, um den Zweck jedes Links durch den Linktext allein zu erkennen, außer der Linkzweck wäre mehrdeutig für Benutzer im Allgemeinen.

###### Einordnung

Wie 2.4.4 mit weniger Ausnahmen.

Gute Motivation, um cleverref etc. zu bevorzugen.

##### 2.4.10 Abschnittsüberschriften

AAA

> Abschnittsüberschriften werden genutzt, um den Inhalt zu gliedern.

> Hinweis: „Überschrift“ wird in seiner allgemeinen Bedeutung benutzt und beinhaltet Titel und andere Methoden, um verschiedenen Arten von Inhalt eine Überschrift hinzuzufügen.\
> Hinweis: Dieses Erfolgskriterium behandelt Abschnitte innerhalb von Geschriebenem, nicht Bestandteile der Benutzerschnittstelle. Bestandteile der Benutzerschnittstelle werden unter Erfolgskriterium 4.1.2 behandelt.

###### Einordnung

Der einfache Fall sollte automatisch ok sein, da in LaTeX die Macros für Abschnitte genau Überschriften spezifizieren. Das Ende eines Abschnitt zu finden kann jedoch nicht-trivial sein.

Gilt zudem für alle anderen "Übeschriften" (Abbildungen, Enunciations etc).

##### 2.4.11 Focus Not Obscured (Minimum)

Neu in WCAG 2.2, ohne Übersetzung.

> When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.

###### Einordnung

Aus LaTeX-Quellen erzeugte Inhalte sind normalerweise zu statisch, um hier Probleme zu erzeugen.

##### 2.4.12 Focus Not Obscured (Enhanced)

AAA / N/A

Siehe 2.4.11

##### 2.4.13 Focus Appearance

AAA

Siehe 2.4.11.

###### Einordnung

Stärkere Variante von 2.4.7.

#### 2.5 Eingabemodalitäten

> Erleichtern Sie Benutzern die Bedienung von Funktionen durch andere Eingabearten als die Tastatur.

Aus LaTeX-Quellen erzeugte Inhalte sind normalerweise zu statisch, um hier Probleme zu erzeugen.

Ausnahme: 2.5.8

2.5.1 Zeigergesten\
2.5.2 Zeigeraufhebung\
2.5.3 Beschriftung (Label) im Namen\
2.5.4 Auslösen durch Bewegung\
AAA 2.5.5 Zielgröße\
AAA 2.5.6 Gleichzeitig verfügbare Eingabemechanismen\
2.5.7 Dragging Movements [neu in WCAG 2.2]

##### 2.5.8 Target Size (Minimum)

[neu in WCAG 2.2]

> The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except where:
>
> - _Spacing_: Undersized targets (those less than 24 by 24 CSS pixels) are positioned so that if a 24 CSS pixel diameter circle is centered on the bounding box of each, the circles do not intersect another target or the circle for another undersized target;
> - _Equivalent_: The function can be achieved through a different control on the same page that meets this criterion;
> - _Inline_: The target is in a sentence or its size is otherwise constrained by the line-height of non-target text;
> - _User agent control_: The size of the target is determined by the user agent and is not modified by the author;
> - _Essential_: A particular presentation of the target is essential or is legally required for the information being conveyed.
>
> Note 1: Targets that allow for values to be selected spatially based on position within the target are considered one target for the purpose of the success criterion. Examples include sliders, color pickers displaying a gradient of colors, or editable areas where you position the cursor.
>
> Note 2: For inline targets the line-height should be interpreted as perpendicular to the flow of text. For example, in a language displayed vertically, the line-height would be horizontal.

###### Einordnung

Ein schwerwiegendes Problem.
Die Ausnahme für "inline text" gilt eher nur für Höhe.
Die Ausnahme für User Agents könnte man evtl. allgemeiner auslegen.

Insgesamt wieder ein Argument für cleverref etc.
Sonst werden sehr kurze Links unbrauchbar, e.g "Section [1](...)", "see [[JonKrau]](...)".

### 3. Verständlich

> Informationen und Bedienung der Benutzerschnittstelle müssen verständlich sein.

#### 3.1 Lesbar

> Machen Sie Inhalt lesbar und verständlich.

##### 3.1.1 Sprache der Seite

> Die voreingestellte menschliche Sprache jeder Webseite kann durch Software bestimmt werden.

- Technique: Using the language attribute on the HTML element
- Advisory: Specifying the default language in the HTTP header

###### Einordnung

Inhaltlich trivial aber Werkzeuge scheitern meistens.

TODO: test

##### 3.1.2 Sprache von Teilen

> Die menschliche Sprache jedes Abschnitts oder jedes Satzes im Inhalt kann durch Software bestimmt werden außer bei Eigennamen, technischen Fachbegriffen, Wörtern einer unklaren Sprache und Wörtern oder Wendungen, die Teil des Jargons des direkt umliegenden Textes geworden sind.

- Technique: Using language attributes to identify changes in the human language

###### Einordnung

TODO: test Babel foreignlanguage etc

https://www.overleaf.com/project/65b8c3676af421dd53ac3563

##### 3.1.3 Ungewöhnliche Wörter

AAA

> Es gibt einen Mechanismus, um spezielle Definitionen von Wörtern oder Wendungen zu erkennen, die auf ungewöhnliche oder eingeschränkte Weise benutzt werden, Idiome und Jargon eingeschlossen.

###### Einordnung

Hochgradig relevant aber schwer umsetzbar.

##### 3.1.4 Abkürzungen

AAA

> Es gibt einen Mechanismus, um die ausgeschriebene Form oder Bedeutung von Abkürzungen zu erkennen.

###### Einordnung

Hochgradig relevant aber schwer umsetzbar.

##### 3.1.5 Leseniveau

AAA

> Wenn der Text nach der Entfernung von Eigennamen und Titeln Lesefähigkeiten voraussetzt, die über das Niveau der niedrigen, sekundären Schulbildung hinausgehen, dann gibt es ergänzenden Inhalt oder eine Version, die keine über die niedrige, sekundäre Schulbildung hinausgehenden Lesefähigkeiten verlangt.

###### Einordnung

Im Hochschulbereich kaum umsetzbar.

##### 3.1.6 Aussprache

AAA

> Es gibt einen Mechanismus, um die bestimmte Aussprache von Wörtern zu erkennen, wenn die Bedeutung der Wörter – im Zusammenhang – mehrdeutig ist, wenn man die Aussprache nicht kennt.

Hochgradig relevant aber schwer umsetzbar.

Zur Zeit hat die Web Platform kaum die technischen Möglichkeiten (aber es wird daran gearbeitet).

#### 3.2 Vorhersehbar

> Sorgen Sie dafür, dass Webseiten vorhersehbar aussehen und funktionieren.

###### Einordnung

N/A (im Wesentlichen)

Aus LaTeX-Quellen erzeugte Inhalte sind normalerweise zu statisch, um hier Probleme zu erzeugen.

3.2.1 Bei Fokus\
3.2.2 Bei Eingabe\
3.2.3 Konsistente Navigation\
3.2.4 Konsistente Erkennung\
AAA 3.2.5 Änderung auf Anfrage\
3.2.6 Consistent Help [neu in WCAG 2.2]

#### 3.3 Hilfestellung bei der Eingabe

> Helfen Sie den Benutzern dabei, Fehler zu vermeiden und zu korrigieren.

###### Einordnung

Largely N/A.

Aus LaTeX-Quellen erzeugte Inhalte sind normalerweise zu statisch, um hier Probleme zu erzeugen. Betrifft evtl. Examina.

3.3.1 Fehlererkennung\
3.3.2 Beschriftungen (Labels) oder Anweisungen\
3.3.3 Fehlerempfehlung\
3.3.4 Fehlervermeidung (rechtliche, finanzielle, Daten)\
AAA 3.3.5 Hilfe\
AAA 3.3.6 Fehlervermeidung (alle)\
3.3.7 Redundant Entry\
3.3.8 Accessible Authentication (Minimum)\
AAA 3.3.9 Accessible Authentication (Enhanced)

### 4. Robust

> Inhalte müssen robust genug sein, damit sie von einer großen Auswahl an Benutzeragenten einschließlich assistierender Techniken interpretiert werden können.

#### 4.1 Kompatibel

> Maximieren Sie die Kompatibilität mit aktuellen und zukünftigen Benutzeragenten, einschließlich assistierender Techniken.

##### 4.1.1 Syntaxanalyse

[In WCAG 2.2 abgeschafft]

##### 4.1.2 Name, Rolle, Wert

> Für alle Bestandteile der Benutzerschnittstelle (einschließlich, aber nicht beschränkt auf: Formularelemente, Links und durch Skripte generierte Komponenten) können Name und Rolle durch Software bestimmt werden; Zustände, Eigenschaften und Werte, die vom Benutzer festgelegt werden können, können durch Software festgelegt sein; und die Benachrichtigung über Änderungen an diesen Elementen steht den Benutzeragenten zur Verfügung, einschließlich assistierender Techniken.
>
> Hinweis: Dieses Erfolgskriterium ist hauptsächlich für Webautoren gedacht, die ihre eigenen Bestandteile der Benutzerschnittstelle entwickeln oder skripten. Standard-HTML-Steuerelemente erfüllen zum Beispiel bereits dieses Erfolgskriterium, wenn sie entsprechend der Spezifikation benutzt werden.

###### Einordnung

N/A

##### 4.1.3 Statusmeldungen

In Inhalten, die mit Auszeichnungssprachen implementiert sind, können Statusmeldungen mittels Rollen oder Eigenschaften durch Software bestimmt werden, so dass sie dem Benutzer von assistierenden Techniken präsentiert werden können, ohne Fokus zu erhalten.

###### Einordnung

N/A
