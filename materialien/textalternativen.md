# Über Textalternativen für Bilder (und evtl. nicht-Text)

Textalternativen für [nicht-Text
content](https://www.w3.org/TR/WCAG22/#dfn-non-text-content) stehen nicht umsonst am Anfang der WCAG, denn sie sind essentiell für barrierefreier Inhalte.

Textalternativen sollen äquivalente Informationen liefern, damit Lesende, die Bilder (und andere Nicht-Texte) teilweise oder gar nicht wahrnehmen können, trotzdem die notwendigen Informationen haben. Dabei helfen sie nicht nur blinden Lesenden sondern auch solchen mit anderen Einschränkungen, sei es durch abweichende Farbwahrnehmung, Neurodiversität, oder schlicht technische Probleme beim Anzeigen eines Bilds.

Assistive Technologien wie z.B. Screenreader können Text in andere Modalitäten wie Sprache oder Braille umwandeln können. Bilder gehen dabei verloren, Textalternativen nicht.

Wesentlich dabei ist, dass eine Textalternative oft keine Bildbeschreibung ist, sondern sich darauf konzentriert, was Lesende mit Hilfe des Bild erfassen sollen, anstatt einfach alle Details des Bilder aufzulisten. Zum Beispiel ist die Textalternative eines Box-Plots eher eine Tabelle als eine Erläuterung der visuellen Gestaltung.

Daran sehen wir auch, dass eine Textalternative nicht auf reinen Textfolgen beschränkt ist, sondern komplexe Form annehmen kann solange diese barrierefrei ist. Insbesondere kann eine Textalternative auch Bilder enthalten (solange diese wiederum Textalternativen haben).

## Textalternativen platzieren

Wir unterscheiden zwei Techniken, eine Textalternative zu integrieren: **lokal** ("alt text") und **nichtlokal** (im Textfluss, z.B. vor/nach dem Bild oder einem Querverweis zur Abbildung, die das Bild enthält).

**Lokal** ist die direkteste Form der Verbindung. Solch eine Alternative muss kurz bleiben, da sie für Nutzende oft schwieriger zu verarbeiten ist.

Zur Zeit ermöglicht LaTeX lediglich für `\includegraphics` eine lokale Alternative, `\includegraphics[alt={kurze Alternative}]{meinBild.png}`.

**Nichtlokal** bedeute, dass eine Alternative andersweitig im Textfluss platziert wird. Sie unerlässlich für längere Alternativen (für komplexere Bilder) und ist meistens zu bevorzugen. Wir benötigen dann eine Verknüpfung zwischen Bild und nichtlokaler Alternative. Die lokale Platzierung sollte dann genutzt werden, um die nichtlokal platzierte Alternative zugänglich zu machen ("Ein Boxplot der Ergebnisse, Textalternative in Beispiel 1 / Anhang C."). Der lokal platzierte Text sollte auch eine kurze, partielle Alternative für das Bild enthalten, z.B. eine grobe Bildbeschreibung, um die Zuordnung zu vereinfachen.

Wenn ein Bild Teil einer Abbildung ist, empfiehlt es sich, die Textalternative in der Bildunterschrift oder nahe des ersten Querverweises auf die Abbildung zu platzieren. (Abbildung, Bilderunterschrift und Querverweise sind stets empfehlenswert).

Falls das nicht möglich ist, ist das Bild vermutlich an einer kritischen Position im Text. Dann sollte eine nichtlokale Alternative direkt davor oder danach platziert werden. Falls das auch nicht möglich ist, muss eine lokale Platzierung verwendet werden und die Alternative muss funktional identisch zum Bild sein.

## Bildkategorien

Bilder werden auf höchst unterschiedliche Arten genutzt. Ihre Textalternativen sind sich dementsprechend ebenso unterschiedlich in Funktion und Gestalt.

Das [Tutorial on images](https://www.w3.org/WAI/tutorials/images/) der W3C WAI (Web Accessibility Initiative) unterscheidet 7 Bildtypen. Wir konzentrieren uns auf 5

- komplexe Bilder
- informative Bilder
- Gruppen von Bildern
- Bilder von Text
- dekorative Bilder

### Dekorative Bilder

Dekorative Bilder sind, grob gesagt, Bilder, die inhaltlich nicht relevant sind.

Dies kann verschiedene Gründe haben, z.B.

**Dekoration.** Ein Bild wird als ausgefallener Rahmen verwendet (z.B. eines Kapitelanfangs) oder als spezieller QED Marker.

**Redundant.** Z.B., wenn eine Textalternative dem Bild direkt folgt ("diese Daten sind durch einen roten Punkt ([ICON]) markiert") oder auch wenn ein Bild als Trennelement genutzt wird (z.B. nach einer Einleitung)

**Ambiente.** Z.B. ein Frontispiz oder ein Symbolbild, um dass ein Absatz fließt.

Dekorative Bilder sind die Ausnahme der Regel: sie sollten explizit leere (lokale) Textalternativen erhalten, z.B. `\includegraphics[alt={}]{...}`, damit sie von assistiven Technologien ignoriert werden können. Eine Textalternative wäre bei solchen Bilden überflüssig und störend für nichtvisuelle Darstellungen.

Eine Ausnahme kann bei Bildern fürs Ambiente gemacht werden, bei denen eine lokal platzierten Textalternative einen äquivalenten Effekt erzielen kann.

### Bilder von Text

Diese Art Bild enthält im wesentlichen nur "normalen" Text.

Nicht gemeint sind Bilder, die Text und weiter Inhalte beinhalten (Diagramme einer Buch oder Beweisstruktur) oder Bilder, die Texte künstlerisch darstellen (Kreuzworträtsel, Wortwolken).

Typische Beispiele sind Scans handgeschriebener oder historischer Texte sowie Fotos von Texten aus dem Alltag.

Für Bilder von Text müssen Textalternativen identische zum Text im Bild sein. Anpassungen sind möglich (z.B. Übersetzungen oder Auslassungen von Artefakten), sollten im Zweifel aber erschlossen werden können.

Manchmal sind Bilder von Text tatsächlich informative Bilder, z.B. wenn sie spezielle Notation oder feste Konzepte darstellen. Dann sollten diese Kriterien angewandt werden.

### Gruppen von Bildern.

Gruppen von Bildern teilen sich in zwei wesentliche Fälle.

Bildet eine Gruppe ein einziges inhaltliches Element (z.B. Rotation mit Zwischenschritten, Strichliste als Liste von Strichen), so sollte genau eines der Bilder die Textalternative für das ganze erhalten, die weiteren aber als dekorative behandelt werden.

Bildet die Gruppe eine Kollektion, so muss jedes Bild eine angemessene Textalternative erhalten. Zusätzlich benötigt die Gruppe als ganzes Information in Textform, die die Verbindung der Gruppe erklärt.

Meist liegt für eine Kollektion die Form einer Abbildung mit Unterabbildungen nahe.

Da eine Gruppe von Bildern auf unterschiedlichen Bildschirmgrößen evtl. unterschiedlich umfließen, muss darauf geachtet werden, bei Textalternativen nicht (nur) sensorische Eigenschaften (links/rechts/oben/unten)zu verwenden.

### Informative Bilder

Informative Bilder werden genutzt um spezifische Inhalte zu transportieren, z.B. ein abstraktes Konzept or eine schematisches Zeichnung. Anstatt eine reine Beschreibung der visuellen Aspekte sollte eine Textalternative hier äquivalente Information bereit stellen.

Typische Beispiele für informative Bilder sind kleine Bilder im direkten Text- der Formelfluss, die eher wie Buchstaben oder Terme verwendet werden, z.B. kleine Diagramme für Knotennotation oder Dinkin Diagramme. In diesem Fall wird die Textalternative oft lokal gesetzt. Oftmals kann eine systematische Einführung der entsprechenden Konzepte (z.B. Knotennotation) ermöglichen, die Textalternativen im Verlauf des Dokuments kurz zu halten (z.B. bipartite Graphen, "K-3-3 Graph").

Ebenso fallen Skizzen und Schemata oftmals in diese Kategorie, wenn der Schwerpunkt nicht auf der konkrete visuellen Gestalt sondern dem dahinterliegenden abstrakten Konzept liegt, insbesondere wenn solch ein Bild andere Inhalte ergänzt (z.B. ein Beispiel eines Random Walks).

Wenn das Bild ergänzend ist, kann es unter Umständen auch dekorativ erscheinen.

### Komplexe Bilder

Aus dem WAI Tutorial:

> Complex images contain substantial information -- more than can be
> conveyed in a short phrase or sentence. These are typically:
>
> - graphs and charts, including flow charts and organizational
>   charts;
>
> - diagrams and illustrations where the page text relies on the user
>   being able to understand the image;
>
> - maps showing locations or other information such as weather
>   systems.

Komplexe Bilder benötigen meist eine nichtlokale Textalternative. Der lokal platzierte Text muss zusätzlich das Bild im Kontext identifizierbar machen; meist sollte zudem die Position der Textalternative erläutert werden.

Idealerweise enthält der lokale Text eine Art Zusammenfassung der Textalternative.

Die nichtlokale Textalternative kann dann auf unterschiedliche Art verknüpft werden. Z.B.

- durch Gruppierung:
  \begin{figure}
  \includegraphics[alt={kurzer Text}]{meinBild.png}
  \caption{Textalternative}
  \end{figure}
- Durch Vernküpfung
  \begin{figure}
  \includegraphics[alt={Kurzer Text, siehe Link in Abbildungstext}]{/path/to/image}
  \caption{ ...; für eine Textalternative siehe \ref{anhangA}}
  \end{figure}
- Durch Beschreibung
  \includegraphics[alt={Diagramm des Beweisverlaufs von Theorem 1; visuelle Hilfe für ersten Absatz des Beweises}]{meinBild.png}

Die Textalternative eines Komplexen Bilds ist meist mindestens so komplex. Wann immer möglich, sollten Bilder soweit es geht in einfacher Teile zerlegt werden. Dies reduziert sowohl die Komplexität der Textalternative als auch der Bilder selbst, zum Nutzen aller.

## Strategien zum Verfassen von Textalternativen

Die elementaren Fragen (siehe auch [WCAG alt
decision tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)):

- Braucht diese Bild eine Textalternative?
- Ist die Alternative kurz oder lang/komplex?
- Muss die Alternative lokal platziert werden?
- Ist das Bild eine Alternative für andere Teile des Dokuments? (z.B. Graph eines Beispiels)
- Steht das Bild für sich? (z.B. ein Foto)

### Kontextabhängigkeit

Eine Textalternative ist **immer** kontextabhängig, da ihr Zweck mit dem Kontext variiert. Ein künstliches Beispiel: die Textalternative eines Portraits wird sich unterscheiden, wenn das Bild im Klappentext eines Buches die AutorInnen präsentiert, in einer Biographie die Stationen des Lebens dokumentiert, oder im Katalog eines Brillengeschäfts ein Brillenmodell vermarktet.

Näher an unseren Zwecken: ein Bild mag eher dekorativ in einer Einleitung erscheinen, aber später im Beweis eine komplexe Rolle einnehmen.

Ebenso kann ein Torus je nach Kontext eine Alternative benötigen, die ihn als Rotationskörper oder als kompakte Mannigfaltigkeit präsentiert.

Nota bene: wenn ein Bild mehrfach wiederholt wird, um Teile zu diskutieren, lohnt es sich, Ausschnitte zu benutzen. Dies reduziert die visuelle und nicht-visuelle Komplexität.

### Ideenfindung

Die Entwicklung einer guten Textalternative verlangt ebenso viel Kreativität wie eine gute Visualisierung. Dementsprechend führen ebenso viele Wege dorthin.

Eine einfache Taktik ist ein fiktives Telefonat mit Menschen, evtl. mit unterschiedlichen Kenntnissen. Welche Eigenschaften des Bildes müsste kommuniziert werden? Welche Funktion hat das Bild an der Stelle des Textes? Auf welchen Inhalten kann eine Alternative aufbauen?

Besonders nützlich sind etablierte Notationssysteme, z.B. hat [Knotentheorie](https://de.wikipedia.org/wiki/Knotentheorie) mehrere Kurzformen. Eine systematische Einführung solcher Kurzschrift ermöglicht eine einfache Wiederverwendung.

Je nach Art des Bildes kann [computer
vision](https://de.wikipedia.org/wiki/Computer_vision) bei der Ideenfindung behilflich sein, einen Einstieg in eine Textalternative zu finden. Jedoch können solche Werkzeuge bisher nicht den Kontext eines Bildes einbeziehen, so dass sie oft völlig unnütze oder gar falsche Textalternativen produzieren. So kann es sein, dass ein geometrisches Diagram lediglich eine Beschreibung wie "ein monochromes Diagramm eines Problems in Geometrie" erhält, die, wenn auch evtl. richtig, doch selten ausreichend ist.

Vor allem Spezialwerkzeuge (z.B. OCR, Datenextraktion) können aber durchaus hilfreich sein. Insbesondere, um zumindest Teile eines Bilds zu extrahieren und in den Textfluss zu integrieren.

### Praktische Tipps

In einer perfekten Welt sind alle wesentliche Merkmale eines Bild im Text selbst enthalten, denn eine solche Textalternative hilft allen. Sobald Formulierungen wie "wie dargestellt in Abb. 1" auftreten, ist man evtl., schon in einer guten Position, um aus dem angrenzenden Text eine vollwertige Alternative zu machen.

Dies ist einfacher für Bilder, die visuell helfen den Text zu verstehen. Wohingegen bei Bildern, die wichtig oder kritisch zum Verständnis sind (zentrale Resultate, Beweis ohne Worte), eine gute Alternative wie eine vermeintlich unnötige Duplizierung erscheinen können.

Bei einigen Bilderarten, wie z.B. Fotos, gestaltet sich eine Alternative meist als Bildbeschreibung. Hierbei gilt es Vollständigkeit gegen Nutzen abzuwägen.

In seltenen Fällen ist es zentral für einen Text, ein Bild visuell wahrzunehmen. Z.B. kann eine Aufgabe darin bestehen, einen Graphen zu analysieren. Da eine "ordentliche" Textalternative dieser Aufgabe zuwiderlaufen würde, kann die Textalternative hier den Zweck des Bildes beschreiben, siehe auch [Understanding SC
1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html). Dabei sollte sichergestellt sein, dass solch ein Bild nicht kritisch für das Verständnis oder das Lernziel ist, z.B. in dem andere äquivalente Aufgaben bereitgestellt werden, die keine visuelle Wahrnehmung erfordern.

