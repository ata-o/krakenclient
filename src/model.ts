type Outage = {
    id: string;
    name: string;
    begin: Date;
    end: Date;
};

type SiteInformation = {
    id: string;
    name: string;
    devices: SiteDevice[];
};

type SiteDevice = {
    id: string;
    name: string;
};
