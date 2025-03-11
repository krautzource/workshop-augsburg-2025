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
