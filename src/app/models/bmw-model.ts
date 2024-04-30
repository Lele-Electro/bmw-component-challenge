
export interface VeicleAPIObject {
  models: Models
}

export interface Models {
  vehicleDetails: VehicleDetails
}

export interface VehicleDetails {
  list: bmwModel[]
}
export interface bmwModel {
    modelName: string
    BodyType: string
    NewDemo: string
    FuelType: string
    Transmition: string
    pricing: Pricing
    TechnicalSpecs: TechnicalSpecs
  }
  
  export interface Pricing {
    MonthlyInstallment: string
    OfferPrce: string
  }
  
  export interface TechnicalSpecs {
    Zeroto100: string
    EnginePerfomance: string
    FuelConsumption: string
  }
  