import { ProjectItem } from "../types";
import hirrdImage from "../images/hirrd.png";
import schedulrrImage from "../images/schedulrr.png";
import zcrumImage from "../images/zcrum.png";
import reflctImage from "../images/reflct.png";

export const projectsData: ProjectItem[] = [
  {
    title: "HealthConnect",
    description:
      "A healthcare data analytics platform for comparing negotiated rates and optimizing insurance choices.",
    image: hirrdImage,
    tech: ["Python", "SQL", "Azure", "PowerBi", "Data Analytics"],
    github: "https://github.com/srinivasgupta024/Price-Transparency-Analysis",
    live: "https://github.com/srinivasgupta024/Price-Transparency-Analysis",
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
    image: schedulrrImage,
    tech: ["AWS", "HDFS", "AWS QuickSight", "Athena", "Tableau", "AWS Glue",],
    github: "https://github.com/srinivasgupta024/Fleet-Analysis-BigData-Project",
    live: "https://github.com/srinivasgupta024/Fleet-Analysis-BigData-Project",
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
    image: zcrumImage,
    tech: ["Kafka", "AWS EC2", "AWS S3", "AWS Glue", "AWS Athena", "Jupyter Notebooks", "Python"],
    github: "https://github.com/srinivasgupta024/Stock-Market-Analysis-kafka",
    live: "https://github.com/srinivasgupta024/Stock-Market-Analysis-kafka",
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
    title: "IPL Fever",
    description: "An interactive data analytics project on IPL team performance using Databricks and Spark",
    image: reflctImage,
    tech: ["Apache Spark", "Databricks", "PySpark", "SQL", "Power BI"],
    github: "https://github.com/srinivasgupta024/IPL-Data-Analysis-Spark-Project",
    live: "https://github.com/srinivasgupta024/IPL-Data-Analysis-Spark-Project",
    details: {
      problem: "Cricket analysts and teams struggle to derive meaningful insights from large IPL datasets efficiently",
      solution:
        "Implemented a scalable data pipeline using Apache Spark and Databricks to process IPL data and generate interactive visualizations",
      features: [
        "Optimized data processing with Spark",
        "Toss-winning impact analysis",
        "Team and player performance trends",
        "Match result predictions",
        "Interactive dashboards using Power BI",
      ],
      impact: "Enabled faster and more data-driven decision-making for IPL teams, analysts, and cricket enthusiasts",
    },
  },
];
