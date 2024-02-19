# Erste Schritte von LaTeX Quellen zum Web

Peter Krautzberger, [krautzource](https://krautzource.com)

<small>Links/rechts scrollen, um die Slides durchzusehen.</small>

## Ziele

- Werkzeuge ausprobieren (mitmachen!)
- Beispiele konvertieren
- Einfache Probleme identifizieren und evtl. lösen
- Eigene Versuche starten

## Werkzeuge

Wir konzentrieren uns auf

- [pandoc](https://pandoc.org/)
- [tex4ht / make4ht](https://tug.org/tex4ht/)

Das **Batteries included** Prinzip

## pandoc

[pandoc](https://pandoc.org/) - Balance: mehr Web als TeX

- Weitläufige Dokument-zu-Dokument Konversion
- einfache Benutzung
- große Community
- LaTeX Unterstützung als Input eher beschränkt
  - Erweiterungen ebenso


## tex4ht / make4ht

[tex4ht / make4ht](https://tug.org/tex4ht/) - Balance: mehr TeX als Web

- Fokus auf TeX-zu-HTML (und XML)
- nutzt TeX intern
- kleine Community
- LaTeX-artige Erweiterbarkeit

## Beschwörungsformeln

Minimal Beispiele:

`$ pandoc input.tex -o output.html -s`

`$ make4ht input.tex`

## Einfache Beispiele

Die Beispiele befinden sich in [/materialien/tex-einfach/](../../materialien/tex-einfach/)

- Basisdokument `einfach.tex`
- Strukturelement
  - `lists.tex`
  - `graphics.tex`
  - `tables.tex`
  - `mathmode.tex`

## Formelsatz mit MathJax 

`$ pandoc input.tex -o output.html -s --mathjax`

`$ make4ht input.tex "mathjax"`

## Weiteführende Beispiele

- Bibliographie mit BibTeX `bibtex.tex`
  - `$ pandoc ../bibtex.tex --bibliography=../bibtex.bib -o bibtex.html -s --citeproc -M link-citations=true`
- Beamer Paket `beamer.tex`

## Ganze Dokumente

- [arxiv:1312.4289](https://arxiv.org/abs/1312.4289) `rademacher.tex`
- [arxiv:2207.01335](https://arxiv.org/abs/2207.01335) `costoyaEtAl.tex`

