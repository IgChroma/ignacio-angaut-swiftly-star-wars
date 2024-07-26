export interface PlanetVisualCharacteristics {
    color: string;
    type: string;
    svg: string
}

interface PlanetColorMap {
    [key: string]: PlanetVisualCharacteristics;
}

/* Note, my initial approach was going to retrieve images from https://starwars-visualguide.com/#/planets?page=1 for each planet
Since that was out of scope i will paint a generic planet SVG
Final solution: Generated via gemini colors based on each contry star wars [...new Set([...temp2.map(d=>d.homeworld.name)])]
(49) ['Tatooine', 'Naboo', 'Alderaan', 'Stewjon', 'Eriadu', 'Kashyyyk', 'Corellia', 'Rodia', 'Nal Hutta', 'Bestine IV', 'unknown', 'Kamino', 'Trandosha', 'Socorro', 'Bespin', 'Mon Cala', 'Chandrila', 'Endor', 'Sullust', 'Cato Neimoidia', 'Coruscant', 'Toydaria', 'Malastare', 'Dathomir', 'Ryloth', 'Aleen Minor', 'Vulpter', 'Troiken', 'Tund', 'Haruun Kal', 'Cerea', 'Glee Anselm', 'Iridonia', 'Iktotch', 'Quermia', 'Dorin', 'Champala', 'Geonosis', 'Mirial', 'Serenno', 'Concord Dawn', 'Zolan', 'Ojom', 'Skako', 'Muunilinst', 'Shili', 'Kalee', 'Umbara', 'Utapau']*/

export const planetColorMap: PlanetColorMap = {
    Tatooine: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },  // Desert planet
    Naboo: { color: '#90CAF9', type: 'temperate', svg: 'forest_planet' },  // Temperate with forests
    Alderaan: { color: '#81C784', type: 'temperate', svg: 'forest_planet' },  // Temperate with forests
    Stewjon: { color: '#607D8B', type: 'industrial', svg: 'industrial_planet' }, // Industrial world
    Eriadu: { color: '#B0BEC5', type: 'industrial', svg: 'industrial_planet' }, // Industrial world
    Kashyyyk: { color: '#4CAF50', type: 'forest', svg: 'forest_planet' },     // Forest moon
    Corellia: { color: '#FFEB3B', type: 'industrial', svg: 'industrial_planet' }, // Industrial world
    Rodia: { color: '#FF5722', type: 'desert', svg: 'desert_planet' },       // Volcanic desert
    "Nal Hutta": { color: '#607D8B', type: 'swamp', svg: 'swamp_planet' },     // Swampy moon
    "Bestine IV": { color: '#FFC107', type: 'desert', svg: 'desert_planet' },  // Sandy desert
    unknown: { color: '#CCCCCC', type: 'unknown', svg: 'industrial_planet' },                         // Unknown type, no SVG
    Kamino: { color: '#2196F3', type: 'ocean', svg: 'ocean_planet' },         // Ocean planet
    Trandosha: { color: '#9E9E9E', type: 'rocky', svg: 'rocky_planet' },        // Rocky world
    Socorro: { color: '#FF9800', type: 'desert', svg: 'desert_planet' },       // Orange desert
    Bespin: { color: '#90CAF9', type: 'gas giant (cloud city)', svg: 'gas_giant_planet' }, // Gas giant with cloud city
    "Mon Cala": { color: '#00BCD4', type: 'ocean', svg: 'ocean_planet' },         // Ocean planet
    "Chandrila": { color: '#81C784', type: 'temperate', svg: 'forest_planet' },  // Temperate with forests
    Endor: { color: '#4CAF50', type: 'forest', svg: 'forest_planet' },         // Forest moon
    Sullust: { color: '#757575', type: 'volcanic', svg: 'volcanic_planet' },    // Volcanic world
    "Cato Neimoidia": { color: '#FFEB3B', type: 'desert', svg: 'desert_planet' },  // Sandy desert
    Coruscant: { color: '#90CAF9', type: 'cityscape', svg: 'cityscape_planet' },  // City planet
    Toydaria: { color: '#FFC107', type: 'desert', svg: 'desert_planet' },       // Sandy desert
    Malastare: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },       // Desert world
    Dathomir: { color: '#4CAF50', type: 'swamp', svg: 'swamp_planet' },        // Swampy forest
    Ryloth: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },       // Desert world
    "Aleen Minor": { color: '#FFEB3B', type: 'desert', svg: 'desert_planet' },  // Sandy desert
    Vulpter: { color: '#90CAF9', type: 'ocean', svg: 'ocean_planet' },         // Ocean planet
    Troiken: { color: '#757575', type: 'rocky', svg: 'rocky_planet' },        // Rocky world
    Tund: { color: '#90CAF9', type: 'ice', svg: 'ice_planet' },              // Ice planet
    "Haruun Kal": { color: '#FFEB3B', type: 'desert', svg: 'desert_planet' }, // Sandy desert
    Cerea: { color: '#81C784', type: 'temperate', svg: 'forest_planet' },    // Temperate with forests
    "Glee Anselm": { color: '#FFC107', type: 'desert', svg: 'desert_planet' }, // Sandy desert
    Iridonia: { color: '#757575', type: 'rocky', svg: 'rocky_planet' },       // Rocky world
    Iktotch: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },      // Desert world
    Quermia: { color: '#90CAF9', type: 'ocean', svg: 'ocean_planet' },       // Ocean planet
    Dorin: { color: '#4CAF50', type: 'forest', svg: 'forest_planet' },       // Forest planet
    Champala: { color: '#FFEB3B', type: 'desert', svg: 'desert_planet' },    // Sandy desert
    Geonosis: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },     // Desert world
    Mirial: { color: '#81C784', type: 'temperate', svg: 'forest_planet' },   // Temperate with forests
    Serenno: { color: '#FFC107', type: 'desert', svg: 'desert_planet' },     // Sandy desert
    "Concord Dawn": { color: '#D9B384', type: 'desert', svg: 'desert_planet' }, // Desert world
    Zolan: { color: '#757575', type: 'rocky', svg: 'rocky_planet' },        // Rocky world
    Ojom: { color: '#90CAF9', type: 'ocean', svg: 'ocean_planet' },         // Ocean planet
    Skako: { color: '#607D8B', type: 'industrial', svg: 'industrial_planet' }, // Industrial world
    Muunilinst: { color: '#FFEB3B', type: 'desert', svg: 'desert_planet' },  // Sandy desert
    Shili: { color: '#4CAF50', type: 'forest', svg: 'forest_planet' },       // Forest planet
    Kalee: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },      // Desert world
    Umbara: { color: '#4CAF50', type: 'forest', svg: 'forest_planet' },     // Forest planet
    Utapau: { color: '#D9B384', type: 'desert', svg: 'desert_planet' },     // Desert world
};

const PLANET_TYPE_DESERT = 'desert';
const PLANET_TYPE_FOREST = 'forest';
const PLANET_TYPE_INDUSTRIAL = 'industrial';
const PLANET_TYPE_SWAMP = 'swamp';
const PLANET_TYPE_OCEAN = 'ocean';
const PLANET_TYPE_ROCKY = 'rocky';
const PLANET_TYPE_VOLCANIC = 'volcanic';
const PLANET_TYPE_GAS_GIANT = 'gasGiant';
const PLANET_TYPE_ICE = 'ice';
const PLANET_TYPE_CITYSCAPE = 'cityscape';