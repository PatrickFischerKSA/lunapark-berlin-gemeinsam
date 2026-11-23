# Lunapark – Wegsehen, Wahrheit und Verantwortung

Eigenständige Kopie des Lovable-Webspecials zu Volker Kutschers Roman. Originaltexte, Karte, Bildvergleich, Quellen und lokale Leserfragen wurden übernommen. Die redaktionellen Texte und Medien können über einen separaten Bearbeitungslink gemeinsam online geändert werden.

## Links

- Website: https://patrickfischerksa.github.io/lunapark-berlin-gemeinsam/
- Ursprüngliches Lovable-Projekt: https://lovable.dev/projects/50a86c1d-a2c8-494d-b051-bcb9aeb0749e

Der geheime Bearbeitungslink gehört nicht ins öffentliche Repository. Er wird separat durch die Projektverantwortlichen verteilt. Alle mit diesem Link können speichern. Die redaktionellen Inhalte und Medien sind öffentlich lesbar.

## Benutzung

1. Bearbeitungslink öffnen.
2. Einen markierten Text anklicken und im Feld „Text bearbeiten“ ändern.
3. Unter „Bilder & Video“ eine Datei auswählen, um das jeweilige Medium zu ersetzen (Bilder bis 15 MB, Video bis 60 MB).
4. Vor dem Schliessen auf „Online gespeichert“ oder „Gemeinsame Version · aktuell“ warten. Andere Personen sehen die Änderungen nach wenigen Sekunden.
5. Mit „Bearbeitung ausblenden“ Karte, Quiz und Lesefluss ausprobieren.

Verschiedene Textfelder werden bei gleichzeitiger Bearbeitung zusammengeführt. Bei widersprüchlichen Änderungen am selben Feld erscheint ein Konflikthinweis. Der Versionsverlauf erlaubt die Wiederherstellung der letzten 50 gespeicherten Stände. Persönliche Schlussantworten und Quiz-Auswahl bleiben im geöffneten Browser und werden nicht gemeinsam gespeichert.

## Lokal entwickeln

Node.js 22.12+, empfohlen 24.

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Das Frontend wird mit Vite/React/Tailwind gebaut, die Karte mit Leaflet. GitHub Actions testet und veröffentlicht `main` auf GitHub Pages. Das Repo kann geforkt und per Pull Request weiterentwickelt werden. Direkten Schreibzugriff vergibt Patrick unter Settings → Collaborators.

## Online-Speicher und vollständige Trennung

Dieses Projekt hat ein eigenes Repository, eine eigene Pages-Adresse, einen eigenen Cloudflare Worker, eine eigene D1-Datenbank, einen eigenen R2-Bucket und einen eigenständigen Bearbeitungsschlüssel. Es nutzt keine Inhalte, Datenbanken, Dateispeicher oder Berechtigungen des anderen Projekts. Der Browser-Schlüssel liegt unter einem projektspezifischen SessionStorage-Namen. Keine automatische Synchronisierung mit dem ursprünglichen Lovable-Projekt.

- API: https://lunapark-berlin-gemeinsam.patrick-fischer.workers.dev
- D1: `lunapark-berlin-gemeinsam`
- R2: `lunapark-berlin-medien`
- Konfiguration: `wrangler.jsonc`

```sh
npx wrangler@4 login
npx wrangler@4 d1 migrations apply lunapark-berlin-gemeinsam --remote
npx wrangler@4 deploy
```

Backendänderungen separat mit autorisiertem Cloudflare-Zugang veröffentlichen. GitHub Pages aktualisiert nur das Frontend. `EDIT_TOKEN_HASH` ist als Worker-Secret hinterlegt und speichert nur den SHA-256-Hash des zufälligen Bearbeitungsschlüssels. Niemals den Schlüssel im Repository speichern. Eine Rotation erfolgt durch Setzen eines neuen Hashs mit `wrangler secret put EDIT_TOKEN_HASH` und Verteilen des neuen Links.

## Quellcode und Medien

`reference/` enthält die exportierte Original-Startseite und Komponenten. `src/Article.tsx` und die redaktionellen Komponenten enthalten die Integration der gemeinsamen Bearbeitung. Die Feld-IDs leiten sich aus den ursprünglichen Quellpositionen und dynamischen Ausgangstexten ab. `scripts/prepare-editor.mjs` dokumentiert die einmalige Überführung; nur bewusst erneut ausführen, da geänderte Quellpositionen Feld-IDs verändern können.

Die acht übernommenen Originalmedien liegen unter `public/media/` und benötigen keinen Lovable-Zugang. Lizenz- und Quellenhinweise wurden aus dem Original übernommen. Die Roman-PDF wird nicht öffentlich bereitgestellt. Neue Textinhalte werden als Text gerendert, niemals als HTML.

## Projektverwaltung im Browser

Der bisherige Bearbeitungslink bleibt unverändert. Über **Projekt verwalten** können Mitwirkende Unterseiten erstellen, umbenennen, sortieren und entfernen. Jede neue Seite wird automatisch in die Navigation aufgenommen. Unter **Navigation** lassen sich Menüeinträge unabhängig sortieren, umbenennen, ausblenden, entfernen und auf Seiten, externe Webadressen oder vorhandene `#abschnitt`-Ziele verweisen.

Unterseiten und die Startseite lassen sich mit Text-, Überschriften-, Bild-, Video-, Zitat- und Trennlinien-Bausteinen aufbauen. Bausteine können umgeordnet und entfernt werden; Medien werden im eigenen Projektspeicher abgelegt. Unter **Startseite umbauen** lassen sich die vorhandenen Originalabschnitte sortieren und ausblenden. Ausgeblendete Inhalte werden nicht gelöscht. Die Abschnittsauswahl erscheint nach dem Laden der Startseite.

Alle Änderungen speichern automatisch für alle. Vor dem Schliessen auf die Speicherbestätigung warten. Konflikte am selben Feld müssen aufgelöst werden. Frühere Fassungen stehen im Versionsverlauf bereit. Alte gespeicherte Stände erhalten automatisch eine Startseite, bestehende redaktionelle Inhalte bleiben bestehen. Auch ältere noch offene Browserfassungen können die neue Seitenverwaltung beim Speichern nicht entfernen.

Seiten-Direktlinks verwenden `?page=<feste-id>` und bleiben beim Umbenennen gültig. Der Ansichtslink enthält keinen Bearbeitungsschlüssel. Aus dem Menü ausgeblendete Seiten bleiben über ihren Direktlink erreichbar. Die Projektverwaltung gibt keinen Zugriff auf ChatGPT, Codex, Lovable, Abonnements oder KI-Konten.

### Seitenvorlagen und Startseiteneinbindung

Unter „Vorlage für neue Seite“ stehen eine leere Seite, Artikel, Bild mit Text, Galerie und Vorstellungsplakat bereit. Jede neue Seite erhält ihre eigenen Bausteine. „Vorlage in diese Seite einfügen“ ergänzt Bausteine ohne vorhandene Inhalte zu löschen. „Seite duplizieren“ kopiert Inhalte und Darstellung mit neuen Seiten- und Baustein-IDs. Die Vorschau im Editor zeigt die gewählte Darstellung; unter „Darstellung“ kann das Layout auch später gewechselt werden.

Auf der Startseite bestimmt „Eigene Startseite einbinden“, ob die eigenen Inhalte vor, nach oder anstelle der ursprünglichen Abschnitte erscheinen. Standardmässig stehen eigene Inhalte jetzt vor den Originalabschnitten, mit dem gewählten Seitennamen als sichtbarer Überschrift. „Als eigene Startseite“ blendet das Original nur aus, ohne es zu löschen. Bestehende Bilder, Texte und Links bleiben erhalten. Der Alternativtext eines Bildes ist für Barrierefreiheit gedacht und wird nicht als sichtbarer Text eingeblendet; sichtbare Beschreibungen gehören in einen Textbaustein oder die Bildunterschrift.

Bild-Captions können nun direkt unter dem Bild auf der eigenen Seite über „Caption / Bildunterschrift“ eingegeben werden, solange der Bearbeitungslink aktiv ist. Derselbe Text erscheint im Verwaltungsbereich und in der Vorschau und wird automatisch online gespeichert. Im Lesemodus wird er als normale Bildunterschrift ausgegeben. Unter „Bildbreite“, „Bildformat“ und „Bild einpassen“ lassen sich Breite, Seitenverhältnis und optionaler Zuschnitt pro Bild einstellen. Standard ist das vollständige Bild ohne Beschnitt; auf kleinen Bildschirmen bleibt es innerhalb der verfügbaren Seitenbreite.
