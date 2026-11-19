import { EditableText, SharedMedia } from "@/components/shared-editor";
export function RomanReference({
  page,
  end,
  chapter
}: {
  page: number;
  end?: number;
  chapter: string;
}) {
  return <span className="text-primary"><EditableText id="src_components_editorial_evidence_tsx_146" value={"Lunapark \xB7 "} /><EditableText id="src_components_editorial_evidence_tsx_157" value={chapter} /><EditableText id="src_components_editorial_evidence_tsx_166" value={" \xB7 PDF-S. "} /><EditableText id="src_components_editorial_evidence_tsx_176" value={page} /><EditableText id="src_components_editorial_evidence_tsx_182" value={end ? `–${end}` : ""} /></span>;
}
export function EvidencePassages() {
  return <div className="mt-14 border-t border-border pt-8">
    <p className="kicker"><EditableText id="src_components_editorial_evidence_tsx_340" value={"Zwei Wendepunkte \xB7 am Text \xFCberpr\xFCfbar"} /></p>
    <div className="mt-6 grid gap-8 md:grid-cols-2">
      <article className="border-l-2 border-primary pl-5">
        <h3 className="text-2xl"><EditableText id="src_components_editorial_evidence_tsx_528" value={"01 \xB7 Der K\xF6rper widerspricht der Erkl\xE4rung"} /></h3>
        <p className="mt-4 leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_642" value={"Gr\xE4f deutet die Parole als Beweis f\xFCr einen politischen Mord. Rath folgt Gennats Prinzip des Zweifelns: Die gerichtsmedizinische Untersuchung zeigt, dass Kaczmarek bereits tot war, als ihn die Schl\xE4ge trafen. Die gew\xFCnschte T\xE4tergeschichte passt nicht zum K\xF6rper."} /></p>
        <p className="mt-4 text-sm"><RomanReference chapter="Kap. 1" page={35} end={36} /><EditableText id="src_components_editorial_evidence_tsx_1000" value={"; "} /><RomanReference chapter="Kap. 13" page={171} end={174} /></p>
        <p className="mt-4 leading-relaxed"><strong><EditableText id="src_components_editorial_evidence_tsx_1116" value={"Unsere Deutung:"} /></strong><EditableText id="src_components_editorial_evidence_tsx_1140" value={" Verantwortung beginnt hier nicht mit Heldentum, sondern damit, einer bequemen Erkl\xE4rung zu widersprechen."} /></p>
      </article>
      <article className="border-l-2 border-accent pl-5">
        <h3 className="text-2xl"><EditableText id="src_components_editorial_evidence_tsx_1359" value={"02 \xB7 Rath wird selbst zum T\xE4ter"} /></h3>
        <p className="mt-4 leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_1462" value={"Fritze hat Juretzka angeschossen. Rath schickt den Jungen nach Hause; der Verletzte lebt noch. Rath erschl\xE4gt ihn und behauptet danach Notwehr. Gennat entzieht ihm das Vertrauen, w\xE4hrend die F\xFChrung ihn feiert."} /></p>
        <p className="mt-4 text-sm"><RomanReference chapter="Kap. 93" page={854} end={856} /><EditableText id="src_components_editorial_evidence_tsx_1770" value={"; "} /><RomanReference chapter="Kap. 95" page={865} end={873} /></p>
        <p className="mt-4 leading-relaxed"><strong><EditableText id="src_components_editorial_evidence_tsx_1886" value={"Unsere Deutung:"} /></strong><EditableText id="src_components_editorial_evidence_tsx_1910" value={" Aus dem Schutz anderer wird eine Rechtfertigung der eigenen Gewalt. Nicht jede Handlung gegen die Gestapo ist deshalb schon gerecht."} /></p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_2122" value={"Was meinen wir damit? Rath beginnt als Ermittler, der die Wahrheit sucht. Am Ende t\xF6tet er einen wehrlosen Verletzten und l\xFCgt \xFCber den Ablauf. Er begeht also selbst das Verbrechen, das er aufkl\xE4ren sollte \u2013 und kommt damit durch, weil das System ihn braucht."} /></p>
      </article>
    </div>
  </div>;
}
export function HistoricalEvidence() {
  return <div className="mt-12 border-t border-border pt-8">
    <p className="kicker"><EditableText id="src_components_editorial_evidence_tsx_2553" value={"Quelle \u2192 Handlungsspielraum \u2192 Fall"} /></p>
    <h3 className="mt-3 text-3xl"><EditableText id="src_components_editorial_evidence_tsx_2626" value={"Wenn \xABOrdnung\xBB die Freiheit abschafft"} /></h3>
    <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_2741" value={"Was heisst das? 1933 schafft die Regierung wichtige Grundrechte ab \u2013 angeblich, um f\xFCr \xABOrdnung\xBB zu sorgen. Ab dann kann die Polizei Menschen festnehmen, Wohnungen durchsuchen und Zeitungen verbieten, ohne dass ein Gericht das verhindert. Genau dieser Zustand ist der Boden, auf dem Raths Fall w\xE4chst."} /></p>
    <blockquote className="mt-6 border-l-4 border-accent pl-6 font-display text-2xl leading-relaxed"><EditableText id="src_components_editorial_evidence_tsx_3148" value={"\xABDie Artikel 114, 115, 117, 118, 123, 124 und 153 der Verfassung des Deutschen Reichs werden bis auf weiteres au\xDFer Kraft gesetzt.\xBB"} /></blockquote>
    <p className="mt-4 text-sm"><a href="https://de.wikisource.org/wiki/Reichstagsbrandverordnung#%C2%A7_1" target="_blank" rel="noreferrer" className="text-primary underline"><EditableText id="src_components_editorial_evidence_tsx_3469" value={"Reichstagsbrandverordnung, 28. Februar 1933, \xA7 1 \xB7 RGBl. I, S. 83 \u2197"} /></a></p>
    <div className="editorial-copy mt-6 max-w-3xl leading-relaxed text-muted-foreground">
      <p><strong className="text-foreground"><EditableText id="src_components_editorial_evidence_tsx_3680" value={"Historisch belegbar:"} /></strong><EditableText id="src_components_editorial_evidence_tsx_3709" value={" Die Verordnung erlaubt unter anderem Eingriffe in pers\xF6nliche Freiheit, Presse, Versammlungen und Wohnungen ausserhalb der bisherigen gesetzlichen Grenzen. Schon ihre Einleitung behauptet die Abwehr \xABkommunistischer staatsgef\xE4hrdender Gewaltakte\xBB. Das Dokument belegt die staatliche Legitimation der Repression \u2013 nicht die Wahrheit dieser Feindbehauptung."} /></p>
      <p><strong className="text-foreground"><EditableText id="src_components_editorial_evidence_tsx_4115" value={"Folge f\xFCr den Roman:"} /></strong><EditableText id="src_components_editorial_evidence_tsx_4144" value={" Unter diesen Bedingungen kann Gr\xE4fs kommunistische T\xE4tertheorie mehr ausl\xF6sen als eine gew\xF6hnliche Ermittlung. Rath muss nicht nur fragen, ob Walter Spindler schuldig ist, sondern auch, was eine \xDCbergabe an die politische Polizei bedeutet. Seine Fluchthilfe ist Romanfiktion; die eingeschr\xE4nkten Rechte erkl\xE4ren den historischen Handlungsspielraum. "} /><RomanReference chapter="Kap. 69" page={670} end={673} /></p>
      <p><strong className="text-foreground"><EditableText id="src_components_editorial_evidence_tsx_4601" value={"Quellenkritik:"} /></strong><EditableText id="src_components_editorial_evidence_tsx_4624" value={" Reichspr\xE4sident Paul von Hindenburg erl\xE4sst den Text; Hitler und die zust\xE4ndigen Minister zeichnen mit. Als amtliche Norm aus dem Jahr 1933 ist er eine historische Prim\xE4rquelle. Er zeigt, was die Regierung zulassen wollte, nicht automatisch, wie jede einzelne Polizeistelle handelte. Die digitale Transkription ist mit dem abgebildeten Gesetzblatt abzugleichen."} /></p>
      <p><strong className="text-foreground"><EditableText id="src_components_editorial_evidence_tsx_5036" value={"Der Sommer 1934:"} /></strong><EditableText id="src_components_editorial_evidence_tsx_5061" value={" Die staatliche Mordaktion vom 30. Juni bis 2. Juli beseitigt SA-F\xFChrer und weitere Gegner. Die Bezeichnung \xABR\xF6hm-Putsch\xBB \xFCbernimmt eine Rechtfertigung des Regimes, nicht den Nachweis eines tats\xE4chlich bevorstehenden Putsches. "} /><a href="https://www.dhm.de/lemo/kapitel/ns-regime/etablierung-der-ns-herrschaft/roehm-putsch" className="text-primary underline"><EditableText id="src_components_editorial_evidence_tsx_5418" value={"DHM / LeMO: Einordnung \u2197"} /></a><EditableText id="src_components_editorial_evidence_tsx_5446" value={" Im Roman glaubt Gr\xE4f die offizielle Version; Charly erkennt staatliche Gewalt gegen Gegner. Die Gegen\xFCberstellung zeigt, wie dieselben Ereignisse durch Loyalit\xE4t unterschiedlich gedeutet werden. "} /><RomanReference chapter="Kap. 78" page={741} end={742} /><EditableText id="src_components_editorial_evidence_tsx_5699" value={"; "} /><RomanReference chapter="Kap. 85" page={794} end={795} /></p>
    </div>
  </div>;
}
export function ContemporaryComparison() {
  return <div className="mt-10 border-t border-border pt-8">
    <p className="kicker"><EditableText id="src_components_editorial_evidence_tsx_5917" value={"Ein Mechanismus \xB7 nicht dieselbe Gesellschaft"} /></p>
    <h3 className="mt-3 text-3xl"><EditableText id="src_components_editorial_evidence_tsx_6001" value={"Loyalit\xE4t macht Widerspruch teuer"} /></h3>
    <div className="mt-6 grid gap-8 md:grid-cols-3">
      <article><h4 className="font-semibold text-primary"><EditableText id="src_components_editorial_evidence_tsx_6151" value={"Gemeinsamkeit"} /></h4><p className="mt-3 leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_6227" value={"Wo Schutz und Zugeh\xF6rigkeit von Loyalit\xE4t abh\xE4ngen, k\xF6nnen Menschen schweigen, obwohl sie Gewalt erkennen. Im Roman bindet Marlow Rath durch Hilfe und Drohungen. In der heutigen Untersuchung krimineller Netzwerke ist deshalb die Struktur hinter einer Tat wichtig, nicht nur der einzelne T\xE4ter."} /></p></article>
      <article><h4 className="font-semibold text-primary"><EditableText id="src_components_editorial_evidence_tsx_6593" value={"Unterschied"} /></h4><p className="mt-3 leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_6667" value={"1934 schafft die Staatsf\xFChrung selbst rechtsfreie Gewalt und verfolgt Menschen politisch und antisemitisch. Heute bestehen rechtsstaatliche Beschwerdewege und unabh\xE4ngige gerichtliche Kontrolle. Kriminelle Loyalit\xE4t und staatlich organisierte Verfolgung sind nicht gleichzusetzen."} /></p></article>
      <article><h4 className="font-semibold text-primary"><EditableText id="src_components_editorial_evidence_tsx_7020" value={"Grenze"} /></h4><p className="mt-3 leading-relaxed text-muted-foreground"><EditableText id="src_components_editorial_evidence_tsx_7089" value={"Die Berliner Gesamt-PKS misst weder Loyalit\xE4t noch Schweigen und belegt keinen \xDCbergang von Ringvereinen zu heutigen Netzwerken. Sie gibt einen aktuellen Rahmen, keinen Beweis f\xFCr die Romaninterpretation. Ein Nachname oder eine Herkunft ist kein Tatnachweis."} /></p></article>
    </div>
    <p className="mt-6 max-w-3xl leading-relaxed"><EditableText id="src_components_editorial_evidence_tsx_7423" value={"Zur Leitfrage zur\xFCck: Wer sich \xABheraush\xE4lt\xBB, handelt nicht im luftleeren Raum. Entscheidend ist, wen das Schweigen sch\xFCtzt, wen es gef\xE4hrdet und welche M\xF6glichkeiten zum Widerspruch tats\xE4chlich bestehen."} /></p>
  </div>;
}
