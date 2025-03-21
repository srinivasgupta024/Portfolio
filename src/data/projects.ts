import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "HealthConnect",
    description:
      "A healthcare data analytics platform for comparing negotiated rates and optimizing insurance choices.",
    image: "hirrd.png",
    tech: ["Python", "SQL", "Azure", "PowerBi", "Data Analytics"],
    github: "https://youtu.be/2XF-HgauItk?si=xnuz7_gpUVBBgdW6",
    live: "https://youtu.be/2XF-HgauItk?si=xnuz7_gpUVBBgdW6",
    details: {
      problem:
        "Healthcare pricing transparency is often complex, and patients struggle to compare negotiated rates between different insurance companies.",
      solution:
        "Developed a data analysis solution to compare and analyze hospital prices, helping consumers make informed decisions by identifying the best insurance plans and hospitals.",
      features: [
        "Price Comparison",
        "Cost Optimization",
        "Interactive Dashboards",
        "Data Integration",
      ],
      impact: "Empowering consumers to make cost-effective healthcare decisions by providing actionable insights into hospital pricing and insurance options.",
    },
  },
  {
    title: "FleetGuard",
    description: "A fleet risk analysis system leveraging AWS, HDFS, and predictive maintenance strategies for operational efficiency",
    image: "schedulrr.png",
    tech: ["AWS", "HDFS", "AWS QuickSight", "Athena", "Tableau", "AWS Glue",],
    github: "https://youtu.be/glAC7d-TYSM?si=KW5Wrdeh5uVPpu7c",
    live: "https://youtu.be/glAC7d-TYSM?si=KW5Wrdeh5uVPpu7c",
    details: {
      problem: "High risk of fleet incidents due to inefficient monitoring and lack of predictive maintenance",
      solution:
        "Implemented a fleet monitoring system with real-time risk identification and predictive maintenance strategies",
      features: [
        "Integration of HDFS with AWS QuickSight via JDBC drivers",
      "Real-time high-risk driver identification",
      "Processing and enrichment of 500GB+ geo-location data",
      "Predictive maintenance using AWS Glue",
      "Visualization and analysis through Tableau"
      ],
      impact: "Reduced fleet incidents by 30% and improved risk identification accuracy by 85%",
    },
  },
  {
    title: "StreamFlow",
    description: "A scalable real-time data streaming pipeline using Kafka on AWS for efficient data ingestion, processing, and querying",
    image: "zcrum.png",
    tech: ["Kafka", "AWS EC2", "AWS S3", "AWS Glue", "AWS Athena", "Jupyter Notebooks", "Python"],
    github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    details: {
      problem: "Need for a scalable and reliable real-time data streaming pipeline for processing large datasets",
      solution:
        "Built a Kafka-based pipeline on AWS to stream, process, and query data in real time.",
      features: [
        "Kafka streaming for real-time data ingestion",
      "EC2 deployment for Kafka brokers",
      "Integration with AWS Glue for data cataloging",
      "Data storage in AWS S3 for easy access and querying",
      "SQL querying with Amazon Athena",
      "Visualization and analysis in Jupyter notebooks"
      ],
      impact: "Enabled real-time data processing and analysis, allowing for scalable and efficient data querying through AWS services",
    },
  },
  {
    title: "Reflct",
    description: "A minimalist journaling application",
    image: "reflct.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
    details: {
      problem: "Digital journaling apps are often cluttered and complex",
      solution:
        "Created a clean, focused writing experience with powerful features",
      features: [
        "Markdown support",
        "Daily prompts",
        "Mood tracking",
        "Privacy-focused design",
      ],
      impact: "Helping users maintain consistent journaling habits",
    },
  },
];
