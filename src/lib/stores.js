import { readable, writable } from 'svelte/store';

export const cvData = readable(null, (set) =>{
    set({
        "personalDetails": {
          "name": "Christopher Doherty",
          "displayName": "Christy Doherty",
          "address": "Lower Trenbane, Carndonagh, Co. Donegal, Ireland, F93XTE2",
          "telephone": "+353876529700",
          "email": "dohertychristopher4@gmail.com",
          "dateOfBirth": "30/10/1995",
          "position": "Software Developer",
          "organization": "Druva Inc.",
          "about": "I'm a full stack developer, with over 5 years experience working in cloud based solutions. I'm most experienced with AWS and AI. I've a keen interest in the latest technologies."
        },
        "education": {
          "degree": "Bachelor of Science (Honours)",
          "fieldOfStudy": "Applied Computing",
          "institution": "Letterkenny Institute of Technology",
          "grade": "First Class Honours",
          "yearsAttended": "2014-2018"
        },
        "employmentHistory": [
          {
            "dates": "03/01/2019 - 19/07/2024",
            "organization": "Druva Inc.",
            "position": "Software Developer",
            "contactPerson": "Owen O’Donnell"
          },
          {
            "dates": "04/06/2017 - 16/08/2017",
            "organization": "Challenger Sports",
            "position": "Camp Director & Coach"
          },
          {
            "dates": "16/06/2014 - 21/08/2014",
            "organization": "TAL Civil Engineering",
            "position": "Assistant Site Manager",
            "contactPerson": "Luke Howard"
          }
        ],
        "skills": [
          "JavaScript", "NodeJS", "AWS", "PHP", "HTML5", "CSS", "jQuery", "C#", "SQL",
          "Java", "Python", "ChatGPT", "Anthropic", "Claude", "OpenCV", "ChartJS", "Linux", "Raspbian",
          "Intermediate experience with Underscore, Node Mustache, d3, C++, C, VB.NET, DevOps, AI, ML",
          "Competent with Windows, Linux, Raspbian, and virtual machines (Oracle VM Virtual Box)"
        ],
        "projects": [
          // {
          //   "name": "Nightscout (CGM in the Cloud)",
          //   "description": "Created a wireless bridge and a personalized app to enable real-time glucose monitoring for a type 1 diabetic.",
          //   "status": "Ongoing open source project"
          // },
          {
            "name": "Head Count",
            "description": "Developed a people counting system using OpenCV and Python, with real-time data accessible via a website.",
            "technologiesUsed": ["OpenCV", "Python"]
          },
          {
            "name": "Tabby",
            "description": "Published a chrome extension which allows user to add their own categories and links",
            "technologiesUsed": ["Javascript", "HTML", "CSS"],
            "website": "https://chromewebstore.google.com/detail/tabby/jhhpfcdhkefljpbmfoneemmjjfodfdbh"
          },
          {
            "name": "CV website",
            "description": "This Website",
            "technologiesUsed": ["Svelte", "GitHub Pages"],
            "website": "https://dohertychristopher4.github.io/"
          }
        ],
        "interests": [
          "Soccer", "Gaelic Golf", "Rugby", "Future Tech (IoT, Generative AI)", "Socialising with friends and family"
        ],
        "achievements": [
          "AWS Associate Developer Certification 2021",
          "Druva Stars Award 2020",
          "Hubspot Inbound Marketing Certificate 2018",
          "Best Team Project at Letterkenny IT & Gartan Technologies 2017",
          "Academic Excellence Awards 2012 & 2013"
        ],
        "references": [
          {
            "name": "Owen O’Donnell",
            "position": "Senior Software Developer",
            "company": "Druva Inc",
            "contact": {
              "email": "owen.odonnell@druva.com",
              "phone": "+3538385181222"
            }
          }
        ],
        "links" : {
          "linkedin": "https://www.linkedin.com/in/christopher-doherty-00573615a/",
          "github": "https://github.com/dohertychristopher4"
        }
      }
      )
});