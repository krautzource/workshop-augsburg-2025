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

Sie unterscheiden sich in der Balance TeX vs Web.

## pandoc

[pandoc](https://pandoc.org/) - Balance: eher Web als TeX

- Weitläufige Dokument-zu-Dokument Konversion
- einfache Benutzung
- [große Community](https://pandoc.org/help.html)
- LaTeX Unterstützung als Input eher beschränkt
  - Erweiterungen ebenso


## tex4ht / make4ht

[tex4ht / make4ht](https://tug.org/tex4ht/) - Balance: eher TeX als Web

- Fokus auf TeX-zu-HTML (und XML)
- nutzt TeX intern
- [kleine Community](https://tug.org/tex4ht/#docs)
- LaTeX-artige Erweiterbarkeit

## Beschwörungsformeln

Minimal Beispiele:

`$ pandoc input.tex -o output.html -s`

`$ make4ht input.tex`

## Einfache Beispiele

Die Beispiele befinden sich in [/materialien/tex-einfach/](https://github.com/krautzource/workshop-augsburg-2025/tree/main/materialien/tex-einfach)

- Basisdokument `einfach.tex`
- Strukturelemente, z.B.
  - `toc.tex`
  - `theorem.tex`
  - `mathmode.tex`
  - `lists.tex`
  - `graphics.tex`
  - `tables.tex`

## Formelsatz mit MathJax

[MathJax](https://www.mathjax.org/) ist die führende Lösung für Formelsatz im Web.

`$ pandoc input.tex -o output.html -s --mathjax`

`$ make4ht input.tex "mathjax"`

Typische Probleme:
- von MathJax nicht unterstützte (mathmode) Umgebungen
- `\ref` auf mathmode Inhalte

## Weiterführende Beispiele

- Gliederung (`toc.tex`)
  - pandoc braucht option `--toc`
- Bibliographie mit BibTeX `bibtex.tex`
  - make4ht unterstützt Bibliographien direkt
  - `$ pandoc ../bibtex.tex --bibliography=../bibtex.bib -o bibtex.html -s --citeproc -M link-citations=true`
- Beamer Paket `beamer.tex`

## Ganze Dokumente

- [arxiv:1312.4289](https://arxiv.org/abs/1312.4289) `rademacher.tex` ([published CC-BY-3.0](https://www.ams.org/journals/bproc/2014-01-11/S2330-1511-2014-00014-6/))
- [arxiv:2207.01335](https://arxiv.org/abs/2207.01335) `costoyaEtAl.tex` ([published CC-BY-4.0](https://link.springer.com/article/10.1007/s13398-023-01414-w))

## Komplexe Erweiterungen

[Pandoc Filters](https://pandoc.org/filters.html)

`$ pandoc --from latex+raw_tex --lua-filter pandoc-filter.lua -s input.tex -o output.html  --standalone --mathjax`

[make4ht Configurations](https://www.kodymirus.cz/tex4ht-doc/Configurations.html)

`$ make4ht -c configuration.cfg input.tex "mathjax"`

Siehe auch [/materialien/tex-spezial/](https://github.com/krautzource/workshop-augsburg-2025/tree/main/materialien/tex-spezial)

