export interface VolunteerMissionCardModel {
    missionId :number;
    title:string;
    shortDescription:string;
    description:string;
    startDate:Date;
    endDate:Date;
    countryName:string;
    cityName:string;
    themeName:string;
    missionType:string;
    organizationName:string;
    organizationDetail:string;
    leftSeats:number;
    ratings:number;
    goalObjectiveText:string;
    goalValue:string;
    approvalStatus:string;
    isFavMission:boolean;
    documentPath:string;
    documentName:string;
    documentType:string;
    mAvailability:string;
    skillName:string;
    avgRating:number;
    deadline:Date;
    mediaPath:string;
  }

  