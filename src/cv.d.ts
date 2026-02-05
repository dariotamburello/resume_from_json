export interface CV {
  basics: {
    name: string;
    label: string;
    image?: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: {
      address?: string;
      postalCode?: string;
      city: string;
      countryCode: string;
      region: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  };
  work_experience: Array<{
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    tasks: string[];
    abilities?: string[];
  }>;
  education: Array<{
    institute: string;
    location: string;
    degree: string;
    startDate: string;
    endDate: string;
  }>;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    cloud_devops: string[];
    testing: string[];
    languages_spoken: Record<string, string>;
  };
}
