// Enums
type InstitutionType = "None" | "Governance" | "NGO" | "Training_Body" | "Educational_Body";
type BusinessLevel = "None" | "Large_Enterprice" | "Mid_sized_Business" | "Small_Business" | "Startup";
type SkillLevel = "None" | "Expert" | "Advanced" | "Beginner"
type RegisterType = "None" | "Artisan" | "Business" | "Institution" | "BuyerMembership" | "CorpoMembership" | "SponsorMembership";
type MarketType = "None" | "Local" | "National" | "International";
type Status = "Pending" | "Actice";
type Ranks = "None" | "Gold" | "Silver" | "Bronze"
// Models
type AppliedJob = {
    jobId: string;
    fullName: string;
    email: string;
    job: string;
    jobCode: string;
    resume: string;
    coverLetter: string;
};

type Employ = {
    employId: string;
    fullName: string;
    skills: string;
    contribution: string;
};

type User = {
    userId: string;
    fullName: string;
    phone: string;
    email: string;
    address: string;
    password: string;
    registerType: RegisterType;
    status: Status;
    Artisan: Artisan[];
    Business: Business[];
    Institute: Institute[];
    BuyerMembership: BuyerMembership[];
    CorpoMembership: CorpoMembership[];
    SponsorMembership: SponsorMembership[];
};

type Artisan = {
    artisanId: string;
    craftSpecialty: string;
    craftSkill: SkillLevel;
    craftExperience: number;
    craftAward: string;
    market: MarketType;
    documents: string[];
    status: string;
    userId: string;
    listingCriteria: string;
    criteria: LisitingCritera;
    user: User;
};

type ArtisanProps = {
    artisanId: string;
    craftSpecialty: string;
    craftSkill: SkillLevel;
    craftExperience: number;
    craftAward: string;
    market: MarketType;
    documents: string[];
    status: string;
    userId: string;
    listingCriteria: string;
    user: {
        fullName: string
        address: string
    };
};


type Business = {
    businessId: string;
    businessName: string;
    businessEmail: string;
    businessAddress: string;
    businessType: BusinessLevel;
    businessSold: string;
    businessEmployee: number;
    documents: string[];
    status: string;
    listingCriteria: string;
    criteria: LisitingCritera;
    userId: string;
    user: User;
};

type BusinessProps = {
    businessId: string;
    businessName: string;
    businessEmail: string;
    businessAddress: string;
    businessType: BusinessLevel;
    businessSold: string;
    businessEmployee: number;
    documents: string[];
    status: string;
    listingCriteria: string;
    userId: string;
};

type Institute = {
    instituteId: string;
    instituteName: string;
    instituteEmail: string;
    instituteType: InstitutionType;
    instituteAddress: string;
    instituteMission: string;
    instituteRep: string;
    repDes: string;
    documents: string[];
    status: string;
    listingCriteria: string;
    criteria: LisitingCritera;
    userId: string;
    user: User;
};

type InstituteProps = {
    instituteId: string;
    instituteName: string;
    instituteEmail: string;
    instituteType: InstitutionType;
    instituteAddress: string;
    instituteMission: string;
    instituteRep: string;
    repDes: string;
    documents: string[];
    status: string;
    listingCriteria: string;
    userId: string;
};

type BuyerMembership = {
    buyerMemberId: string;
    buyerType: string;
    businessName: string;
    businessType: string;
    taxId: string;
    country: string;
    website: string;
    productInterest: string[];
    orderVolume: string;
    authentication: string;
    traceability: string;
    sustainability: string[];
    source: string;
    newsletter: boolean;
    specialRequirements: string;
    terms: boolean;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

type CorpoMembership = {
    corpoMemberId: string;
    institutionName: string;
    institutionType: string;
    industry: string;
    yearEstablished: number;
    taxId: string;
    primaryContact: string;
    contactEmail: string;
    contactPhone: string;
    website: string;
    headquartersAddress: string;
    additionalLocations: string;
    partnershipType: string;
    partnershipGoals: string;
    targetProducts: string[];
    csrInterest: string;
    csrInitiatives: string;
    sustainabilityPractices: string;
    businessLicense: string;
    proofOfTaxID: string;
    references: string;
    engagementChannels: string;
    customerDemographic: string;
    brandMission: string;
    specificRequirements: string;
    challenges: string;
    additionalComments: string;
    terms: boolean;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

type SponsorMembership = {
    sponsorshipId: string;
    sponsorName: string;
    contactPerson: string;
    email: string;
    phone: string;
    socialLinks: string;
    sponsorType: string;
    industry: string;
    sponsorshipGoal: string;
    objectives: string;
    focusArea: string;
    tier: string;
    budgetRange: string;
    sponsorshipChannel: string;
    eventInterest: string;
    productCustomization: string;
    csrInterest: string;
    pastCSREfforts: string;
    sustainabilityPractices: string;
    brandingOptions: string[];
    socialHandles: string;
    communicationChannel: string;
    impactMetrics: string[];
    reportFrequency: string;
    publicUse: string;
    specialRequirements: string;
    additionalComments: string;
    terms: boolean;
    userId: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

type LisitingCritera = {
    criteraId: string;
    sourceOfMaterial: string;
    craftingProcess: string;
    sustainablePractices: boolean;
    sustainabledescription: string;
    fairWage: boolean;
    genderSuport: boolean;
    womenPercentage: number;
    workplaceuphold: boolean;
    workplaceDescription: string;
    childLabour: boolean;
    fairTrade: boolean;
    fairtradeDoc: string[];
    giHold: boolean;
    giNumber: string;
    blockChain: boolean;
    blockChainDoc: string[];
    ethics: boolean;
    qualityReview: boolean;
    profilePermission: boolean;
    complianceAcknowledgement: boolean;
    Artisan: Artisan[];
    Business: Business[];
    Institute: Institute[];
};