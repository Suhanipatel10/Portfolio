window.portfolioData = {
  name: "Suhani Patel",
  title: "Aspiring Product Manager",
  intro:
    "I don't start with a solution — I start with why the problem exists. That means digging into user behavior, root causes, and data before proposing a fix, so the workflows I design are grounded in what's actually happening rather than in assumptions.",
  about:
    "I got into product thinking through analytics - enough time in SQL, Python, and dashboards to notice that most \u201cdata problems\u201d are really unclear decisions wearing a data costume. That's shaped how I work: I treat every messy request as a discovery problem first, mapping out what's really going on before reaching for a framework.\n\nIn practice, that looks like turning vague stakeholder complaints into structured PRDs and user flows, running root-cause analysis before proposing a fix, and building lightweight automations in Google Apps Script, SQL, or Python when a manual process turns out to be the real bottleneck. I like sitting between product and data - comfortable enough with the numbers to trust my own analysis, and close enough to the user experience to know a technically correct answer isn't always a useful one.",
  highlights: [
    { label: "How I start", value: "By finding the root cause, not just the symptom someone reported" },
    { label: "How I work", value: "Structured artifacts - PRDs, user flows, decision frameworks - that hold up under scrutiny" },
    { label: "What I ship", value: "Solutions a team can act on immediately, not a slide describing the idea" }
  ],
  skills: {
    toolkit: ["SQL", "Python", "Power BI", "Tableau", "Excel", "Jira", "Figma", "Notion", "Git", "MySQL"],
    capabilities: ["Root-cause analysis", "Requirement gathering", "Stakeholder communication", "Feature prioritization", "PRD & user-flow design", "Process automation"]
  },
  projectGroups: [
    {
      id: "cs",
      title: "Case Studies",
      eyebrow: "Lead",
      description:
        "Planning, reporting, documentation, and stakeholder-friendly outputs. This track is for work that shows structure, ownership, and clarity.",
      ctaLabel: "See All",
      projects: ["case-study-demo", "loans24-premises-verification", "packaging-reorder-alerts"]
    },
    {
      id: "pm",
      title: "Management Projects",
      eyebrow: "Data Insights",
      description:
        "Planning, reporting, documentation, and stakeholder-friendly outputs. This track is for work that shows structure, ownership, and clarity.",
      ctaLabel: "See All",
      projects: ["kpi-analysis", "career-track-analysis", "Walmart Sales Analysis Dashboard"]
    },
    {
      id: "development",
      title: "Developer Projects",
      eyebrow: "Build",
      description:
        "Hands-on analysis, dashboards, automation, and technical problem solving. These are the pieces that show how I work with code and data.",
      ctaLabel: "See All",
      projects: ["gesture-drawing-app", "rainfall-prediction-model", "failure-prediction"]
    }
  ],
  projects: [
    {
      slug: "case-study-demo",
      category: "cs",
      title: "Domino's - Enhanced Customer Support",
      description:
        "Redesigned the post-order support journey into a guided, user-controlled flow for reporting and resolving incorrect orders.",
      stack: ["Feature Improvement"],
      caseStudyPage: "case-study.html",
      document: "assests/logo.png",
      logo: "assests/logo.png",
      prd: "assests/PRD_Dominos.pdf",
      caseStudyBlocks: [
        {
          type: "text",
          title: "1. Context & Problem",
          body: "While ordering from Domino\’s, I experienced a situation where the delivered order was incorrect. When I tried to resolve it through the app, the process felt slow, unclear, and heavily dependent on chatbot interactions. The system offered compensation (like vouchers) instead of actually solving the problem. This highlighted a broader product issue: in a high-frequency product like Domino’s, even small failures in order accuracy can significantly impact user trust if the resolution experience is not seamless.",

        },
        {
          type: "text",
          title: "2. Understanding the Problem",
          body: "The current support experience requires users to navigate through predefined chatbot flows, often without clarity on what will happen next. Users have limited control over how the issue is resolved, and the process feels reactive rather than guided. From a user’s perspective, the frustration is not just about receiving the wrong item—it’s about the effort required to fix it. Many users may choose not to report issues at all, leading to silent dissatisfaction and reduced trust in the platform.",
        },
        {
          type: "text",
          title: "3. Root Cause & Key Insight",
          body: "After breaking down the experience, the problem was not just incorrect orders, but the way the system handles them.<br>\
        • The complaint flow is unstructured and not user-driven<br>\
        • There is no item-level issue reporting<br>\
        • Resolution options are not clearly presented<br>\
        • There is limited visibility into the status of the issue<br><br>\
        <strong>Key Insight:</strong><br>\
        The real problem is not issue resolution itself, but the absence of a structured, transparent, and user-controlled resolution process." ,
        },
        {
          type: "text",
          title: "Existing Experience: Unstructured Issue Resolution Flow",
          body: "Users rely on a chatbot-driven system that lacks structure, clarity, and control, leading to inefficient issue resolution.",
        },
        {
          type: "image",
          src: "assests/Original_flow.png"
        },
        {
          type: "text",
          title: "4. Solution Exploration & Decision",
          body: "The solution introduces a guided, step-by-step issue resolution flow integrated within the order details screen.<br>\
        Instead of relying on open-ended chat interactions, the system helps users:<br>\
        • Clearly identify the issue (wrong item, missing item, delay)<br>\
        • Select the specific item affected<br>\
        • Upload an image for quick verification<br>\
        • Choose how they want the issue resolved (refund or replacement)<br>\
        • Track the progress of their request in real-time<br>\
        This transforms the experience from reactive support to a structured decision flow.",
        },
        {
          type: "text",
          title: "5. Final Solution",
          body: "The solution introduces a guided, step-by-step issue resolution flow integrated within the order details screen.<br><br>\
        • Clearly identify the issue (wrong item, missing item, delay)<br>\
        • Select the specific item affected<br>\
        • Upload an image for quick verification<br>\
        • Choose how they want the issue resolved (refund or replacement)<br>\
        • Track the progress of their request in real-time<br><br>\
        <strong>User Flow</strong>"
        },
        {
          type: "text",
          title: "Proposed Solution: Structured Issue Resolution Flow",
          body: "A guided, step-by-step resolution flow that simplifies issue reporting, improves clarity, and gives users control over outcomes.",
        },
        {
          type: "image",
          src: "assests/User_flow.png"
        },
        {
          type: "text",
          title: "6. Impact & Metrics",
          body: "To evaluate the effectiveness of the improved issue resolution system, the following metrics focus on speed, user experience, and trust recovery."
        },
        {
          type: "image",
          src: "assests/Metrics_table_1.png"
        },
        {
          type: "image",
          src: "assests/Metrics_table_2.png"
        },
        {
          type: "text",
          title: "7. Summary",
          body: "By shifting from a chatbot-driven approach to a structured resolution flow, the system becomes more predictable, transparent, and user-friendly. This not only reduces friction for users but also creates a scalable framework for handling post-order issues, ultimately strengthening trust and long-term engagement.",
        },
      ],
    },
    {
      slug: "loans24-premises-verification",
      category: "cs",
      title: "Loans24 - Premises Verification",
      description:
        "Designed a guided, self-serve premises-verification flow that helps genuine customers complete evidence capture without manual follow-up.",
      image: "assests/loans24-user-flow.png",
      stack: ["Product Design", "Trust & Verification", "0-to-1 Flow Design", "Fintech"],
      caseStudyPage: "case-study-loans24.html",
      presentation: "assests/Loans24_Premises_Verification_Case.pptx"
    },
    {
      slug: "packaging-reorder-alerts",
      category: "cs",
      title: "Automating Packaging Reorder Alerts",
      description:
        "Turned a vague stock-risk complaint into a transparent, rule-based decision system that evaluates every packaging item automatically.",
      stack: ["Decision Systems", "Process Automation", "Operations Intelligence", "Google Apps Script"],
      image: "assests/packaging-reorder-alerts.png",
      caseStudyPage: "case-study-lead-time.html",
      caseStudyType: "operations-decision-system",
      caseStudy: {
        eyebrow: "Operations / Automation / Decision Systems",
        subtitle:
          "From a vague operational complaint to a decision system that makes packaging risk visible, consistent, and actionable.",
        role: "Sole owner: problem discovery, decision-logic design, build, and rollout",
        duration: "End-to-end project",
        outcome:
          "Replaced ad hoc, item-by-item review with a rule-based system covering every tracked packaging item each cycle.",
        problem:
          "Packaging stock, future production needs, pending purchase orders, and supplier delays lived in different places. Knowing whether a shortage was actually coming relied on one person correctly combining four moving numbers under pressure, every time.",
        discovery:
          "The team did not arrive with a clean specification. They had a recurring pattern: packaging came dangerously close to running out, and by the time it was obvious there was not always enough runway left to act. Walking through the workflow revealed four individually-correct inputs that were never consistently combined: daily stock movement, production plans, pending purchase orders, and supplier lead times.",
        reframe:
          "The initial ask was for a single dashboard. But a dashboard would improve visibility without removing the difficult judgment call. The product question became: how might we convert a high-pressure, manual calculation into a rule the system applies consistently?",
        options: [
          {
            title: "Unified dashboard",
            solves: "Places the four inputs on one screen.",
            tradeoff: "Still leaves the manual urgency judgment with the team.",
            chosen: false
          },
          {
            title: "Standalone inventory app",
            solves: "Provides full control over the data model and interface.",
            tradeoff: "Creates switching cost for a team already fluent in Sheets.",
            chosen: false
          },
          {
            title: "Rule-based decision layer",
            solves: "Automates the judgment while preserving the team's existing workflow.",
            tradeoff: "Less visual novelty, but near-zero adoption friction.",
            chosen: true
          }
        ],
        framework: [
          {
            number: "01",
            title: "Calculate effective stock",
            body: "Evaluate physical stock and incoming purchase orders together, not in isolation."
          },
          {
            number: "02",
            title: "Protect the minimum floor",
            body: "Apply the business's agreed minimum-stock threshold to every item, every cycle."
          },
          {
            number: "03",
            title: "Account for lead-time demand",
            body: "Check whether stock can cover expected consumption while a new supplier order arrives."
          },
          {
            number: "04",
            title: "Separate trigger from quantity",
            body: "Return both a clear status and a suggested order quantity, rather than one blended judgment."
          }
        ],
        scenarios: [
          {
            label: "Looks urgent, isn't",
            stock: "12,500",
            incoming: "20,000",
            threshold: "20,000",
            naive: "Reorder now",
            result: "Safe - effective stock is 32,500"
          },
          {
            label: "Actually urgent",
            stock: "10,000",
            incoming: "0",
            threshold: "20,000",
            naive: "Ambiguous",
            result: "Critical"
          },
          {
            label: "At the boundary",
            stock: "19,500",
            incoming: "0",
            threshold: "20,000",
            naive: "Unclear",
            result: "Reorder now"
          }
        ],
        system: [
          "Google Sheets remains the transparent source of truth for stock, production demand, pending orders, lead times, thresholds, and calculations.",
          "Google Apps Script evaluates each packaging item against the decision framework automatically.",
          "Categorized alerts communicate both the status and the numbers behind it: Critical, Reorder Now, or Safe.",
          "The team can audit the logic without needing to inspect a hidden technical system."
        ],
        impact: [
          "100% of tracked packaging items are evaluated every cycle instead of relying on occasional spot checks.",
          "Detection moves from the next time someone reviews a sheet to same-cycle automatic alerting.",
          "The system structurally prevents unnecessary reorders when stock is already incoming.",
          "Routine review time is substantially reduced, while human attention is reserved for real exceptions."
        ],
        next: [
          "Track supplier reliability so lead-time protection reflects actual delivery performance.",
          "Replace static planning inputs with demand forecasts based on consumption trends.",
          "Introduce an exception-only view after validating the alert categories with the operations team."
        ],
        takeaway:
          "The team asked for a better way to see a hard decision. The more valuable product move was to remove the need to make that decision manually in the first place."
      }
    },
    {
      slug: "gesture-drawing-app",
      category: "development",
      title: "Gesture-Based Drawing Application",
      description:
        "Built a real-time gesture-controlled drawing system using computer vision, enabling users to create and manipulate digital art without physical input devices.",
      stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      video: "assests/Perfect_gesture_drawing_guide.mp4",
      github: "https://github.com/Suhanipatel10/Gesture_drawing",
      longDescription:
        "This project explores human-computer interaction through a gesture-based interface that replaces traditional input devices like a mouse or stylus. Using MediaPipe for hand landmark detection and OpenCV for real-time rendering, the system enables users to draw, create shapes, adjust colors, and interact with the canvas using intuitive hand gestures. The application supports both freehand and assist modes, ensuring a balance between creative freedom and structured editing. Special focus was given to low-latency processing, gesture accuracy, and UX clarity to create a seamless and responsive user experience.",
      outcomes: [
        "Enabled real-time drawing and shape manipulation using only hand gestures",
        "Designed an intuitive gesture-based UI for tool selection and interaction",
        "Built a low-latency processing pipeline for smooth user experience",
        "Demonstrated practical application of computer vision in interactive systems"
      ]
    },
    {
      slug: "rainfall-prediction-model",
      category: "development",
      title: "Rainfall Prediction using Hybrid ML Model",
      description:
        "Developed a hybrid forecasting model combining SARIMAX and Gradient Boosting to predict rainfall patterns with improved accuracy and realistic seasonality.",
      stack: ["Python", "SARIMAX", "Scikit-learn", "Pandas"],
      images: [
        "assests/Prediction.png",
        "assests/Train_test.png"
      ],
      github: "https://github.com/Suhanipatel10/Rainfall-Prediction-using-Hybrid-ML-model",
      longDescription:
        "This project focuses on improving rainfall forecasting accuracy by combining SARIMAX for capturing long-term trends and seasonality with Gradient Boosting for modeling residual patterns and extreme events. Using over 20 years of historical monthly rainfall data, the model generates realistic 5-year forecasts while maintaining seasonal consistency and handling anomalies like sudden rainfall spikes. Additional enhancements such as feature engineering (lags, rolling statistics), noise injection, and percentile-based spike control were implemented to ensure more stable and interpretable predictions. The model was evaluated using RMSE and R², demonstrating strong predictive performance and robustness for real-world forecasting scenarios.",
      outcomes: [
        "Achieved strong predictive performance (RMSE: 1.18, R²: 0.73)",
        "Improved handling of extreme rainfall events using hybrid modeling",
        "Generated realistic long-term forecasts with seasonal consistency",
        "Demonstrated practical application of combining statistical and ML models"
      ]
    },
    {
      slug: "failure-prediction",
      category: "development",
      title: "Smart Factory Failure Prediction",
      description:
        "Built a predictive maintenance system using machine learning to detect potential machine failures from real-time sensor inputs.",
      stack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
      images: [
        "assests/Machine_success.png",
        "assests/Machine_failure.png"
      ],
      github: "https://github.com/Suhanipatel10/Smart-Factory-Faliure-Prediction",
      longDescription:
        "This project simulates a smart factory environment where machine failures are predicted in advance using real-time sensor data. A Random Forest model was trained on the AI4I predictive maintenance dataset to identify failure patterns based on inputs such as torque, rotational speed, tool wear, and temperature. The model was deployed as an interactive Streamlit web app, allowing users to input live values and receive predictions along with contextual explanations. The system emphasizes practical application by highlighting key risk factors (e.g., high torque + tool wear) and enabling proactive decision-making. With a strong ROC-AUC score of 0.98, the model demonstrates high reliability for predictive maintenance use cases.",
      outcomes: [
        "Achieved high model performance (ROC-AUC: 0.98) for failure prediction",
        "Enabled real-time prediction through an interactive web interface",
        "Identified key failure drivers such as torque and tool wear",
        "Demonstrated shift from reactive to predictive maintenance, reducing downtime risk"
      ]
    },
    {
      slug: "kpi-analysis",
      category: "pm",
      title: "Factory OEE & Downtime Analysis Dashboard",
      description:
        "Analysed the machinery output and data readings to identify success metrics and maintenance KPIs to identify shifts in demand and performance over time.",
      stack: ["PowerBI", "Excel"],
      images: [
        "assests/Quality Analysis page of Dashboard.png",
        "assests/Performance Analysis page of Dashboard.png",
        "assests/Factors Affecting Analysis page of Dashbaord.png"
      ],
        github: "https://github.com/Suhanipatel10/Smart-Factory-OEE-Downtime-Analysis-Power-BI-Dashboard",
      longDescription:
        "A product-focused analysis project aimed at understanding performance patterns and identifying key metrics that influence system efficiency. The work involved analyzing machinery output and operational data to uncover trends, define meaningful KPIs, and translate findings into structured insights that can support decision-making and process improvements across different use cases.",
      outcomes: [
        "Identified key performance and maintenance metrics to track system efficiency",
        "Translated raw data into structured insights for decision-making",
        "Developed a reusable approach for analyzing performance trends across domains"
      ]
    },
    {
      slug: "career-track-analysis",
      category: "pm",
      title: "Career Track Analysis",
      description:
        "Built a structured dataset using SQL to track student progress across career tracks, including completion status, time to complete, and behavioral patterns over time.",
      stack: ["SQL", "Excel"],
      images: [
        "assests/Career_Dashboard.png",
        "assests/Career_barchart.png",
        "assests/Career_bar+line.png"
      ],
      github: "https://github.com/Suhanipatel10/Career-Track-Analysis",
      longDescription:
        "This project simulates how a Product Manager evaluates user engagement and retention in an ed-tech platform post-launch. Using SQL, I transformed raw enrollment data into actionable metrics such as completion rates, time-to-completion buckets, and monthly trends. Tableau was used to visualize user behavior, helping identify drop-offs, high-performing tracks, and engagement patterns. The goal was to move beyond raw data and extract insights that could inform product decisions like improving onboarding, optimizing course length, and increasing completion rates.",
      outcomes: [
        "Identified that majority of users complete tracks within 30 days, indicating strong early engagement",
        "Segmented users based on completion time to highlight drop-off and long-tail behavior",
        "Tracked monthly enrollment vs completion trends to evaluate product consistency",
        "Highlighted high-performing tracks to guide content and product investment decisions"
      ]
    },
    {
      slug: "Walmart Sales Analysis Dashboard",
      category: "pm",
      title: "Sales Performance Dashboard",
      description:
        "Built an executive-friendly dashboard to track revenue, margin, and category performance across time periods and regions.",
      stack: ["Power BI", "SQL", "Excel"],
      image: "assests/Walmart_dashboard.png",
      github: "https://github.com/Suhanipatel10/Walmart-Sales-Analysis",
      longDescription:
        "This project focused on giving leadership a concise, reliable view of sales performance. The dashboard was designed to surface high-level KPIs first, then allow deeper exploration by region, category, and time period. It was structured to reduce reporting friction and support fast decision-making.",
      outcomes: [
        "Unified key sales metrics into one executive dashboard",
        "Reduced manual analysis time with repeatable views",
        "Improved visibility into category and regional performance"
      ]
    }
  ],
  experience: [
    {
      role: "Business Operations Analyst",
      company: "Ecoright",
      period: "Jul 2026 - Present",
      bullets: [
        "Partner with Operations, Procurement, Warehouse, and Customer Support teams to identify user and operational pain points, gather requirements, and prioritize workflow improvements based on business impact.",
        "Led the redesign and automation of shipment processing and operational reporting workflows from problem discovery through implementation, reducing process cycle time by 25% and improving downstream visibility.",
        "Built Google Apps Script automations for recurring workflows and reporting tasks, eliminating approximately 5-6 hours of manual work per week.",
        "Translate stakeholder feedback into structured requirements, workflows, and solution specifications, balancing urgency, implementation effort, and operational value.",
        "Conduct root cause analysis to distinguish surface-level requests from underlying user problems before defining and validating solutions.",
        "Create SOPs and process documentation to improve product adoption, standardize workflows, and reduce dependency on manual knowledge transfer."
      ]
    },
    {
      role: "Machine Learning Research Intern",
      company: "Space Applications Centre, Indian Space Research Organisation (ISRO)",
      period: "Jan 2026 - Apr 2026",
      bullets: [
        "Worked with large-scale weather datasets to transform unstructured research requirements into a reliable data and modeling pipeline for rainfall forecast bias correction.",
        "Developed and evaluated an enhanced U-Net model with Squeeze-and-Excitation attention blocks to improve Weather Research and Forecasting (WRF) model outputs.",
        "Defined evaluation criteria using RMSD, bias, and correlation metrics and compared model performance against baseline forecasts to support evidence-based model decisions.",
        "Communicated technical findings through clear visualizations and summaries, translating complex model results into insights usable by research stakeholders."
      ]
    },
    {
      role: "Research Analyst",
      company: "Indian Meteorological Centre",
      period: "May 2025 - Jun 2025",
      bullets: [
        "Built an end-to-end hybrid forecasting pipeline combining SARIMAX and Gradient Boosting Machines, improving rainfall spike prediction performance while maintaining the ability to capture seasonal variability.",
        "Engineered spike-aware monsoon features and optimized transformations including log1p and Box-Cox, increasing model stability and forecast sensitivity for extreme rainfall events.",
        "Produced multi-year probabilistic rainfall forecasts and conducted diagnostic analyses using ACF, Q-Q plots, and residual mapping, enabling more reliable interpretation of forecast uncertainty."
      ]
    },
    {
      role: "Business Analyst",
      company: "Forensic Knight",
      period: "Dec 2024 - Mar 2025",
      bullets: [
        "Collaborated with product, business, and engineering stakeholders to gather user and business requirements, clarify feature scope, and support product planning.",
        "Converted stakeholder needs into BRDs, FRDs, SRS documents, user flows, and functional requirements, improving clarity across product and engineering handoffs.",
        "Supported feature definition by documenting workflows, dependencies, acceptance criteria, edge cases, and implementation requirements.",
        "Tracked product delivery, identified blockers and risks, and coordinated across teams in an Agile startup environment with frequently changing priorities.",
        "Helped evaluate proposed features against user needs, business objectives, implementation feasibility, and delivery constraints."
      ]
    }
  ],
  certifications: [
    {
      name: "AI Product Management",
      issuer: "Microsoft"
    },
    {
      name: "Getting Started with Jira",
      issuer: "Coursera"
    },
    {
      name: "Business Intelligence and Analytics",
      issuer: "NPTEL"
    },
    {
      name: "Data Analytics Virtual Internship",
      issuer: "Deloitte"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      school: "Pandit Deendayal Energy University",
      period: "2022 - 2026"
    }
  ],
  contact: {
    email: "suhani.patel1002@gmail.com",
    linkedin: "https://www.linkedin.com/in/suhanipatel1025/",
    github: "https://github.com/Suhanipatel10",
    location: "Gujarat, India"
  }
};