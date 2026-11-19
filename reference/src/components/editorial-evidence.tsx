export function RomanReference({ page, end, chapter }: { page: number; end?: number; chapter: string }) {
  return <span className="text-primary">Lunapark · {chapter} · PDF-S. {page}{end ? `–${end}` : ""}</span>;
}

export function EvidencePassages() {
  return <div className="mt-14 border-t border-border pt-8">
    <p className="kicker">Zwei Wendepunkte · am Text überprüfbar</p>
    <div className="mt-6 grid gap-8 md:grid-cols-2">
      <article className="border-l-2 border-primary pl-5">
        <h3 className="text-2xl">01 · Der Körper widerspricht der Erklärung</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">Gräf deutet die Parole als Beweis für einen politischen Mord. Rath folgt Gennats Prinzip des Zweifelns: Die gerichtsmedizinische Untersuchung zeigt, dass Kaczmarek bereits tot war, als ihn die Schläge trafen. Die gewünschte Tätergeschichte passt nicht zum Körper.</p>
        <p className="mt-4 text-sm"><RomanReference chapter="Kap. 1" page={35} end={36} />; <RomanReference chapter="Kap. 13" page={171} end={174} /></p>
        <p className="mt-4 leading-relaxed"><strong>Unsere Deutung:</strong> Verantwortung beginnt hier nicht mit Heldentum, sondern damit, einer bequemen Erklärung zu widersprechen.</p>
      </article>
      <article className="border-l-2 border-accent pl-5">
        <h3 className="text-2xl">02 · Rath wird selbst zum Täter</h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">Fritze hat Juretzka angeschossen. Rath schickt den Jungen nach Hause; der Verletzte lebt noch. Rath erschlägt ihn und behauptet danach Notwehr. Gennat entzieht ihm das Vertrauen, während die Führung ihn feiert.</p>
        <p className="mt-4 text-sm"><RomanReference chapter="Kap. 93" page={854} end={856} />; <RomanReference chapter="Kap. 95" page={865} end={873} /></p>
        <p className="mt-4 leading-relaxed"><strong>Unsere Deutung:</strong> Aus dem Schutz anderer wird eine Rechtfertigung der eigenen Gewalt. Nicht jede Handlung gegen die Gestapo ist deshalb schon gerecht.</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Was meinen wir damit? Rath beginnt als Ermittler, der die Wahrheit sucht. Am Ende tötet er einen wehrlosen Verletzten und lügt über den Ablauf. Er begeht also selbst das Verbrechen, das er aufklären sollte – und kommt damit durch, weil das System ihn braucht.</p>
      </article>
    </div>
  </div>;
}

export function HistoricalEvidence() {
  return <div className="mt-12 border-t border-border pt-8">
    <p className="kicker">Quelle → Handlungsspielraum → Fall</p>
    <h3 className="mt-3 text-3xl">Wenn «Ordnung» die Freiheit abschafft</h3>
    <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Was heisst das? 1933 schafft die Regierung wichtige Grundrechte ab – angeblich, um für «Ordnung» zu sorgen. Ab dann kann die Polizei Menschen festnehmen, Wohnungen durchsuchen und Zeitungen verbieten, ohne dass ein Gericht das verhindert. Genau dieser Zustand ist der Boden, auf dem Raths Fall wächst.</p>
    <blockquote className="mt-6 border-l-4 border-accent pl-6 font-display text-2xl leading-relaxed">«Die Artikel 114, 115, 117, 118, 123, 124 und 153 der Verfassung des Deutschen Reichs werden bis auf weiteres außer Kraft gesetzt.»</blockquote>
    <p className="mt-4 text-sm"><a href="https://de.wikisource.org/wiki/Reichstagsbrandverordnung#%C2%A7_1" target="_blank" rel="noreferrer" className="text-primary underline">Reichstagsbrandverordnung, 28. Februar 1933, § 1 · RGBl. I, S. 83 ↗</a></p>
    <div className="editorial-copy mt-6 max-w-3xl leading-relaxed text-muted-foreground">
      <p><strong className="text-foreground">Historisch belegbar:</strong> Die Verordnung erlaubt unter anderem Eingriffe in persönliche Freiheit, Presse, Versammlungen und Wohnungen ausserhalb der bisherigen gesetzlichen Grenzen. Schon ihre Einleitung behauptet die Abwehr «kommunistischer staatsgefährdender Gewaltakte». Das Dokument belegt die staatliche Legitimation der Repression – nicht die Wahrheit dieser Feindbehauptung.</p>
      <p><strong className="text-foreground">Folge für den Roman:</strong> Unter diesen Bedingungen kann Gräfs kommunistische Tätertheorie mehr auslösen als eine gewöhnliche Ermittlung. Rath muss nicht nur fragen, ob Walter Spindler schuldig ist, sondern auch, was eine Übergabe an die politische Polizei bedeutet. Seine Fluchthilfe ist Romanfiktion; die eingeschränkten Rechte erklären den historischen Handlungsspielraum. <RomanReference chapter="Kap. 69" page={670} end={673} /></p>
      <p><strong className="text-foreground">Quellenkritik:</strong> Reichspräsident Paul von Hindenburg erlässt den Text; Hitler und die zuständigen Minister zeichnen mit. Als amtliche Norm aus dem Jahr 1933 ist er eine historische Primärquelle. Er zeigt, was die Regierung zulassen wollte, nicht automatisch, wie jede einzelne Polizeistelle handelte. Die digitale Transkription ist mit dem abgebildeten Gesetzblatt abzugleichen.</p>
      <p><strong className="text-foreground">Der Sommer 1934:</strong> Die staatliche Mordaktion vom 30. Juni bis 2. Juli beseitigt SA-Führer und weitere Gegner. Die Bezeichnung «Röhm-Putsch» übernimmt eine Rechtfertigung des Regimes, nicht den Nachweis eines tatsächlich bevorstehenden Putsches. <a href="https://www.dhm.de/lemo/kapitel/ns-regime/etablierung-der-ns-herrschaft/roehm-putsch" className="text-primary underline">DHM / LeMO: Einordnung ↗</a> Im Roman glaubt Gräf die offizielle Version; Charly erkennt staatliche Gewalt gegen Gegner. Die Gegenüberstellung zeigt, wie dieselben Ereignisse durch Loyalität unterschiedlich gedeutet werden. <RomanReference chapter="Kap. 78" page={741} end={742} />; <RomanReference chapter="Kap. 85" page={794} end={795} /></p>
    </div>
  </div>;
}

export function ContemporaryComparison() {
  return <div className="mt-10 border-t border-border pt-8">
    <p className="kicker">Ein Mechanismus · nicht dieselbe Gesellschaft</p>
    <h3 className="mt-3 text-3xl">Loyalität macht Widerspruch teuer</h3>
    <div className="mt-6 grid gap-8 md:grid-cols-3">
      <article><h4 className="font-semibold text-primary">Gemeinsamkeit</h4><p className="mt-3 leading-relaxed text-muted-foreground">Wo Schutz und Zugehörigkeit von Loyalität abhängen, können Menschen schweigen, obwohl sie Gewalt erkennen. Im Roman bindet Marlow Rath durch Hilfe und Drohungen. In der heutigen Untersuchung krimineller Netzwerke ist deshalb die Struktur hinter einer Tat wichtig, nicht nur der einzelne Täter.</p></article>
      <article><h4 className="font-semibold text-primary">Unterschied</h4><p className="mt-3 leading-relaxed text-muted-foreground">1934 schafft die Staatsführung selbst rechtsfreie Gewalt und verfolgt Menschen politisch und antisemitisch. Heute bestehen rechtsstaatliche Beschwerdewege und unabhängige gerichtliche Kontrolle. Kriminelle Loyalität und staatlich organisierte Verfolgung sind nicht gleichzusetzen.</p></article>
      <article><h4 className="font-semibold text-primary">Grenze</h4><p className="mt-3 leading-relaxed text-muted-foreground">Die Berliner Gesamt-PKS misst weder Loyalität noch Schweigen und belegt keinen Übergang von Ringvereinen zu heutigen Netzwerken. Sie gibt einen aktuellen Rahmen, keinen Beweis für die Romaninterpretation. Ein Nachname oder eine Herkunft ist kein Tatnachweis.</p></article>
    </div>
    <p className="mt-6 max-w-3xl leading-relaxed">Zur Leitfrage zurück: Wer sich «heraushält», handelt nicht im luftleeren Raum. Entscheidend ist, wen das Schweigen schützt, wen es gefährdet und welche Möglichkeiten zum Widerspruch tatsächlich bestehen.</p>
  </div>;
}