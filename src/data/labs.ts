export interface Lab {
  id: string
  name: string
  focus: string
  color: string
  logo: string
  image_id: string
  video_id: string
  description: string
  mission: string
  executives: {
    name: string
    role: string
    field: string
    image?: string
  }[]
  members: {
    name: string
    field: string
    year: string
  }[]
}



export const labs: Lab[] = [
  { 
    id: "prajna-kritrima", 
    name: "Prajna Kritrima Lab", 
    focus: "AI/ML, Deep Learning & Generative AI", 
    color: "#8B5CF6",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "v1771107649/web_nxsjmf",
    video_id: "v1771108954/aiml_nth8ay", // Add Cloudinary video public ID here if available
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence (Prajna = wisdom, Kritrima = man-made) — is where brains meet bytes! As the AI, ML, and DL wing of the Singularity Student Research Lab, we tinker, train, and twist neural nets into life. From wild AI agents to deep learning experiments, it’s where curiosity codes intelligence!",
    mission:"To advance the field of artificial intelligence through innovative research in machine learning, deep learning, and generative AI. We aim to create intelligent systems that are not only powerful but also ethical, explainable, and beneficial to society. Our research spans from fundamental theoretical advances to practical applications that solve real-world problems.",
    executives: [
    {
      name: "Surya Teja Batchu",
      role: "Executive Lead",
      field: "Deep Learning & Neural Networks",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"DNV Likhitha", field:"AIML", year:"3rd Year"},
    { name:"Arijit Das", field:"Reinforcement Learning", year:"2nd Year"},
    ]
  },
  { 
    id: "aanu-tattva", 
    name: "Aanu Tattva Lab", 
    focus: "Quantum Computing", 
    color: "#06B6D4",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "v1771107649/web_nxsjmf",
    video_id: "v1771110349/anu_x3nf1r" ,
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence...",
    mission:"To advance the field of artificial intelligence through innovative research...",
    executives: [
    {
      name: "Jayanth Ramakrishnan",
      role: "Executive Lead & Founder",
      field: "Quantum Algorithms & ML",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"B Md Fawaz", field:"Quantum Algorithms", year:"1st Year"},
    { name:"Jahnavi Alaham", field:"Quantum Machine Learning", year:"1st Year"},
    { name:"Kondreddy Yaswitha Reddy", field:"Quantum Computing", year:"2nd Year"},
    ]
  },
  { 
    id: "chitra-darshan", 
    name: "Chitra Darshan Lab", 
    focus: "Game Dev & XR", 
    color: "#EC4899",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771109806/game_ngq6ll", // Example video ID
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence...",
    mission:"To advance the field of artificial intelligence through innovative research...",
    executives: [
    {
      name: "Krish Nariya",
      role: "Executive Lead",
      field: "Deep Learning & Neural Networks",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"DNV Likhitha", field:"AIML", year:"3rd Year"},
    { name:"Arijit Das", field:"Reinforcement Learning", year:"2nd Year"},
    ]
  },
  { 
    id: "varahamihira", 
    name: "Varahamihira Lab", 
    focus: "Cloud Systems", 
    color: "#3B82F6",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771110176/cloud_jyh7tx",
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence...",
    mission:"To advance the field of artificial intelligence through innovative research...",
    executives: [
    {
      name: "Krish Nariya",
      role: "Executive Lead",
      field: "Deep Learning & Neural Networks",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"DNV Likhitha", field:"AIML", year:"3rd Year"},
    { name:"Arijit Das", field:"Reinforcement Learning", year:"2nd Year"},
    ] 
  },
  { 
    id: "bhaskaracharya", 
    name: "Bhaskaracharya Lab", 
    focus: "Cyber & Web3", 
    color: "#10B981",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771109808/nav_gezae4",
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence...",
    mission:"To advance the field of artificial intelligence through innovative research...",
    executives: [
    {
      name: "Krish Nariya",
      role: "Executive Lead",
      field: "Deep Learning & Neural Networks",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"DNV Likhitha", field:"AIML", year:"3rd Year"},
    { name:"Arijit Das", field:"Reinforcement Learning", year:"2nd Year"},
    ] 
  },
  { 
    id: "agastya", 
    name: "Agastya Lab", 
    focus: "Robotics & IoT", 
    color: "#F97316",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771114402/robo_e9htbm",
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence...",
    mission:"To advance the field of artificial intelligence through innovative research...",
    executives: [
    {
      name: "Krish Nariya",
      role: "Executive Lead",
      field: "Deep Learning & Neural Networks",
      image: "/team/krish.jpg"
    }
    ],
    members: [
    { name:"DNV Likhitha", field:"AIML", year:"3rd Year"},
    { name:"Arijit Das", field:"Reinforcement Learning", year:"2nd Year"},
    ] 
  },
  { 
    id: "navya-vigyan", 
    name: "Navya Vigyan Lab", 
    focus: "Experimental Tech", 
    color: "#EF4444",
    logo: "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png",
    image_id: "lab_chitra_darshan_v123",
    video_id: "v1771109807/Cyber_a7d0jd",
    description: "Prajna Kritrima — Sanskrit for Artificial Intelligence...",
    mission:"To advance the field of artificial intelligence through innovative research...",
    executives: [],
    members: [] 
    
  }
];