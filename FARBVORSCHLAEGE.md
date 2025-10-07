# Farbkombinations-Vorschläge für Abschnittshintergründe

Um die Farbkombination zu ändern, editiere **EINE** der folgenden Dateien:

## Methode 1: CSS-Variablen ändern (empfohlen)
**Datei:** `src/index.css` (Zeilen 41-43)

## Methode 2: Tailwind-Config ändern  
**Datei:** `tailwind.config.ts` (Zeilen 28-30)

## Methode 3: Farb-Utility ändern
**Datei:** `src/utils/colors.ts` (Zeilen 26-28)

---

## 🎨 Vorschlag 1: "Warme Geborgenheit" (AKTUELL)
**Psychologischer Effekt:** Einladend, warm, vertrauensvoll - ideal für Therapie-Kontext

```css
--section-bg-light: #fefcf9;   /* Warmes Weiß */
--section-bg-dark: #fff8ed;    /* Creme */
```

**Warum:** Minimaler, aber sichtbarer Kontrast. Sehr sanft und beruhigend.

---

## 🎨 Vorschlag 2: "Sanfte Klarheit"
**Psychologischer Effekt:** Klar, rein, professionell - aber dennoch warm

```css
--section-bg-light: #ffffff;   /* Reines Weiß */
--section-bg-dark: #fef8f0;    /* Helles Beige-Creme */
```

**Warum:** Stärkerer Kontrast als aktuell, wirkt moderner und professioneller. Trotzdem warm durch die Beige-Note.

---

## 🎨 Vorschlag 3: "Naturverbunden"
**Psychologischer Effekt:** Erdend, natürlich, organisch - passt zu holistischen Ansätzen

```css
--section-bg-light: #fdfbf7;   /* Leinen-Weiß */
--section-bg-dark: #f5f0e8;    /* Sandbeige */
```

**Warum:** Mehr Kontrast durch dunkleres Beige. Erinnert an Natur und Ruhe. Harmoniert perfekt mit den Grün/Erdtönen in deinen Akzentfarben.

---

## 🎨 Vorschlag 4: "Frische Klarheit"
**Psychologischer Effekt:** Frisch, aufgeräumt, klar strukturiert - für Kognitive Therapie

```css
--section-bg-light: #fafaf9;   /* Helles Grau-Weiß */
--section-bg-dark: #fff5ea;    /* Pfirsich-Creme */
```

**Warum:** Deutlichster Kontrast. Das kühlere Grau-Weiß kontrastiert mit dem wärmeren Pfirsich-Creme. Wirkt modern und strukturiert, aber nicht steril.

---

## 📊 Vergleich der Kontraststärke

1. **Vorschlag 1 (aktuell):** ⭐ (sehr sanft)
2. **Vorschlag 2:** ⭐⭐ (mittel)
3. **Vorschlag 3:** ⭐⭐⭐ (deutlich)
4. **Vorschlag 4:** ⭐⭐⭐⭐ (stark)

---

## 🎯 Empfehlung basierend auf Therapie-Kontext

- **Für Kinder-Therapie:** Vorschlag 1 oder 3 (warm, sanft, nicht überfordernd)
- **Für Neuropsychologie:** Vorschlag 2 oder 4 (klar, strukturiert, professionell)
- **Für Familien-Therapie:** Vorschlag 1 oder 2 (vertrauensvoll, einladend)
- **Für alle Zielgruppen (UNIVERSAL):** **Vorschlag 2** (guter Mittelweg)

---

## 💡 Bonus-Tipp

Du kannst die Farben auch in `BRAND_COLORS.sectionLight` und `BRAND_COLORS.sectionDark` in `src/utils/colors.ts` anpassen - dann werden sie automatisch in allen drei Dateien synchronisiert (bei nächstem Build).

---

## 🧪 Zum Testen

1. Ändere die Werte in `src/index.css` (Zeilen 41-43)
2. Speichere die Datei
3. Die Änderungen werden automatisch live angezeigt
4. Wenn es dir gefällt, übernimm die Farben auch in `tailwind.config.ts` und `colors.ts`


