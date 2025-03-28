import { ProjectItem } from "../types";
import hirrdImage from "../images/hirrd.png";
import schedulrrImage from "../images/schedulrr.png";
import zcrumImage from "../images/zcrum.png";
import reflctImage from "../images/reflct.png";
import f1Image from "../images/f1Image.png";
import covid19 from "../images/covid19.png";



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

  {
    title: "Fast & Curious",
    description: "An end-to-end data engineering project analyzing Formula 1 race trends using Azure and Databricks",
    image: f1Image,  
    tech: ["Azure Data Factory", "Databricks", "PySpark", "Delta Lake", "Power BI"],
    github: "https://github.com/srinivasgupta024/Formula1-Data-Analytics",
    live: "https://github.com/srinivasgupta024/Formula1-Data-Analytics",
    details: {
      problem: "F1 teams and analysts need data-driven insights to understand driver performance, race strategies, and track-specific advantages",
      solution:
        "Developed a scalable cloud-based data pipeline using Azure and Databricks to process, analyze, and visualize F1 race data",
      features: [
        "Efficient data ingestion from the Ergast API using ADF",
        "Optimized race data processing with PySpark and Delta Lake",
        "Driver performance and season-wise analysis",
        "Track-specific trends and team dominance insights",
        "Interactive dashboards in Power BI for race analytics",
      ],
      impact: "Provided data-driven insights into race strategies, driver consistency, and team performance, enabling better decision-making for analysts and F1 enthusiasts",
    }
  },


  {
    title: "🤒 Sick Data, Healthy Insights",
    description: "A comprehensive data engineering solution tracking COVID-19 spread, hospitalizations, and mortality rates using Azure Data Factory, Databricks, and Power BI.",
    image: covid19,
    tech: [
        "Azure Data Factory", 
        "Databricks", 
        "PySpark", 
        "Azure Data Lake Gen2", 
        "Power BI",
        "HDInsight",
        "Azure DevOps"
    ],
    github: "https://github.com/srinivasgupta024/covid-19-data-exploration",
    live: "https://github.com/srinivasgupta024/covid-19-data-exploration",
    details: {
        problem: "Public health organizations needed reliable, near-real-time COVID-19 metrics but faced challenges with inconsistent data formats, delayed reporting, and fragmented sources.",
        solution: "Developed an automated cloud pipeline ingesting ECDC and Eurostat data to analyze infection trends, healthcare capacity, and demographic impacts with drill-down capabilities.",
        features: [
            "Automated data ingestion from ECDC (HTTP) and Eurostat (Blob Storage)",
            "Data transformation using Databricks and HDInsight",
            "Parameterized ADF pipelines handling weekly/daily data changes",
            "Mortality rate analysis by age groups and regions",
            "Hospitalization forecasting models",
            "CI/CD deployment using Azure DevOps"
        ],
        impact: "Enabled public health officials to track pandemic evolution, anticipate healthcare demands, and evaluate intervention effectiveness through interactive dashboards and automated reports."
    }
  }

];
