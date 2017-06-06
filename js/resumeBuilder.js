  //This is empty on purpose! Your code to build the resume will go here.
  var bio = {
     "name": "Abdirahman Muhumed",
     "role": "Web developer",
     "contacts": {
        "mobile": "015218308824",
        "email": "zuunaari@gmail.com",
        "github": "Abdirahmanjama",
        "location": "Frankfurt am Main"
     },
     "welcomeMessage": "glad you could make it, finaly u are here lets make most of it",
     "skills": [
        "Writer", "programming", "Javascript", "Css", "Html"
     ],

     "biopic": "images/fry.jpg"
  };
  bio.display = function() {

     var role = bio.role;
     var formattedRole = HTMLheaderRole.replace("%data%", role);
     $("#header").prepend(formattedRole);

     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     $("#header").prepend(formattedName);

     var welcomeMessage = bio.welcomeMessage;
     var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", welcomeMessage);
     $("#header").append(formattedwelcomeMessage);

     var biopic = bio.biopic;
     var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
     $("#header").append(formattedBiopic);

     var _location = bio.contacts.location;
     var formattedLocation = HTMLlocation.replace("%data%", _location);



     var mobile = bio.contacts.mobile;
     var formattedMobile = HTMLmobile.replace("%data%", mobile);

     var github = bio.contacts.github;
     var formattedGithub = HTMLgithub.replace("%data%", github);

     var email = bio.contacts.email;
     var formattedEmail = HTMLemail.replace("%data%", email);

     $("#topContacts, #footerContacts").append(formattedLocation, formattedMobile, formattedGithub, formattedEmail);

     $('#header').append(HTMLskillsStart);
     for (var s = 0; s < bio.skills.length; s++) {

        var formattedskill = HTMLskills.replace("%data%", bio.skills[s]);
        $('#skills').append(formattedskill);

     }
  }; bio.display();


  /*if (bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);
     var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
     $("#skills").append(formattedSkill);
     formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
     $("#skills").append(formattedSkill);
  }*/

  //$('#main').append(internationalizeButton);
  // work section
  var work = {
     "jobs": [{
           "employer": "Teddy Trding Company",
           "title": "assistant Manager",
           "location": "Addisabab, Ethiopia",
           "dates": "2011-09-2011",
           "description": "Supervising the team, checking deliveries in and delivieries out"
        },
        {
           "employer": "Future Insitute of Language",
           "title": "Teacher",
           "location": "Kismayo, Somalia",
           "dates": "04-2012-09-2012",
           "description": "Preparation of learning materials. checking student progress by quiz and exercises. preparation of final exams etc "
        },
        {
           "employer": "Hayat Hospital",
           "title": "Translator",
           "location": "Addis ababa, Ethiopia",
           "dates": "2009-2010",
           "description": "Tanslating Patients from Somali to English language "
        }
     ]
  };

  work.display = function() {
     for (var j = 0; j < work.jobs.length; j++) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
        $(".work-entry:last").append(formattedDescription);
     }
  }; work.display();

  $(document).click(function(loc) {
     var x = loc.pageX;
     var y = loc.pageY;

     logClicks(x, y);
  });

  function inName(name) {
     name = name.trim().split(" ");
     console.log(name);
     name[1] = name[1].toUpperCase();
     name[0] = name[0].slice(0, 1).toUpperCase + name[0].slice(1).toLowerCase();

     return name[0] + " " + name[1];
  } //treferenced forum udacity forum

  // project section
  var projects = {
     "projects": [{
           "title": "Community website Project",
           "dates": " april 20",
           "description": "its Community website project which is still under construction",
           "images": ["images/simple.jpg", "images/download.jpg"]
        }

     ]
  };

  projects.display = function() {
     for (var p = 0; p < projects.projects.length; p++) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[p].images.length > 0) {
           for (var image = 0; image < projects.projects[p].images.length; image++) {
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
              $(".project-entry:last").append(formattedImage);

           }
        }
     }
  }; projects.display();


  //education section

  var education = {
     "schools": [{
           "name": "Unity University",
           "location": "Addisabab, Ethiopia",
           "degree": "Bachlor of Economics",
           "majors": ["Economics"],
           "minor": "Business",
           "dates": "2009-2012",
           "url": "https://en.wikipedia.org/wiki/Unity_University"
        },

        {
           "name": "Faanoole Secondary School",
           "location": "kismayo, Somalia",
           "degree": "High School Certificate",
           "majors": ["Arts"],
           "minor": ["Science"],
           "dates": "1997-2007"
        }
     ],

     "onlineCourses": [{
        "title": "Frontend-Web Development Nanodegree",
        "school": "Udacity",
        "dates": "03/2017 - 10/2017",
        "url": "www.udacity.com"
     }]

  };

  education.display = function() {
     for (var s = 0; s < education.schools.length; s++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[s].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors);
        $(".education-entry:last").append(formattedMajor);
     }

     $("#education").append(HTMLonlineClasses);
     for (s = 0; s < education.onlineCourses.length; s++) {

        $("#education").append(HTMLschoolStart);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[s].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[s].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[s].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[s].url);
        $(".education-entry:last").append(formattedURL);

     }
  }; education.display();




  $("#mapDiv").append(googleMap);




  /*var awesomeThoughts = "My name is Abdirahman and I am AWESOME!";
  var funThoughts = 
      awesomeThoughts.replace("AWESOME", "FUN");
  $("#main").append(funThoughts);*/
  /*
  var name = "Abdirahman Muhumed";
  var formattedName =  HTMLheaderName.replace("%data%", name);

  var role = "Web Developer";
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  */
  // skills example

  //var skills = ["awesomenes", "programming", "teaching", "js"];
  //$("#main").append(skills);
  //$("#main").append(skills[0]);
  //$("#main").append(skills.length);*/