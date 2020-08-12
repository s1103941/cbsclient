import {Opgave} from './Opgave'
export class Periode
{
    PeriodeId : number;
    Periodetype : string;
    Code : string;
    Begindatum : Date;
    Einddatum : Date;
    Opgave : Opgave[];

}