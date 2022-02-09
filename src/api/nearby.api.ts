import { FacilityType } from "../types";

async function getAll(params: URLSearchParams) {
  const data: FacilityType[] = [
    {
      name: "FAIRBANKS SCALES INC",
      street: "2176 PORTLAND ST",
      city: "SAINT JOHNSBURY",
      county: "CALEDONIA",
      state: "VT",
      zipCode: 5819,
      latitude: 44.42767,
      longitude: -71.97842,
      chemicals: [
        {
          name: "Manganese",
          healthEffects: "death",
        },
        {
          name: "Water",
          healthEffects: "life",
        },
      ],
    },
    {
      name: "KMTEX LLC",
      street: "2450 S GULFWAY DR",
      city: "PORT ARTHUR",
      county: "JEFFERSON",
      state: "TX",
      zipCode: 77641,
      latitude: 29.828587,
      longitude: -93.963257,
      chemicals: [
        {
          name: "Acrylonitrile",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "UNITED SILICONE INC",
      street: "4471 WALDEN AVE",
      city: "LANCASTER",
      county: "ERIE",
      state: "NY",
      zipCode: 14086,
      latitude: 42.92777,
      longitude: -78.59773,
      chemicals: [
        {
          name: "Lead",
          healthEffects: "death",
        },
        {
          name: "Nickel",
          healthEffects: "death",
        },
        {
          name: "Manganese",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "COMPASS MINERALS AMERICA INC",
      street: "1662 AVE N",
      city: "LYONS",
      county: "RICE",
      state: "KS",
      zipCode: 67554,
      latitude: 38.329405,
      longitude: -98.190724,
      chemicals: [
        {
          name: "Copper compounds",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "HELIO PRECISION PRODUCTS",
      street: "601 N SKOKIE HWY",
      city: "LAKE BLUFF",
      county: "LAKE",
      state: "IL",
      zipCode: 60044,
      latitude: 42.280372,
      longitude: -87.870856,
      chemicals: [
        {
          name: "Manganese",
          healthEffects: "death",
        },
        {
          name: "Nickel",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "CHEMSTATION ST LOUIS",
      street: "2817 HEREFORD ST",
      city: "SAINT LOUIS",
      county: "ST LOUIS (CITY)",
      state: "MO",
      zipCode: 63139,
      latitude: 38.60735,
      longitude: -90.2729,
      chemicals: [
        {
          name: "Certain glycol ethers",
          healthEffects: "death",
        },
        {
          name: "Molybdenum trioxide",
          healthEffects: "death",
        },
        {
          name: "Benzene",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "HOLLYFRONTIER NAVAJO REFINING LLC - ARTESIA REFINERY",
      street: "501 E MAIN ST",
      city: "ARTESIA",
      county: "EDDY",
      state: "NM",
      zipCode: 88210,
      latitude: 32.848593,
      longitude: -104.394383,
      chemicals: [
        {
          name: "Molybdenum trioxide",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "DETROIT ASSEMBLY COMPLEX MACK",
      street: "4000 ST JEAN ST",
      city: "DETROIT",
      county: "WAYNE",
      state: "MI",
      zipCode: 48214,
      latitude: 42.384694,
      longitude: -82.97872,
      chemicals: [
        {
          name: "Benzene",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "L D MCCAULEY LLC",
      street: "3875 CALIFORNIA RD",
      city: "ORCHARD PARK",
      county: "ERIE",
      state: "NY",
      zipCode: 14127,
      latitude: 42.77843,
      longitude: -78.77987,
      chemicals: [
        {
          name: "Manganese",
          healthEffects: "death",
        },
        {
          name: "Benzene",
          healthEffects: "death",
        },
      ],
    },
    {
      name: "AMERICAN TANK & FABRICATING CO",
      street: "12314 ELMWOOD AVE NW",
      city: "CLEVELAND",
      county: "CUYAHOGA",
      state: "OH",
      zipCode: 44111,
      latitude: 41.46738,
      longitude: -81.77398,
      chemicals: [
        {
          name: "Nickel",
          healthEffects: "death",
        },
      ],
    },
  ];

  return { data, status: 200 };
}

export const api = {
  getAll,
};
