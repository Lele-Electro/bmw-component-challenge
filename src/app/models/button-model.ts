export interface button {
    icon: icon | null
    text: string,
    type: 'standard' | 'outline' | 'callToAction'
}

export interface icon{
 iconType: 'calculator_rg' | 'car-front_rg' | 'heart_rg' | 'quotelist'| 'seat-side' | 'add'
}