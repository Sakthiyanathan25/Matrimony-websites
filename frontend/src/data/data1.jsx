const profiles = [
    {
      profilefor: 'Self',
      firstName: 'Ananya',
      lastName: 'Sharma',
      gender: 'Female',
      dob: '1994-04-12',
      religion: 'Hindu',
      community: 'Brahmin',
      email: 'ananya.sharma@example.com',
      phoneNumber: '9876543210',
      phoneCode: '+91',
      address: {
        doorNo: 'A-101',
        streetName: 'MG Road',
        city: 'Bengaluru',
        pincode: '560001'
      },
      maritalStatus: 'Single',
      livingSituation: 'With Family',
      livingcountry: "India",
      livingcity: "Bengaluru",
      height: '5ft 3in',
      weight: '55kg',
      diet: 'Vegetarian',
  
      educationQualification: 'B.Tech',
      educationSpecification: 'Computer Science',
  
      currentEmployment: {
        status: 'Employed',
        workplace: 'Infosys',
        department: 'Software Development'
      },
      income: '8 LPA',
      aboutYou: 'I am a software developer with a passion for coding and technology.',
      livingWithFamily: 'Yes',
      familyDetails: 'We are a traditional family with modern values.',
      aboutYourFamily: 'My father is a bank manager, and my mother is a teacher.',
  
      ProfileDP: null,
      agreeToPrivacyPolicy: true,
      agreeToTerms: true,
    },
    {
      profilefor: 'Self',
      firstName: 'Rahul',
      lastName: 'Patel',
      gender: 'Male',
      dob: '1992-07-15',
      religion: 'Hindu',
      community: 'Patel',
      email: 'rahul.patel@example.com',
      phoneNumber: '9876543211',
      phoneCode: '+91',
      address: {
        doorNo: 'B-202',
        streetName: 'CG Road',
        city: 'Ahmedabad',
        pincode: '380009'
      },
      maritalStatus: 'Single',
      livingSituation: 'Alone',
      livingcountry: "India",
      livingcity: "Ahmedabad",
      height: '5ft 9in',
      weight: '70kg',
      diet: 'Vegetarian',
  
      educationQualification: 'MBA',
      educationSpecification: 'Finance',
  
      currentEmployment: {
        status: 'Employed',
        workplace: 'ICICI Bank',
        department: 'Finance'
      },
      income: '10 LPA',
      aboutYou: 'I am a finance professional with a strong interest in investment banking.',
      livingWithFamily: 'No',
      familyDetails: 'We are a well-settled family in Ahmedabad.',
      aboutYourFamily: 'My father is a businessman, and my mother is a homemaker.',
  
      ProfileDP: null,
      agreeToPrivacyPolicy: true,
      agreeToTerms: true,
    },
    {
        profilefor: 'Self',
        firstName: 'Meera',
        lastName: 'Nair',
        gender: 'Female',
        dob: '1990-03-11',
        religion: 'Hindu',
        community: 'Nair',
        email: 'meera.nair@example.com',
        phoneNumber: '9876543211',
        phoneCode: '+91',
        address: {
          doorNo: 'A-101',
          streetName: 'Marine Drive',
          city: 'Mumbai',
          pincode: '400020'
        },
        address1: {
          doorNo: '15B',
          streetName: 'Worli',
          city: 'Mumbai',
          pincode: '400018'
        },
        address2: {
          doorNo: '3',
          streetName: 'Colaba',
          city: 'Mumbai',
          pincode: '400005'
        },
        maritalStatus: 'Single',
        livingSituation: 'Alone',
        livingcountry: "India",
        livingcity: "Mumbai",
        height: '5ft 8in',
        weight: '60kg',
        diet: 'Non-Vegetarian',
      
        educationQualification: 'BFA',
        educationSpecification: 'Fine Arts',
      
        currentEmployment: {
          status: 'Self-Employed',
          workplace: 'Freelance Artist',
          department: 'Visual Arts'
        },
        income: '6 LPA',
        aboutYou: 'I am an artist who loves painting and exploring new cultures.',
        livingWithFamily: 'No',
        familyDetails: 'We are a small family of three.',
        aboutYourFamily: 'My father is a retired army officer, and my mother is a school principal.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
        profilefor: 'Self',
        firstName: 'Amit',
        lastName: 'Jain',
        gender: 'Male',
        dob: '1991-06-25',
        religion: 'Jain',
        community: 'Digambar',
        email: 'amit.jain@example.com',
        phoneNumber: '9009988776',
        phoneCode: '+91',
        address: {
          doorNo: '45B',
          streetName: 'Civil Lines',
          city: 'Nagpur',
          pincode: '440001'
        },
        address1: {
          doorNo: '19',
          streetName: 'Dharampeth',
          city: 'Nagpur',
          pincode: '440010'
        },
        address2: {
          doorNo: '20',
          streetName: 'Sadar',
          city: 'Nagpur',
          pincode: '440012'
        },
        maritalStatus: 'Single',
        livingSituation: 'With Family',
        livingcountry: "India",
        livingcity: "Nagpur",
        height: '5ft 7in',
        weight: '65kg',
        diet: 'Vegetarian',
      
        educationQualification: 'M.Tech',
        educationSpecification: 'Electrical Engineering',
      
        currentEmployment: {
          status: 'Employed',
          workplace: 'Mahindra & Mahindra',
          department: 'Product Development'
        },
        income: '11 LPA',
        aboutYou: 'I am an engineer passionate about developing cutting-edge automotive technologies.',
        livingWithFamily: 'Yes',
        familyDetails: 'We are a traditional Jain family with modern values.',
        aboutYourFamily: 'My father is a government employee, and my mother is a homemaker.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
        profilefor: 'Self',
        firstName: 'Sara',
        lastName: 'Sheikh',
        gender: 'Female',
        dob: '1994-10-30',
        religion: 'Muslim',
        community: 'Sunni',
        email: 'sara.sheikh@example.com',
        phoneNumber: '8822114455',
        phoneCode: '+91',
        address: {
          doorNo: 'D-19',
          streetName: 'Connaught Place',
          city: 'New Delhi',
          pincode: '110001'
        },
        address1: {
          doorNo: '34',
          streetName: 'South Extension',
          city: 'New Delhi',
          pincode: '110049'
        },
        address2: {
          doorNo: '56A',
          streetName: 'Saket',
          city: 'New Delhi',
          pincode: '110017'
        },
        maritalStatus: 'Single',
        livingSituation: 'With Family',
        livingcountry: "India",
        livingcity: "New Delhi",
        height: '5ft 6in',
        weight: '59kg',
        diet: 'Non-Vegetarian',
      
        educationQualification: 'B.A',
        educationSpecification: 'Political Science',
      
        currentEmployment: {
          status: 'Preparing for UPSC',
          workplace: 'Self-Study',
          department: 'Civil Services'
        },
        income: 'N/A',
        aboutYou: 'I am an aspiring civil servant dedicated to serving the nation.',
        livingWithFamily: 'Yes',
        familyDetails: 'We are a supportive and encouraging family.',
        aboutYourFamily: 'My father is a lawyer, and my mother is a professor.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
        profilefor: 'Self',
        firstName: 'Mohammed',
        lastName: 'Khan',
        gender: 'Male',
        dob: '1993-02-14',
        religion: 'Muslim',
        community: 'Sunni',
        email: 'mohammed.khan@example.com',
        phoneNumber: '7890112233',
        phoneCode: '+91',
        address: {
          doorNo: 'B-78',
          streetName: 'Banjara Hills',
          city: 'Hyderabad',
          pincode: '500034'
        },
        address1: {
          doorNo: '22C',
          streetName: 'Jubilee Hills',
          city: 'Hyderabad',
          pincode: '500033'
        },
        address2: {
          doorNo: 'A-12',
          streetName: 'Charminar',
          city: 'Hyderabad',
          pincode: '500002'
        },
        maritalStatus: 'Single',
        livingSituation: 'With Family',
        livingcountry: "India",
        livingcity: "Hyderabad",
        height: '5ft 10in',
        weight: '72kg',
        diet: 'Non-Vegetarian',
      
        educationQualification: 'B.Tech',
        educationSpecification: 'Civil Engineering',
      
        currentEmployment: {
          status: 'Employed',
          workplace: 'L&T Construction',
          department: 'Project Management'
        },
        income: '9 LPA',
        aboutYou: 'I am a civil engineer with a passion for building sustainable infrastructure.',
        livingWithFamily: 'Yes',
        familyDetails: 'We are a traditional yet progressive family.',
        aboutYourFamily: 'My father is a businessman, and my mother is a homemaker.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
        profilefor: 'Self',
        firstName: 'Mohammed',
        lastName: 'Khan',
        gender: 'Male',
        dob: '1993-02-14',
        religion: 'Muslim',
        community: 'Sunni',
        email: 'mohammed.khan@example.com',
        phoneNumber: '7890112233',
        phoneCode: '+91',
        address: {
          doorNo: 'B-78',
          streetName: 'Banjara Hills',
          city: 'Hyderabad',
          pincode: '500034'
        },
        address1: {
          doorNo: '22C',
          streetName: 'Jubilee Hills',
          city: 'Hyderabad',
          pincode: '500033'
        },
        address2: {
          doorNo: 'A-12',
          streetName: 'Charminar',
          city: 'Hyderabad',
          pincode: '500002'
        },
        maritalStatus: 'Single',
        livingSituation: 'With Family',
        livingcountry: "India",
        livingcity: "Hyderabad",
        height: '5ft 10in',
        weight: '72kg',
        diet: 'Non-Vegetarian',
      
        educationQualification: 'B.Tech',
        educationSpecification: 'Civil Engineering',
      
        currentEmployment: {
          status: 'Employed',
          workplace: 'L&T Construction',
          department: 'Project Management'
        },
        income: '9 LPA',
        aboutYou: 'I am a civil engineer with a passion for building sustainable infrastructure.',
        livingWithFamily: 'Yes',
        familyDetails: 'We are a traditional yet progressive family.',
        aboutYourFamily: 'My father is a businessman, and my mother is a homemaker.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
        profilefor: 'Daughter',
        firstName: 'Anjali',
        lastName: 'Mehta',
        gender: 'Female',
        dob: '1997-07-20',
        religion: 'Hindu',
        community: 'Vaishnav',
        email: 'anjali.mehta@example.com',
        phoneNumber: '9988997766',
        phoneCode: '+91',
        address: {
          doorNo: 'B-45',
          streetName: 'Bandra West',
          city: 'Mumbai',
          pincode: '400050'
        },
        address1: {
          doorNo: '10',
          streetName: 'Juhu',
          city: 'Mumbai',
          pincode: '400049'
        },
        address2: {
          doorNo: '23D',
          streetName: 'Andheri West',
          city: 'Mumbai',
          pincode: '400058'
        },
        maritalStatus: 'Single',
        livingSituation: 'With Family',
        livingcountry: "India",
        livingcity: "Mumbai",
        height: '5ft 4in',
        weight: '58kg',
        diet: 'Vegetarian',
      
        educationQualification: 'MBA',
        educationSpecification: 'Marketing',
      
        currentEmployment: {
          status: 'Employed',
          workplace: 'Hindustan Unilever',
          department: 'Brand Management'
        },
        income: '12 LPA',
        aboutYou: 'I am a brand manager who loves traveling and photography.',
        livingWithFamily: 'Yes',
        familyDetails: 'We are a well-settled family in Mumbai.',
        aboutYourFamily: 'My father is a chartered accountant, and my mother is a homemaker.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
        profilefor: 'Son',
        firstName: 'Vikram',
        lastName: 'Patel',
        gender: 'Male',
        dob: '1985-11-09',
        religion: 'Hindu',
        community: 'Patel',
        email: 'vikram.patel@example.com',
        phoneNumber: '9001122334',
        phoneCode: '+91',
        address: {
          doorNo: '7B',
          streetName: 'Satellite Road',
          city: 'Ahmedabad',
          pincode: '380015'
        },
        address1: {
          doorNo: '18C',
          streetName: 'Navrangpura',
          city: 'Ahmedabad',
          pincode: '380009'
        },
        address2: {
          doorNo: '20A',
          streetName: 'Maninagar',
          city: 'Ahmedabad',
          pincode: '380008'
        },
        maritalStatus: 'Single',
        livingSituation: 'Alone',
        livingcountry: "India",
        livingcity: "Ahmedabad",
        height: '6ft',
        weight: '80kg',
        diet: 'Vegetarian',
      
        educationQualification: 'B.E',
        educationSpecification: 'Mechanical Engineering',
      
        currentEmployment: {
          status: 'Self-Employed',
          workplace: 'Patel Engineering Works',
          department: 'Business Management'
        },
        income: '20 LPA',
        aboutYou: 'I am a business owner with a passion for automobiles.',
        livingWithFamily: 'No',
        familyDetails: 'We are a business family with strong cultural roots.',
        aboutYourFamily: 'My father started our engineering business, and we have expanded since.',
      
        ProfileDP: null,
        agreeToPrivacyPolicy: true,
        agreeToTerms: true,
      },
      {
  profilefor: 'Self',
  firstName: 'Neha',
  lastName: 'Agarwal',
  gender: 'Female',
  dob: '1992-04-14',
  religion: 'Jain',
  community: 'Agarwal',
  email: 'neha.agarwal@example.com',
  phoneNumber: '9098765432',
  phoneCode: '+91',
  address: {
    doorNo: '12C',
    streetName: 'Camac Street',
    city: 'Kolkata',
    pincode: '700016'
  },
  address1: {
    doorNo: '22A',
    streetName: 'Salt Lake',
    city: 'Kolkata',
    pincode: '700091'
  },
  address2: {
    doorNo: '34B',
    streetName: 'Park Street',
    city: 'Kolkata',
    pincode: '700017'
  },
  maritalStatus: 'Single',
  livingSituation: 'With Family',
  livingcountry: "India",
  livingcity: "Kolkata",
  height: '5ft 3in',
  weight: '55kg',
  diet: 'Vegetarian',

  educationQualification: 'B.Com',
  educationSpecification: 'Accounting',

  currentEmployment: {
    status: 'Employed',
    workplace: 'Deloitte',
    department: 'Taxation'
  },
  income: '8 LPA',
  aboutYou: 'I am a tax consultant who loves cooking and reading.',
  livingWithFamily: 'Yes',
  familyDetails: 'We are a family of four with traditional values.',
  aboutYourFamily: 'My father is a businessman, and my mother is a homemaker.',

  ProfileDP: null,
  agreeToPrivacyPolicy: true,
  agreeToTerms: true,
},
{
  profilefor: 'Self',
  firstName: 'Neha',
  lastName: 'Agarwal',
  gender: 'Female',
  dob: '1992-04-14',
  religion: 'Jain',
  community: 'Agarwal',
  email: 'neha.agarwal@example.com',
  phoneNumber: '9098765432',
  phoneCode: '+91',
  address: {
    doorNo: '12C',
    streetName: 'Camac Street',
    city: 'Kolkata',
    pincode: '700016'
  },
  address1: {
    doorNo: '22A',
    streetName: 'Salt Lake',
    city: 'Kolkata',
    pincode: '700091'
  },
  address2: {
    doorNo: '34B',
    streetName: 'Park Street',
    city: 'Kolkata',
    pincode: '700017'
  },
  maritalStatus: 'Single',
  livingSituation: 'With Family',
  livingcountry: "India",
  livingcity: "Kolkata",
  height: '5ft 3in',
  weight: '55kg',
  diet: 'Vegetarian',

  educationQualification: 'B.Com',
  educationSpecification: 'Accounting',

  currentEmployment: {
    status: 'Employed',
    workplace: 'Deloitte',
    department: 'Taxation'
  },
  income: '8 LPA',
  aboutYou: 'I am a tax consultant who loves cooking and reading.',
  livingWithFamily: 'Yes',
  familyDetails: 'We are a family of four with traditional values.',
  aboutYourFamily: 'My father is a businessman, and my mother is a homemaker.',

  ProfileDP: null,
  agreeToPrivacyPolicy: true,
  agreeToTerms: true,
},
{
  profilefor: 'Self',
  firstName: 'Rahul',
  lastName: 'Sharma',
  gender: 'Male',
  dob: '1988-12-22',
  religion: 'Hindu',
  community: 'Kshatriya',
  email: 'rahul.sharma@example.com',
  phoneNumber: '9822334455',
  phoneCode: '+91',
  address: {
    doorNo: 'C-12',
    streetName: 'Shivaji Nagar',
    city: 'Pune',
    pincode: '411005'
  },
  address1: {
    doorNo: 'A-45',
    streetName: 'Deccan Gymkhana',
    city: 'Pune',
    pincode: '411004'
  },
  address2: {
    doorNo: '56',
    streetName: 'Kothrud',
    city: 'Pune',
    pincode: '411038'
  },
  maritalStatus: 'Divorced',
  livingSituation: 'Alone',
  livingcountry: "India",
  livingcity: "Pune",
  height: '5ft 9in',
  weight: '70kg',
  diet: 'Non-Vegetarian',

  educationQualification: 'MBA',
  educationSpecification: 'Finance',

  currentEmployment: {
    status: 'Self-Employed',
    workplace: 'Sharma Traders',
    department: 'Business Management'
  },
  income: '15 LPA',
  aboutYou: 'I run my own trading business, and I enjoy traveling.',
  livingWithFamily: 'No',
  familyDetails: 'I have a small family with just my parents and a sister.',
  aboutYourFamily: 'My parents are retired, and my sister is married.',

  ProfileDP: null,
  agreeToPrivacyPolicy: true,
  agreeToTerms: true,
},
{
  profilefor: 'Brother',
  firstName: 'Kavya',
  lastName: 'Iyer',
  gender: 'Female',
  dob: '1995-08-10',
  religion: 'Hindu',
  community: 'Iyer',
  email: 'kavya.iyer@example.com',
  phoneNumber: '9988776655',
  phoneCode: '+91',
  address: {
    doorNo: '101',
    streetName: 'Chetpet',
    city: 'Chennai',
    pincode: '600031'
  },
  address1: {
    doorNo: '50',
    streetName: 'Besant Nagar',
    city: 'Chennai',
    pincode: '600090'
  },
  address2: {
    doorNo: '23',
    streetName: 'Adyar',
    city: 'Chennai',
    pincode: '600020'
  },
  maritalStatus: 'Single',
  livingSituation: 'With Family',
  livingcountry: "India",
  livingcity: "Chennai",
  height: '5ft 5in',
  weight: '60kg',
  diet: 'Vegetarian',

  educationQualification: 'M.Sc',
  educationSpecification: 'Biotechnology',

  currentEmployment: {
    status: 'Employed',
    workplace: 'Biocon',
    department: 'Research and Development'
  },
  income: '7 LPA',
  aboutYou: 'I am a research scientist working on innovative solutions in biotech.',
  livingWithFamily: 'Yes',
  familyDetails: 'My family is very supportive and loving.',
  aboutYourFamily: 'My father is an engineer, and my mother is a teacher.',

  ProfileDP: null,
  agreeToPrivacyPolicy: true,
  agreeToTerms: true,
},
{
  profilefor: 'Self',
  firstName: 'Arjun',
  lastName: 'Rao',
  gender: 'Male',
  dob: '1990-05-15',
  religion: 'Hindu',
  community: 'Brahmin',
  email: 'arjun.rao@example.com',
  phoneNumber: '9876543210',
  phoneCode: '+91',
  address: {
    doorNo: '45A',
    streetName: 'MG Road',
    city: 'Bangalore',
    pincode: '560001'
  },
  address1: {
    doorNo: '12B',
    streetName: 'Indira Nagar',
    city: 'Bangalore',
    pincode: '560038'
  },
  address2: {
    doorNo: '98',
    streetName: 'Jayanagar',
    city: 'Bangalore',
    pincode: '560041'
  },
  maritalStatus: 'Single',
  livingSituation: 'With Family',
  livingcountry: "India",
  livingcity: "Bangalore",
  height: '5ft 11in',
  weight: '75kg',
  diet: 'Vegetarian',

  educationQualification: 'B.E',
  educationSpecification: 'Computer Science',

  currentEmployment: {
    status: 'Employed',
    workplace: 'Infosys',
    department: 'Software Development'
  },
  income: '10 LPA',
  aboutYou: 'I am a software engineer passionate about technology and innovation.',
  livingWithFamily: 'Yes',
  familyDetails: 'We are a close-knit family of four.',
  aboutYourFamily: 'My father is a retired banker, and my mother is a homemaker.',

  ProfileDP: null,
  agreeToPrivacyPolicy: true,
  agreeToTerms: true,
}








      
      
      
      
      
      
  ];
export default profiles
  