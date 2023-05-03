export const projectsData = [
  {
    _id: 111,
    name: "carre rouge center",
    path: "/projects/1",
    building_type: "Shopping Center",
    colour_surface: "NaturAL Brushed",
    material: "ALUCOBOND® PLUS",
    description: "Perforated | 2nde Skin Façade system | Stainless Steel Look.",
    place: "Zahlé, Lebanon",
    year: "2020",
    image: [
      "images/projects/carre-rouge/img-0.jpg",
      "images/projects/carre-rouge/img-1.jpg",
      "images/projects/carre-rouge/img-0.jpg",
    ],
  },
  {
    _id: 222,
    name: "ABC Achrafieh",
    path: "/projects/2",
    building_type: "Shopping Mall",
    colour_surface: "Solid Colour",
    material: "ALUCOBOND® PLUS",
    description: "Custom-made blue|gray colour that follow ABC guidelines.",
    place: "Achrafieh, Beirut",
    year: "2010",
    image: [
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-1.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-2.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-3.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-4.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-5.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-6.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-7.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-8.jpg",
      "images/projects/ABC_ashrafieh/ABC_ashrafieh-9.jpg",
    ],
  },
];
export const projectsCategoryData = [
  {
    _id: 1111,
    building_type: "Shopping world",
    image: "/images/category/shopping.jpg",
    projects: [
      ...projectsData.filter((p) => {
        if (p.building_type.includes("Shopping")) {
          return p;
        }
      }),
    ],
  },
  {
    _id: 1112,
    building_type: "Company Headquarters",
    image: "/images/category/company_headquarters.jpg",
    projects: [
      ...projectsData.filter((p) => {
        if (p.building_type.includes("headquarter")) {
          return p;
        }
      }),
    ],
  },
  {
    _id: 1113,
    building_type: "Cultural",
    image: "/images/category/cultural.jpg",
    projects: [
      ...projectsData.filter((p) => {
        if (p.building_type.includes("cultural")) {
          return p;
        }
      }),
    ],
  },
  {
    _id: 1114,
    building_type: "Hotels",
    image: "/images/category/hotel.jpg",
    projects: [
      ...projectsData.filter((p) => {
        if (p.building_type.includes("hotel")) {
          return p;
        }
      }),
    ],
  },
  {
    _id: 1115,
    building_type: "Residential",
    image: "/images/category/residential.jpg",
    projects: [
      ...projectsData.filter((p) => {
        if (p.building_type.includes("resident")) {
          return p;
        }
      }),
    ],
  },
  {
    _id: 1116,
    building_type: "Public Transport",
    image: "/images/category/public_transport.jpg",
    projects: [
      ...projectsData.filter((p) => {
        if (p.building_type.includes("transport")) {
          return p;
        }
      }),
    ],
  },
];
