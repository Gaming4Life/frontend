# Person
    * Namn
    * Födesleår
    * Poäng
    * Aktiviteter
# PersonUtmanings
    * person_id (fk)
    * utmainings_id (fk)
    * timestamp
    * progress
# Screening
    * person_id (fk)
    * Vikt
    * Längd
    * Rökare
    * Snusare
    * Rörelsegrad
    * Konditionsgrad
    * Medicinska värden
# Aktivitet
    * Namn
    * Intensitet
# Grupp
    * Namn
    * Beskrivning
    * Karaktär
# Utmanings template
    * -> Aktivitet
    * Typ (Mål-, Prestations- orienterade)
    * Passar grupp?
# Utmaning
    * -> Template
    * Datum
    * Parameter värden
    * Beskrivning
    * Namn
    * Poängsats
# Belöning
    * Artikel
    * Poängnivå