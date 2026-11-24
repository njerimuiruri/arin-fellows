// ─────────────────────────────────────────────────────────────
// AI for Climate Resilience — Mini-Grant Awardees
//
// One entry per awardee profile. Fields map to the awardee profile form:
//   image          → "A recent professional headshot"  (files live in /public/Ai-minigrants/)
//   position       → "Current position"
//   institution    → "Institution or Organizational affiliation"
//   projectTitle   → "The final title of awarded project"
//
// Optional:
//   fellowId  → id of the matching entry in ai-fellows.js. If set, the
//               awardee's biography (and photo, if image is empty) is
//               pulled from that profile.
//   theme     → short tag shown on the card (e.g. "Climate & Health")
//   overview  → short description of the awarded project
//   bio       → short biography (overrides the linked fellow's bio)
// ─────────────────────────────────────────────────────────────
export const aiAwardees = [
  {
    id: "ai-award-1",
    name: "Sharon Onyango",
    image: "/Ai-minigrants/Sharon.jpg",
    country: "Kenya",
    theme: "Climate & Health",
    position: "Research Officer – Climate Change and Health",
    institution: "Kenya Medical Research Institute – Wellcome Trust Research Programme",
    projectTitle:
      "Modelling Urban Heat Exposure for Public Health Planning in Kenyan Cities under Climate Change Scenarios: A Machine Learning Approach",
    bio: "",
  },
  {
    id: "ai-award-2",
    name: "Brendah Michira",
    image: "/Ai-minigrants/brendah.png",
    country: "Kenya",
    theme: "Disability-Inclusive Early Warning",
    position: "Research and Policy Analyst",
    institution: "Parliament of Kenya",
    projectTitle:
      "Leveraging Responsible Artificial Intelligence to Strengthen Disability-Inclusive Climate Early Warning Systems for Climate Resilience in Kenya",
    bio: "",
  },
  {
    id: "ai-award-3",
    name: "Dr. Shishay Kiros Weldegebriel",
    fellowId: "ai87",
    image: "/Ai-minigrants/shishay.jpg",
    country: "Ethiopia",
    theme: "Agriculture & Water",
    position: "Assistant Professor",
    institution: "Rift Valley University, Ethiopia",
    projectTitle:
      "Developing an AI-driven, Integrated Climate-Agro-Hydrological Intelligent Decision Support System for Smallholder Farmers' Resilience in Northern Ethiopia",
    overview:
      "This project aims to develop an AI-driven, integrated climate-agro-hydrological decision support system to strengthen the climate resilience of smallholder farmers in Northern Ethiopia. It brings together climate information, hydrological modelling, and artificial intelligence and machine learning approaches to improve drought and early warning, agricultural planning, and water-resource management. The system will generate localized climate-risk information and practical decision-support insights to inform planting periods, crop management, and water use under a changing climate. By connecting climate science, AI, and agricultural decision-making, the project seeks to contribute to climate-resilient agriculture, sustainable natural-resource management, and evidence-based policymaking.",
    bio: "",
  },
  {
    id: "ai-award-4",
    name: "Alexis Nzeyimana",
    fellowId: "ai5",
    image: "/Ai-minigrants/alexis.jpg",
    country: "Rwanda",
    theme: "Climate Data & Services",
    position: "Radiosonde Data Processing Specialist",
    institution: "Rwanda Meteorology Agency (Meteo Rwanda)",
    projectTitle:
      "VLCIS-AI: An Artificial Intelligence Framework for Dynamic Validation and Calibration of Multi-Source Climate Data for Climate Resilience in Rwanda",
    overview:
      "The project focuses on applying artificial intelligence to strengthen the validation and calibration of multi-source climate datasets, supporting more reliable climate information and climate resilience in Rwanda.",
    bio: "Alexis Nzeyimana is a Climate Services Professional with 18+ years of experience at the Rwanda Meteorology Agency (Meteo Rwanda). Throughout his career, he has served in several technical and operational positions, including Observation Officer, Observation Supervisor, Forecasting Officer, and Instrument Maintenance and Calibration Officer. He currently serves as a Radiosonde Data Processing Specialist. Beyond his institutional responsibilities, Alexis is the Founder and Managing Director of Weather & Climate Sustainable Solutions Ltd.\n\nHe holds a Master of Climate Change Adaptation from the University of Nairobi, Kenya; an MSc in Sustainability in Practice from MLA College in partnership with the University of Plymouth, United Kingdom; and a BSc in Mechanical Engineering from the University of Rwanda.",
  },
  {
    id: "ai-award-5",
    name: "Dr. Chinwe Catherine Eze",
    fellowId: "ai13",
    image: "/Ai-minigrants/eze.jpg",
    country: "Nigeria",
    theme: "Climate & Health",
    position: "Chief Research Scientist",
    institution:
      "Department of Microbiology, School of Biological Sciences, Federal University of Technology Owerri (FUTO), Imo State, Nigeria",
    projectTitle:
      "AI-Driven Cholera Early Warning and Decision-Support System for Climate Resilience in Lagos State, Nigeria",
    bio: "",
  },
  {
    id: "ai-award-6",
    name: "Mashford Zenda",
    fellowId: "ai61",
    image: "/Ai-minigrants/mashford.jpg",
    country: "South Africa",
    theme: "Agriculture & Policy",
    position: "Senior Research Associate",
    institution: "University of the Free State, Department of Sustainable Food Systems and Development",
    projectTitle:
      "Leveraging Artificial Intelligence for Climate Adaptation and Resilience Planning in Smallholder Farming Systems: An Evidence-Informed Policy Framework for South Africa",
    bio: "",
  },
  {
    id: "ai-award-7",
    name: "Yvan Igor Ahishakiye",
    fellowId: "ai100",
    image: "/Ai-minigrants/yvan.jpg",
    country: "Burundi",
    theme: "Flood Risk & Early Warning",
    position: "Software Developer & Climate Change Engineer",
    institution:
      "PAUWES Alumni, Pan African University Institute for Water and Energy Sciences (including Climate Change), Algeria",
    projectTitle: "AI-Powered Flood Early Warning and Community Risk Mapping System for Gatumba, Burundi",
    overview:
      "TegurApp Burundi aims to combine artificial intelligence, Geographic Information Systems (GIS), satellite and environmental data, and local information to study flood susceptibility in Gatumba. The project will produce flood-related analysis and an interactive WebGIS prototype to communicate findings and support local preparedness and climate resilience.",
    bio: "",
  },
  {
    id: "ai-award-8",
    name: "Dr. Tesfaye Tessema Gintamo",
    fellowId: "ai93",
    image: "/Ai-minigrants/tesfay.png",
    country: "South Africa",
    theme: "Water Security & Agriculture",
    position: "Postdoctoral Research Fellow",
    institution: "African Climate and Development Initiative (ACDI), University of Cape Town, South Africa",
    projectTitle:
      "GeoAI-Driven Earth Observation for Water Security and Climate-Resilient Agriculture in Cape Flats, South Africa",
    overview:
      "Climate change is intensifying droughts, water scarcity, and agricultural vulnerability in the Cape Flats, a groundwater-dependent peri-urban agricultural region of Cape Town. As a low-lying area undergoing rapid urbanisation, it is also exposed to localised flooding and broader socio-ecological challenges that threaten long-term agricultural resilience and water security. This project develops an innovative GeoAI and Mathematical Sciences framework that combines Earth Observation data, climate analytics, geospatial modelling, and machine learning to strengthen climate resilience and water security.\n\nThe project integrates satellite observations, climate reanalysis data, soil-moisture information, and advanced machine-learning approaches to create climate-risk forecasts, drought indicators, and adaptation hotspot maps. These outputs will be delivered through an interactive climate intelligence platform and GIS dashboard designed to support evidence-based decision-making for climate-smart agriculture, sustainable groundwater management, and drought preparedness.\n\nBy leveraging GeoAI, mathematical modelling, and Earth Observation technologies, the project aims to provide scalable solutions for climate adaptation while strengthening African capacity in climate analytics and digital innovation.",
    bio: "Dr Tesfaye Tessema Gintamo is a postdoctoral research fellow at the African Climate and Development Initiative (ACDI), University of Cape Town, South Africa, and a research fellow with the AI for Climate Resilience Solutions in Africa Research and Impact Network (ARIN). His research focuses on advancing water security and climate resilience through the integration of Earth observation, mathematical modelling, geospatial analytics, remote sensing, and artificial intelligence. He has extensive experience in climate-risk assessment, land-cover change, groundwater resources, drought monitoring, and developing decision-support tools that translate scientific data into actionable information for policymakers, water managers, and local communities.",
  },
]
