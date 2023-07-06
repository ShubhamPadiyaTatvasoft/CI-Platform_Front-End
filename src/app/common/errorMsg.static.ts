export const ErrorMessages = {
  Login: {
    email: {
      required: 'Email is required',
      pattern: 'Email is not valid',
    },
    password: {
      required: 'Password is required',
      pattern:
        'Password must contains at-least 1 UpperCase, 1 LowerCase, 1 Digit and 1 Special character and must be 8 to 15 character...',
    },
  },

  Forgot: {
    email: {
      required: 'Email is required',
      pattern: 'Email is not valid',
    },
  },

  Register: {
    email: {
      required: 'Email is required',
      pattern: 'Email is not valid',
    },
    password: {
      required: 'Password is required',
      pattern:
        'Password must contains at-least 1 UpperCase, 1 LowerCase, 1 Digit and 1 Special character and must be 8 to 15 character...',
    },
    phoneNumber: {
      required: 'PhoneNumber is required',
      pattern: 'PhoneNumber is invalid (Example:9999999999)',
    },
    firstName: {
      required: 'FirstName is required',
    },
    lastName: {
      required: 'LastName is required',
    },
    confirmPassword: {
      required: 'ConfirmPassword is required',
    },
  },

  ResetPassword: {
    password: {
      required: 'Password is required',
      pattern:
        'Password must contains at-least 1 UpperCase, 1 LowerCase, 1 Digit and 1 Special character and must be 8 to 15 character...',
    },
    confirmPassword: {
      required: 'ConfirmPassword is required',
    },
  },

  FormErrorMessage: {
    InvalidForm: 'Invalid data',
  },

  UserProfile: {
    name: {
      required: 'Name is required',
    },
    surname: {
      required: 'Surname is required',
    },
    profileText: {
      required: 'Profile text is required',
    },
    whyVolunteer: {
      required: 'Why I volunteer is required',
    },
    country: {
      required: 'Country is required',
    },
    city: {
      required: 'City is required',
    },
  },

  ChangePassword: {
    oldPassword: {
      required: 'Old Password is required',
      pattern:
        'Password must contain UpperCase,LowerCase,Digit and Special character and must be 8 to 15 character',
    },
    newPassword: {
      required: 'New Password is required',
      pattern:
        'Password must contain UpperCase,LowerCase,Digit and Special character and must be 8 to 15 character',
    },
    confirmPassword: {
      required: 'Confirm Password is required',
      pattern:
        'Password must contain UpperCase,LowerCase,Digit and Special character and must be 8 to 15 character',
    },
  },

  ContactUs: {
    subject: {
      required: 'Subject is required',
    },
    message: {
      required: 'Message is required',
    },
  },

  configurationDetails: {
    status: {
      required: 'Please define the current status of user',
    },
    manager: {
      required: 'Please enter detail of manager',
    },
    role: {
      required: 'Please define the role of user',
    },
  },
  basicDetails: {
    firstName: {
      required: 'FirstName is required',
    },
    lastName: {
      required: 'FirstName is required',
    },
    password: {
      required: 'Password is required',
      pattern:
        'Password must contains at-least 1 UpperCase, 1 LowerCase, 1 Digit and 1 Special character and must be 8 to 15 character...',
    },
    confirmPassword: {
      required: 'ConfirmPassword is required',
    },
  },

  personalDetails: {
    phoneNumber: {
      required: 'PhoneNumber is required',
      pattern: 'PhoneNumber is invalid (Example:9999999999)',
    },
    email: {
      required: 'Email is required',
      pattern: 'Email is not valid',
    },
    country: {
      required: 'Country is required',
    },
    city: {
      required: 'city is required',
    },
  },

  ApiErrorMessage: {
    ApiFailed: 'Please check detail properly or try after sometime',
  },

  ShareStory: {
    storyTitle: {
      required: 'Story Title is required',
    },
    date: {
      required: 'Date is required',
    },
  },
  basicDetailsForMission: {
    missionTitle: {
      required: 'Mission title is required',
    },
    missionShortDescription: {
      required: 'Mission shortDescription is required',
    },
    missionDescription: {
      required: 'Mission Description is required',
    },
    organizationName: {
      required: 'OrganizationName is required',
    },
    organizationDetails: {
      required: 'OrganizationDetails is required',
    },
    country: {
      required: 'Country is required',
    },
    city: {
      required: 'City is required',
    },
  },

  configurationDetailsForMission: {
    startDate: {
      required: 'Start date is required',
    },
    endDate: {
      required: 'End date is required',
    },
    deadlineDate: {
      required: 'Deadline date is required',
    },
    availability: {
      required: 'Availability is required',
    },
    missionTheme: {
      required: 'MissionTheme is required',
    },
    missionSkills: {
      required: 'MissionSkills is required',
    },
    missionType: {
      required: 'MissionType is required',
    },
    totalSeats: {
      required: 'TotalSeats is required',
    },
    goalText: {
      required: 'GoalText is required',
    },
    goalValue: {
      required: 'GoalValue is required',
    },
    status: {
      required: 'MissionStatus is required',
    },
  },

  cmsDetails: {
    cmsTitle: {
      required: 'Title is required',
    },
    cmdDescription: {
      required: 'Description is required',
    },
    cmsSlug: {
      required: 'Slug is required',
    },
    status: {
      required: 'Status is required',
    },
  },
  bannerDetails: {
    bannerText: {
      required: 'BannerText is required',
    },
    sortOrder: {
      required: 'SortOrder is required',
    },
  },
  themeDetails: {
    themeTitle: {
      required: 'Theme title is required',
    },
    status: {
      required: 'Status is required',
    },
  },
  skillDetails: {
    skillName: {
      required: 'Theme title is required',
    },
    status: {
      required: 'Status is required',
    },
  },
};
