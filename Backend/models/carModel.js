const mongoose = require("../db");

const carSchema = new mongoose.Schema({
    Kanton: String,
    Schildnummer: Number,
    Fahrzeugklasse: String,
    Fahrzeugart_Code: Number,
    Fahrzeugart: String,
    Marken_Code: Number,
    Marke: String,
    Marke_und_Typ: String,
    Typ1: String,
    Typ2: String,
    Typ3: String,
    Typ4: String,
    Typengenehmigungs_Nr: String,
    Fahrgestell_Nr_Teil: String,
    Karosserieform_Code: String,
    Karosserieform: String,
    Farbe: String,
    Sitzplätze: Number,
    Sitzplätze_vorne: Number,
    Stehplätze: Number,
    Leergewicht: Number,
    Nutzlast: Number,
    Gesamtgewicht: Number,
    Gesamtzugsgewicht: Number,
    Anhängelast: Number,
    Dachlast: Number,
    Tankinhalt_Aufbaus: Number,
    Hubraum: Number,
    Zylinder: Number,
    Leistung: Number,
    Treibstoff_Code: String,
    Treibstoff: String,
    Hybridcode: String,
    CO2_WLTP: String,
    Emissionscode: String,
    Getriebe_Code: String,
    Getriebe: String,
    Getriebe_Detailcode: String,
    Antrieb_Code: String,
    Antrieb: String,
    Achsen: String,
    Erstinverkehrsetzung_Jahr: Number,
    Erstinverkehrsetzung_Monat: Number,
    Erstinverkehrsetzung_Kanton: String,
    Erstinverkehrsetzung_Staat: String,
    Gebrauchtcode: String,
    Ersterfassung_Jahr: Number,
    Ersterfassung_Monat: Number,
    Schildfarbe_Code: Number,
    Schildfarbe: String,
    Schildart_Code: String,
    Schildart: String,
    Inverkehrsetzung_Status_Code: String,
    Inverkehrsetzung_Kanton: String,
    PLZ: String,
    Staat_Code: String,
    Staat: String,
    Datenstand: String
});

const carDbData = mongoose.model("Test", carSchema, "test");

module.exports = carDbData;