interface HairColorMap {
    [key: string]: string; // Key is hair color, value is hex code
}

export const hairColorMap: HairColorMap = {
    blond: '#fbe7a1',
    'n/a': '#cccccc',
    none: 'transparent',
    brown: '#310f0f',
    'brown, grey': '#808080',
    black: '#000000',
    'auburn, white': '#f08080',
    'auburn, grey': '#964B00',
    white: '#ffffff',
    grey: '#808080',
    auburn: '#a52a2a',
    blonde: '#fbe7a1',
};


/* Initial approach: was going to retrieve images from https://starwars-visualguide.com/#/planets?page=1 for each planet
Since that was out of scope i will paint a generic planet SVG
Final solution: Generated via gemini colors based on each contry star wars [...new Set([...temp2.map(d=>d.homeworld.name)])]
(49) ['Tatooine', 'Naboo', 'Alderaan', 'Stewjon', 'Eriadu', 'Kashyyyk', 'Corellia', 'Rodia', 'Nal Hutta', 'Bestine IV', 'unknown', 'Kamino', 'Trandosha', 'Socorro', 'Bespin', 'Mon Cala', 'Chandrila', 'Endor', 'Sullust', 'Cato Neimoidia', 'Coruscant', 'Toydaria', 'Malastare', 'Dathomir', 'Ryloth', 'Aleen Minor', 'Vulpter', 'Troiken', 'Tund', 'Haruun Kal', 'Cerea', 'Glee Anselm', 'Iridonia', 'Iktotch', 'Quermia', 'Dorin', 'Champala', 'Geonosis', 'Mirial', 'Serenno', 'Concord Dawn', 'Zolan', 'Ojom', 'Skako', 'Muunilinst', 'Shili', 'Kalee', 'Umbara', 'Utapau']*/

export const planetColorMap = {
    Tatooine: '#D9B384', // Desert yellow-orange
    Naboo: '#90CAF9', // Peaceful blue-green
    Alderaan: '#81C784', // Verdant green
    Stewjon: '#607D8B', // Industrial grey-blue
    Eriadu: '#B0BEC5', // Industrial grey
    Kashyyyk: '#4CAF50', // Forest green
    Corellia: '#FFEB3B', // Industrial yellow
    Rodia: '#FF5722', // Reddish desert
    "Nal Hutta": '#607D8B', // Dark, murky green-grey
    "Bestine IV": '#FFC107', // Sandy yellow
    unknown: '#CCCCCC', // Grey for unknown
    Kamino: '#2196F3', // Ocean blue
    Trandosha: '#9E9E9E', // Rocky grey
    Socorro: '#FF9800', // Orange-brown desert
    Bespin: '#90CAF9', // Cloud city blue
    "Mon Cala": '#00BCD4', // Ocean blue
    "Chandrila": '#81C784', // Verdant green
    Endor: '#4CAF50', // Forest green
    Sullust: '#757575', // Rocky grey
    "Cato Neimoidia": '#FFEB3B', // Sandy yellow
    Coruscant: '#90CAF9', // Cityscape grey-blue
    Toydaria: '#FFC107', // Sandy yellow
    Malastare: '#D9B384', // Desert yellow-orange
    Dathomir: '#4CAF50', // Dark, mysterious green
    Ryloth: '#D9B384', // Desert yellow-orange
    "Aleen Minor": '#FFEB3B', // Sandy yellow
    Vulpter: '#90CAF9', // Water world blue
    Troiken: '#757575', // Rocky grey
    Tund: '#90CAF9', // Ice planet blue
    "Haruun Kal": '#FFEB3B', // Sandy yellow
    Cerea: '#81C784', // Verdant green
    "Glee Anselm": '#FFC107', // Sandy yellow
    Iridonia: '#757575', // Rocky grey
    Iktotch: '#D9B384', // Desert yellow-orange
    Quermia: '#90CAF9', // Water world blue
    Dorin: '#4CAF50', // Forest green
    Champala: '#FFEB3B', // Sandy yellow
    Geonosis: '#D9B384', // Desert yellow-orange
    Mirial: '#81C784', // Verdant green
    Serenno: '#FFC107', // Sandy yellow
    "Concord Dawn": '#D9B384', // Desert yellow-orange
    Zolan: '#757575', // Rocky grey
    Ojom: '#90CAF9', // Water world blue
    Skako: '#607D8B', // Industrial grey-blue
    Muunilinst: '#FFEB3B', // Sandy yellow
    Shili: '#4CAF50', // Forest green
    Kalee: '#D9B384', // Desert yellow-orange
    Umbara: '#4CAF50', // Dark, mysterious green
    Utapau: '#D9B384', // Desert yellow-orange
  };